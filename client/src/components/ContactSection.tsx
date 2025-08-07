import { personalInfo } from "../data/portfolioData";

export default function ContactSection() {

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">Let's Connect</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-secondary mb-2">Email</h4>
                <a href={`mailto:${personalInfo.email}`} className="text-slate-600 hover:text-primary transition-colors">
                  {personalInfo.email}
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-secondary mb-2">Phone</h4>
                <a href={`tel:${personalInfo.phone}`} className="text-slate-600 hover:text-green-600 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                </div>
                <h4 className="font-semibold text-secondary mb-2">Location</h4>
                <p className="text-slate-600">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
