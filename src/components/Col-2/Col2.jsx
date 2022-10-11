import "./Col2.css";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { FaChartPie, FaChartBar } from "react-icons/fa";
import { useState } from "react";

const Col2 = () => {
  const [type, setType] = useState(1);
  return (
    <div id="col-2">
      <div style={{ height: "307px" }} className="chart">
        <TradingViewWidget
          symbol="NASDAQ:AAPL"
          theme={Themes.DARK}
          locale="fr"
          autosize
        />
      </div>
      <div className="market">
        <div className="charts mkw">
          {type === 1 ? (
            <iframe
              src="https://mkw.vndirect.com.vn/leader_lagger?color=gray&amp;height=280"
              title="Chart"
              width="100%"
              height="100%"
            ></iframe>
          ) : (
            <></>
          )}

          {type === 2 ? (
            <TradingViewWidget
              symbol="NASDAQ:AAPL"
              theme={Themes.DARK}
              locale="fr"
              autosize
            />
          ) : (
            <></>
          )}

          {type === 3 ? (
            <iframe
              src="https://mkw.vndirect.com.vn/leader_lagger?color=gray&height=280"
              title="Chart"
              width="100%"
              height="100%"
            ></iframe>
          ) : (
            <></>
          )}

          {type === 4 ? (
            <iframe
              src="https://mkw.vndirect.com.vn/market_cap?color=gray&amp;height=280"
              title="Chart"
              width="100%"
              height="100%"
            ></iframe>
          ) : (
            <></>
          )}
        </div>
        <div className="menus">
          <ul>
            <li onClick={() => setType(1)} className={type === 1 ? 'active' : ''}>
              VN30 INTRADAY
            </li>
            <li className={type === 2 ? 'active' : ''} onClick={() => setType(2)}>VN30</li>
            <li className={type === 3 ? 'active' : ''} onClick={() => setType(3)}>
              <FaChartBar />
            </li>
            <li className={type === 4 ? 'active' : ''} onClick={() => setType(4)}>
              <FaChartPie />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Col2;
