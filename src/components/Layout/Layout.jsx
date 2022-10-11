import { useState } from "react";
import Col1 from "../Col-1/Col1";
import Col2 from "../Col-2/Col2";
import Col3 from "../Col-3/Col3";
import "./Layout.css";

const Layout = () => {
  const [type, setType] = useState("Solenh");
  const [showCol, setShowCol] = useState(true);
  const handleSwitch = (item) => {
    setType(item);
    setShowCol(true);
  };

  return (
    <div className="main-content">
      <div id="home">
        <Col2 />
        <Col1 />
        {showCol ? (
          <Col3 type={type} setType={setType} setShowCol={setShowCol} />
        ) : (
          <></>
        )}

        <div id="footer">
          <ul className="menu">
            <li
              className={type === "Solenh" ? "active" : ""}
              onClick={() => handleSwitch("Solenh")}
            >
              Sổ lệnh
            </li>
            <li
              className={type === "Danhmuc" ? "active" : ""}
              onClick={() => handleSwitch("Danhmuc")}
            >
              Danh mục
            </li>
            <li
              className={type === "Taisan" ? "active" : ""}
              onClick={() => handleSwitch("Taisan")}
            >
              Tài sản
            </li>
          </ul>
        </div>
        <div className="footer-asset">
          <p>Bản quyền thuộc về VNDIRECT © 2022. v2.2.3</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
