<?php
$topics = [
  [
    'id' => '1',
    'title' => 'Part 1: The Internet Isn\'t Always Safe',
    'shortTitle' => 'The Internet Isn\'t Always Safe',
    'page' => 'part1',
    'hasImage' => true
  ],
  [
    'id' => '2',
    'title' => 'Part 2: The Hidden Dangers of the Internet',
    'shortTitle' => 'Hidden Dangers',
    'page' => 'part2',
    'hasImage' => true
  ],
  [
    'id' => '3',
    'title' => 'Part 3: How Hackers Trick People',
    'shortTitle' => 'How Hackers Trick People',
    'page' => 'part3',
    'hasImage' => true
  ],
  [
    'id' => '4',
    'title' => 'Part 4: Spot the Warning Signs',
    'shortTitle' => 'Spot the Warning Signs',
    'page' => 'part4',
    'hasImage' => false
  ],
  [
    'id' => '5',
    'title' => 'Part 5: How to Protect Yourself Online',
    'shortTitle' => 'Protect Yourself Online',
    'page' => 'part5',
    'hasImage' => false
  ],
  [
    'id' => '6',
    'title' => 'Part 6: Quick Cyber Safety Tips',
    'shortTitle' => 'Quick Cyber Safety Tips',
    'page' => 'part6',
    'hasImage' => false
  ]
];

$siteInfo = [
  'title' => 'The Hidden Dangers of the Internet: Common Threats and How to Protect Yourself',
  'tagline' => 'Protecting You in a Connected World.',
  'about' => 'Not all threats come with a warning. Some hide behind links, messages, and even harmless clicks. Stay alert. Stay protected. Stay ahead.'
];

$topicIcons = ['shield', 'alert-triangle', 'eye', 'eye', 'lock', 'zap'];

function getIcon($name) {
  switch ($name) {
    case 'shield':
      return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>';
    case 'alert-triangle':
      return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
    case 'eye':
      return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2.99902 3.99902C5.976 1.022 10.644 1.022 13.621 3.99902C16.598 6.976 16.598 11.644 13.621 14.621C10.644 17.598 5.976 17.598 2.99902 14.621C0.022 11.644 0.022 6.976 2.99902 3.99902Z"/><path d="M9.00098 9.00098C9.00098 9.552 9.44898 10 10.001 10C10.553 10 11.001 9.552 11.001 9.00098C11.001 8.449 10.553 8 10.001 8C9.44898 8 9.00098 8.449 9.00098 9.00098Z"/><path d="M21 21L16.5 16.5"/><path d="M2.99902 14.621L7.49902 10.121"/></svg>';
    case 'lock':
      return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><circle cx="12" cy="16" r="1"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
    case 'zap':
      return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>';
    default:
      return '';
  }
}
?>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16">
    <div class="text-center mb-12 sm:mb-16 lg:mb-20">
      <div class="inline-block p-3 sm:p-4 bg-cyan-100 rounded-full mb-4 sm:mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield text-cyan-600 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        </svg>
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight px-2">
        <?php echo $siteInfo['title']; ?>
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-600 font-medium mb-6 sm:mb-8 px-2">
        <?php echo $siteInfo['tagline']; ?>
      </p>
      <p class="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
        <?php echo $siteInfo['about']; ?>
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      <?php foreach ($topics as $index => $topic): ?>
        <a
          href="index.php?page=<?php echo $topic['page']; ?>"
          class="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-8 text-left border-2 border-transparent hover:border-cyan-400 transform hover:-translate-y-1 hover:scale-105"
        >
          <div class="flex items-start justify-between mb-3 sm:mb-4">
            <div class="p-2 sm:p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <?php echo getIcon($topicIcons[$index]); ?>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
          <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-cyan-600 transition-colors leading-tight">
            <?php echo $topic['shortTitle']; ?>
          </h3>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
            Click to learn more about this important topic
          </p>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</div>