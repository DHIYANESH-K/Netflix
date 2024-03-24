import { createSlice } from "@reduxjs/toolkit"


const moviesSlice = createSlice({
    name:"mpvies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        upComingMovies:null,
        topRatedMovies:null,
        popularMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        }
    }
})

export default moviesSlice.reducer;

export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpComingMovies}=moviesSlice.actions;
