import { Brain, Eye, MessageSquare, BarChart3, Cpu, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI/ML Model Development',
      description: 'Custom machine learning and deep learning solutions tailored to your business needs, from concept to deployment.',
      features: ['Model Training & Optimization', 'Feature Engineering', 'Performance Tuning']
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Advanced computer vision systems for object detection, image recognition, and real-time video analysis.',
      features: ['Object Detection', 'Image Classification', 'Video Analytics']
    },
    {
      icon: MessageSquare,
      title: 'NLP & LLM Applications',
      description: 'Build intelligent chatbots, document processing systems, and LLM-powered applications using cutting-edge frameworks.',
      features: ['RAG Systems', 'Chatbot Development', 'Document Analysis']
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Visualization',
      description: 'Transform raw data into actionable insights with comprehensive analysis and interactive dashboards.',
      features: ['Exploratory Data Analysis', 'Statistical Modeling', 'Dashboard Creation']
    },
    {
      icon: Cpu,
      title: 'API Development & Deployment',
      description: 'Deploy ML models as production-ready APIs with proper validation, security, and scalability.',
      features: ['REST API Development', 'Model Deployment', 'Cloud Integration']
    },
    {
      icon: Rocket,
      title: 'MLOps & Optimization',
      description: 'Optimize and streamline your ML workflows with modern MLOps practices and performance improvements.',
      features: ['Model Optimization', 'CI/CD Pipelines', 'Performance Monitoring']
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Services Offered</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Comprehensive AI and machine learning services to transform your ideas into intelligent, production-ready solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isBlue = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 group hover:-translate-y-1"
              >
                <div className={`inline-block p-3 ${isBlue ? 'bg-blue-100' : 'bg-cyan-100'} rounded-lg mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${isBlue ? 'text-blue-600' : 'text-cyan-600'}`} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${isBlue ? 'bg-blue-600' : 'bg-cyan-600'}`}></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Start Your Project?</h3>
          <p className="mb-6 text-blue-100">
            Let's discuss how I can help bring your AI vision to life with cutting-edge technology and proven expertise.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
