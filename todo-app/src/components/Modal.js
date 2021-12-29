import React, { useEffect, useState } from "react";
import '../../src/components/Modal.scss';
import { IoClose } from "react-icons/io5";
// 쿠키 사용
import { CookiesProvider } from 'react-cookie';

function Modal(props) {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {

    if (showPopup) {
      const getexpiryDate = Number(localStorage.getItem("visitCookie"));

      let expiry = new Date();
      let nowDate = Number((expiry.setDate(expiry.getDate())));

      // localStorage.removeItem("visitCookie")

      // 만료닐짜 비교
      if (getexpiryDate > nowDate) {
        console.log("만료날짜 : " + new Date(getexpiryDate));
        console.log("현재시간 : " + new Date(nowDate));
        setShowPopup(false);
      }
    }

  }, [showPopup]);

  // 팝업 닫기
  const togglePopup = (event) => {
    setShowPopup(event.target.value)
  };


  // 팝업 하루동안 안보기
  const cookiePoup = () => {
    let expiry = new Date();

    // 현재시간 +1일 계산
    let expiryDate = (expiry.setDate(expiry.getDate() + 1));

    localStorage.setItem("visitCookie", expiryDate);
    setShowPopup(false);
  }

  const { img } = props;
  return (
    showPopup ? (
      <CookiesProvider>
        < div className="popup"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            width: "100%",
          }}>
          <div className="popup_lmg" style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}>
            <div style={{
              cursor: "pointer",
              display: "flex",
              padding: "10px",
              position: "absolute",
            }} onClick={togglePopup} >
              <IoClose />
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
            }}>
              <a href="https://www.pping.kr" rel="noopener noreferrer" target={"_blank"} cursor="pointer"> <img src={img} alt="" /></a>
              <button onClick={cookiePoup} target="_blank"> 오늘 하루 열지 않기
              </button>
            </div>
          </div>
        </div >
      </CookiesProvider>
    ) : null
  );
}

export default Modal;