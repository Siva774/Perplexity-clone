import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`} className="article-card">
      <img src={article.image} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </Link>
  );
};

export default ArticleCard;
