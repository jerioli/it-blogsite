import { ArrowLeft, Eye, AlertCircle, Link2, Mail, Clock } from 'lucide-react';
import { Page } from '../types';

interface Part4PageProps {
  onNavigate: (page: Page) => void;
}

export default function Part4Page({ onNavigate }: Part4PageProps) {
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
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mr-4">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">
              Part 4: Spot the Warning Signs
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Recognizing the warning signs of a cyber attack can be the difference between staying safe
              and falling victim. Here are the key indicators that something isn't right.
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Urgency & Pressure</h3>
                    <p className="text-slate-700 mb-3">
                      Legitimate organizations rarely pressure you to act immediately. If a message
                      creates a sense of panic or urgency, it's likely a scam.
                    </p>
                    <div className="bg-white p-4 rounded-lg space-y-2">
                      <p className="text-sm text-slate-800">
                        <span className="font-semibold text-red-700">Warning phrases:</span>
                      </p>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• "Act now or your account will be closed"</li>
                        <li>• "Immediate action required"</li>
                        <li>• "Limited time offer - expires in 10 minutes"</li>
                        <li>• "Urgent security alert"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 bg-orange-50 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <Link2 className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Suspicious Links & URLs</h3>
                    <p className="text-slate-700 mb-3">
                      Always inspect links before clicking. Hover over them to see the actual destination.
                    </p>
                    <div className="bg-white p-4 rounded-lg space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-green-700 mb-1">✓ SAFE:</p>
                        <code className="text-sm bg-green-100 px-2 py-1 rounded">https://amazon.com/orders</code>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-red-700 mb-1">✗ SUSPICIOUS:</p>
                        <code className="text-sm bg-red-100 px-2 py-1 rounded">https://amaz0n-security.com/verify</code>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-red-700 mb-1">✗ SUSPICIOUS:</p>
                        <code className="text-sm bg-red-100 px-2 py-1 rounded">http://bit.ly/xk3m9 (shortened URL)</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Suspicious Email Addresses</h3>
                    <p className="text-slate-700 mb-3">
                      Check the sender's email carefully. Scammers often use addresses that look
                      similar to legitimate ones.
                    </p>
                    <div className="bg-white p-4 rounded-lg space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-green-700 mb-1">✓ LEGITIMATE:</p>
                        <code className="text-sm bg-green-100 px-2 py-1 rounded">support@paypal.com</code>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-red-700 mb-1">✗ FAKE:</p>
                        <code className="text-sm bg-red-100 px-2 py-1 rounded">support@paypa1.com</code>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-red-700 mb-1">✗ FAKE:</p>
                        <code className="text-sm bg-red-100 px-2 py-1 rounded">noreply@paypal-security.net</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Requests for Personal Information</h3>
                    <p className="text-slate-700 mb-3">
                      Legitimate companies will never ask for sensitive information via email, text, or
                      unsolicited calls.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm font-semibold text-purple-800 mb-2">Never share via email or text:</p>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Full credit card numbers</li>
                        <li>• Social Security numbers</li>
                        <li>• Bank account credentials</li>
                        <li>• Passwords or PINs</li>
                        <li>• Mother's maiden name</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Trust Your Instincts</h3>
              <p className="text-white leading-relaxed">
                If something feels off, it probably is. When in doubt, don't click, don't reply, and
                don't share information. Instead, contact the company directly using a phone number or
                website you know is legitimate.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
