import { ArrowLeft, Lock, Key, Shield, RefreshCw, Eye, Smartphone } from 'lucide-react';
import { Page } from '../types';

interface Part5PageProps {
  onNavigate: (page: Page) => void;
}

export default function Part5Page({ onNavigate }: Part5PageProps) {
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
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg mr-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">
              Part 5: How to Protect Yourself Online
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Now that you understand the threats, here are practical steps you can take to protect
              yourself and your information online.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <Key className="w-7 h-7 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Use Strong, Unique Passwords</h3>
                    <p className="text-slate-700 mb-4">
                      Your password is your first line of defense. Make it count.
                    </p>
                    <div className="bg-white p-5 rounded-lg border border-blue-300 space-y-3">
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">Password Best Practices:</p>
                        <ul className="text-sm text-slate-700 space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Use at least 12 characters with a mix of uppercase, lowercase, numbers, and symbols</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Never reuse passwords across different accounts</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Consider using a password manager like LastPass or 1Password</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Avoid personal information (birthdays, names, pet names)</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded border border-green-300">
                        <p className="text-sm font-semibold text-green-800">✓ Strong Password Example:</p>
                        <code className="text-sm text-slate-700">Tr0p!c@l$unS3t#2024</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <Smartphone className="w-7 h-7 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Enable Two-Factor Authentication (2FA)</h3>
                    <p className="text-slate-700 mb-4">
                      Add an extra layer of security that requires a second form of verification.
                    </p>
                    <div className="bg-white p-5 rounded-lg border border-green-300">
                      <p className="font-semibold text-slate-900 mb-2">Why 2FA is Essential:</p>
                      <p className="text-sm text-slate-700 mb-3">
                        Even if someone steals your password, they won't be able to access your account
                        without the second authentication factor (usually a code sent to your phone or
                        generated by an app).
                      </p>
                      <p className="text-sm font-semibold text-green-800 mb-2">Enable 2FA on:</p>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Email accounts (Gmail, Outlook)</li>
                        <li>• Banking and financial services</li>
                        <li>• Social media platforms</li>
                        <li>• Shopping and payment accounts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <RefreshCw className="w-7 h-7 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Keep Software Updated</h3>
                    <p className="text-slate-700 mb-4">
                      Software updates often include critical security patches that protect against
                      newly discovered vulnerabilities.
                    </p>
                    <div className="bg-white p-5 rounded-lg border border-purple-300">
                      <p className="font-semibold text-slate-900 mb-2">What to Update Regularly:</p>
                      <ul className="text-sm text-slate-700 space-y-2">
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Operating systems (Windows, macOS, iOS, Android)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Web browsers and browser extensions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Antivirus and security software</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>Apps on your phone and computer</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <Eye className="w-7 h-7 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Think Before You Click</h3>
                    <p className="text-slate-700 mb-4">
                      Most cyber attacks succeed because of human error. Stay vigilant.
                    </p>
                    <div className="bg-white p-5 rounded-lg border border-orange-300">
                      <p className="font-semibold text-slate-900 mb-2">Before clicking any link:</p>
                      <ul className="text-sm text-slate-700 space-y-2">
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-2">1.</span>
                          <span>Hover over the link to preview the destination URL</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-2">2.</span>
                          <span>Verify the sender's identity and email address</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-2">3.</span>
                          <span>Look for signs of phishing (urgency, poor grammar, suspicious requests)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-orange-600 mr-2">4.</span>
                          <span>When in doubt, go directly to the website instead of clicking the link</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <Shield className="w-7 h-7 text-cyan-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Use Secure Connections</h3>
                    <p className="text-slate-700 mb-4">
                      Protect your data when browsing and connecting to networks.
                    </p>
                    <div className="bg-white p-5 rounded-lg border border-cyan-300">
                      <ul className="text-sm text-slate-700 space-y-2">
                        <li className="flex items-start">
                          <span className="text-cyan-600 mr-2">•</span>
                          <span>Only enter sensitive information on HTTPS websites (look for the padlock icon)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-600 mr-2">•</span>
                          <span>Avoid public Wi-Fi for banking or shopping; use a VPN if necessary</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-600 mr-2">•</span>
                          <span>Turn off Bluetooth and Wi-Fi when not in use</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-600 mr-2">•</span>
                          <span>Be cautious when connecting to unknown networks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Remember</h3>
              <p className="text-slate-200 leading-relaxed">
                Security is not a one-time action but an ongoing practice. By implementing these
                protections and staying informed about new threats, you can significantly reduce your
                risk of falling victim to cybercrime.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
