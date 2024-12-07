import React, { useState } from "react";

const DragAndDropExample = () => {
  const [items, setItems] = useState(["Élément 1", "Élément 2", "Élément 3", "Élément 4"]);

  // État pour suivre l'élément en cours de drag
  const [draggedIndex, setDraggedIndex] = useState(null);

  // Quand le drag commence
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  // Empêche le comportement par défaut du drop (obligatoire pour que le drop fonctionne)
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Quand l'élément est lâché
  const handleDrop = (index) => {
    if (draggedIndex === null) return;

    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1); // Retirer l'élément en cours de drag
    updatedItems.splice(index, 0, draggedItem); // L'insérer à la nouvelle position

    setItems(updatedItems);
    setDraggedIndex(null); // Réinitialiser l'état
  };

  return (
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Drag and Drop
        </h2>
        <ul className="bg-gray-50 shadow-lg rounded-lg p-4 space-y-3">
          {items.map((item, index) => (
              <li
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(index)}
                  className="bg-blue-100 hover:bg-blue-200 border border-blue-300 rounded-md px-4 py-2 text-gray-700 font-medium cursor-grab shadow-sm transition-all duration-200 ease-in-out"
              >
                {item}
              </li>
          ))}
        </ul>
      </div>

  );
};

export default DragAndDropExample;
