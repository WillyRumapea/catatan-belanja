import { v4 } from "uuid";

export const initialItem = [
  {
    id: v4(),
    namaItem: "Kopi saset",
    jumlahItem: 12,
    kategoriItem: "dapur",
    terbeli: false,
    ganti: false,
  },
  {
    id: v4(),
    namaItem: "Susu Bear Brand",
    jumlahItem: 2,
    kategoriItem: "kamar_tidur",
    terbeli: true,
    ganti: false,
  },
  {
    id: v4(),
    namaItem: "Shampo saset",
    jumlahItem: 12,
    kategoriItem: "kamar_mandi",
    terbeli: true,
    ganti: false,
  },
];

export function BelanjaReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const newItem = [
        ...state,
        {
          id: v4(),
          namaItem: action.namaItem,
          jumlahItem: action.jumlahItem,
          kategoriItem: action.kategoriItem,
          terbeli: false,
          ganti: false,
        },
      ];
      console.log(newItem);
      return newItem;
    }
    case "DELETE_ITEM": {
      const deletedItem = state.filter((item) => item.id !== action.id);
      return deletedItem;
    }
    case "DELETE_CHECK_ITEMS": {
      const deletedCheckItems = state.filter((item) => !item.terbeli);
      return deletedCheckItems;
    }
    case "CHECKLIST_ITEM": {
      const checkedItem = state.map((item) =>
        item.id === action.id ? { ...item, terbeli: !item.terbeli } : item
      );
      return checkedItem;
    }
    case "FILTER_ITEMS": {
      action.setFilteredItems(
        state.filter((item) => item.kategoriItem === action.kategoriItem)
      );
      return state;
    }
    case "UPDATE_INFO": {
      const updatedInfo = state.map((item) =>
        item.id === action.id ? { ...item, ganti: true } : item
      );
      return updatedInfo;
    }
    case "SAVE_UPDATE": {
      const updatedItem = state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              namaItem: action.namaItem,
              jumlahItem: action.jumlahItem,
              ganti: false,
            }
          : item
      );
      return updatedItem;
    }
    case "CLEAR_LIST": {
      return [];
    }
    default:
      return state;
  }
}
