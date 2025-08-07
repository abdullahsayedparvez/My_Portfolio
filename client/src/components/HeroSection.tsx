import { personalInfo, socialLinks } from "../data/portfolioData";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img 
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} - Professional Portrait`}
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
            {personalInfo.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up" 
             style={{ animationDelay: "0.2s" }}>
            {personalInfo.title}
          </p>
          
          <div className="flex justify-center space-x-6 mb-8 animate-bounce-in" 
               style={{ animationDelay: "0.4s" }}>
            <a href={socialLinks.linkedin} 
               target="_blank"
               rel="noopener noreferrer"
               className="text-white hover:text-blue-200 transition-colors duration-300 text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={socialLinks.facebook} 
               target="_blank"
               rel="noopener noreferrer"
               className="text-white hover:text-blue-200 transition-colors duration-300 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href={socialLinks.github} 
               target="_blank"
               rel="noopener noreferrer"
               className="text-white hover:text-blue-200 transition-colors duration-300 text-2xl">
              <i className="fab fa-github"></i>
            </a>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors duration-300 animate-bounce-in"
            style={{ animationDelay: "0.6s" }}
          >
            Get to Know Me
          </button>
        </div>
      </div>
    </section>
  );
}
