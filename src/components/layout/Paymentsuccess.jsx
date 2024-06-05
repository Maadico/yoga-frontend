import React, { useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import "./Success.css";

function Paymentsuccess() {
  const { merchantTransactionId } = useParams();
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(merchantTransactionId);
    setCopySuccess(true);
  };

  return (
    <>
      <Header />
      <div className="ps-container">
        <div className="ps-content">
          <h1 className="ps-title">Payment Success</h1>
          <p className="ps-transaction-id">
            Transaction Reference Number: {merchantTransactionId}
          </p>
          <button className="ps-copy-button" onClick={copyToClipboard}>
            {copySuccess ? "Copied!" : "Copy ID"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Paymentsuccess;
