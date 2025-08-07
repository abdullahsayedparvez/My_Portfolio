import { experience, projects } from "../data/portfolioData";

export default function ExperienceSection() {
  const getColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary";
      case "green-500":
        return "bg-green-500";
      case "purple-500":
        return "bg-purple-500";
      case "orange-500":
        return "bg-orange-500";
      case "pink-500":
        return "bg-pink-500";
      default:
        return "bg-primary";
    }
  };

  const getRoleColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "green-500":
        return "text-green-600";
      case "purple-500":
        return "text-purple-600";
      case "orange-500":
        return "text-orange-600";
      case "pink-500":
        return "text-pink-600";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building innovative solutions and contributing to impactful projects in data engineering and backend development.
          </p>
        </div>

        {/* Company Information */}
        <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-xl mb-12 text-center">
          <h3 className="text-2xl font-bold mb-2">{experience.company}</h3>
          <p className="text-blue-100 mb-2">{experience.duration}</p>
          <p className="text-blue-100">{experience.location}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-50 p-6 rounded-xl card-hover">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${getColorClass(project.color)} rounded-lg flex items-center justify-center mr-4`}>
                  <i className={`${project.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary">{project.name}</h4>
                  <span className={`text-sm ${getRoleColorClass(project.color)} font-medium`}>
                    {project.role}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 mb-4">{project.description}</p>
              
              {project.link ? (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
                >
                  <span>View Project</span>
                  <i className="fas fa-external-link-alt ml-2 text-sm"></i>
                </a>
              ) : (
                <span className="inline-flex items-center text-slate-500 font-medium">
                  <span>Internal Project</span>
                  <i className="fas fa-lock ml-2 text-sm"></i>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
