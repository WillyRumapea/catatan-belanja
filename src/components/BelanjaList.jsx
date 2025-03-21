import { useContext } from "react";
import { BelanjaContext } from "../reducer/BelanjaContext";
import BelanjaItem from "./BelanjaItem";
import BelanjaFooter from "./BelanjaFooter";

export default function BelanjaList() {
  const { items } = useContext(BelanjaContext);
  const totalTerbeli = items.filter((item) => item.terbeli).length;
  const totalItem = items.length;

  return (
    <div>
      <h2>Item Belanja List</h2>
      <ul>
        {items.map((item) => {
          return (
            <li
              key={item.id}
              style={{ marginTop: "12px", listStyleType: "none" }}
            >
              <BelanjaItem key={item.id} item={item}></BelanjaItem>
            </li>
          );
        })}
      </ul>
      <BelanjaFooter boughtTotal={totalTerbeli} totalItem={totalItem} />
    </div>
  );
}
