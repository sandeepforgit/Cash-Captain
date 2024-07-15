import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
    user: {
        user_id: null,
        username: "",
        email: "",
        income: 0,
        expense: 0,
        balance: 0,
        transactions: [{}],
        isAuthenticated: false
    }
}

export const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = {
                id: nanoid(),
                username: action.payload.username,
                email: action.payload.email,
                income: action.payload.income,
                expense: action.payload.expense,
                balance: action.payload.balance,
                transactions: action.payload.transactions,
                isAuthenticated: true
            }
        },
        logoutUser: (state) => {
            state.user = initialState.user
        }
    }
})

export const initializeUser = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.post('http://localhost:5000/users/authenticate', 
          {token}
        );
        dispatch(setUser(response.data.userr));
      } catch (error) {
        console.error('Failed to initialize user', error);
      }
    }
};

export const { setUser, logoutUser } = userSlicer.actions

export default userSlicer.reducer