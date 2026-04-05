<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CyberSafe - The Hidden Dangers of the Internet</title>
    <meta property="og:image" content="https://bolt.new/static/og_default.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://bolt.new/static/og_default.png" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <?php include 'navbar.php'; ?>
    <?php
    $page = isset($_GET['page']) ? $_GET['page'] : 'home';
    switch ($page) {
      case 'home':
        include 'home.php';
        break;
      case 'about':
        include 'about.php';
        break;
      case 'part1':
        include 'part1.php';
        break;
      case 'part2':
        include 'part2.php';
        break;
      case 'part3':
        include 'part3.php';
        break;
      case 'part4':
        include 'part4.php';
        break;
      case 'part5':
        include 'part5.php';
        break;
      case 'part6':
        include 'part6.php';
        break;
      default:
        include 'home.php';
        break;
    }
    ?>
  </body>
</html></content>
<parameter name="filePath">c:\IT-Projects\it-blogsite\index.php