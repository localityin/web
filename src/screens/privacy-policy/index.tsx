import './index.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

function PrivacyPolicy() {
  useDocumentTitle(
    'Privacy Policy | locality.',
    'Read our Privacy Policy to understand how locality collects, uses, and protects your personal information. Your privacy is important to us.'
  );

  return (
    <div className="screen">
      <div className="container">
        <h2 className="header-text">Privacy Policy</h2>

        <div className="section">
          <span className="section-title">1. Introduction</span>
          <p className="section-text">
            We at locality ("we", "us", "our") are committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our services through our
            app and website.
          </p>
        </div>
        <div className="section">
          <span className="section-title">2. Information We Collect</span>
          <p className="section-text">
            We collect various types of information in connection with the
            services we provide, including:
          </p>
          <p className="section-text">
            <strong>Personal Information:</strong> This includes your name,
            phone number, email address, and payment information, which you
            provide when you create an account, place an order, or contact us.
          </p>
          <p className="section-text">
            <strong>Order Information:</strong> Details of products you order,
            including product IDs, quantities, store IDs, delivery addresses
            (latitude and longitude), and order statuses.
          </p>
          <p className="section-text">
            <strong>WhatsApp Conversations:</strong> Messages sent to and from
            our business account, including metadata such as timestamps and
            message types.
          </p>
          <p className="section-text">
            <strong>Technical Data:</strong> This includes your IP address,
            browser type, operating system, and other technical information
            collected when you access our services.
          </p>
        </div>
        <div className="section">
          <span className="section-title">3. How We Use Your Information</span>
          <p className="section-text">We use the information we collect to:</p>
          <p className="section-text">
            <ul>
              <li>Provide and maintain our services.</li>
              <li>
                Process and manage orders, including delivery coordination.
              </li>
              <li>
                Communicate with you regarding your orders and our services.
              </li>
              <li>Improve our services and develop new features.</li>
              <li>
                Monitor and analyze usage and trends to enhance your experience.
              </li>
              <li>
                Ensure the security of our services and prevent fraudulent
                activities.
              </li>
              <li>Comply with legal obligations and resolve disputes.</li>
            </ul>
          </p>
        </div>
        <div className="section">
          <span className="section-title">4. Sharing Your Information</span>
          <p className="section-text">We may share your information with:</p>
          <p className="section-text">
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who
                perform services on our behalf, such as payment processing, data
                storage (e.g., MongoDB, Redis), and messaging services (e.g.,
                WhatsApp).
              </li>
              <li>
                <strong>Business Transfers:</strong> If we merge with or are
                acquired by another company, your information may be transferred
                as part of the transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, to
                protect our rights, or to comply with legal processes.
              </li>
            </ul>
          </p>
        </div>
        <div className="section">
          <span className="section-title">5. Data Security</span>
          <p className="section-text">
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction. This includes using encryption, secure
            servers, and access controls.
          </p>
        </div>
        <div className="section">
          <span className="section-title">6. Your Rights</span>
          <p className="section-text">You have the right to:</p>
          <p className="section-text">
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request corrections to inaccurate or incomplete data.</li>
              <li>Request the deletion of your personal data.</li>
              <li>Object to or restrict the processing of your data.</li>
              <li>
                Withdraw consent at any time, where processing is based on
                consent.
              </li>
            </ul>
          </p>
          <p className="section-text">
            To exercise these rights, please contact us at
            privacy@yourlocality.shop.
          </p>
        </div>
        <div className="section">
          <span className="section-title">7. Data Retention</span>
          <p className="section-text">
            We retain your personal data only for as long as necessary to
            fulfill the purposes for which it was collected, comply with legal
            obligations, resolve disputes, and enforce our agreements.
            Conversations in Redis are stored temporarily for faster processing
            and are transferred to MongoDB for long-term storage.
          </p>
        </div>
        <div className="section">
          <span className="section-title">8. International Transfers</span>
          <p className="section-text">
            Your information may be transferred to, and processed in, countries
            other than the country in which you reside. These countries may have
            data protection laws that are different from those of your country.
          </p>
        </div>
        <div className="section">
          <span className="section-title">
            9. Cookies and Tracking Technologies
          </span>
          <p className="section-text">
            We use cookies and similar tracking technologies to track activity
            on our services and hold certain information. Cookies are files with
            a small amount of data which may include an anonymous unique
            identifier. You can instruct your browser to refuse all cookies or
            to indicate when a cookie is being sent. However, if you do not
            accept cookies, you may not be able to use some portions of our
            services.
          </p>
        </div>
        <div className="section">
          <span className="section-title">10. Children's Privacy</span>
          <p className="section-text">
            Our services are not intended for children under the age of 13. We
            do not knowingly collect personal information from children under
            13. If we become aware that we have collected personal information
            from a child under 13, we will take steps to delete such
            information.
          </p>
        </div>
        <div className="section">
          <span className="section-title">11. Changes to This Policy</span>
          <p className="section-text">
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy on our website. You are
            advised to review this policy periodically for any changes.
          </p>
        </div>
        <div className="section">
          <span className="section-title">12. Contact Us</span>
          <p className="section-text">
            If you have any questions about this privacy policy or our data
            practices, please contact us at privacy@yourlocality.shop.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
