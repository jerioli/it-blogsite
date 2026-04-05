<?php
$siteInfo = [
  'title' => 'The Hidden Dangers of the Internet: Common Threats and How to Protect Yourself',
  'tagline' => 'Protecting You in a Connected World.',
  'about' => 'Not all threats come with a warning. Some hide behind links, messages, and even harmless clicks. Stay alert. Stay protected. Stay ahead.',
  'authors' => [
    'Abuedo, Lorin Genesis D.',
    'Ardeña, Benedict B.',
    'De Leon, Kristine Mae S.',
    'Federipe, Rhoda Mae A.',
    'Ofrasio, Denise Angelique L.',
    'Paguirigan, Micaella D.'
  ],
  'professor' => 'Sir. McJoben Reyes',
  'course' => 'Living in IT Era',
  'courseCode' => 'GEED 012',
  'section' => 'BSBA major in Marketing Management 3-1'
];
?>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-8 sm:py-12 lg:py-16">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
    <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
      <div class="text-center mb-10 sm:mb-12 lg:mb-16">
        <div class="inline-block p-3 sm:p-4 lg:p-5 bg-cyan-100 rounded-full mb-4 sm:mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users text-cyan-600 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6">About Us</h1>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto px-4">
          <?php echo $siteInfo['about']; ?>
        </p>
      </div>

      <div class="space-y-8 sm:space-y-10 lg:space-y-12 xl:space-y-16">
        <div class="border-t border-slate-200 pt-8 sm:pt-10 lg:pt-12">
          <div class="flex items-center mb-6 sm:mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users text-cyan-600 mr-3 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900">Authors</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <?php foreach ($siteInfo['authors'] as $author): ?>
              <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 sm:p-6 border border-cyan-200 hover:shadow-md transition-shadow">
                <p class="text-slate-800 font-medium text-sm sm:text-base lg:text-lg"><?php echo $author; ?></p>
              </div>
            <?php endforeach; ?>
          </div>
        </div>

        <div class="border-t border-slate-200 pt-8 sm:pt-10 lg:pt-12">
          <div class="flex items-center mb-6 sm:mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap text-cyan-600 mr-3 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="m6 12 8 4 8-4"/>
              <path d="M6 12v4c0 2 2 4 6 4s6-2 6-4v-4"/>
            </svg>
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900">Professor</h2>
          </div>
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 sm:p-6 border border-cyan-200 hover:shadow-md transition-shadow">
            <p class="text-slate-800 font-medium text-lg sm:text-xl lg:text-2xl"><?php echo $siteInfo['professor']; ?></p>
          </div>
        </div>

        <div class="border-t border-slate-200 pt-8 sm:pt-10 lg:pt-12">
          <div class="flex items-center mb-6 sm:mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open text-cyan-600 mr-3 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900">Course Information</h2>
          </div>
          <div class="space-y-4 sm:space-y-6">
            <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 sm:p-6 border border-cyan-200 hover:shadow-md transition-shadow">
              <p class="text-xs sm:text-sm text-slate-600 mb-1 sm:mb-2">Course</p>
              <p class="text-slate-800 font-medium text-base sm:text-lg lg:text-xl"><?php echo $siteInfo['course']; ?></p>
            </div>
            <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 sm:p-6 border border-cyan-200 hover:shadow-md transition-shadow">
              <p class="text-xs sm:text-sm text-slate-600 mb-1 sm:mb-2">Course Code</p>
              <p class="text-slate-800 font-medium text-base sm:text-lg lg:text-xl"><?php echo $siteInfo['courseCode']; ?></p>
            </div>
            <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 sm:p-6 border border-cyan-200 hover:shadow-md transition-shadow">
              <p class="text-xs sm:text-sm text-slate-600 mb-1 sm:mb-2">Section</p>
              <p class="text-slate-800 font-medium text-base sm:text-lg lg:text-xl"><?php echo $siteInfo['section']; ?></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>