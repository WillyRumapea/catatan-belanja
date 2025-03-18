import { useContext } from "react";
import { useState } from "react";
import { BelanjaContext } from "../reducer/BelanjaContext";

export default function BelanjaForm() {
  const [namaItem, setNamaItem] = useState("");
  const [jumlahItem, setJumlahItem] = useState(1);
  const [kategoriItem, setKategoriItem] = useState("dapur");
  const [sortItem, setSortItem] = useState("");
  const { dispatch } = useContext(BelanjaContext);

  function handleNamaItem(e) {
    setNamaItem(e.target.value);
  }

  function handleJumlahItem(e) {
    setJumlahItem(Number(e.target.value));
  }

  function handleKategoriItem(e) {
    setKategoriItem(e.target.value);
  }

  function hanldeSortItem(e) {
    setSortItem(e.target.value);
  }

  function handleSubmitSort(e) {
    e.preventDefault();
    dispatch({
      type: "SORTING_ITEMS",
      payload: sortItem,
    });
  }

  function handleSubmitItem(e) {
    e.preventDefault();
    if (!namaItem.trim()) {
      return;
    }
    dispatch({
      type: "ADD_ITEM",
      namaItem: namaItem,
      jumlahItem: jumlahItem,
      kategoriItem: kategoriItem,
    });
    setNamaItem("");
    setJumlahItem(1);
    setKategoriItem("");
  }

  return (
    <div>
      <h2>Item Belanja Form</h2>
      <div>
        <form>
          <input type="text" value={namaItem} onChange={handleNamaItem} />
          <input type="number" value={jumlahItem} onChange={handleJumlahItem} />
          <select value={kategoriItem} onChange={handleKategoriItem}>
            <option value="dapur">dapur</option>
            <option value="kamar_mandi">kamar mandi</option>
            <option value="kamar_tidur">kamar tidur</option>
          </select>
          <button onClick={handleSubmitItem}>tambahkan!</button>
        </form>
        <form>
          <label>
            sort{" "}
            <select value={sortItem} onChange={hanldeSortItem}>
              <option value="jumlah">jumlah</option>
              <option value="nama">nama</option>
            </select>
            <button onClick={handleSubmitSort}>urutkan</button>
          </label>
        </form>
      </div>
    </div>
  );
}
