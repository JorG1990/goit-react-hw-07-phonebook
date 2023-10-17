const { createSlice } = require("@reduxjs/toolkit");
const { getContactsThunk, deleteContactsThunk, addContactsThunk } = require("./contacts-thunk");

const handlePending = state => {
  state.isloading = true;
};

const handleRejected = ( state, { payload }) => {
  state.error = payload;
};

const contactsSlice = createSlice ({
  name: 'contacts',
  initialState: {
    items: [],
    isloading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
    .addCase(getContactsThunk.pending, handlePending)
    .addCase(getContactsThunk.rejected, handleRejected)
    .addCase(getContactsThunk.fulfilled, (state, { payload}) => {
      state.items = payload;
    })
    .addCase(addContactsThunk.pending, handlePending)
    .addCase(addContactsThunk.rejected, handleRejected)
    .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
      state.items = [payload, ...state.items];
    })
    .addCase(deleteContactsThunk.pending, handlePending)
    .addCase(deleteContactsThunk.rejected, handleRejected)
    .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload.id);
    });
  },
});

export const { addContactAction, deleContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
