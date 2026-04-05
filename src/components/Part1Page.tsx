import { ArrowLeft, Shield, AlertCircle, Globe, Lock } from 'lucide-react';
import { Page } from '../types';

interface Part1PageProps {
  onNavigate: (page: Page) => void;
}

export default function Part1Page({ onNavigate }: Part1PageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center text-cyan-600 hover:text-cyan-700 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">
              Part 1: The Internet Isn't Always Safe
            </h1>
          </div>

          <div className="mb-8">
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
                alt="Internet Security"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The internet has revolutionized how we communicate, work, and live. However, with these
              incredible benefits come significant risks that many users overlook or underestimate.
            </p>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-slate-800 font-medium">
                  Every day, millions of people fall victim to online threats, from identity theft to
                  financial fraud. Understanding these dangers is the first step toward protecting yourself.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <Globe className="w-6 h-6 text-cyan-600 mr-3" />
              Why the Internet Can Be Dangerous
            </h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-slate-900">Anonymity of Attackers:</strong>
                  <span className="text-slate-700"> Cybercriminals can hide their identity and location, making it difficult to track them down.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-slate-900">Constant Connectivity:</strong>
                  <span className="text-slate-700"> We're always online, which means we're always exposed to potential threats.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-slate-900">Personal Information Sharing:</strong>
                  <span className="text-slate-700"> Social media and online services encourage us to share personal details that can be exploited.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-slate-900">Sophisticated Attack Methods:</strong>
                  <span className="text-slate-700"> Hackers continuously develop new techniques to bypass security measures.</span>
                </div>
              </li>
            </ul>

            <div className="bg-slate-900 text-white p-6 rounded-xl mb-8">
              <div className="flex items-start">
                <Lock className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Remember</h3>
                  <p className="text-slate-200">
                    Being aware of the dangers is not about living in fear—it's about being smart,
                    cautious, and prepared. The internet is an incredible tool when used safely.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed">
              In the following sections, we'll explore specific threats, how hackers operate, and most
              importantly, how you can protect yourself and your loved ones from becoming victims of
              cybercrime.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
