import { ArrowLeft, Zap, CheckCircle, XCircle } from 'lucide-react';
import { Page } from '../types';

interface Part6PageProps {
  onNavigate: (page: Page) => void;
}

export default function Part6Page({ onNavigate }: Part6PageProps) {
  const dos = [
    'Use strong, unique passwords for each account',
    'Enable two-factor authentication wherever available',
    'Keep your software and apps updated regularly',
    'Verify the sender before clicking links or attachments',
    'Use secure, encrypted connections (HTTPS)',
    'Back up your important data regularly',
    'Use reputable antivirus software',
    'Be cautious on public Wi-Fi networks',
    'Review app permissions on your devices',
    'Monitor your bank statements for suspicious activity'
  ];

  const donts = [
    'Don\'t reuse passwords across multiple accounts',
    'Don\'t click on suspicious links or pop-ups',
    'Don\'t share personal information via email or text',
    'Don\'t download files from untrusted sources',
    'Don\'t ignore software update notifications',
    'Don\'t use public computers for sensitive transactions',
    'Don\'t post too much personal information on social media',
    'Don\'t connect to unsecured public Wi-Fi without a VPN',
    'Don\'t save passwords in your browser on shared devices',
    'Don\'t assume an email is legitimate just because it looks professional'
  ];

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
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg mr-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">
              Part 6: Quick Cyber Safety Tips
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Here's a quick reference guide to help you stay safe online. Bookmark this page and
              review it regularly to reinforce good security habits.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">DO's</h2>
                </div>
                <ul className="space-y-3">
                  {dos.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-6">
                <div className="flex items-center mb-6">
                  <XCircle className="w-8 h-8 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">DON'Ts</h2>
                </div>
                <ul className="space-y-3">
                  {donts.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <XCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4">Quick Action Checklist</h3>
              <p className="text-white mb-4 leading-relaxed">
                Take these actions today to immediately improve your online security:
              </p>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="font-semibold mb-1">1. Update Your Passwords</p>
                  <p className="text-sm text-cyan-50">
                    Change passwords for your most important accounts (email, banking, social media)
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="font-semibold mb-1">2. Enable 2FA</p>
                  <p className="text-sm text-cyan-50">
                    Turn on two-factor authentication for all accounts that offer it
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="font-semibold mb-1">3. Check Your Settings</p>
                  <p className="text-sm text-cyan-50">
                    Review privacy settings on social media and adjust who can see your information
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <p className="font-semibold mb-1">4. Install Updates</p>
                  <p className="text-sm text-cyan-50">
                    Update your operating system, browser, and all apps to the latest versions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Final Thoughts</h3>
              <p className="text-slate-200 leading-relaxed mb-3">
                Cyber security doesn't have to be complicated. By following these simple tips and
                staying aware of potential threats, you can protect yourself, your family, and your
                information from cybercriminals.
              </p>
              <p className="text-cyan-300 font-semibold">
                Stay alert. Stay protected. Stay ahead.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
