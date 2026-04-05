import { useState } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Part1Page from './components/Part1Page';
import Part2Page from './components/Part2Page';
import Part3Page from './components/Part3Page';
import Part4Page from './components/Part4Page';
import Part5Page from './components/Part5Page';
import Part6Page from './components/Part6Page';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'part1':
        return <Part1Page onNavigate={handleNavigate} />;
      case 'part2':
        return <Part2Page onNavigate={handleNavigate} />;
      case 'part3':
        return <Part3Page onNavigate={handleNavigate} />;
      case 'part4':
        return <Part4Page onNavigate={handleNavigate} />;
      case 'part5':
        return <Part5Page onNavigate={handleNavigate} />;
      case 'part6':
        return <Part6Page onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}

export default App;
