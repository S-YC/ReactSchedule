import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

function Modal(props) {
  const [showPopup, setShowPopup] = useState(true);

  const togglePopup = (event) => {
    setShowPopup(event.target.value)
  };

  const { img } = props;
  return (
    < div className="popup"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        width: "100%",
      }
      }>
      {showPopup ? (
        <div style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}>
          <div style={{
            cursor: "pointer",
            display: "flex",
            padding: "10px",
            position: "absolute",
          }} onClick={togglePopup} value={false} >
            <IoClose />
          </div>
          <img src={img} alt="" />
        </div>
      ) : null}
    </div >
  );
}

export default Modal;