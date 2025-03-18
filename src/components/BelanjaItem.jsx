import { useContext } from "react";
import BelanjaAction from "./BelanjaAction";
import { useState } from "react";
import { BelanjaContext } from "../reducer/BelanjaContext";

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
    <>
      <h2>{item.namaItem}</h2>
      <p>{item.jumlahItem}</p>
      <p>{item.kategoriItem}</p>
      <input
        type="checkbox"
        onChange={() => dispatch({ type: "CHECKLIST_ITEM", id: item.id })}
        checked={item.terbeli}
      />
      <BelanjaAction item={item} />

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
    </>
  );
}
