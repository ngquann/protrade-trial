import Vithedong from "../Vithedong/Vithedong";
import Vithemo from "../Vithemo/Vithemo";
import { HiRefresh, HiOutlineMinusSm } from "react-icons/hi";
import "./Danhmuc.css";
import { useState } from "react";

const Danhmuc = ({ setShowCol, setType: setTypes }) => {
  const [type, setType] = useState("Vithemo");
  const handleSet = () => {
    setShowCol(false);
    setTypes("");
  };

  return (
    <div id="portfolio">
      <div className="title">
        <ul>
          <li onClick={() => setType("Vithemo")}>
            <a className={type === "Vithemo" ? "active" : ""}>Vị thế mở</a>
          </li>
          <li onClick={() => setType("Vithedong")}>
            <a className={type === "Vithedong" ? "active" : ""}>Vị thế đóng</a>
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

      {type === "Vithemo" ? <Vithemo /> : <Vithedong />}
    </div>
  );
};

export default Danhmuc;
