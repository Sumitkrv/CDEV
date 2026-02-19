import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const members = [
    {
      name: 'Rahul Mehta',
      position: 'CEO & Founder',
      emoji: '👨‍💼',
      description: 'Visionary leader with 15+ years in automotive industry',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Priya Singh',
      position: 'CTO',
      emoji: '👩‍💻',
      description: 'Expert in electric vehicle technology and innovation',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Amit Kumar',
      position: 'Head of Design',
      emoji: '👨‍🎨',
      description: 'Award-winning designer specializing in sustainable mobility',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'Sneha Patel',
      position: 'Head of Operations',
      emoji: '👩‍💼',
      description: 'Operations expert ensuring smooth customer experience',
      gradient: 'from-[#0D9488] to-[#14B8A6]'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F0FDFA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#0D9488]/10 text-[#0D9488] text-sm font-semibold rounded-full mb-6">
            OUR TEAM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A3A36]">
            Meet the Visionaries
          </h2>
          <p className="text-xl text-gray-600">
            The passionate people driving our electric revolution forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar section with gradient */}
              <div className={`relative h-64 bg-gradient-to-br ${member.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative text-8xl transform group-hover:scale-110 transition-transform duration-300">
                  {member.emoji}
                </div>
              </div>
              
              {/* Info section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[#1A3A36]">{member.name}</h3>
                <p className="text-[#0D9488] font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                
                {/* Social links */}
                <div className="flex gap-2">
                  <a href="#" className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[#0D9488] flex items-center justify-center transition-colors group">
                    <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[#0D9488] flex items-center justify-center transition-colors group">
                    <Twitter className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
