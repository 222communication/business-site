export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About 222Communication</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are a passionate team of software developers dedicated to creating innovative digital solutions that transform businesses and enhance user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Story</h3>
            <p className="text-lg text-slate-600 mb-6">
              Founded with a vision to bridge the gap between innovative technology and practical business solutions, 222Communication has been at the forefront of software development for over 8 years.
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Our team combines technical expertise with creative problem-solving to deliver applications that not only meet current needs but also scale for future growth.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <svg className="w-full max-w-md h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="300" height="200" rx="15" fill="#f1f5f9"/>
              <circle cx="150" cy="120" r="25" fill="#2563EB"/>
              <circle cx="250" cy="120" r="25" fill="#3B82F6"/>
              <rect x="80" y="170" width="240" height="60" rx="8" fill="#e2e8f0"/>
              <rect x="100" y="185" width="60" height="8" rx="4" fill="#64748b"/>
              <rect x="100" y="200" width="80" height="8" rx="4" fill="#64748b"/>
              <rect x="220" y="185" width="60" height="8" rx="4" fill="#64748b"/>
              <rect x="220" y="200" width="80" height="8" rx="4" fill="#64748b"/>
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-lightbulb text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-3">Innovation</h4>
            <p className="text-slate-600">We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.</p>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-users text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-3">Collaboration</h4>
            <p className="text-slate-600">We work closely with our clients throughout the development process to ensure perfect alignment with business goals.</p>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-award text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-3">Excellence</h4>
            <p className="text-slate-600">Quality is at the core of everything we do. We deliver robust, scalable, and maintainable software solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
