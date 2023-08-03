// ** Redux Imports
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// ** Axios Imports
import Api from '../../services/Api';

export const getContacts = createAsyncThunk('contact/all', () => {
  return Api.getContacts()
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
});

export const getDetail = createAsyncThunk('contact/detail', id => {
  return Api.getDetail(id)
    .then(res => {
      console.log('detail', res.data);
      return res.data;
    })
    .catch(err => {
      return err;
    });
});

export const createContact = createAsyncThunk(
  'contact/create',
  (data, {dispatch, getState}) => {
    console.log('data', data);
    return Api.createContact(data)
      .then(async res => {
        await dispatch(getContacts(getState()));
        return res;
      })
      .catch(err => {
        return err;
      });
  },
);

export const updateContact = createAsyncThunk(
  'contact/update',
  (contact, {dispatch, getState}) => {
    let newdata = {...contact};
    delete newdata.id;
    return Api.updateContact(contact.id, newdata)
      .then(async res => {
        await dispatch(getDetail(contact.id));
        await dispatch(getContacts());
        return res.data;
      })
      .catch(err => {
        return {error: err.response.status};
      });
  },
);

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id, {dispatch, getState}) => {
    return Api.deleteContact(id)
      .then(async res => {
        await dispatch(getContacts());
        return res.data;
      })
      .catch(err => {
        return {error: err.response.status};
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
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.detail = action.payload.data;
      })
      //   .addCase(createContact.fulfilled, (state, action) => {
      //     console.log('payload', action.payload);
      //     state.data = action.payload;
      //   })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.error = action.payload.error;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.error = action.payload.error;
        // state.payload = action.payload;
      });
  },
});

export const {selectContact} = contactSlice.actions;

export default contactSlice.reducer;
