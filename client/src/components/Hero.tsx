export default function Hero() {
  const handleScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Software Development for Your Digital Success
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              We build powerful web and mobile applications that drive business growth. From concept to deployment, we deliver exceptional digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleScroll("#contact")}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200 text-center"
              >
                Get Started Today
              </button>
              <button
                onClick={() => handleScroll("#projects")}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
              >
                View Our Work
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <svg className="w-full max-w-lg h-auto" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="80" width="400" height="240" rx="20" fill="#ffffff" opacity="0.1"/>
              <rect x="70" y="100" width="360" height="20" rx="10" fill="#ffffff" opacity="0.2"/>
              <rect x="70" y="140" width="160" height="160" rx="8" fill="#ffffff" opacity="0.15"/>
              <rect x="250" y="140" width="180" height="80" rx="8" fill="#ffffff" opacity="0.15"/>
              <rect x="250" y="240" width="180" height="60" rx="8" fill="#ffffff" opacity="0.15"/>
              <circle cx="120" cy="180" r="20" fill="#ffffff" opacity="0.3"/>
              <rect x="90" y="220" width="80" height="8" rx="4" fill="#ffffff" opacity="0.4"/>
              <rect x="90" y="240" width="60" height="8" rx="4" fill="#ffffff" opacity="0.4"/>
              <rect x="270" y="160" width="100" height="8" rx="4" fill="#ffffff" opacity="0.4"/>
              <rect x="270" y="180" width="140" height="8" rx="4" fill="#ffffff" opacity="0.4"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
