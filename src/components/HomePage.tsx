import { ChevronRight, Shield, AlertTriangle, Eye, Lock, FileText, Zap } from 'lucide-react';
import { Page } from '../types';
import { siteInfo, topics } from '../data';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const topicIcons = [Shield, AlertTriangle, Eye, Eye, Lock, Zap];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-cyan-100 rounded-full mb-6">
            <Shield className="w-12 h-12 text-cyan-600" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4 leading-tight">
            {siteInfo.title}
          </h1>
          <p className="text-2xl text-cyan-600 font-medium mb-8">
            {siteInfo.tagline}
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {siteInfo.about}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => {
            const Icon = topicIcons[index];
            return (
              <button
                key={topic.id}
                onClick={() => onNavigate(topic.page)}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 text-left border-2 border-transparent hover:border-cyan-400 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {topic.shortTitle}
                </h3>
                <p className="text-slate-600 text-sm">
                  Click to learn more about this important topic
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
