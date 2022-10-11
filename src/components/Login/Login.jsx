import { FaInfoCircle, FaSignInAlt, FaLock } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactTooltip from "react-tooltip";
import axios from "axios";
import "./Login.css";

const Login = ({ setSuccess }) => {
  const notify = () =>
    toast(
      "Tên đăng nhập hoặc mật khẩu bạn vừa nhập chưa đúng, xin vui lòng thử lại."
    );
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const data = JSON.stringify({
    username: userName,
    password: passWord,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      url: "https://auth-api.vndirect.com.vn/v2/auth",
      data,
    })
      .then((res) => {
        localStorage.setItem("auth", res.data.token);
        setSuccess(true);
      })
      .catch((err) => notify());
  };

  return (
    <>
      <div className="background-login"></div>
      <div className="form-login">
        <div id="login-popup">
          <form name="login">
            <p className="login-with-trade-acc text-center ">
              Đăng nhập với tài khoản VNDIRECT
            </p>
            <div className="form-row">
              <div className="form-field">
                <label className="ab">Tên đăng nhập:</label>
                <input
                  type="text"
                  required=""
                  name="username"
                  className="cd"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label>Mật khẩu:</label>
                <input
                  type="password"
                  required=""
                  name="password"
                  value={passWord}
                  onChange={(e) => setPassWord(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="remember-me">
                  <input type="checkbox" id="remember-me" value="on" />
                  Ghi nhớ trạng thái đăng nhập trên trình duyệt này &nbsp;&nbsp;
                  <span
                    data-tip="Ghi nhớ trạng thái đăng nhập giúp Quý khách không cần phải login lại mỗi lần vào VNDIRECT trên trình duyệt này. Để hủy trạng thái, Quý khách vui lòng Đăng xuất."
                    data-for="noteWarning"
                  >
                    <FaInfoCircle />
                  </span>

                  <ReactTooltip
                    id="noteWarning"
                  />
                </label>
              </div>
            </div>
            <button type="submit" onClick={handleSubmit}>
              <span className="d-flex align-items-center justify-content-center">
                <FaSignInAlt />
                &nbsp; &nbsp;<span>Đăng nhập</span>
              </span>
            </button>
          </form>
          <hr className="login-divider" />

          <div className="register d-flex justify-content-center">
            <button type="submit" className="register-btn">
              <span className="d-flex align-items-center justify-content-center">
                <FaLock />
                &nbsp;<span>Mở tài khoản</span>
              </span>
            </button>
          </div>

          <p className="login-helper">Trợ giúp</p>
          <ToastContainer
            autoClose={2000}
            style={{ fontSize: "14px", color: "black" }}
            hideProgressBar={true}
          />
          <div className="error-mesg">
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
