import { useContext } from "react";
import { BelanjaContext } from "../reducer/BelanjaContext";

export default function BelanjaAction({ item }) {
  const { dispatch } = useContext(BelanjaContext);

  return (
    <>
      <button onClick={() => dispatch({ type: "DELETE_ITEM", id: item.id })}>
        hapus
      </button>
      <button onClick={() => dispatch({ type: "UPDATE_INFO", id: item.id })}>
        update
      </button>
    </>
  );
}
