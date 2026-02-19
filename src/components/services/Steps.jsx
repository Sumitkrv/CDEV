const Steps = ({ steps }) => {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-text-dark-white rounded-full flex items-center justify-center font-bold">
            {index + 1}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-1">{step.title}</h4>
            <p className="text-muted text-sm">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
