export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A comprehensive online marketplace with advanced features including inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Fitness Tracking App",
      description: "Cross-platform mobile application for fitness tracking with social features, workout plans, and progress analytics.",
      technologies: ["React Native", "Firebase", "TypeScript"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time business intelligence dashboard with interactive charts, data visualization, and reporting capabilities.",
      technologies: ["Vue.js", "Python", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Real Estate Platform",
      description: "Comprehensive property management system with listing management, virtual tours, and client relationship tools.",
      technologies: ["Angular", "Django", "Redis"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Healthcare Management",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
      technologies: ["Next.js", "GraphQL", "MySQL"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "FinTech Banking App",
      description: "Secure banking application with transaction management, budgeting tools, and financial analytics.",
      technologies: ["Flutter", "Spring Boot", "AWS"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleScrollToContact}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
