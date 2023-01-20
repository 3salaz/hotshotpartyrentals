import React from "react";

function Modal({ open, children, onClose }) {
  if (!open) return null;
  return (
    <div className="w-full rounded-lg backdrop-blur-md h-screen z-50 fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <div className="flex h-full items-center justify-center">
        <div className="bg-white drop-shadow-md rounded-lg w-340 h-685 md:w-508 lg:w-880 mdh-420 px-8 py-4">
          <button className="bg-orange-500 border-2 text-white border-red-400 p-1 rounded-xl" onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
