import BelanjaFilter from "./components/BelanjaFilter";
import BelanjaForm from "./components/BelanjaForm";
import BelanjaList from "./components/BelanjaList";
import BelanjaProvider from "./reducer/BelanjaContext";
import "./style/components/header.css";

export default function App() {
  return (
    <BelanjaProvider>
      <div>
        <h1>Catatan Belanja</h1>
      </div>
      <BelanjaForm />
      <BelanjaList />
      <BelanjaFilter />
    </BelanjaProvider>
  );
}
