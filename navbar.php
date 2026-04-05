<?php
$currentPage = isset($_GET['page']) ? $_GET['page'] : 'home';
?>

<nav class="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
    <div class="flex justify-between items-center h-16">
      <a
        href="index.php?page=home"
        class="flex items-center space-x-3 hover:opacity-80 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield text-cyan-400">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        </svg>
        <span class="font-bold text-lg sm:text-xl">CyberSafe</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-6 lg:space-x-8">
        <a
          href="index.php?page=home"
          class="hover:text-cyan-400 transition-colors font-medium px-3 py-2 rounded-md <?php echo $currentPage === 'home' ? 'text-cyan-400 bg-slate-800' : ''; ?>"
        >
          Home
        </a>
        <a
          href="index.php?page=about"
          class="hover:text-cyan-400 transition-colors font-medium px-3 py-2 rounded-md <?php echo $currentPage === 'about' ? 'text-cyan-400 bg-slate-800' : ''; ?>"
        >
          About Us
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button id="mobile-menu-button" class="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-slate-800 mt-2 rounded-lg shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          href="index.php?page=home"
          class="block px-3 py-2 rounded-md text-base font-medium hover:text-cyan-400 hover:bg-slate-700 transition-colors <?php echo $currentPage === 'home' ? 'text-cyan-400 bg-slate-700' : 'text-white'; ?>"
        >
          Home
        </a>
        <a
          href="index.php?page=about"
          class="block px-3 py-2 rounded-md text-base font-medium hover:text-cyan-400 hover:bg-slate-700 transition-colors <?php echo $currentPage === 'about' ? 'text-cyan-400 bg-slate-700' : 'text-white'; ?>"
        >
          About Us
        </a>
      </div>
    </div>
  </div>

  <script>
    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('mobile-menu-button');
      if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.add('hidden');
      }
    });
  </script>
</nav>