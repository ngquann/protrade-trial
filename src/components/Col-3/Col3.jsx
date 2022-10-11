import Danhmuc from "../Danhmuc/Danhmuc";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import Solenh from "../Solenh/Solenh";
import Taisan from "../Taisan/Taisan";
import "./Col3.css";

const Col3 = ({type, setShowCol, setType}) => {
  return (
    <div id="col-3">
      { type === 'Solenh' ? <Solenh setType={setType} setShowCol={setShowCol}/> : <></>}
      { type === 'Danhmuc' ? <Danhmuc setType={setType} setShowCol={setShowCol}/> : <></>}
      { type === 'Taisan' ? <Taisan setType={setType} setShowCol={setShowCol}/> : <></>}
      <PlaceOrder />
    </div>
  );
};

export default Col3;
