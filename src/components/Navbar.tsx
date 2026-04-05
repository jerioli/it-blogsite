import { Shield } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="font-bold text-xl">CyberSafe</span>
          </button>

          <div className="flex space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`hover:text-cyan-400 transition-colors font-medium ${
                currentPage === 'home' ? 'text-cyan-400' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`hover:text-cyan-400 transition-colors font-medium ${
                currentPage === 'about' ? 'text-cyan-400' : ''
              }`}
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
