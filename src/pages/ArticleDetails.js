import React from 'react';
import { useParams } from 'react-router-dom';
import ChatBar from '../components/ChatBar';
import './styles/ArticleDetails.css';
import article13Img from '../assets/article13.png';


const articles = [
  {
    id: 9,
    title: 'Quantum Computer Doom Challenge',
    image: article13Img 
  },
  { 
    id: 2, 
    title: 'Article 2', 
    content: 'Content for Article 2 goes here...' 
  },
  { id: 3, title: 'Article 3', content: 'Content for Article 3 goes here...' },
  { id: 4, title: 'Article 4', content: 'Content for Article 4 goes here...' },
  { id: 5, title: 'Article 5', content: 'Content for Article 5 goes here...' },
  { id: 6, title: 'Article 6', content: 'Content for Article 6 goes here...' },
  { id: 7, title: 'Article 7', content: 'Content for Article 7 goes here...' },
  { id: 8, title: 'Article 8', content: 'Content for Article 8 goes here...' },
  { id: 1, title: 'Article 9', content: 'Content for Article 9 goes here...' },
  { id: 10, title: 'Article 10', content: 'Content for Article 10 goes here...' },
  { id: 11, title: 'Article 11', content: 'Content for Article 11 goes here...' },
  { id: 12, title: 'Article 12', content: 'Content for Article 12 goes here...' },
  { id: 13, title: 'Article 13', content: 'Content for Article 13 goes here...' },
];

const ArticleDetails = () => {
  const { id } = useParams();
  const articleId = parseInt(id, 10); 
  const articleDetails = articles.find(article => article.id === articleId); 

  if (articleId !== 9) {
    return (
      <div className="article-details-container">
        <h1>Article not clickable or available</h1>
      </div>
    );
  }


  return (
    <div className="article-details-container">
      <img className='img' src={articleDetails.image} alt="hero" />
      <h1>{articleDetails.title}</h1>
      <div className='container'>
      <p>According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement for 72,376 qubits 
      and 80 million quantum gates, far exceeding the capabilities of today's most advanced 
      quantum computers.</p>
      <h2>Quandoom Technical Challenges</h2>
      <div className='image-container'>
       <p>Quandoom, the quantum computer port of DOOM, presents significant technical challenges that 
      push the boundaries of current quantum computing capabilities. The project requires a 
      staggering 72,376 qubits and 80 million quantum gates to run, far exceeding the capabilities
       of even the most advanced quantum computers available today12. For comparison, the current 
       record holder for the most powerful quantum computer, developed by Atom Computing, boasts 
       only 1,225 qubits3. This massive disparity highlights the ambitious nature of Quandoom and
        underscores the substantial advancements needed 
      in quantum computing hardware before such complex applications can be natively executed.</p>
      <img className='image-container' src= 'https://pplx-res.cloudinary.com/image/fetch/s--vG-D6A-X--/t_thumbnail/https://quantumzeitgeist.com/wp-content/uploads/atom-1.jpeg' alt="" />
      </div>
      <h2>Simulation on Classical Computers</h2>
      <p>Despite the lack of suitable quantum hardware, enthusiasts can experience Quandoom
       through a lightweight QASM simulator designed to run on classical computers. This simulator, consisting of just 150 lines of C++ code, allows the game to achieve 10-20 frames per second on a standard laptop12. To play Quandoom, users can download the files from GitHub and drag the QASM file onto the simulator executable. However, the simulation requires a substantial 5-6 GB of RAM to load, reflecting the complexity of the quantum circuit being emulated32. This classical simulation approach provides a glimpse into the potential of quantum gaming while highlighting the significant computational 
      demands of translating quantum algorithms to traditional hardware.</p>
      <h2>Unique Gameplay Features</h2>
      <p>Quandoom offers a distinctive gaming experience with its wireframe graphics, 
      reminiscent of early vector graphics shooters from the 1980s1. This "X-ray mode"
       visualization provides a unique aesthetic while simplifying the rendering process 
       for quantum computation. The game features several departures from the original DOOM,
        including the absence of color, music, and sound effects2. Enemies are confined to 
        single rooms, and the imp's signature fireball attack has been transformed into a hitscan
         weapon2. These modifications were necessary to adapt the game for quantum computing 
         constraints and to maintain reversibility in quantum operations3.
     </p>
     <h2>Development Insights and Future</h2>
     <p>Luke Mortimer, the creator of Quandoom, spent approximately a year developing this 
     ambitious project before moving on1. The development process involved writing about 8,000 
     lines of C++ code to create a small 3D engine and implement game logic using quantum 
     registers2. Mortimer's work includes innovative features such as an ancilla system, a
      garbage system, and a quantum subroutine system2. While only the first level is currently
       playable, the project's GitHub repository hints at the possibility of expanding the game 
       and making the source code available if there's sufficient interest from the community23.
        This groundbreaking effort not only showcases the potential for gaming on quantum 
        architectures
      but also serves as a unique benchmark for the progress of quantum computing technology.</p>
      <h3>Related</h3>
      <p>What advancements are needed for quantum computers to run Quandoom smoothly    +</p>
      <p>How does Quandoom's performance on a simulator compare to running it on 
      actual quantum hardware m                                                         +</p>
      <p>What are the potential benefits of using quantum computing for gaming          +</p>
      <p>How does Quandoom's development impact the field of quantum computing research +</p>
      <p>What other projects is Luke Mortimer working on                                +</p>
      <h2>Keep Reading</h2>
      <div className=' main-reading-container'>
        <div className='reading-container'>
          <img className='reading-img' src="https://pplx-res.cloudinary.com/image/upload/v1714594454/article_section_media_items/iq58vsultreyvhjechnr.jpg" alt="" />
           <p>Quantum Machine Learning (QML) represents a groundbreaking fusion of...</p>
        </div>
        <div className='reading-container'>
        <img className='reading-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPvgwz1kirhh6JJyurB6DX9mPg6jIy_1xUTema-kS-MDQ8YbKLHa1LYY4E" alt="" />
           <p>Scientists have made a significant breakthrough by simulating a ...</p>
        </div>
        <div className='reading-container'>
        <img className='reading-img' src="https://images.unsplash.com/photo-1638787377553-0547687f3a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjAwMDV8MHwxfHNlYXJjaHw3fHxRdWFudHVtJTIwQ29tcHV0aW5nJTI3cyUyMENoYWxsZW5nZXMlMjAlMjYlMjBQb3RlbnRpYWx8ZW58MXx8fHwxNzE4NjY5MjU3fDA&ixlib=rb-4.0.3&q=80&w=400" alt="" />
           <p>uantum computing promises to revolutionize fields like cryptography...</p>
        </div>
        <div className='reading-container'>
        <img className='reading-img' src="https://pplx-res.cloudinary.com/image/fetch/s--du_34lyH--/t_thumbnail/https://cloudblogs.microsoft.com/wp-content/uploads/sites/7/2018/08/Developing-a-topological-qubit-featured-image.jpg" alt="" />
           <p>Microsoft is at the forefront of quantum computing innovation, developin...</p>
        </div>
      </div>
       
      <ChatBar />
    </div>
    </div>
  );
};

export default ArticleDetails;
