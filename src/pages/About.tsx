
import RetroHeader from "@/components/RetroHeader";
import { AlertTriangle, Building2, Brain, Users, Github, Linkedin, Mail, Phone } from "lucide-react";
import { VantaBackground } from "@/components/VantaBackground";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary-light/50 to-secondary">
      <VantaBackground />
      <RetroHeader />
      
      <div className="container mx-auto px-6 pt-32 pb-12 flex-grow">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-xl p-8 shadow-lg animate-fadeIn">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">About Our Mission</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-destructive mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">The Crisis</h3>
                  <p className="text-gray-700">
                    India faces a critical flooding crisis, with over 70% of disaster-related damages and annual losses exceeding ₹1 lakh crore. More than 1,500 lives are lost yearly, highlighting the urgent need for better flood management solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Building2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">Urban Impact</h3>
                  <p className="text-gray-700">
                    Major cities like Mumbai and Bengaluru suffer from paralyzing urban floods due to inadequate drainage systems and unplanned urbanization. Rising sea levels and erratic rainfall patterns pose additional threats to both urban and rural communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">Current Challenges</h3>
                  <p className="text-gray-700">
                    Current flood management strategies lack accurate, localized forecasting, leading to resource mismanagement and reactive responses. Fragmented data sources and limited community involvement further hinder effective planning and mitigation efforts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Brain className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">Our Solution</h3>
                  <p className="text-gray-700">
                    We're developing an innovative AI-driven flood simulation and risk assessment platform that leverages real-time data, digital twin technology, and advanced machine learning. Our goal is to provide actionable insights for proactive decision-making and community-centric planning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 backdrop-blur-lg rounded-xl p-8 shadow-lg animate-slideIn">
            <h2 className="text-3xl font-bold text-primary-dark mb-6 flex items-center gap-2">
              <Users className="w-8 h-8" />
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 gap-8">
              {/* Team Member 1 */}
              <div className="group relative bg-white/50 rounded-lg p-6 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <Avatar className="w-40 h-40 rounded-xl border-2 border-primary transition-all duration-300">
                    <AvatarImage src="/lovable-uploads/4022ec1d-ad6f-4a7a-90dc-260d5308673d.png" />
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark">Abishai K C</h3>
                    <p className="text-gray-600 font-medium">Team Leader</p>
                    <div className="mt-4 space-y-2">
                      <p className="text-gray-700"><span className="font-medium">College:</span> Saveetha Engineering College</p>
                      <p className="text-gray-700"><span className="font-medium">Branch:</span> BTech AIML</p>
                      <p className="text-gray-700"><span className="font-medium">Semester:</span> III</p>
                    </div>
                  </div>
                  
                  <div className="absolute right-0 top-0 h-full w-0 bg-gradient-to-r from-white/95 to-primary/10 group-hover:w-64 transition-all duration-500 overflow-hidden rounded-r-lg flex flex-col justify-center space-y-4 px-6 opacity-0 group-hover:opacity-100">
                    <a href="mailto:abishaioff@gmail.com" className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                    <a href="https://github.com/Abishai95141" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors">
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/abishai-k-c-6a5288271/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group relative bg-white/50 rounded-lg p-6 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <Avatar className="w-40 h-40 rounded-xl border-2 border-primary transition-all duration-300">
                    <AvatarImage src="/lovable-uploads/072104fc-2f8d-429a-9bd9-c01c367c7b4e.png" />
                    <AvatarFallback>MA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-dark">S Mohamed Ahsan</h3>
                    <p className="text-gray-600 font-medium">Team Member</p>
                    <div className="mt-4 space-y-2">
                      <p className="text-gray-700"><span className="font-medium">College:</span> Saveetha Engineering College</p>
                      <p className="text-gray-700"><span className="font-medium">Branch:</span> BTech AIML</p>
                      <p className="text-gray-700"><span className="font-medium">Semester:</span> III</p>
                    </div>
                  </div>
                  
                  <div className="absolute right-0 top-0 h-full w-0 bg-gradient-to-r from-white/95 to-primary/10 group-hover:w-64 transition-all duration-500 overflow-hidden rounded-r-lg flex flex-col justify-center space-y-4 px-6 opacity-0 group-hover:opacity-100">
                    <a href="mailto:ahsansaleem2006@gmail.com" className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                    <a href="https://github.com/MOHAMEDAHSAN" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors">
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/mohamedahsan037/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
