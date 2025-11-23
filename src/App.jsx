import React, { useState } from "react";

import "./App.css";
import Modal from "./Components/Modal";
function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <button className="open-btn" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;