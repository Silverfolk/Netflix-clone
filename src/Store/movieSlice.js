import {createSlice} from '@reduxjs/toolkit'

const movieSlice= createSlice({
    name:'movie',
    initialState:{
        NowPlaying:null,
        PopularMovie:null,
        TopRatedMovie:null,
        UpcomingMovie:null,
        Trailer:null
    },
    reducers:{
        setNowPlaying:(state,action)=>{
            state.NowPlaying=action.payload
        },
        setPopularMovie:(state,action)=>{
            state.PopularMovie=action.payload
        },
        setTopRatedMovie:(state,action)=>{
            state.TopRatedMovie=action.payload
        },
        setUpcomingMovie:(state,action)=>{
            state.UpcomingMovie=action.payload
        },
        setTrailer:(state,action)=>{
            state.Trailer=action.payload
        }
    }
})

export const {setNowPlaying,setPopularMovie,setTopRatedMovie,setUpcomingMovie,setTrailer}=movieSlice.actions

export default movieSlice.reducer