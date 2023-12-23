import { createSlice } from '@reduxjs/toolkit';

export const setGreeting = (greeting) => ({
  type: 'greeting/setGreeting',
  payload: greeting,
});

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/random_greeting');
    const data = await response.json();
    console.log(data)
    dispatch(setGreeting(data.greeting));
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: '',
  reducers: {
    setGreeting: (state, action) => action.payload,
  },
});

export default greetingSlice.reducer;
