import { useState } from "react";
import Lenhthuong from "../Lenhthuong/Lenhthuong";
import Lenhstop from "../Lenhstop/Lenhstop";
import "./PlaceOrder.css";

const listType = [
  {
    key: 1,
    type: "Lệnh thường",
  },
  {
    key: 2,
    type: "Lệnh Stop",
  },
  {
    key: 3,
    type: "Lệnh trailing",
  },
  {
    key: 4,
    type: "Lệnh OSO",
  },
];
const PlaceOrder = () => {
  const [type, setType] = useState(1);
  return (
    <div id="placeorder">
      <div className="place-form">
        <div className="type">
          <ul>
            {listType.map((item) => (
              <li onClick={() => setType(item.key)}>
                <input
                  type="radio"
                  id={item.key}
                  value="Normal"
                  name="check"
                  checked={type === item.key}
                />
                <span>{item.type}</span>
              </li>
            ))}
          </ul>
        </div>
        {type === 1 ? <Lenhthuong /> : <></>}
        {type === 2 ? <Lenhstop /> : <></>}
      </div>
    </div>
  );
};

export default PlaceOrder;
