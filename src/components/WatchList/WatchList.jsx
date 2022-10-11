import "./WatchList.css";

const WatchList = () => {
  return (
    <div className="watchlist">
      <table>
        <colgroup>
          <col width="25%" />
          <col width="18%" />
          <col width="16%" />
          <col width="16%" />
          <col width="25%" />
        </colgroup>
        <thead>
          <tr>
            <th>Mã</th>
            <th>Giá</th>
            <th>
              <i className="fa fa-caret-left link"></i>
              <span> +/- </span>
              <i className="fa fa-caret-right link"></i>
            </th>
            <th>Lệch</th>
            <th className="txtr">Tổng KL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="symbol txt-red">VN30F2210</td>
            <td className="txt-red click">
              <span>170 1,103</span>
            </td>
            <td className=" txt-red">-47.0</td>
            <td className="cell-hightlight">
              <span>3.73</span>
            </td>
            <td className="click">
              <span>176 366,993</span>
            </td>
          </tr>
          <tr>
            <td className="symbol  txt-red">VN30F2211</td>
            <td className="txt-red click">
              <span>181 1,105</span>
            </td>
            <td className=" txt-red">-54.0</td>
            <td className="cell-hightlight">
              <span>5.73</span>
            </td>
            <td className="click">
              <span>187 3,271</span>
            </td>
          </tr>
          <tr>
            <td className="symbol  txt-red">VN30F2212</td>
            <td className="txt-red click">
              <span>192 1,100</span>
            </td>
            <td className=" txt-red">-49.8</td>
            <td className="cell-hightlight">
              <span>0.73</span>
            </td>
            <td className="click">
              <span>198 316</span>
            </td>
          </tr>
          <tr>
            <td className="symbol txt-red">VN30F2303</td>
            <td className="click txt-red">
              <span>203 -204 </span>
            </td>
            <td className=" txt-red">0</td>
            <td className="cell-hightlight txt-red">
              <span></span>
            </td>
            <td className="click">
              <span>210 223</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
