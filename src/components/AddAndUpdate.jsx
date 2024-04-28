import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup"; //for form validation
const ContactValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required"),
});
const AddAndUpdate = ({ isOpen, Close, isUpdate, currentContact }) => {
  const addContact = async (contacts) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contacts);
      Close();
      toast.success("Contact Added successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const UpdateContact = async (contacts, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contacts);
      Close();
      toast.success("Contact Updated successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} Close={Close}>
        <Formik
          validationSchema={ContactValidation}
          initialValues={
            isUpdate
              ? {
                  name: currentContact.name,
                  email: currentContact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log("values :>> ", values);
            isUpdate
              ? UpdateContact(values, currentContact.id)
              : addContact(values);
          }}
        >
          <Form>
            <div className="flex flex-col mt-5 m-3">
              <label className="text-xl" htmlFor="name">
                Name:
              </label>
              <Field
                name="name"
                className="border-2 border-balck  outline-none pl-1 h-[40px]"
              />
              <div className="text-sm text-red-500">
                <ErrorMessage name="name" />
              </div>
              <label className="text-xl " htmlFor="email">
                email:
              </label>
              <Field
                name="email"
                className="border-2 border-balck  outline-none pl-1 h-[40px]"
              />
              <div className="text-sm text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button className="m-3 bg-darkYellow p-2 rounded-md text-gray ">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
