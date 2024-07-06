import useDocumentTitle from '../../hooks/useDocumentTitle';
import MobileScreenshot from '../../assets/images/home/mobile-screenshot.png';

import './index.css';

function Home() {
  useDocumentTitle(
    'Home | locality.',
    'Welcome to locality, the one-stop solution for ordering groceries and household items from your local stores. Discover a seamless shopping experience today'
  );

  return (
    <div className="screen">
      <div className="container">
        <main className="main">
          <div className="main-text">
            <h1>Kirana stores at your fingertips</h1>
            <p>
              We at Locality are on a mission to empower 1.5 crore kirana stores
              by providing them with a way to go digital and keep the
              traditional way of grocery shopping alive.
            </p>
            <div className="main-buttons">
              <button className="start-ordering">Start Ordering</button>
              <button className="learn-more">Learn more</button>
            </div>
          </div>
          <div className="main-image">
            <img src={MobileScreenshot} alt="Locality on Whatsapp" />
          </div>
        </main>

        <section className="why-locality">
          <h2>Why Locality?</h2>
          <div className="reasons">
            <div className="reason">
              <h3>For Kirana Stores</h3>
              <p>
                As the world moves towards kirana stores, we’re bringing a way
                for the traditional kirana stores to go online that could help
                them to:
              </p>
              <ul>
                <li>Increase their customer base</li>
                <li>Not get disrupted</li>
                <li>Stick to the traditional retail business</li>
              </ul>
            </div>
            <div className="reason-divider"></div>
            <div className="reason">
              <h3>For Customers</h3>
              <p>
                Ordering groceries has never been this easier and better. Our
                unique business model helps users get groceries:
              </p>
              <ul>
                <li>From their trusted kirana stores</li>
                <li>
                  Through a simple text, no complex app and steps to go through
                </li>
                <li>No extra ‘delivery’ or ‘maintenance’ charges</li>
              </ul>
            </div>
          </div>
          <button className="start-ordering-now">Start Ordering now</button>
        </section>
      </div>
    </div>
  );
}

export default Home;
