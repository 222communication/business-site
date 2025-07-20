export default function Footer() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">222Communication</h3>
            <p className="text-slate-300 mb-4">
              Transforming ideas into exceptional digital experiences through innovative software development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-github text-lg"></i>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                <i className="fab fa-dribbble text-lg"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button 
                  onClick={() => handleScrollToSection("#services")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("#services")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Mobile Apps
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("#services")}
                  className="hover:text-white transition-colors duration-200"
                >
                  UI/UX Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("#services")}
                  className="hover:text-white transition-colors duration-200"
                >
                  E-commerce
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("#services")}
                  className="hover:text-white transition-colors duration-200"
                >
                  API Development
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button 
                  onClick={() => handleScrollToSection("#about")}
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("#projects")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("#blog")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("#testimonials")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection("#contact")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <p className="text-slate-300 mb-4">Ready to bring your project to life?</p>
            <button
              onClick={() => handleScrollToSection("#contact")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
            >
              Start Project
            </button>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 text-sm">
            © 2024 222Communication. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
