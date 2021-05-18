import React from 'react'
import axios from "axios"

// URL for searching videos
// https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=20&q=cats

// URL for popular/random videos
// https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${apiKey}&part=snippet&maxResults=10


const apiKey = process.env.REACT_APP_API_KEY;

const getRandom = async () => {
const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${apiKey}&part=snippet&maxResults=10`)
//console.log(data.items)
return data.items
}

const getSearch = async () => {

}


export default {
    getRandom,
    getSearch
}
