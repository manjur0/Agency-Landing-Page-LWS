import React from "react";

const TrustedItem = ({ children, title, description }) => {
  return (
    <div>
      {children}
      <h3 className="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
      <p className="font-light text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default TrustedItem;
