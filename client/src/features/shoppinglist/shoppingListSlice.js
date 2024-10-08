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
});

export const { addList, addItem, removeItem, removeList } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
