import { useEffect, useState } from "react";
import ContactList from "../ContactList/ConctactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ConctactForm/ContactForm";
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const phoneContacts = window.localStorage.getItem("contacts");
    if (phoneContacts !== null) {
      return JSON.parse(phoneContacts);
    } else {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "4591256" },
        { id: "id-2", name: "Hermione Kline", number: "4438912" },
        { id: "id-3", name: "Eden Clements", number: "6451779" },
        { id: "id-4", name: "Annie Copeland", number: "2279126" },
      ];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.wrapper}>
        <div className={css.inner}>
          <ContactForm onAdd={addContact} />
          <SearchBox value={search} onFilter={setSearch} />
        </div>

        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </div>
    </div>
  );
}
