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
          <p className="hero-subtitle">August 21, 2026 | Virginia Beach</p>
          <p className="hero-tagline">Prelims 9-11 AM • Finals 5-6 PM</p>
          <p className="hero-description">Pure speed. No pacing. Only the fastest survive.</p>
          
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
              <p>W 25 Fly • M 25 Fly</p>
              <p>W 25 Back • M 25 Back</p>
              <p>W 25 Breast • M 25 Breast</p>
              <p>W 25 Free • M 25 Free</p>
            </div>
            <div className="format-card">
              <h3>PRELIMS</h3>
              <p className="highlight">9-11 AM</p>
              <p>All age groups compete</p>
              <p className="subtext">20s • 30s • 40s • 50s • 60s • 70s • 80s</p>
            </div>
            <div className="format-card">
              <h3>FINALS</h3>
              <p className="highlight">5-6 PM</p>
              <p>Top 8 fastest times only</p>
              <p className="subtext">Age doesn't matter. Only speed.</p>
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
            <p className="stakes-highlight">The fastest 8 swimmers in each event compete for the title.</p>
            <p>Everyone else goes home wondering "what if?"</p>
            <p className="stakes-question">Are you fast enough?</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2>AUGUST 21, 2026</h2>
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
