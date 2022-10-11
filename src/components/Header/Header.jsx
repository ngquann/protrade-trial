import React, { useCallback, useEffect, useState } from "react";
import { FaSortDown, FaUser, FaTrophy } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import Dialog from "../Dialog/Dialog";
import jwt_decode from "jwt-decode";

import "./Header.css";

const Header = ({ setSuccess }) => {
  const [showName, setShowName] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [time, setTime] = useState(
    useCallback(
      () =>
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds()
    ,[])
  );
  const [date, setDate] = useState(
    useCallback(
      () =>
        new Date().getDate() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getFullYear()
    ,[])
  );

  useEffect(() => {
    const newTime = setInterval(
      () =>
        setTime(
          new Date().getHours() +
            ":" +
            new Date().getMinutes() +
            ":" +
            new Date().getSeconds()
        ),
      1000
    );

    const newDate = setInterval(
      () =>
        setDate(
          new Date().getFullYear() +
            "/" +
            (new Date().getMonth() + 1) +
            "/" +
            new Date().getDate()
        ),
      1000
    );

    return () => {
      clearInterval(newTime);
      clearInterval(newDate);
    };
  }, []);

  useEffect(() => {
    var decoded = jwt_decode(localStorage.getItem("auth"));
    setShowName(decoded.customerName);
  }, []);
  return (
    <div>
      <header className="topbar header">
        <div id="logo">
          <img src="https://protrade-trial.vndirect.com.vn/static/media/pt_trial.a0934fd1.svg" />
        </div>
        <div id="vnds-clock">
          <span className="digital-clock" id="clock-time">
            {time}
          </span>
          <span className="date" id="clock-date">
            {date}
          </span>
        </div>
        <div id="horizontal-menu">
          <ul className="horizontal-menu-root">
            <li className="active">
              <a href="/trang-chu">Trang chủ</a>
            </li>
            <li className="">
              <a href="/tai-san">Tài sản</a>
            </li>
            <li className="">
              <a href="/huong-dan-su-dung">Hướng dẫn</a>
            </li>
          </ul>
        </div>
        <span id="profitloss">
          Lãi/Lỗ:
          <span className="number txt-gia-tc">0</span>
          <span onClick={() => setShowDialog(true)} className="top">
            <FaTrophy />
            &nbsp; Top cao thủ phái sinh
          </span>
        </span>
        <div className="menu" id="menuWrp">
          <div id="demo">BẢN TRIAL</div>
          <div className="buttons">
            <a id="goto-btn" target="_blank">
              Nâng cấp tài khoản
            </a>
          </div>
          <div className="account-dropdown">
            <div className="account-dropdown-btn">
              <span className="btn-icon">
                <FaUser />
                &nbsp;&nbsp;{showName}&nbsp;
                <FaSortDown />
              </span>
              <ul className="account-dropdown-list">
                <li onClick={() => setSuccess(false)}>
                  <a>
                    <HiOutlineLogout />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {showDialog ? <Dialog setShowDialog={setShowDialog} /> : <></>}
    </div>
  );
};

export default Header;
