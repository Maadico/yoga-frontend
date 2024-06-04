import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import AdminLayout from "../../../components/layout/AdminLayout";

function AdminSubscription() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/admin/get-subs`
      );
      setSubscriptions(response.data);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
    }
  };

  return (
    <AdminLayout>
      <h2>Subscription List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Merchant Transaction ID</th>
            <th>Amount</th>
            <th>Course Name</th>
            <th>Active</th>
            <th>Days Left</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription, index) => (
            <tr key={index}>
              <td>{subscription.userName}</td>
              <td>{subscription.userEmail}</td>
              <td>{subscription.merchantTransactionId}</td>
              <td>{subscription.amount}</td>
              <td>{subscription.courseName}</td>
              <td>{subscription.isActive ? "Active" : "Expired"}</td>
              <td>{subscription.daysLeft}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AdminLayout>
  );
}

export default AdminSubscription;
