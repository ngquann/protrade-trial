const Vithedong = () => {
  return (
    <div>
      <div className="command-list" style={{ width: "100%" }}>
        <div className="command-list-title">
          <div style={{ width: "20%" }}>Mã</div>
          <div style={{ width: "15%", textAlign: "center" }}>KL</div>
          <div style={{ width: "20%", textAlign: "center" }}>Giá mua</div>
          <div style={{ width: "20%", textAlign: "center" }}>Giá bán</div>
          <div style={{ width: "25%", textAlign: "center" }}>
            Lãi/lỗ đã thực hiện
          </div>
        </div>
        <div>
          <span className="no-order">Chưa có dữ liệu</span>
        </div>
      </div>
    </div>
  );
};

export default Vithedong;
