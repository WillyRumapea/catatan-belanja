import { useContext } from "react";
import { BelanjaContext } from "../reducer/BelanjaContext";
import BelanjaItem from "./BelanjaItem";

export default function BelanjaList() {
  const { items } = useContext(BelanjaContext);

  return (
    <div>
      <h2>Item Belanja List</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <BelanjaItem key={item.id} item={item}></BelanjaItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
