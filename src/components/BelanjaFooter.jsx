import { useContext } from "react";
import { BelanjaContext } from "../reducer/BelanjaContext";

export default function BelanjaFooter({ boughtTotal, totalItem }) {
  const { dispatch } = useContext(BelanjaContext);
  return (
    <div>
      <h2>
        {`total barang terbeli ${boughtTotal} dari ${totalItem} total barang`}
      </h2>
      <>
        <button onClick={() => dispatch({ type: "CLEAR_LIST" })}>
          kosongkan!
        </button>
        <button onClick={() => dispatch({ type: "DELETE_CHECK_ITEMS" })}>
          terbeli
        </button>
      </>
    </div>
  );
}
