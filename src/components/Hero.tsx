import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhIMTZ2LThoMjB6bTAgMjB2OEgxNnYtOGgyMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            AMR AHMED MAHMOUD HELMY
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 font-light">
            AI Engineer & Machine Learning Specialist
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Building production-ready ML systems with expertise in Deep Learning, Computer Vision, and NLP.
            Passionate about transforming ideas into intelligent solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <a href="tel:+201025354871" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+20 10 2535 4871</span>
            </a>
            <a href="mailto:amrh9925@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>amrh9925@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mansoura, Egypt</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/Amrh9925"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="www.linkedin.com/in/amr-helmy-860407244"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </button>
    </section>
  );
}
