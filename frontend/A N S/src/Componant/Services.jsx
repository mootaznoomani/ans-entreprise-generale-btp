import React from 'react';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Service 1',
      description: 'Description for Service 1',
      image: 'path_to_image_1',
    },
    {
      id: 2,
      title: 'Service 2',
      description: 'Description for Service 2',
      image: 'path_to_image_2',
    },
    // Add more services as needed
  ];

  return (
    <div className="bg-[#BAAE98] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-[#BAAE98] hover:bg-[#3b3127] rounded-lg p-4 transition-all duration-300"
            >
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
