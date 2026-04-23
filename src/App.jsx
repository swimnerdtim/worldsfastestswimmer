import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('joining...');
    
    try {
      const response = await fetch('https://swimnerd-server-signup.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        console.error('Subscription error:', data.error);
      }
    } catch (error) {
      setStatus('error');
      console.error('Network error:', error);
    }
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src="/swimnerd-logo.png" alt="Swimnerd" className="hero-logo" />
          <h1 className="hero-title">WORLD'S FASTEST SWIMMER</h1>
          <p className="hero-subtitle">August 29, 2026 | Virginia Beach</p>
          <p className="hero-tagline">Prelims 9-11 AM • Finals 4-6 PM</p>
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
          
          {status === 'error' && (
            <p className="error-message">Something went wrong. Try again.</p>
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
              <p className="subtext">Enter up to 3 times per event.</p>
              <p className="subtext">Swim your fastest. Qualify for your age group final.</p>
            </div>
            <div className="format-card">
              <h3>FINALS</h3>
              <p className="highlight">4-6 PM</p>
              <p>Top 8 per age group (M & W)</p>
              <p className="subtext">80s → 70s → 60s → 50s → 40s → 30s → 20s</p>
              <p className="subtext" style={{marginTop: '8px'}}>Age group heats, then the FASTEST HEAT.</p>
              <p className="highlight" style={{marginTop: '8px'}}>The 8 fastest overall close the show.</p>
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
                alt="Virginia Aquaplex"
                className="venue-image"
              />
              <h3>VIRGINIA AQUAPLEX</h3>
              <p>World-class 50m competition pool</p>
            </div>
            <div className="venue-card">
              <img 
                src={`${import.meta.env.BASE_URL}beach.jpg`}
                alt="Virginia Beach Oceanfront"
                className="venue-image"
              />
              <h3>VIRGINIA BEACH OCEANFRONT</h3>
              <p>Race in the morning. Party on the beach at night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Stakes Section */}
      <section className="stakes">
        <div className="container">
          <h2>THE STAKES</h2>
          <div className="stakes-content">
            <p className="stakes-highlight">Top 8 in your age group move on to the big show at night.</p>
            <p>Every decade gets a champion. 80s down to 20s.</p>
            <p className="stakes-highlight" style={{marginTop: '16px'}}>But the 8 FASTEST swimmers overall?</p>
            <p>They get the final heat. The spotlight. The title.</p>
            <p className="stakes-question">World's Fastest Swimmer and $25,000!</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2>AUGUST 29, 2026</h2>
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
        <img src="/swimnerd-logo.png" alt="Swimnerd" className="footer-logo" />
        <p>Presented by <a href="https://swimnerd.com" target="_blank" rel="noopener noreferrer">Swimnerd</a></p>
      </footer>
    </div>
  );
}

export default App;
