import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Floating Label Field ─────────────────────────────────── */
const FloatField = ({ label, id, type = 'text', name, value, onChange, required, min, children }) => {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value !== '';

  return (
    <motion.div
      className="relative"
      animate={{ y: focused ? -2 : 0, scale: focused ? 1.01 : 1 }}
      transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
    >
      {children ? (
        <>
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            required={required}
            className={`
              peer w-full pt-6 pb-3 px-4 bg-white rounded-2xl border text-sm text-gray-900
              appearance-none outline-none transition-all duration-300 cursor-pointer
              ${focused
                ? 'border-[#0D9488] shadow-[0_0_0_3px_rgba(13,148,136,0.12)] bg-white'
                : 'border-gray-200 shadow-sm hover:border-gray-300'}
            `}
          >
            <option value="" disabled />
            {children}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          min={min}
          placeholder=" "
          className={`
            peer w-full pt-6 pb-3 px-4 bg-white rounded-2xl border text-sm text-gray-900
            outline-none transition-all duration-300
            ${focused
              ? 'border-[#0D9488] shadow-[0_0_0_3px_rgba(13,148,136,0.12)] bg-white'
              : 'border-gray-200 shadow-sm hover:border-gray-300'}
          `}
        />
      )}

      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          top: lifted ? '10px' : '50%',
          transform: lifted ? 'translateY(0)' : 'translateY(-50%)',
          fontSize: lifted ? '10px' : '14px',
          fontWeight: lifted ? '700' : '500',
          letterSpacing: lifted ? '0.08em' : '0',
          color: focused ? '#0D9488' : lifted ? '#6B7280' : '#9CA3AF',
          textTransform: lifted ? 'uppercase' : 'none',
        }}
      >
        {label}
      </label>
    </motion.div>
  );
};

/* ─── Main Component ───────────────────────────────────────── */
const ModernTestRide = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    date: '',
    model: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const models = [
    { id: 'city-cruiser',  name: 'City Cruiser',   price: '₹89,999'   },
    { id: 'sport-rider',   name: 'Sport Rider',    price: '₹1,19,999' },
    { id: 'eco-commute',   name: 'Eco Commute',    price: '₹69,999'   },
    { id: 'pro-max',       name: 'Pro Max',        price: '₹1,49,999' },
    { id: 'pro-max-plus',  name: 'Pro Max Plus',   price: '₹1,69,999' },
  ];

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', city: '', date: '', model: '' });
    }, 4000);
  };

  const steps = [
    { title: 'Instant Confirmation', desc: 'Receive booking details via SMS & Email immediately.' },
    { title: 'Home Test Ride',       desc: 'Our expert brings the scooter right to your doorstep.' },
    { title: 'Expert Guidance',      desc: 'Full walkthrough of all smart features and ride modes.' },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDFA] via-white to-[#F0FDFA]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D9488]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#14B8A6]/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold rounded-full mb-5 uppercase tracking-widest">
            Free Test Ride
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight text-[#1A3A36] tracking-tight">
            Feel It Before
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">
              You Own It
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Book a home test ride in 60 seconds. No showroom queues, no pressure.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(13,148,136,0.12)] border border-[#0D9488]/10"
          >
            {/* ── LEFT: Form ── */}
            <div className="w-full md:w-[55%] bg-white p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatField label="Full Name" id="name" name="name" value={formData.name} onChange={handleChange} required />
                      <FloatField label="Phone Number" id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatField label="City" id="city" name="city" value={formData.city} onChange={handleChange} required />
                      <FloatField label="" id="date" type="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
                    </div>
                    <FloatField label="Select Scooter Model" id="model" name="model" value={formData.model} onChange={handleChange} required>
                      {models.map(m => (
                        <option key={m.id} value={m.id}>{m.name} — {m.price}</option>
                      ))}
                    </FloatField>

                    <div className="flex flex-wrap items-center gap-5 py-1">
                      {['No Obligation', 'Free of Cost', 'Home Delivery'].map(t => (
                        <span key={t} className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                          <span className="w-4 h-4 rounded-full bg-[#0D9488]/10 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-[#0D9488]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                          </span>
                          {t}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#14B8A6] text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-[#0D9488]/25 hover:shadow-[#0D9488]/40 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                          Booking your ride…
                        </>
                      ) : (
                        <>
                          Confirm Test Ride
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 15 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0D9488] to-[#14B8A6] flex items-center justify-center shadow-xl shadow-[#0D9488]/30"
                    >
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-black text-[#1A3A36] mb-2">You're all set! 🎉</h3>
                      <p className="text-gray-500 text-sm">We'll reach out shortly to confirm your test ride slot.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── RIGHT: Info panel ── */}
            <div className="w-full md:w-[45%] bg-[#1A3A36] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 bg-[#0D9488]/25 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#14B8A6]/15 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <p className="text-[#14B8A6] text-xs font-bold uppercase tracking-[0.2em] mb-3">What happens next</p>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-10 leading-snug">
                  Your ride,<br />delivered home.
                </h4>
                <div className="flex flex-col gap-8">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#0D9488] flex items-center justify-center flex-shrink-0 text-white font-black text-sm shadow-lg shadow-[#0D9488]/40">
                        {i + 1}
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-base mb-0.5">{step.title}</h5>
                        <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernTestRide;
