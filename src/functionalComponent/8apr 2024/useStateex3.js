import { useState } from "react";

const UseEx3 = () => {
  const arry = useState(["apple", "banana"]);
  const [fruits, setFruits] = useState(["apple", "banana"]);

  const addfruit = () => {
    const newFruits = [...fruits, "Pineapple"];
    setFruits(newFruits);
  };
  const deletefruit = () => {
    const newFruits = fruits.slice(0, -1);
    setFruits(newFruits);
  };
  const updatefruit = (index) => {
    const newFruits = [...fruits];
    newFruits[index] = "Im Tasty";
    setFruits(newFruits);
  };
  return (
    <>
      <div className="add">
        <button className="btns"onClick={addfruit}>add</button>
        <button className="btns" onClick={deletefruit}>delete</button>

        {fruits.map((value, index) => (
          <div className="update" key={index}>
            <h4>{value}</h4>
            <button className="btns" onClick={() => updatefruit(index)}>Update</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default UseEx3;
