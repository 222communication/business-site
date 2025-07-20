export default function Services() {
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Vue, and Angular. Responsive, fast, and secure.",
      features: ["Frontend Development", "Backend APIs", "Database Design", "Cloud Deployment"]
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android. User-friendly and performance-optimized.",
      features: ["iOS Development", "Android Development", "React Native", "App Store Deployment"]
    },
    {
      icon: "fas fa-palette",
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces that provide exceptional user experiences and drive engagement.",
      features: ["User Research", "Wireframing", "Visual Design", "Prototyping"]
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Analytics Dashboard"]
    },
    {
      icon: "fas fa-server",
      title: "API Development",
      description: "Robust RESTful and GraphQL APIs that power your applications and integrate with third-party services.",
      features: ["RESTful APIs", "GraphQL", "API Documentation", "Integration Services"]
    },
    {
      icon: "fas fa-tools",
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your applications running smoothly.",
      features: ["24/7 Support", "Bug Fixes", "Security Updates", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From web applications to mobile apps, we offer comprehensive software development services tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="text-slate-600 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
