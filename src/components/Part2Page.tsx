import { ArrowLeft, AlertTriangle, Bug, CreditCard, Mail, FileWarning } from 'lucide-react';
import { Page } from '../types';

interface Part2PageProps {
  onNavigate: (page: Page) => void;
}

export default function Part2Page({ onNavigate }: Part2PageProps) {
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
            <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg mr-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">
              Part 2: The Hidden Dangers of the Internet
            </h1>
          </div>

          <div className="mb-8">
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg"
                alt="Cyber Threats"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Behind every click, download, and message could lurk a threat designed to steal your
              information, money, or identity. Understanding these dangers is crucial for staying safe online.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Online Threats</h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <Bug className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Malware & Viruses</h3>
                    <p className="text-slate-700">
                      Malicious software designed to damage or gain unauthorized access to your computer.
                      This includes viruses, trojans, ransomware, and spyware that can steal data,
                      encrypt files for ransom, or monitor your activities without your knowledge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Phishing Attacks</h3>
                    <p className="text-slate-700">
                      Fraudulent attempts to obtain sensitive information by disguising as trustworthy
                      entities. These attacks often come through emails, messages, or fake websites that
                      appear legitimate but are designed to steal your passwords, credit card numbers, or
                      personal information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <CreditCard className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Identity Theft</h3>
                    <p className="text-slate-700">
                      When someone steals your personal information to impersonate you for financial
                      gain. This can include opening credit cards in your name, making unauthorized
                      purchases, or even committing crimes using your identity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <FileWarning className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Data Breaches</h3>
                    <p className="text-slate-700">
                      Large-scale security incidents where hackers gain unauthorized access to company
                      databases containing user information. Even if you follow best security practices,
                      your data can be compromised if companies you trust get hacked.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
                The Real Cost of Cyber Threats
              </h3>
              <ul className="space-y-2 text-slate-200">
                <li>• Financial losses from stolen credit cards and bank accounts</li>
                <li>• Emotional distress and loss of privacy</li>
                <li>• Time and money spent recovering your identity</li>
                <li>• Damage to credit scores and reputation</li>
                <li>• Loss of sensitive personal photos and documents</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
