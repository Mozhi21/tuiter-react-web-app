import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatar": "user4.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "comment": 0,
    "retweet": 0,
    "like": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers:{
        tuitsLikeToggle(state,action){
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            tuit.liked = !tuit.liked
            if (tuit.liked === true){tuit.like += 1}
            else {tuit.like -= 1}
            },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

        createTuit(state, action) {
                state.unshift({
                    ...action.payload,
                    ...templateTuit,
                    _id: (new Date()).getTime(),
                })
            }
        }
});

export  const {tuitsLikeToggle, createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer