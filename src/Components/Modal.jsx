import React, { useState } from "react";
import "./Modal.css";
import { X, Eye, EyeOff } from "lucide-react"; // icons

const Modal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Cross Button */}
        <button className="close-icon" onClick={onClose}>
          <X size={20} />
        </button>

        <h2 className="modal-heading">Enter Your Password</h2>

        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="password-input"
          />
          <button
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="modal-buttons">
          <button className="btn btn-close" onClick={onClose}>
            Close
          </button>
          <button className="btn btn-accept" onClick={onClose}>
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;