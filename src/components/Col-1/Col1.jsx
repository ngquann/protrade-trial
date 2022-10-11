import { useState } from "react";
import Buocgia from "../Buocgia/Buocgia";
import Lichsu from "../Lichsu/Lichsu";
import WatchList from "../WatchList/WatchList";
import "./Col1.css";

const Col1 = () => {
  const [show, setShow] = useState("true");
  return (
    <div id="col-1">
      <div className="history">
        <div className="derivative-info">
          <table>
            <colgroup>
              <col width="34%" />
              <col width="22%" />
              <col width="22%" />
              <col width="22%" />
            </colgroup>
            <tbody>
              <tr>
                <td className="symbol">VN30F2210</td>
                <td>
                  <span>Sàn: </span>
                  <br />
                  <span data-tip="Click đúp để đặt lệnh" className="fl">
                    1069.5
                  </span>
                </td>
                <td>
                  <span>TC: </span>
                  <br />
                  <span data-tip="Click đúp để đặt lệnh" className="ref">
                    1150.0
                  </span>
                </td>
                <td>
                  <span>Trần: </span>
                  <br />
                  <span data-tip="Click đúp để đặt lệnh" className="cl">
                    1230.5
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="derivative-info-table-wrp">
          <ul className="tab">
            <li onClick={() => setShow("true")}>
              <a className={show === "true" ? "active" : ""}>Bước giá</a>
            </li>
            <li onClick={() => setShow("false")}>
              <a className={show === "false" ? "active" : ""}>
                Lịch sử khớp lệnh
              </a>
            </li>
          </ul>

          <div className="derivative-info-table">
            {show === "true" ? <Buocgia /> : <Lichsu />}
          </div>
        </div>
      </div>

      <WatchList />
    </div>
  );
};

export default Col1;
