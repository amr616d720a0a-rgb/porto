import { Award, BookOpen, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Professional Summary</h3>
                <p className="text-slate-600 leading-relaxed">
                  AI Engineering student with hands-on experience building production-ready ML systems.
                  Demonstrated success with 99.8% accurate drowsiness detection, 98% accurate medical diagnosis
                  processing 10,000+ records, and real-time ANPR at 30 FPS. Proven ability to take projects
                  from concept to deployment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Education</h3>
                <p className="font-medium text-slate-900 mb-1">Bachelor of Engineering in Artificial Intelligence</p>
                <p className="text-blue-600 mb-2">New Mansoura University</p>
                <p className="text-slate-600 text-sm mb-2">Oct 2021 – Expected Jun 2026</p>
                <p className="text-slate-900 font-semibold">CGPA: 3.504/4.0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>Built AI systems with 99.8% accuracy in drowsiness detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>Deployed medical diagnosis model achieving 98% accuracy on 10,000+ patient records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>Developed real-time ANPR system processing 30 FPS with 95% detection accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>Reduced inference time by 45% through optimization and feature engineering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
