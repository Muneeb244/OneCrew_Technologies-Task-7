import React from 'react';

const GreetingCard = ({ occasion = 'Generic Occasion', recipient = 'Friend' }) => {
  return (
    <div className="bg-blue-200 p-4 rounded-md shadow-md mb-5">
      <p className="text-lg font-bold">{`Happy ${occasion}, ${recipient}!`}</p>
    </div>
  );
};

export default GreetingCard;
