import { ArrowLeft, Eye, Target, MessageSquare, Link, MousePointerClick } from 'lucide-react';
import { Page } from '../types';

interface Part3PageProps {
  onNavigate: (page: Page) => void;
}

export default function Part3Page({ onNavigate }: Part3PageProps) {
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
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mr-4">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">
              Part 3: How Hackers Trick People
            </h1>
          </div>

          <div className="mb-8">
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
                alt="Hacker Techniques"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Hackers don't just rely on technical skills—they're master manipulators who exploit human
              psychology. Understanding their tactics is essential to avoiding their traps.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Hacker Tactics</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Social Engineering</h3>
                    <p className="text-slate-700 mb-3">
                      The art of manipulating people into revealing confidential information. Hackers
                      exploit trust, fear, and urgency to trick victims into making poor decisions.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <p className="text-sm font-semibold text-red-800 mb-2">Example:</p>
                      <p className="text-sm text-slate-700 italic">
                        "This is your bank's fraud department. We've detected suspicious activity on
                        your account. Please verify your credentials immediately to prevent account closure."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Fake Messages & Emails</h3>
                    <p className="text-slate-700 mb-3">
                      Carefully crafted messages that appear to come from legitimate sources like banks,
                      government agencies, or popular services. These messages often contain urgent calls
                      to action.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <p className="text-sm font-semibold text-blue-800 mb-2">Red Flags:</p>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Spelling and grammar mistakes</li>
                        <li>• Generic greetings like "Dear Customer"</li>
                        <li>• Suspicious sender email addresses</li>
                        <li>• Requests for immediate action</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <Link className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Malicious Links & Downloads</h3>
                    <p className="text-slate-700 mb-3">
                      Links that redirect to fake websites designed to steal your information, or
                      downloads that install malware on your device. These often look legitimate at
                      first glance.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-purple-200">
                      <p className="text-sm font-semibold text-purple-800 mb-2">Common Disguises:</p>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• "Your package delivery failed - click here to reschedule"</li>
                        <li>• "Congratulations! You've won a prize - claim now"</li>
                        <li>• "Security alert - verify your account"</li>
                        <li>• "Invoice attached - please review and pay"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <MousePointerClick className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Fake Websites & Pop-ups</h3>
                    <p className="text-slate-700 mb-3">
                      Websites that look identical to legitimate ones but are designed to capture your
                      login credentials or payment information. Pop-ups claiming your device is infected
                      are also common tricks.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <p className="text-sm font-semibold text-green-800 mb-2">How to Identify:</p>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Check the URL carefully for misspellings</li>
                        <li>• Look for HTTPS and padlock icon</li>
                        <li>• Be wary of shortened URLs</li>
                        <li>• Don't trust pop-up warnings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Key Takeaway</h3>
              <p className="text-slate-200 leading-relaxed">
                Hackers succeed because they exploit human emotions—fear, curiosity, greed, and urgency.
                By staying calm, thinking critically, and verifying before acting, you can protect
                yourself from their manipulative tactics.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
