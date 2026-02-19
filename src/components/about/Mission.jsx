import { Zap, Microscope, Leaf, Users } from 'lucide-react';

const Mission = () => {
  const missions = [
    {
      icon: Zap,
      title: 'Accelerate EV Adoption',
      description: 'Make electric scooters accessible and affordable for every Indian household',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Microscope,
      title: 'Drive Innovation',
      description: 'Continuously develop cutting-edge technology for better performance and user experience',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Leaf,
      title: 'Promote Sustainability',
      description: 'Reduce carbon footprint and contribute to cleaner air in cities',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Create a strong network of EV enthusiasts and support sustainable mobility',
      gradient: 'from-[#0D9488] to-[#14B8A6]'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F0FDFA]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#0D9488]/10 text-[#0D9488] text-sm font-semibold rounded-full mb-6">
            OUR MISSION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A3A36]">
            Transforming Urban Mobility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are on a mission to transform urban transportation through innovative electric mobility solutions that benefit people and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {missions.map((mission, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${mission.gradient} opacity-10 rounded-bl-full`} />
              <div className="relative flex items-start gap-5">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${mission.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <mission.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-[#1A3A36]">{mission.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{mission.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
