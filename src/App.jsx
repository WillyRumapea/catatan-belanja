import BelanjaFilter from "./components/BelanjaFilter";
import BelanjaForm from "./components/BelanjaForm";
import BelanjaList from "./components/BelanjaList";
import BelanjaProvider from "./reducer/BelanjaContext";

export default function App() {
  return (
    <BelanjaProvider>
      <h1>Catatan Belanja</h1>
      <BelanjaForm />
      <BelanjaList />
      <BelanjaFilter />
    </BelanjaProvider>
  );
}
