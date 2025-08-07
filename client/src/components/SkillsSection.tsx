import { skills } from "../data/portfolioData";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "ETL Tools",
      icon: "fas fa-cogs",
      skills: skills.etlTools,
      color: "text-primary"
    },
    {
      title: "Programming",
      icon: "fas fa-code",
      skills: skills.programming,
      color: "text-primary"
    },
    {
      title: "Frameworks",
      icon: "fas fa-layer-group",
      skills: skills.frameworks,
      color: "text-primary"
    },
    {
      title: "Web Scraping",
      icon: "fas fa-spider",
      skills: skills.webScraping,
      color: "text-primary"
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      skills: skills.databases,
      color: "text-primary"
    },
    {
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      skills: skills.cloudDevOps,
      color: "text-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for data engineering, backend development, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-xl shadow-sm card-hover">
              <div className="flex items-center mb-4">
                <i className={`${category.icon} ${category.color} text-2xl mr-3`}></i>
                <h3 className="text-xl font-semibold text-secondary">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm skill-tag mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
