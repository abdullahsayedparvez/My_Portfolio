import { personalInfo } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Data Engineering Workspace"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg card-hover">
                <i className="fas fa-map-marker-alt text-primary text-xl mb-2"></i>
                <h3 className="font-semibold text-secondary">Location</h3>
                <p className="text-slate-600">{personalInfo.location}</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg card-hover">
                <i className="fas fa-briefcase text-primary text-xl mb-2"></i>
                <h3 className="font-semibold text-secondary">Experience</h3>
                <p className="text-slate-600">{personalInfo.experience}</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg card-hover">
                <i className="fas fa-language text-primary text-xl mb-2"></i>
                <h3 className="font-semibold text-secondary">Languages</h3>
                <p className="text-slate-600">{personalInfo.languages}</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg card-hover">
                <i className="fas fa-graduation-cap text-primary text-xl mb-2"></i>
                <h3 className="font-semibold text-secondary">Education</h3>
                <p className="text-slate-600">{personalInfo.degree}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
