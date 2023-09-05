// ** Redux Imports
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// ** Axios Imports
import Api from '../../services/Api';

export const getContacts = createAsyncThunk('contact/all', async () => {
  try {
    const res = await Api.getContacts();
    return res;
  } catch (err) {
    return err;
  }
});

export const getDetail = createAsyncThunk('contact/detail', async id => {
  try {
    const res = await Api.getDetail(id);
    return res.data;
  } catch (err) {
    return err;
  }
});

export const createContact = createAsyncThunk(
  'contact/create',
  async (data, {dispatch, getState}) => {
    console.log('data', data);
    try {
      const res = await Api.createContact(data);
      await dispatch(getContacts(getState()));
      return await res;
    } catch (err) {
      return err;
    }
  },
);

export const updateContact = createAsyncThunk(
  'contact/update',
  async (contact, {dispatch, getState}) => {
    let newdata = {...contact};
    delete newdata.id;
    try {
      const res = await Api.updateContact(contact.id, newdata);
      await dispatch(getDetail(contact.id));
      await dispatch(getContacts());
      return await res.data;
    } catch (err) {
      if (err.response && err.response.data) {
        throw new Error(err.response.data.message);
      } else {
        throw new Error('Unknown error occurred.');
      }
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id, {dispatch, getState}) => {
    return Api.deleteContact(id)
      .then(async res => {
        await dispatch(getContacts());
        return res;
      })
      .catch(err => {
        if (err.response && err.response.data) {
          throw new Error(err.response.data.message);
        } else {
          throw new Error('Unknown error occurred.');
        }
      });
  },
);

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [],
    detail: {},
    payload: null,
    error: null,
  },
  reducers: {
    selectContact: (state, action) => {
      if (action.payload === null) {
        state.selected = null;
      } else {
        state.selected = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.error = null;
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.detail = action.payload;
        state.error = null;
      })
      // .addCase(updateContact.fulfilled, (state, action) => {
      //   state.error = action.error.message;
      // })
      // .addCase(deleteContact.fulfilled, (state, action) => {
      //   state.error = action.error.message;
      // });
      .addCase(createContact.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {selectContact} = contactSlice.actions;

export default contactSlice.reducer;
