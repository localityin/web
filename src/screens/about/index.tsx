import './index.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function About() {
  useDocumentTitle(
    'About Us | locality.',
    'Learn more about locality, our mission, and how we aim to connect local stores with customers for a convenient and efficient shopping experience.'
  );

  return (
    <div className="screen">
      <div className="container">
        <span className="header-text">About</span>
        <span className="header-body"></span>
      </div>
    </div>
  );
}

export default About;
