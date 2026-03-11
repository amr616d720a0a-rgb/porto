import { ExternalLink, GitBranch, Activity, Eye, Brain, Car } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: GitBranch,
      title: 'AI Agent with Tool Integration',
      period: 'Jul 2025 – Sep 2025',
      technologies: ['Python', 'LangGraph', 'LangChain', 'BM25', 'Gradio'],
      description: 'Built a LangGraph-based AI agent with dynamic tool orchestration and integrated Qwen2.5-Coder-32B for advanced code generation.',
      highlights: [
        'Dynamic tool orchestration using LangGraph',
        'BM25-based retrieval system for context-aware information',
        'Custom tools for external data source integration'
      ],
      color: 'blue'
    },
    {
      icon: Eye,
      title: 'Driver Drowsiness Detection System',
      period: 'Mar 2024 – May 2024',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Dlib'],
      description: 'Real-time drowsiness detection system with multi-modal alert capabilities.',
      highlights: [
        'Achieved 99.8% detection accuracy on 2,000+ samples',
        'Multi-modal alert and analytics system',
        'Real-time monitoring capabilities'
      ],
      color: 'cyan'
    },
    {
      icon: Activity,
      title: 'Lung Cancer Prediction System',
      period: 'Apr 2024 – Jun 2024',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask'],
      description: 'End-to-end ML pipeline for lung cancer prediction with REST API deployment.',
      highlights: [
        'Built ML pipeline achieving 98% accuracy on 10,000+ records',
        'Deployed Flask-based REST API with validation',
        'Reduced inference time by 45% through optimization'
      ],
      color: 'blue'
    },
    {
      icon: Car,
      title: 'Automatic Number Plate Recognition (ANPR)',
      period: 'Sep 2023 – Dec 2023',
      technologies: ['Python', 'PyTorch', 'YOLOv5', 'OpenCV', 'Tesseract OCR'],
      description: 'Real-time ANPR system with high-accuracy plate detection and recognition.',
      highlights: [
        'Real-time processing at 30 FPS with 95% detection accuracy',
        'Trained YOLOv5 on 15,000 images',
        'Improved OCR accuracy by 18% through preprocessing'
      ],
      color: 'cyan'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Featured Projects</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Production-ready ML systems demonstrating expertise in computer vision, NLP, and deep learning
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isBlue = project.color === 'blue';

            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 ${isBlue ? 'bg-blue-100' : 'bg-cyan-100'} rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${isBlue ? 'text-blue-600' : 'text-cyan-600'}`} />
                  </div>
                  <span className="text-sm text-slate-500">{project.period}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${isBlue ? 'bg-blue-600' : 'bg-cyan-600'}`}></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className={`px-3 py-1 text-xs rounded-full ${
                        isBlue
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
