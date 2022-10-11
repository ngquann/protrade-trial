import "./Dialog.css";
import { VscClose } from "react-icons/vsc";
import { FaArrowCircleUp } from "react-icons/fa";
import { memo, useEffect, useState } from "react";
import axios from "axios";

function Dialog({ setShowDialog }) {
  const formatNumber = (e) =>
    e.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

  const [rankList, setRankList] = useState([]);
  useEffect(() => {
    axios
      .get("https://dertrial-api.vndirect.com.vn/demotrade/assets")
      .then((res) =>
        setRankList(
          res.data
            .sort((a, b) => b.netAssetValue - a.netAssetValue)
            .slice(0, 20)
        )
      );

    const timerId = setInterval(() => {
      axios
        .get("https://dertrial-api.vndirect.com.vn/demotrade/assets")
        .then((res) =>
          setRankList(
            res.data
              .sort((a, b) => b.netAssetValue - a.netAssetValue)
              .slice(0, 20)
          )
        );
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  console.log(rankList);
  return (
    <div className="dialog-wrapper">
      <div
        onClick={() => {
          setShowDialog(false);
        }}
        className="overlay"
      ></div>
      <div className="dialog">
        <span
          className="close"
          onClick={() => {
            setShowDialog(false);
          }}
        >
          <VscClose />
        </span>
        <div id="top-popup">
          <div className="top-month">
            <div className="top-header">
              <img
                src="https://protrade-trial.vndirect.com.vn/static/media/top-derivative.bb0daf79.png"
                style={{ height: "130px" }}
              />
              <div className="title">BẢNG XẾP HẠNG THÁNG</div>
            </div>
            <div className="top-box">
              <div className="top-box-header">
                <span style={{ paddingLeft: "25px" }}>CAO THỦ PHÁI SINH</span>
                <span className="unit">Đơn vị: VND</span>
                <span className="nav">
                  <FaArrowCircleUp style={{ marginRight: "4px" }} />
                  NAV
                </span>
              </div>

              {rankList.slice(0, 1).map((e) => (
                <div className="top item">
                  <span
                    className="icon"
                    style={{ top: "-19px", left: "-23px" }}
                  >
                    <img
                      src="data:image/png;base64,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"
                      style={{ height: "50px" }}
                    />
                  </span>
                  <span
                    className="username"
                    style={{ paddingLeft: "30px", color: "rgb(255, 170, 0)" }}
                  >
                    {e.username}
                  </span>

                  <span
                    className="number"
                    style={{ color: "rgb(255, 170, 0)" }}
                  >
                    {formatNumber(e.netAssetValue)}
                  </span>
                </div>
              ))}
              {rankList.slice(1, 2).map((e) => (
                <div className="top item">
                  <span className="icon">
                    <img
                      src="data:image/png;base64,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"
                      style={{ height: "40px" }}
                    />
                  </span>
                  <span className="username" style={{ paddingLeft: "30px" }}>
                    {e.username}
                  </span>
                  <span className="number">
                    {formatNumber(e.netAssetValue)}
                  </span>
                </div>
              ))}
              {rankList.slice(2, 3).map((e) => (
                <div className="top item">
                  <span className="icon">
                    <img
                      src="data:image/png;base64,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"
                      style={{ height: "40px" }}
                    />
                  </span>
                  <span className="username" style={{ paddingLeft: "30px" }}>
                    {e.username}
                  </span>
                  <span className="number">
                    {formatNumber(e.netAssetValue)}
                  </span>
                </div>
              ))}
              <div className="others">
                {rankList.slice(3, 10).map((e) => (
                  <div className="item">
                    <span className="username">{e.username}</span>
                    <span className="number">
                      {formatNumber(e.netAssetValue)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="join">
              <a href="#">THAM GIA NGAY TẠI ĐÂY</a>
            </div>
          </div>
          <div className="top-week">
            <div className="title">BẢNG XẾP HẠNG TUẦN</div>
            <div className="notice">
              (Từ 8h00 thứ 2 đến 15H00 thứ 6 hàng tuần)
            </div>
            <div className="top-box">
              <div className="top-box-header">
                <span style={{ paddingLeft: "25px" }}>CAO THỦ PHÁI SINH</span>
                <span className="unit">Đơn vị: VND</span>
                <span className="nav">
                  <FaArrowCircleUp style={{ marginRight: "4px" }} />
                  NAV
                </span>
              </div>

              {rankList.slice(0, 1).map((e) => (
                <div className="top top1 item">
                  <span className="username" style={{ paddingLeft: " 10px" }}>
                    {e.username}
                  </span>
                  <span className="number" style={{ paddingRight: "20px" }}>
                    {formatNumber(e.netAssetValue)}
                  </span>
                </div>
              ))}
              {rankList.slice(1, 2).map((e) => (
                <div className="top top2 item">
                  <span className="username" style={{ paddingLeft: " 10px" }}>
                    {e.username}
                  </span>
                  <span className="number" style={{ paddingRight: "20px" }}>
                    {formatNumber(e.netAssetValue)}
                  </span>
                </div>
              ))}
              {rankList.slice(2, 3).map((e) => (
                <div className="top top3 item">
                  <span className="username" style={{ paddingLeft: "10px" }}>
                    {e.username}
                  </span>
                  <span className="number" style={{ paddingRight: "20px" }}>
                    {formatNumber(e.netAssetValue)}
                  </span>
                </div>
              ))}

              <div className="others">
                {rankList.slice(3).map((e) => (
                  <div className="item">
                    <span
                      className="username"
                      style={{ color: "rgb(51, 51, 51)" }}
                    >
                      {e.username}
                    </span>
                    <span className="number" style={{ color: "black" }}>
                      {formatNumber(e.netAssetValue)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Dialog);
