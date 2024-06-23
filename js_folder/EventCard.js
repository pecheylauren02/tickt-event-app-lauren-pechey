import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img className="w-full h-56 object-cover object-center" src={event.imageUrl} alt={event.title} />
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-xl mb-2">{event.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{event.date}</p>
        <p className="text-gray-700 text-base">{event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;
