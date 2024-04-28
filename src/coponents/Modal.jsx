import React from "react";

const Modal = ({ isOpen, Close , children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-box w-3/4 lg:w-1/3 h-auto flex justify-start space-y-3 items-center flex-col  text-gray bg-white min-h-[200px] min-w-[200px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4">
          <div
            onClick={() => Close()}
            className="close cursor-pointer mt-1 absolute right-8"
          >
            <i className="fi fi-rr-cross text-black "></i>
          </div>
          <div className="close-contant w-full">
          {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
