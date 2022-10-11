import { HiRefresh, HiOutlineMinusSm, HiExternalLink } from "react-icons/hi";
import "./Taisan.css";

const Taisan = ({ setShowCol, setType: setTypes }) => {
  const handleSet = () => {
    setShowCol(false);
    setTypes("");
  };
  return (
    <div className="assets">
      <div className="header">
        Thông tin tài sản
        <div style={{ float: "right" }}>
          <HiRefresh
            style={{
              color: "orange",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "10px",
            }}
          />

          <HiExternalLink
            style={{
              color: "orange",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "10px",
            }}
          />
          <HiOutlineMinusSm
            onClick={() => handleSet()}
            style={{
              color: "orange",
              cursor: "pointer",
              fontSize: "16px",
            }}
          />
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Tài sản ròng</td>
            <td className="value">40,000,000</td>
          </tr>
          <tr>
            <td>Số dư ký quỹ</td>
            <td className="value">24,000,000</td>
          </tr>
          <tr>
            <td>Thuế và phí</td>
            <td className="value">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Taisan;
