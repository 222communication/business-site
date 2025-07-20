export default function Testimonials() {
  const testimonials = [
    {
      quote: "222Communication delivered exactly what we needed. Their expertise in React and modern web development helped us create a platform that our users love. The team was professional, responsive, and delivered on time.",
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "Working with 222Communication was a game-changer for our business. They transformed our outdated system into a modern, efficient platform. Their attention to detail and technical expertise is outstanding.",
      name: "Michael Chen",
      position: "CTO, DataFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "The mobile app they developed for us exceeded all expectations. User engagement increased by 200% after launch. Their team understood our vision and brought it to life perfectly.",
      name: "Emily Rodriguez",
      position: "Marketing Director, FitLife",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "Exceptional service from start to finish. They guided us through the entire development process and provided valuable insights that improved our original concept. Highly recommended!",
      name: "David Thompson",
      position: "Founder, EcoCommerce",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "Their expertise in both frontend and backend development saved us time and money. The final product was scalable, secure, and exactly what we envisioned. Great communication throughout.",
      name: "Lisa Wang",
      position: "Product Manager, HealthTech",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "We've worked with several development teams, but 222Communication stands out. Their technical skills, project management, and dedication to quality are unmatched. We'll definitely work with them again.",
      name: "James Wilson",
      position: "Operations Director, LogiTech",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ];

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with 222Communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-slate-600 mb-6">Let's discuss how we can help bring your project to life and achieve your business goals.</p>
          <button
            onClick={handleScrollToContact}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
