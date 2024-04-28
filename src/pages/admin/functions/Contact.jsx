import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
import AdminLayout from "../../../components/layout/AdminLayout";

function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/contact/get-contact`
      );
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/contact/delete-contact/${id}`
      );
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div>
      <AdminLayout>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact._id}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.message}</td>
                <td>
                  <Button
                    variant="outline-success"
                    onClick={() => handleDeleteContact(contact._id)}
                  >
                    <AiOutlineCheckCircle />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </AdminLayout>
    </div>
  );
}

export default Contact;
