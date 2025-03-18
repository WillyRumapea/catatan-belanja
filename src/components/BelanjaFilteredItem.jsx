import { useContext } from "react";
import { BelanjaContext } from "../reducer/BelanjaContext";

export default function BelanjaFilteredItem({ filteredItem }) {
  const { dispatch } = useContext(BelanjaContext);
  return (
    <div>
      <h2>{filteredItem.namaItem}</h2>
      <p>{filteredItem.jumlahItem}</p>
      <p>{filteredItem.kategoriItem}</p>
      <input
        type="checkbox"
        onChange={() =>
          dispatch({ type: "CHECKLIST_ITEM", id: filteredItem.id })
        }
        checked={filteredItem.terbeli}
      />
    </div>
  );
}
