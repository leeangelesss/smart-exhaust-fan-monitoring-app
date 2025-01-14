import React from 'react';

const LastUpdateDate = ({ lastUpdate }) => {
  // Convert lastUpdate to a human-readable format
  const formattedLastUpdate = lastUpdate
    ? new Date(lastUpdate).toLocaleString()
    : new Date().toLocaleString(); // Show current timestamp if no lastUpdate

  return (
    <div className="my-5 text-center text-sm text-white-500">
      {`Last updated: ${formattedLastUpdate}`}
    </div>
  );
};

export default LastUpdateDate;
