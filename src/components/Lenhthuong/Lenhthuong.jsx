import { useState } from "react";
import ReactTooltip from "react-tooltip";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const listSuggest = ["VN30F2210", "VN30F2211", "VN30F2212", "VN30F2303"];
const listSuggestPrice = ["ATO", "ATC", "MTL", "MOK", "MAK"];

const Lenhthuong = () => {
  const [showSuggest, setShowSuggest] = useState(false);
  const [showSuggestPrice, setShowSuggestPrice] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [priceType, setPriceType] = useState("");
  const [quantity, setQuantity] = useState("");
  let userName = jwt_decode(localStorage.getItem("auth")).username;

  let data = JSON.stringify({
    side: "NB",
    symbol,
    priceType,
    quantity,
    price: 0,
    userName,
  });

  let dataSell = JSON.stringify({
    side: "NS",
    symbol,
    priceType,
    quantity,
    price: 0,
    userName,
  });

  const handleBuy = () => {
    axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      url: "https://dertrial-api.vndirect.com.vn/demotrade/orders",
      data,
    })
      .then((res) => {
        toast.success("Đặt lệnh thành công!");
      })
      .catch((error) => {
        alert("Error: ");
        console.log(error);
      });

    setSymbol("");
    setPriceType("");
    setQuantity("");
  };

  const handleSell = (e) => {
    axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      url: "https://dertrial-api.vndirect.com.vn/demotrade/orders",
      data: dataSell,
    })
      .then((res) => {
        toast.success("Đặt lệnh thành công. Vui lòng kiểm tra sổ lệnh");
      })
      .catch((error) => {
        toast.error(
          "Đặt lệnh không thành công. Hệ thống Demo không hỗ trợ đặt lệnh loại giá này (FDS-079)"
        );
      });
  };

  return (
    <>
      <div className="rows symbol">
        <label>Mã HĐTL: </label>
        <div className="place-order-suggest symbol">
          <div className="react-autosuggest__container">
            <input
              type="text"
              className="react-autosuggest__input"
              placeholder="Mã"
              onBlur={() => setShowSuggest(false)}
              onFocus={() => setShowSuggest(true)}
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            />
            {showSuggest && (
              <div class="react-autosuggest__suggestions-container react-autosuggest__suggestions-container--open">
                <ul class="react-autosuggest__suggestions-list">
                  {listSuggest.map((item, index) => (
                    <li
                      key={index}
                      class="react-autosuggest__suggestion"
                      onMouseEnter={() => setSymbol(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="rows price">
        <label>Giá đặt: </label>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Giá"
            className="w95"
            onBlur={() => setShowSuggestPrice(false)}
            onFocus={() => setShowSuggestPrice(true)}
            value={priceType}
            onChange={(e) => setPriceType(e.target.value)}
          />

          {showSuggestPrice && (
            <div
              style={{
                position: "absolute",
                background: "#544e4e",
                zIndex: "99999",
                right: "25px",
                top: "38px",
                borderRadius: "3px",
              }}
            >
              <ul className="suggest-price">
                {listSuggestPrice.map((item, index) => (
                  <li key={index} onMouseEnter={() => setPriceType(item)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="rows quantity">
        <label>Khối lượng: </label>
        <input
          type="text"
          placeholder="KL"
          data-tip="
              <div>
                <span>KL mua tối đa: 1 &nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>KL bán tối đa: 1</span>
              </div>
            "
          data-html={true}
          data-for="sell"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <ReactTooltip
          place="bottom"
          type="warning"
          effect="solid"
          event="click"
          globalEventOff="click"
          backgroundColor="gray"
          id="sell"
        ></ReactTooltip>
      </div>
      <div className="rows button">
        <button onClick={handleBuy} className="buy">
          MUA
        </button>
        <button onClick={handleSell} className="sell">
          BÁN
        </button>
        <div className="save-order">
          <input type="checkbox" value="on" />
          <span>Lưu lệnh</span>
        </div>
      </div>
      <ToastContainer
        autoClose={2000}
        style={{ fontSize: "14px" }}
        hideProgressBar={true}
      />
    </>
  );
};

export default Lenhthuong;
