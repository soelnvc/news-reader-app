import { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import NewsList from './components/NewsList';
import './App.css'; 

function App() {
  // State
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  // Track read articles by URL for O(1) lookups.
  const [readArticleIds, setReadArticleIds] = useState(new Set()); 
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effects
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
        );
        
        const data = await response.json();
        
        if (data.articles) {
          // Skip placeholder entries from the API.
          const validArticles = data.articles.filter(article => article.title !== '[Removed]');
          setArticles(validArticles);
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error("Failed to fetch news", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [category]); 

  // Keep the body theme class in sync with toggle state.
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Handlers
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  
  const handleCategoryChange = (newCategory) => setCategory(newCategory);

  // Use URL as a stable key because NewsAPI does not provide IDs.
  const markAsRead = (articleUrl) => {
    setReadArticleIds(prev => new Set(prev).add(articleUrl)); 
  };

  const markAsUnread = (articleUrl) => {
    setReadArticleIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(articleUrl);
      return newSet;
    });
  };

  // Render
  return (
    <div className="app-container">
      <Header 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        readCount={readArticleIds.size} 
      />
      
      <main className="content-wrapper">
        <CategoryFilter 
          currentCategory={category} 
          onCategoryChange={handleCategoryChange} 
        />
        
        {isLoading ? (
          <p className="loading-text">Loading latest headlines...</p>
        ) : (
          <NewsList 
            articles={articles} 
            readArticleIds={readArticleIds}
            onMarkAsRead={markAsRead}
            onMarkAsUnread={markAsUnread}
          />
        )}
      </main>
    </div>
  );

  
}

export default App;