import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('joining...');
    
    // TODO: Wire up Beehiiv API
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">WORLD'S FASTEST SWIMMER</h1>
          <p className="hero-subtitle">August 22, 2026 | Virginia Beach</p>
          <p className="hero-tagline">Prelims 9-11 AM • Finals 5-6 PM</p>
          <p className="hero-description">Only the fastest survive.</p>
          
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="email-input"
            />
            <button type="submit" className="cta-button">
              {status === 'joining...' ? 'JOINING...' : 'GET ON THE LIST'}
            </button>
          </form>
          
          {status === 'success' && (
            <p className="success-message">✓ You're on the list. Get ready.</p>
          )}
        </div>
      </section>

      {/* The Format Section */}
      <section className="format">
        <div className="container">
          <h2>THE FORMAT</h2>
          <div className="format-grid">
            <div className="format-card">
              <h3>EVENT SCHEDULE</h3>
              <p className="highlight">Women's 25m Freestyle</p>
              <p className="highlight">Men's 25m Freestyle</p>
              <p className="subtext">Two events. One champion each.</p>
            </div>
            <div className="format-card">
              <h3>PRELIMS</h3>
              <p className="highlight">9-11 AM</p>
              <p>All age groups compete</p>
              <p className="subtext">Swim your fastest. Qualify for your age group final.</p>
            </div>
            <div className="format-card">
              <h3>FINALS</h3>
              <p className="highlight">5-6 PM</p>
              <p>Top 8 per age group (M & W)</p>
              <p className="subtext">20s • 30s • 40s • 50s • 60s • 70s • 80s</p>
              <p className="subtext" style="margin-top: 8px">Oldest to youngest. Every age group gets their moment.</p>
            </div>
            <div className="format-card">
              <h3>THE PRIZE</h3>
              <p>Glory. Bragging rights. History.</p>
              <p className="subtext">Details coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Venue Section */}
      <section className="venue">
        <div className="container">
          <h2>THE VENUE</h2>
          <div className="venue-grid">
            <div className="venue-card">
              <img 
                src={`${import.meta.env.BASE_URL}aquaplex.jpg`}
                alt="Hampton Aquaplex"
                className="venue-image"
              />
              <h3>HAMPTON AQUAPLEX</h3>
              <p>World-class 50m competition pool</p>
              <p className="highlight">Arena seating for 800 spectators</p>
              <p className="subtext">Pack the house. Make noise. Watch history.</p>
            </div>
            <div className="venue-card">
              <img 
                src={`${import.meta.env.BASE_URL}beach.jpg`}
                alt="Virginia Beach Oceanfront"
                className="venue-image"
              />
              <h3>VIRGINIA BEACH OCEANFRONT</h3>
              <p>Race in the morning. Party on the beach.</p>
              <p className="highlight">During ECSC - thousands of masters swimmers in town</p>
              <p className="subtext">Stay an extra day. Find out how fast you really are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Stakes Section */}
      <section className="stakes">
        <div className="container">
          <h2>THE STAKES</h2>
          <div className="stakes-content">
            <p className="stakes-highlight">Top 8 in your age group. That's the bar.</p>
            <p>Every decade gets a champion. 20s through 80s.</p>
            <p>Finals run oldest to youngest—because legends go first.</p>
            <p className="stakes-question">Can you make top 8 in your age group?</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2>AUGUST 22, 2026</h2>
          <p>Registration opens soon. Get on the list first.</p>
          
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="email-input"
            />
            <button type="submit" className="cta-button">
              {status === 'joining...' ? 'JOINING...' : 'RESERVE YOUR SPOT'}
            </button>
          </form>
          
          {status === 'success' && (
            <p className="success-message">✓ You're in. We'll be in touch.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Presented by <a href="https://swimnerd.com" target="_blank" rel="noopener noreferrer">Swimnerd</a></p>
      </footer>
    </div>
  );
}

export default App;
