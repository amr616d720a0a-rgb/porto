import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Amr Ahmed Mahmoud Helmy
          </p>
          <p className="text-slate-500 text-sm mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
