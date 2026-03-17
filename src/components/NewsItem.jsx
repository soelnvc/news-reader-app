import { useState } from 'react';

export default function NewsItem({ article, isRead, onMarkAsRead, onMarkAsUnread }) {
  // Controls description visibility.
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`news-card ${isRead ? 'read' : ''}`}>
      <div className="news-card-content">
        {/* Visually dim read items. */}
        <h3 style={{ textDecoration: isRead ? 'line-through' : 'none', opacity: isRead ? 0.6 : 1 }}>
          {article.title}
        </h3>
        
        {/* Show details only when expanded. */}
        {isExpanded && (
          <p className="news-description">
            {article.description || "No further details available for this story."}
          </p>
        )}
      </div>

      <div className="news-actions">
        <button className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Hide Details' : 'Read More'}
        </button>
        
        {!isRead && (
          <button className="read-btn" onClick={() => onMarkAsRead(article.url)}>
            Mark as Read
          </button>
        )}
        {isRead && (
          <button className="unread-btn" onClick={() => onMarkAsUnread(article.url)}>
            Mark as Unread
          </button>
        )}
      </div>
    </div>
  );
}