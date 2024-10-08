import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lists: [],
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addList(state, action) {
      state.lists.push({ name: action.payload, items: [] });
    },
    addItem(state, action) {
      const { listName, item } = action.payload;
      const list = state.lists.find((l) => l.name === listName);
      if (list) {
        list.items.push(item);
      }
    },
    removeItem(state, action) {
      const { listName, item } = action.payload;
      const list = state.lists.find((l) => l.name === listName);
      if (list) {
        list.items = list.items.filter((i) => i !== item);
      }
    },
    removeList(state, action) {
      state.lists = state.lists.filter((l) => l.name !== action.payload);
    },
  },
  editListName(state, action) {
    const { oldName, newName } = action.payload;
    const list = state.lists.find((l) => l.name === oldName);
    if (list) {
      list.name = newName;
    }
  },
  editItemName(state, action) {
    const { listName, oldItemName, newItemName } = action.payload;
    const list = state.lists.find((l) => l.name === listName);
    if (list) {
      const itemIndex = list.items.findIndex((i) => i === oldItemName);
      if (itemIndex !== -1) {
        list.items[itemIndex] = newItemName;
      }
    }
  }, 
});

export const { addList, addItem, removeItem, removeList, editItemName, editListName } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
