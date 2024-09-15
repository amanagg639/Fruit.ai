import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h2>Welcome to Frut.ai</h2>
      <button onClick={() => navigate('/chat')}>Chat</button>
      <button onClick={() => navigate('/translator')}>Translator</button>
      <button onClick={() => navigate('/faq')}>FAQ</button>
      <button onClick={() => navigate('/about')}>About</button>
    </div>
  );
}

export default HomePage;
