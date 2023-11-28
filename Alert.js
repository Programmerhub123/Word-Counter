import React, { useState } from "react";

const AlertMessage = ({ message }) => {
  const [showMessage, setShowMessage] = useState(true);

  const handleButtonClick = () => {
    setShowMessage(false);
  };

  return (
    <div>
      {showMessage && (
        <div
          style={{
            border: "1px solid red",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {message}
          <button onClick={handleButtonClick} style={{ marginLeft: "10px" }}>
            Hide Now
          </button>
        </div>
      )}
    </div>
  );
};

export default AlertMessage;
