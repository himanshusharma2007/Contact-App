import React, { useState } from "react";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore"; // Import doc function from firestore
import AddAndUpdate from "./AddAndUpdate";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const ContactList = (Contactobj) => {
  const { name, email, id } = Contactobj?.Contactobj || {}; // Destructure Contactobj safely

  const deleteContact = async () => {
    if (!id) {
      console.error("Invalid ID:", id);
      return;
    }

    try {
      await deleteDoc(doc(db, "contacts", id)); // Use doc function to reference the document to delete
      toast.success("Contact deleted successfully")
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
  const [isOpen,setIsOpen]=useState(false);
  const Open=()=>{
    setIsOpen(true)
  }
  const Close=()=>{
    setIsOpen(false)
  }
  return (
    <>
    <div className="lg:w-full w-[320px] bg-yellow rounded-md min-h-[64px] mt-4 text-gray flex justify-between items-center ">
      <div className="left flex justify-center items-center space-x-2">
        <i className="fi fi-rr-user text-2xl m-2 text-orange"></i>
        <div className="detail">
          <div className="name text-lg font-semibold">{name}</div>
          <div className="email text-sm">{email}</div>
        </div>
      </div>
      <div className="right space-x-3 mr-4">
        <button onClick={Open}>
          <i className="fi fi-ss-pencil text-2xl"></i>
        </button>
        <button onClick={deleteContact} className="trash cursor-pointer">
            <i className="fi fi-ss-trash text-purple text-2xl "></i>
        </button>
      </div>
    </div>
    <AddAndUpdate isOpen={isOpen} Close={Close} isUpdate={true} currentContact={Contactobj.Contactobj}/>
    </>
  );
};

export default ContactList;
