import React from "react";

const Lenhdieukhien = () => {
  return (
    <div>
      <div className="command-list" style={{ width: "100%" }}>
        <div className="command-list-title">
          <div style={{ width: "10%", textAlign: "center" }}>Lệnh</div>
          <div style={{ width: "15%", textAlign: "center" }}>Mã</div>
          <div style={{ width: "15%", textAlign: "center" }}>Giá kích hoạt</div>
          <div style={{ width: "10%", textAlign: "center" }}>KL</div>
          <div style={{ width: "10%", textAlign: "center" }}>Giá</div>
          <div style={{ width: "20%", textAlign: "center" }}>Ngày hết hạn</div>
          <div style={{ width: "8%", textAlign: "center" }}>TT</div>
          <div style={{ width: "12%" }}></div>
        </div>
        <div>
          <span className="no-order">Chưa có lệnh nào trong sổ lệnh</span>
        </div>
      </div>
    </div>
  );
};

export default Lenhdieukhien;
