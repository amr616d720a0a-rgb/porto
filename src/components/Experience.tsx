import { Briefcase, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'AI & Data Science – Microsoft Data Engineer',
      organization: 'DEPI',
      period: 'Nov 2025 – present',
      type: 'Training Program',
      description: 'Comprehensive training in Azure data services, DevOps, and big data processing.',
      highlights: [
        'SQL, Azure Data Services, DevOps, Big Data Processing, Data Pipelines',
        'Courses: Prompt Engineering, Advanced Python, SQL & Database Management',
        'Microsoft Azure Data Engineer Associate certification track'
      ]
    },
    {
      role: 'Building LLM Applications with Prompt Engineering',
      organization: 'NVIDIA Deep Learning Institute',
      period: 'Sep 2025',
      type: 'Certificate',
      description: 'Hands-on training in developing LLM applications using NVIDIA NIM and LangChain.',
      highlights: [
        'Developed LLM applications using NVIDIA NIM (Llama 3.1 model)',
        'Completed projects: multi-role chatbot, document extraction, API-integrated agent',
        'Earned NVIDIA Deep Learning Institute Certificate of Competency'
      ]
    },
    {
      role: 'Generative AI Foundations',
      organization: 'AWS-Udacity Partnership',
      period: 'Jun 2025 – Jul 2025',
      type: 'Course',
      description: 'Foundational course on generative AI, LLMs, and transformer architectures.',
      highlights: [
        'Learned prompt engineering techniques and responsible AI deployment',
        'Gained exposure to AWS AI/ML tools including SageMaker',
        'Focus on AI history, ML fundamentals, ethical AI considerations'
      ]
    },
    {
      role: 'Data Analysis Trainee',
      organization: 'Creativa',
      period: 'Mar 2024 – Jun 2024',
      type: 'Internship',
      description: 'Performed exploratory data analysis and statistical modeling on business datasets.',
      highlights: [
        'Performed EDA and statistical modeling on business datasets',
        'Achieved 95% forecast accuracy using advanced analytics techniques',
        'Created interactive dashboards using Power BI'
      ]
    }
  ];

  const certifications = [
    'LLM Course: Fundamentals of LLMs (Hugging Face, 2025)',
    'MCP Course: Unit 1 Fundamentals (Hugging Face, 2025)',
    'Building LLM Applications with Prompt Engineering (NVIDIA, 2025)',
    'Associate AI Engineer for Developers (DataCamp, 2025)',
    'Introducing Generative AI with AWS (Udacity, 2025)',
    'Deep Learning using TensorFlow (IBM)',
    'Hugging Face Agents Course',
    'Data Analytics Training Program (Creativa, 2025)'
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Experience & Certifications</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-slate-900 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-600" />
            Professional Experience
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                    <p className="text-blue-600 font-medium">{exp.organization}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-slate-600">{exp.period}</span>
                    <p className="text-xs text-slate-500 mt-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full inline-block">
                      {exp.type}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 mb-3">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-cyan-600" />
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200 hover:border-blue-400 transition-colors"
              >
                <p className="text-slate-700 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
