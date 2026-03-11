import { Code2, Brain, Database, Cloud, Wrench, MessageSquare } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: ['Python (Advanced)', 'SQL (Intermediate)', 'Bash', 'C++'],
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'ML/DL Frameworks',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'YOLOv5'],
      color: 'cyan'
    },
    {
      icon: MessageSquare,
      title: 'NLP & LLMs',
      skills: ['LangChain', 'LangGraph', 'Hugging Face', 'OpenAI APIs', 'RAG Systems', 'Prompt Engineering'],
      color: 'blue'
    },
    {
      icon: Database,
      title: 'Databases & Vector Stores',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Chroma', 'Pinecone'],
      color: 'cyan'
    },
    {
      icon: Cloud,
      title: 'Cloud & MLOps',
      skills: ['AWS (SageMaker, EC2, S3)', 'GCP', 'Docker', 'CI/CD', 'Git/GitHub'],
      color: 'blue'
    },
    {
      icon: Wrench,
      title: 'Data Science Tools',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
      color: 'cyan'
    }
  ];

  const getColorClasses = (color: string) => {
    if (color === 'blue') {
      return {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        badge: 'bg-blue-50 text-blue-700 border-blue-200'
      };
    }
    return {
      bg: 'bg-cyan-100',
      text: 'text-cyan-600',
      badge: 'bg-cyan-50 text-cyan-700 border-cyan-200'
    };
  };

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Technical Skills</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Proficient in cutting-edge AI/ML technologies and frameworks, with expertise spanning from
          traditional machine learning to modern LLM applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${colors.bg} rounded-lg`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`px-3 py-1 rounded-full text-sm border ${colors.badge} transition-transform hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-8 text-white">
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['Problem-Solving', 'Team Collaboration', 'Effective Communication', 'Time Management', 'Adaptability'].map((skill, idx) => (
              <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
