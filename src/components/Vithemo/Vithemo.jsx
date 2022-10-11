import React from 'react'

const Vithemo = () => {
  return (
    <div>
      <div className="command-list" style={{ width: "100%" }}>
        <div className="command-list-title">
          <div style={{ width: "60px", textAlign:'center'}}>Mã</div>
          <div style={{ width: "40px", textAlign:'center' }}>KL</div>
          <div style={{ width: "60px", textAlign:'center' }}>Giá vốn</div>
          <div style={{ width: "60px", textAlign:'center' }}>Giá hiện tại</div>
          <div style={{ width: "138px", textAlign:'right' }}>+/-</div>
          <div></div>
        </div>
        <div>
          <span className="no-order">Chưa có mã nào trong danh mục của Quý khách</span>
        </div>
      </div>
    </div>
  )
}

export default Vithemo