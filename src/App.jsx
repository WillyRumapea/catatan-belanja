import BelanjaAction from "./components/BelanjaAction";
import BelanjaForm from "./components/BelanjaForm";
import BelanjaItem from "./components/BelanjaItem";
import BelanjaList from "./components/BelanjaList";
import BelanjaProvider from "./reducer/BelanjaContext";

export default function App() {
  return (
    <BelanjaProvider>
      <BelanjaForm />
      <BelanjaList />
    </BelanjaProvider>
  );
}
