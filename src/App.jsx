import { useEffect, useState } from "react";
import "./index.css"; // Import Tailwind CSS first
import Navbar from "./components/Navbar";
import "./App.css"; // Then, import your custom CSS file
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../src/config/firebase";
import ContactList from "./components/ContactList";
import Modal from "./components/Modal";
import AddAndUpdate from "./components/AddAndUpdate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";
function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const Open = () => {
    setIsOpen(true);
  };
  const Close = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const getContactsList = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapShort = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshort) => {
          const contactsList = snapshort.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(), 
            };
          });
          setContacts(contactsList);
          return contactsList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContactsList();
  }, []);
  const Filter = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshort) => {
      const contactsList = snapshort.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filterContact = contactsList.filter((contact) => {
        return contact.name.toLowerCase().includes(value.toLowerCase());
      });

      setContacts(filterContact);
      return filterContact;
    });
  };
  return (
    <>
      <div className="flex  flex-col items-center w-full h-screen">
        <Navbar Open={Open} onChange={Filter} />
        <div className="contacts text-white sm:w-full lg:pl-60 lg:pr-60 sm:px-10">
          {contacts.length <= 0 ? (
            <NotFound />
          ) : (
            contacts.map((contactobj) => {
              return (
                <ContactList key={contactobj.id} Contactobj={contactobj} />
              );
            })
          )}
        </div>
      </div>
      <AddAndUpdate
        isOpen={isOpen}
        Close={Close}
        isUpdate={false}
        currentContact={contacts}
      />
      <div className="toastify w-3/5">
        {" "}
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
}

export default App;
