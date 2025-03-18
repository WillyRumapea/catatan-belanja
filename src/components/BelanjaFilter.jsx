import { useContext } from "react";
import { BelanjaContext } from "../reducer/BelanjaContext";
import { useState } from "react";
import BelanjaFilteredItem from "./BelanjaFilteredItem";

export default function BelanjaFilter() {
  const { dispatch, setFilteredItems, filteredItems } =
    useContext(BelanjaContext);
  const [optFilt, setOpFilt] = useState("");

  function handleOpFilt(e) {
    setOpFilt(e.target.value);
  }

  function submitFilterOpt(e) {
    e.preventDefault();
    dispatch({
      type: "FILTER_ITEMS",
      kategoriItem: optFilt,
      setFilteredItems,
    });
  }

  return (
    <div>
      <h2>Filter Barang</h2>
      <form action="">
        <label>
          Filter{" "}
          <select onChange={handleOpFilt} value={optFilt}>
            <option value="dapur">dapur</option>
            <option value="kamar_mandi">kamar mandi</option>
            <option value="kamar_tidur">kamar tidur</option>
          </select>
        </label>
        <button onClick={submitFilterOpt}>filter!</button>
      </form>
      <div>
        <ul>
          {filteredItems.map((filteredItem) => (
            <li key={filteredItem.id}>
              <BelanjaFilteredItem filteredItem={filteredItem} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
