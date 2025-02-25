from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
from tensorflow.keras.models import load_model
from tensorflow.keras.losses import MeanSquaredError

app = Flask(__name__)
CORS(app)  # Allow all origins for local development

# Load models using relative paths (assuming models are in same directory)
rf_model = joblib.load('backend\\rf_model.pkl')
lstm_model = load_model('backend\\lstm_model.h5', custom_objects={'mse': MeanSquaredError()})

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    print("Received input data:", data)

    # Input validation remains the same
    required_fields = [
        "elevation", "impervious_pct", "drainage_capacity", "avg_slope",
        "rainfall", "temperature", "antecedent_precipitation", "river_level", "groundwater_depth"
    ]
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing required field: {field}'}), 400

    # Rest of your existing prediction logic remains unchanged
    static_input = np.array([[
        data['elevation'],
        data['impervious_pct'],
        data['drainage_capacity'],
        data['avg_slope']
    ]])

    temporal_input = np.array([[
        [data['rainfall'][0], data['temperature'][0], data['antecedent_precipitation'][0], data['river_level'][0], data['groundwater_depth'][0]],
        [data['rainfall'][1], data['temperature'][1], data['antecedent_precipitation'][1], data['river_level'][1], data['groundwater_depth'][1]],
        [data['rainfall'][2], data['temperature'][2], data['antecedent_precipitation'][2], data['river_level'][2], data['groundwater_depth'][2]],
        [data['rainfall'][3], data['temperature'][3], data['antecedent_precipitation'][3], data['river_level'][3], data['groundwater_depth'][3]],
        [data['rainfall'][4], data['temperature'][4], data['antecedent_precipitation'][4], data['river_level'][4], data['groundwater_depth'][4]]
    ]])

    static_input_normalized = static_input
    temporal_input_normalized = temporal_input

    static_input_repeated = np.repeat(static_input_normalized, repeats=5, axis=0)
    static_pred = rf_model.predict(static_input_repeated).reshape((1, 5))
    
    lstm_pred = lstm_model.predict(temporal_input_normalized).squeeze()
    
    final_pred = static_pred + lstm_pred

    if np.isnan(final_pred).any():
        return jsonify({'error': 'Model predictions resulted in NaN values'}), 500

    return jsonify({'prediction': final_pred.tolist()})

if __name__ == '__main__':
    # Run on localhost with debug mode
    app.run(host='0.0.0.0', port=5000, debug=True)