import toppings from "./Data.js";
import { useState } from "react";

function Checkbox() {
  const [total, setTotal] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [select, setSelect] = useState([]);
  const hdlSelect = (e) => {
    if (e.target.checked) {
      setSelect((prev) => [
        ...prev,
        { ["name"]: e.target.name, ["price"]: e.target.value },
      ]);
      setTotal((prev) => prev + +e.target.value);
    } else {
      setSelect((prev) => {
        const newState = [...prev];
        return newState.filter((el) => el.name !== e.target.name);
      });
      setTotal((prev) => prev - +e.target.value);
    }
    console.log(e.target.checked);
  };
  const hdlCheckout = (e) => {
    setIsShow(!isShow);
  };
  console.log(select);
  return (
    <>
      <div>
        {toppings.map((el, index) => (
          <div key={index} className="border flex p-2 justify-between">
            <div className="flex gap-2">
              <input
                name={el.name}
                value={+el.price}
                type="checkbox"
                onChange={hdlSelect}
              />
              <label>{el.name}</label>
            </div>
            <div>
              <label>฿ {el.price}</label>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-4 mb-4" />
      <p className="font-bold flex justify-end">Total : ฿ {Math.abs(total.toFixed(1))}</p>
      <button className="border bg-yellow-200 mt-4 mb-4" onClick={hdlCheckout}>
        Checkout
      </button>
      <div className="border py-4">
        {isShow &&
          select.map((el, index) => (
            <div
              key={index}
              className="border flex p-2 justify-between bg-blue-400 text-white"
            >
              <div>
                <label>{el.name}</label>
              </div>
              <div>
                <label>฿ {el.price}</label>
              </div>
            </div>
          ))}
        {isShow && (
          <p className="mt-2 mb-2 flex justify-end font-bold">
            Total : ฿ {Math.abs(total.toFixed(1))}
          </p>
        )}
      </div>
    </>
  );
}

export default Checkbox;
