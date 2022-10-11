import React from "react";

const Lenhstop = () => {
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
            />
          </div>
        </div>
      </div>
      <div className="rows price">
        <label>Giá đặt: </label>
        <input type="text" placeholder="Giá" className="w95" />
      </div>
      <div className="rows quantity">
        <label>Khối lượng: </label>
        <input type="text" placeholder="KL" />
      </div>
      <div className="rows">
        <label>Khi giá khớp</label>
        <div className="condition">
          <a className="btn-price-match btn-price-match-active">≤</a>
          <a className="btn-price-match">≥</a>
        </div>
        <div className="trigger-price-wrapper">
          <input type="text" placeholder="Giá kích hoạt" />
        </div>
      </div>
      <div className="rows">
        <label>Ngày hết hạn</label>
        <div className="react-datepicker__input-container">
          <input type="text" placeholder="Ngày hết hạn" value="03/10/2022" />
        </div>
      </div>
      <div className="rows button">
        <button className="buy">MUA</button>
        <button className="sell">BÁN</button>
      </div>
    </>
  );
};

export default Lenhstop;
