import "../style/components/itemFilteredItem.css";

export default function BelanjaFilteredItem({ filteredItem }) {
  return (
    <div className="item-filtered-box">
      <h2>{filteredItem.namaItem}</h2>
      <div>
        <p>jumlah: {filteredItem.jumlahItem}</p>
        <p>kategori: {filteredItem.kategoriItem}</p>
      </div>
    </div>
  );
}
