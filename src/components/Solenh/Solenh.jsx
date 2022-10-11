import Lenhdieukhien from "../Lenhdieukhien/Lenhdieukhien";
import Lenhtrongngay from "../Lenhtrongngay/Lenhtrongngay";
import { HiRefresh, HiOutlineMinusSm } from "react-icons/hi";
import { useState } from "react";
import "./Solenh.css";

const Solenh = ({ setShowCol, setType: setTypes }) => {
  const [type, setType] = useState("Lenhngay");
  const handleSet = () => {
    setShowCol(false);
    setTypes("");
  };
  return (
    <div id="orderbook">
      <div className="title">
        <ul>
          <li onClick={() => setType("Lenhngay")}>
            <a className={type === "Lenhngay" && "active"}>
              Lệnh trong ngày
            </a>
          </li>
          <li onClick={() => setType("LenhDk")}>
            <a className={type === "LenhDk" && "active"}>Lệnh điều kiện</a>
          </li>
        </ul>
        <HiRefresh
          style={{
            position: "absolute",
            top: "10px",
            right: "40px",
            color: "orange",
            cursor: "pointer",
            fontSize: "16px",
          }}
        />
        <HiOutlineMinusSm
          onClick={() => handleSet()}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "orange",
            cursor: "pointer",
            fontSize: "16px",
          }}
        />
      </div>

      {type === "Lenhngay" ? <Lenhtrongngay /> : <Lenhdieukhien />}
    </div>
  );
};

export default Solenh;
