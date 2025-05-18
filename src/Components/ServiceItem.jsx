import React from "react";
import ServicIcon from "./SVG/ServicIcon";

const ServiceItem = ({ title }) => {
  return (
    <li className="flex space-x-3">
      <ServicIcon />
      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
        {title}
      </span>
    </li>
  );
};

export default ServiceItem;
