const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-card-bg p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-muted mb-6">{description}</p>
      <button className="text-primary font-semibold hover:underline">
        Learn More →
      </button>
    </div>
  );
};

export default ServiceCard;
