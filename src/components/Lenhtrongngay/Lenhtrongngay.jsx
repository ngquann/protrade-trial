import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import {
  FaHourglassStart,
  FaCheckCircle,
  FaTrashAlt,
  FaMinusCircle,
  FaRegTimesCircle,
} from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Lenhtrongngay = () => {
  const [dataHistory, setDataHistory] = useState([]);
  const [deleteItem, setDeleteItem] = useState();
  const handle = (id) => {
    setDeleteItem(id);
  };

  let decodedUername = jwt_decode(localStorage.getItem("auth")).username;

  useEffect(() => {
    axios
      .get(
        `https://dertrial-api.vndirect.com.vn/demotrade/orders?username=${decodedUername}`
      )
      .then((res) => setDataHistory(res.data));
  }, []);

  const handleCancel = (id, index) => {
    axios({
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      url: "https://dertrial-api.vndirect.com.vn/demotrade/orders",
      data: { userName: decodedUername, orderID: id },
    }).then((res) => {
      toast.success("Hủy lệnh thành công");
      console.log(index, id);
      if (res.status === 200) {
        let itemData = dataHistory.filter(
          (item) => item.orderID === Number(id)
        );
        itemData[0].status = "Cancelled";
        setDataHistory([...dataHistory]);
        setDeleteItem(null);
      }
    });
  };

  return (
    <div>
      <div className="command-list" style={{ width: "100%" }}>
        <div className="command-list-title">
          <div style={{ width: "20px" }}></div>
          <div style={{ width: "50px" }}>Lệnh</div>
          <div style={{ width: "90px" }}>Mã</div>
          <div style={{ width: "70px" }}>KL Khớp</div>
          <div style={{ width: "60px" }}>Giá</div>
          <div>TT</div>
        </div>
        <div>
          <div className="command-list-titlee">
            {dataHistory ? (
              dataHistory.map((item, index) => (
                <div key={index} className="inday-content-item">
                  <div
                    style={{ width: "20px", marginLeft: "3px" }}
                    className="check"
                  >
                    {item.status === "New" || item.status === "PendingNew" ? (
                      <input type="checkbox"></input>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div
                    style={{ width: "50px" }}
                    className={item.side === "NS" ? "txt-pink" : "txt-green"}
                  >
                    {item.side === "NS" ? "Bán" : "Mua"}
                  </div>

                  <div style={{ width: "90px" }}>{item.symbol}</div>

                  <div style={{ width: "70px", textAlign: "center" }}>
                    {item.matchedQuantity !== 0 ? (
                      `${item.quantity}`
                    ) : (
                      <span>
                        <span style={{ color: "#f8a01b" }}>
                          {item.matchedQuantity}
                        </span>
                        /{item.quantity}
                      </span>
                    )}
                  </div>

                  <div style={{ width: "60px" }}>{item.orderType}</div>

                  {deleteItem !== item.orderID ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "90px",
                      }}
                      className="status-item"
                    >
                      <div
                        className={
                          item.status === "New" || item.status === "PendingNew"
                            ? "txt-orange"
                            : "txt-green"
                        }
                      >
                        {(item.status === "New" ||
                          item.status === "PendingNew") && (
                          <FaHourglassStart
                            data-tip="Chờ gửi lên sàn"
                            data-for="hour"
                          />
                        )}

                        {item.status === "Filled" && (
                          <FaCheckCircle
                            style={{ color: "#43a038" }}
                            data-tip="Khớp"
                            data-for="check"
                          />
                        )}

                        {item.status === "Cancelled" && (
                          <FaTrashAlt
                            style={{
                              color: "#af449c",
                            }}
                            data-tip="Hủy thành công"
                            data-for="trash"
                          />
                        )}

                        {item.status === "Rejected" && (
                          <FaMinusCircle
                            style={{
                              color: "#d80027",
                            }}
                            data-tip="Hệ thống Demo không hỗ trợ đặt lệnh giá này (FDS-079)"
                            data-for="reject"
                          />
                        )}

                        <ReactTooltip
                          place="top"
                          type="light"
                          id="hour"
                          data-id="hour"
                          className="react-tooltip"
                        ></ReactTooltip>
                        <ReactTooltip
                          place="top"
                          type="light"
                          id="check"
                          data-id="check"
                          className="react-tooltip"
                        ></ReactTooltip>
                        <ReactTooltip
                          place="top"
                          type="light"
                          id="trash"
                          data-id="trash"
                          className="react-tooltip"
                        ></ReactTooltip>
                        <ReactTooltip
                          place="top"
                          type="light"
                          id="reject"
                          data-id="reject"
                          className="react-tooltip"
                        ></ReactTooltip>
                      </div>

                      <div className="txt-pink">
                        {(item.status === "New" ||
                          item.status === "PendingNew") && (
                          <FaRegTimesCircle
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={() => handle(item.orderID)}
                          />
                        )}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="delete">
                        <button
                          onClick={() => {
                            handleCancel(item.orderID.toString(), index);
                          }}
                          // id={item.orderID}
                          className="btn-yes"
                        >
                          Hủy
                        </button>
                        <button
                          onClick={() => setDeleteItem(null)}
                          className="btn-no"
                        >
                          Không
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))
            ) : (
              <>
                <span className="no-order">Chưa có lệnh nào trong sổ lệnh</span>
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer
        autoClose={2000}
        style={{ fontSize: "14px" }}
        hideProgressBar={true}
      />
    </div>
  );
};

export default Lenhtrongngay;
