import PageHero from '../components/common/PageHero';

const Terms = () => {
  return (
    <div>
      <PageHero 
        title="Terms & Conditions" 
        subtitle="Please read these terms carefully before using our services"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              Last updated: February 12, 2026
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700">
                  By accessing or using CDEV's website and services, you agree to be bound by these Terms 
                  and Conditions. If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Product Information and Availability</h2>
                <p className="text-gray-700">
                  We strive to provide accurate product descriptions and specifications. However, we do not 
                  warrant that product descriptions or other content is accurate, complete, reliable, current, 
                  or error-free. Product availability is subject to change without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Pricing and Payment</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>All prices are displayed in Indian Rupees (INR)</li>
                  <li>Prices are subject to change without notice</li>
                  <li>We reserve the right to refuse or cancel any order</li>
                  <li>Payment must be made in full before delivery</li>
                  <li>EMI options are subject to bank approval</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Warranty</h2>
                <p className="text-gray-700 mb-4">
                  CDEV provides the following warranty coverage:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Battery and motor warranty as specified for each model</li>
                  <li>Warranty covers manufacturing defects only</li>
                  <li>Regular maintenance is required to maintain warranty validity</li>
                  <li>Warranty is void if the vehicle is modified or misused</li>
                  <li>Extended warranty options are available for purchase</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Returns and Refunds</h2>
                <p className="text-gray-700 mb-4">
                  Due to the nature of electric vehicles:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Returns are accepted within 7 days of delivery if the vehicle has manufacturing defects</li>
                  <li>Vehicle must be in original condition with less than 10 km on the odometer</li>
                  <li>Refund processing takes 7-14 business days</li>
                  <li>Customer is responsible for return shipping costs unless product is defective</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Service and Maintenance</h2>
                <p className="text-gray-700">
                  Regular maintenance is essential for optimal performance. Failure to maintain the vehicle 
                  according to our service schedule may void the warranty. All service must be performed by 
                  authorized CDEV service centers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. User Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You must have a valid driving license to operate the vehicle</li>
                  <li>You must follow all traffic laws and regulations</li>
                  <li>You are responsible for registering the vehicle with authorities</li>
                  <li>You must maintain adequate insurance coverage</li>
                  <li>You must not modify the vehicle without authorization</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700">
                  CDEV shall not be liable for any indirect, incidental, special, or consequential damages 
                  arising out of or in connection with the use of our products or services. Our total liability 
                  shall not exceed the purchase price of the product.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
                <p className="text-gray-700">
                  All content on this website, including text, graphics, logos, and images, is the property of 
                  CDEV and protected by intellectual property laws. Unauthorized use is prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Test Rides</h2>
                <p className="text-gray-700">
                  Test rides are subject to availability and eligibility. Participants must:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Be at least 18 years old</li>
                  <li>Hold a valid driving license</li>
                  <li>Sign a liability waiver</li>
                  <li>Follow all safety instructions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                <p className="text-gray-700">
                  These terms shall be governed by and construed in accordance with the laws of India. 
                  Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately 
                  upon posting to the website. Your continued use of our services constitutes acceptance of the 
                  modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                <p className="text-gray-700">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="mt-4 bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700"><strong>Email:</strong> legal@blueev.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +91 1800-123-4567</p>
                  <p className="text-gray-700"><strong>Address:</strong> 123 Green Street, Mumbai, Maharashtra 400001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
