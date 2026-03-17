import React from 'react';
import NewsItem from './NewsItem';

export default function NewsList({ articles, readArticleIds, onMarkAsRead, onMarkAsUnread }) {
  // Empty state
  if (!articles || articles.length === 0) {
    return (
      <div className="empty-state">
        <p>No headlines found for this category.</p>
      </div>
    );
  }

  return (
    <div className="news-list">
      {articles.map((article) => (
        <NewsItem 
          key={article.url}
          article={article} 
          isRead={readArticleIds.has(article.url)}
          onMarkAsRead={onMarkAsRead}
          onMarkAsUnread={onMarkAsUnread}
        />
      ))}
    </div>
  );
}