import { useContext } from "react";
import BelanjaAction from "./BelanjaAction";
import { useState } from "react";
import { BelanjaContext } from "../reducer/BelanjaContext";
import "../style/components/itemList.css";

export default function BelanjaItem({ item }) {
  const { dispatch } = useContext(BelanjaContext);
  const [namaBaru, setNamaBaru] = useState(item.namaItem);
  const [jumlahBaru, setJumlahBaru] = useState(item.jumlahItem);

  function handleNamaBaru(e) {
    setNamaBaru(e.target.value);
  }

  function handleMJumlahBaru(e) {
    setJumlahBaru(Number(e.target.value));
  }

  function handleSubmitNewInfo(e) {
    e.preventDefault();
    dispatch({
      type: "SAVE_UPDATE",
      id: item.id,
      namaItem: namaBaru,
      jumlahItem: jumlahBaru,
    });
    setNamaBaru("");
    setJumlahBaru(0);
  }

  return (
    <div
      className="container-list"
      style={{ backgroundColor: item.terbeli ? "#808080" : "#fff" }}
    >
      <h2 style={{ color: item.terbeli ? "#fff" : "#000" }}>{item.namaItem}</h2>
      <div className="item-detail">
        <div className="item-info">
          <p style={{ color: item.terbeli ? "#fff" : "#000" }}>
            jumlah: {item.jumlahItem}
          </p>
          <p style={{ color: item.terbeli ? "#fff" : "#000" }}>
            kategori: {item.kategoriItem}
          </p>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "CHECKLIST_ITEM", id: item.id })}
            checked={item.terbeli}
          />
        </div>
        <div className="item-action">
          <BelanjaAction item={item} />
        </div>
      </div>
      {item.ganti && (
        <form>
          <input type="text" onChange={handleNamaBaru} value={namaBaru} />
          <input
            type="number"
            onChange={handleMJumlahBaru}
            value={jumlahBaru}
          />
          <button onClick={handleSubmitNewInfo}>simpan!</button>
        </form>
      )}
    </div>
  );
}
