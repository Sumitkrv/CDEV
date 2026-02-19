import PageHero from '../components/common/PageHero';

const PrivacyPolicy = () => {
  return (
    <div>
      <PageHero 
        title="Privacy Policy" 
        subtitle="How we collect, use, and protect your information"
      />
      
      <section className="py-16 bg-gradient-to-b from-dark-main via-dark-soft to-dark-main">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <p className="text-gray-400 mb-8">
              Last updated: February 12, 2026
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-100">1. Introduction</h2>
                <p className="text-gray-300">
                  Welcome to CDEV. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit 
                  our website or use our services and tell you about your privacy rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-100">2. Information We Collect</h2>
                <p className="text-gray-300 mb-4">We may collect, use, store and transfer different kinds of personal data about you:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Identity Data: name, username, date of birth</li>
                  <li>Contact Data: email address, telephone numbers, billing address</li>
                  <li>Technical Data: IP address, browser type, time zone setting</li>
                  <li>Usage Data: information about how you use our website and services</li>
                  <li>Marketing Data: your preferences in receiving marketing from us</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-100">3. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use your personal data for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>To process your orders and manage your account</li>
                  <li>To provide customer support and respond to your inquiries</li>
                  <li>To send you important updates about our products and services</li>
                  <li>To improve our website and services based on your feedback</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-100">4. Data Security</h2>
                <p className="text-gray-300">
                  We have implemented appropriate security measures to prevent your personal data from being 
                  accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal 
                  data to those employees and partners who have a business need to know.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-100">5. Data Retention</h2>
                <p className="text-gray-300">
                  We will only retain your personal data for as long as necessary to fulfill the purposes we 
                  collected it for, including for the purposes of satisfying any legal, accounting, or reporting 
                  requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-100">6. Your Legal Rights</h2>
                <p className="text-gray-300 mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-100">7. Cookies</h2>
                <p className="text-gray-300">
                  Our website uses cookies to distinguish you from other users. This helps us provide you with 
                  a good experience and allows us to improve our site. You can set your browser to refuse cookies, 
                  but this may limit your use of the website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-100">8. Third-Party Links</h2>
                <p className="text-gray-300">
                  Our website may include links to third-party websites. Clicking on those links may allow third 
                  parties to collect or share data about you. We do not control these third-party websites and 
                  are not responsible for their privacy statements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-100">9. Changes to Privacy Policy</h2>
                <p className="text-gray-300">
                  We may update this privacy policy from time to time. We will notify you of any changes by 
                  posting the new privacy policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-100">10. Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this privacy policy or our privacy practices, please contact us:
                </p>
                <div className="mt-4 bg-[#1a2332] p-6 rounded-lg">
                  <p className="text-gray-300"><strong className="text-blue-400">Email:</strong> privacy@blueev.com</p>
                  <p className="text-gray-300"><strong className="text-blue-400">Phone:</strong> +91 1800-123-4567</p>
                  <p className="text-gray-300"><strong className="text-blue-400">Address:</strong> 123 Green Street, Mumbai, Maharashtra 400001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
