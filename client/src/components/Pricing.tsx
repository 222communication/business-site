export default function Pricing() {
  const packages = [
    {
      name: "Starter",
      price: "$5,000 - $15,000",
      description: "Perfect for small businesses and startups looking to establish their digital presence.",
      features: [
        "Basic Web Application",
        "Responsive Design",
        "Basic SEO Setup",
        "3 Months Support",
        "Cloud Hosting Setup"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$15,000 - $50,000",
      description: "Ideal for growing businesses that need comprehensive digital solutions with advanced features.",
      features: [
        "Full-Stack Application",
        "Database Integration",
        "API Development",
        "6 Months Support",
        "Performance Optimization",
        "Security Implementation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$50,000+",
      description: "For large organizations requiring complex, scalable solutions with enterprise-grade features.",
      features: [
        "Complex System Architecture",
        "Microservices Design",
        "Third-party Integrations",
        "12 Months Support",
        "Dedicated Team",
        "24/7 Monitoring"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { name: "Mobile App", price: "$8,000 - $25,000", icon: "fas fa-mobile-alt" },
    { name: "UI/UX Design", price: "$2,000 - $8,000", icon: "fas fa-palette" },
    { name: "API Development", price: "$3,000 - $12,000", icon: "fas fa-server" },
    { name: "Maintenance", price: "$500 - $2,000/month", icon: "fas fa-tools" }
  ];

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect package for your project. All plans include free consultation and post-launch support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${pkg.popular ? 'border-2 border-blue-600' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">{pkg.price.split(' - ')[0]}</span>
                {pkg.price.includes(' - ') && (
                  <span className="text-slate-600"> - {pkg.price.split(' - ')[1]}</span>
                )}
              </div>
              <p className="text-slate-600 mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i> {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleScrollToContact}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  pkg.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {pkg.name === "Enterprise" ? "Contact Us" : "Get Started"}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{service.name}</h4>
                <p className="text-slate-600 text-sm">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
