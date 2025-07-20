export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of React: What's Coming in 2024",
      description: "Explore the latest React features and improvements that are revolutionizing modern web development...",
      category: "Development",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "bg-blue-600"
    },
    {
      title: "Cross-Platform vs Native: Making the Right Choice",
      description: "A comprehensive guide to choosing between cross-platform and native mobile development approaches...",
      category: "Mobile",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "bg-blue-500"
    },
    {
      title: "Design Systems: Building Consistent User Experiences",
      description: "Learn how design systems improve consistency, efficiency, and user experience across applications...",
      category: "Design",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "bg-green-500"
    },
    {
      title: "Microservices Architecture: Scaling for Success",
      description: "Discover how microservices can transform your application architecture for better scalability...",
      category: "DevOps",
      date: "March 8, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "bg-purple-500"
    },
    {
      title: "Security Best Practices for Modern Web Applications",
      description: "Essential security measures every development team should implement to protect user data...",
      category: "Security",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "bg-red-500"
    },
    {
      title: "Optimizing Web Performance: A Developer's Guide",
      description: "Proven techniques to improve your web application's speed and user experience...",
      category: "Performance",
      date: "March 3, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "bg-orange-500"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Latest Insights</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in software development, technology insights, and industry best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`${post.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold mr-3`}>
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-blue-600 transition-colors duration-200">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-slate-600 mb-4">{post.description}</p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
