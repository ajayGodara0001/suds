// ColorGrid.js
import React from "react";
import { useNavigate } from "react-router-dom";

// Reusable Grid Item Component
const GridItem = ({ id, image, title, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`, { state: { image, title, description } });
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Main Component
const ColorGrid = () => {
  const gridItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 1",
      description: "This is the description for item 1.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 2",
      description: "This is the description for item 2.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 3",
      description: "This is the description for item 3.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 4",
      description: "This is the description for item 4.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 5",
      description: "This is the description for item 5.",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 6",
      description: "This is the description for item 6.",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 7",
      description: "This is the description for item 7.",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 8",
      description: "This is the description for item 8.",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 9",
      description: "This is the description for item 9.",
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 10",
      description: "This is the description for item 10.",
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 11",
      description: "This is the description for item 11.",
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Item 12",
      description: "This is the description for item 12.",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Full-width div with h-30vh above the grid */}
      <div className="w-full h-[30vh] bg-gray-200 flex items-center justify-center">
        <p className="text-xl font-bold">Full-width Div (30vh)</p>
      </div>

      {/* Grid Container */}
      <div className="flex-grow p-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gridItems.map((item) => (
            <GridItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorGrid;