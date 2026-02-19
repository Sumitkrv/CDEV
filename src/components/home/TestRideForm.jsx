import { useState } from 'react';

const TestRideForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    city: '',
    date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Test ride booking:', formData);
    alert('Thank you! We will contact you shortly to confirm your test ride.');
    setFormData({ name: '', email: '', phone: '', model: '', city: '', date: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-dark-main via-dark-soft to-dark-main">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-100">
            Book Your Test Ride
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Experience the thrill of electric mobility firsthand
          </p>

          <form onSubmit={handleSubmit} className="bg-[#1a2332] p-8 rounded-lg shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4 items-end">
              <div>
                <label className="block text-gray-300 text-sm mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#0f1621] text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#0f1621] text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#0f1621] text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-gray-500"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Choose Model *</label>
                <select
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#0f1621] text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  <option value="" className="bg-[#0f1621]">Select a model</option>
                  <option value="city" className="bg-[#0f1621]">City Cruiser</option>
                  <option value="sport" className="bg-[#0f1621]">Sport Pro</option>
                  <option value="premium" className="bg-[#0f1621]">Premium Elite</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#0f1621] text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-gray-500"
                  placeholder="Mumbai"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#0f1621] text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2 opacity-0">Submit</label>
                <button
                  type="submit"
                  className="w-full bg-blue-400 text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-blue-500 transition shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TestRideForm;
