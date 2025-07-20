import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help you achieve your digital goals. We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select a project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="e-commerce">E-commerce Solution</option>
                  <option value="api-development">API Development</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email Us</h4>
                    <p className="text-slate-600">hello@222communication.com</p>
                    <p className="text-slate-600">projects@222communication.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Call Us</h4>
                    <p className="text-slate-600">+1 (555) 222-COMM</p>
                    <p className="text-slate-600">+1 (555) 222-2666</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Visit Us</h4>
                    <p className="text-slate-600">123 Innovation Drive</p>
                    <p className="text-slate-600">Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Business Hours</h4>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  <i className="fab fa-dribbble text-lg"></i>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Quick Response Guarantee</h4>
              <p className="text-slate-600">
                We understand that timing is crucial for your business. That's why we guarantee a response to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
