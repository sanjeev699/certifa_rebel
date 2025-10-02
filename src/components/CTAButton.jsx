import React from "react";

const CTAButton = ({ variant = "enrol", children, onClick, link }) => {
  const baseClasses =
    "font-medium px-6 py-3 rounded-full transition duration-300 text-center";

  const styles = {
    yellow:
      "bg-brandYellow text-brandBlue font-semibold shadow-md hover:bg-yellow-500",
    white:
      "bg-white text-brandBlue font-semibold shadow-md hover:bg-yellow-500",
    blue:
      "bg-brandBlue text-white font-semibold shadow-md hover:bg-blue-500", // For yellow backgrounds
  };

  return link ? (
    <a href={link} className={`${baseClasses} ${styles[variant]}`}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={`${baseClasses} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default CTAButton;
