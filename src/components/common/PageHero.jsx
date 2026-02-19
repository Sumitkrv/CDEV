const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-primary to-primary-dark"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="absolute inset-0 bg-dark-main opacity-40"></div>
      <div className="relative z-10 text-center text-text-dark-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-text-muted-white">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
