import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300 text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300 text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300 text-xl">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <p className="text-slate-300 mb-4">
              © 2024 Abdullah Sayed. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Designed and developed with ❤️ using React & Vite
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
