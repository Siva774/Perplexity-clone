import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Discover.css';
import article1Img from '../assets/article2.jpg';
import article2Img from '../assets/article1.jpg';
import article3Img from '../assets/article3.jpg';
import article4Img from '../assets/article4.png';
import article5Img from '../assets/article5.png';
import article6Img from '../assets/article6.png';
import article7Img from '../assets/article7.png';
import article8Img from '../assets/article8.png';
import article9Img from '../assets/article13.png';
import article10Img from '../assets/article10.png';
import article11Img from '../assets/article11.png';
import article12Img from '../assets/article12.png';
import article13Img from '../assets/article9.png';

const Discover = () => {
  const articles = [
    { id: 1, title:  
      '       Taiwan Faces an Energy Crunch' , description: 'Taiwans energy sector faces a critical juncture as the island grapples with an intensifying power crunch, threatening its economic backbone—the semiconductor...', image: article1Img },
    { id: 2, title: '2024 Nobel Prize in Medicine', description: 'The 2024 Nobel Prize in Physiology or Medicine was awarded to American scientists Victor ', image: article2Img },
    { id: 3, title: 'Sea Creatures Fuse to Become One', description: 'Scientists have discovered that sea walnuts, a species of comb jelly, can fuse their bodies with ', image: article3Img },
    { id: 4, title: 'Sierra Space Ghost Spacecraft', description: 'Sierra Spaces Ghost spacecraft, a revolutionary logistics system designed to deliver critical supplies from orbit to ...', image: article4Img },
    { id: 5, title: 'China Has the Most Powerful Laser', description: 'Chinese scientists have achieved a breakthrough in laser technology with the development of the worlds most powerful..', image: article5Img },
    { id: 6, title: 'Top Programming Trends', description: 'What’s trending in programming...', image: article6Img },
    { id: 7, title: 'Future of Quantum Physics', description: 'Quantum physics insights...', image: article7Img },
    { id: 8, title: 'Full-Width AI in Medicine', description: 'A deep dive into AI in healthcare...', image: article8Img },
    { id: 9, title: 'Quantum Computer Doom Challenge', description: 'According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical ...', image: article9Img },
    { id: 10, title: 'The Future of Mobile Tech', description: 'What’s next in mobile...', image: article10Img },
    { id: 11, title: 'AI in Healthcare Revolution', description: 'How AI transforms medicine...', image: article11Img },
    { id: 12, title: 'Gadget Innovations', description: 'Latest in tech gadgets...', image: article12Img },
    { id: 13, title: 'Mobile Tech Breakthroughs', description: 'Exploring the future of mobile...', image: article13Img },
  ];

  return (
    <>
    <div  className='head-section'>
    <h1 className='heading'>Discover</h1>
    <div>
    <hr id='horizontal-line'/>
    </div>
      <nav className='discover-links-container'>
        <li className='nav-links'>Top</li>
        <li className='nav-links'>Tech & Science</li>
        <li className='nav-links'>Finance</li>
        <li className='nav-links'>Arts & Agriculture</li>
        <li className='nav-links'>Sports</li>
        <li className='nav-links'>Entertainment</li>
      </nav>
    </div>
    <div className="discover-container">
      {articles.map((article, index) => (
        <div key={article.id}>
          {index % 4 === 0 ? (
            
            <div className="full-width-article">
              <Link to={`/article/${article.id}`} className="article-full">
                <img src={article.image} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </Link>
            </div>
          ) : (
            
            index % 4 === 1 && (
              <div className="grid-articles">
                {articles.slice(index, index + 3).map((item) => (
                  <Link key={item.id} to={`/article/${item.id}`} className="article-card">
                    <img src={item.image} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </Link>
                ))}
              </div>
            )
          )}
        </div>
      ))}
    </div>
    </>
  );
  
};


export default Discover;
