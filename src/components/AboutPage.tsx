import { Users, GraduationCap, BookOpen } from 'lucide-react';
import { siteInfo } from '../data';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-cyan-100 rounded-full mb-6">
              <Users className="w-12 h-12 text-cyan-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">About Us</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {siteInfo.about}
            </p>
          </div>

          <div className="space-y-10">
            <div className="border-t border-slate-200 pt-10">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-cyan-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Authors</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {siteInfo.authors.map((author, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200"
                  >
                    <p className="text-slate-800 font-medium">{author}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-10">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-cyan-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Professor</h2>
              </div>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                <p className="text-slate-800 font-medium text-lg">{siteInfo.professor}</p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-10">
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-cyan-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Course Information</h2>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                  <p className="text-sm text-slate-600 mb-1">Course</p>
                  <p className="text-slate-800 font-medium text-lg">{siteInfo.course}</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                  <p className="text-sm text-slate-600 mb-1">Course Code</p>
                  <p className="text-slate-800 font-medium text-lg">{siteInfo.courseCode}</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border border-cyan-200">
                  <p className="text-sm text-slate-600 mb-1">Section</p>
                  <p className="text-slate-800 font-medium text-lg">{siteInfo.section}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
