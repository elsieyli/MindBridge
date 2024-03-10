import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const buttons = [
    {
      text: "Home",
      to: "/",
      imageSrc: "path_to_image2",
      alt: "Image 2",
      className: "button2-class",
    },
    {
      text: "Emotions",
      to: "/Emotion",
      imageSrc: "path_to_image1",
      alt: "Emotions",
      className: "button1-class", // Add your Tailwind CSS classes
    },
    
    // Add more buttons as needed
  ];

  return React.createElement(
    "div",
    null,
    buttons.map((button, index) =>
      React.createElement(
        NavLink,
        {
          key: index,
          className: button.className,
          to: button.to,
          target: "",
          rel: "noreferrer noopener",
        },
        React.createElement("img", {
          src: button.imageSrc,
          alt: button.alt,
          className: "",
        }),
        button.text
      )
    )
  );
};

