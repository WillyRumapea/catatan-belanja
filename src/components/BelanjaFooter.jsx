import { useContext } from "react";
import { BelanjaContext } from "../reducer/BelanjaContext";
import "../style/components/itemFooter.css";

export default function BelanjaFooter({ boughtTotal, totalItem }) {
  const { dispatch } = useContext(BelanjaContext);
  return (
    <div className="item-footer">
      <h2>
        {`total barang terbeli ${boughtTotal} dari ${totalItem} total barang`}
      </h2>
      <div className="action-button">
        <button onClick={() => dispatch({ type: "CLEAR_LIST" })}>
          kosongkan!
        </button>
        <button onClick={() => dispatch({ type: "DELETE_CHECK_ITEMS" })}>
          terbeli
        </button>
      </div>
    </div>
  );
}
