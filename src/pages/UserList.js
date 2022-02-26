import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Header from '../components/Header';
import Card from '../components/Card';

const UserList = () => {
    const [listData, setListData] = useState([]);


    useEffect(() => {
        let moviesId = window.localStorage.movies
            ? window.localStorage.movies.split(",")
            : [];

        for (let i = 0; i < moviesId.length; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=3d10db8116625b9cf715196e5bebfa6f&language=en-US`).then((res) => setListData((listData) => [...listData, res.data]));
        }


    }, []);

    return (
        <div className="user-list-page">
            <Header />
            <h2>Favourite<span>💖</span></h2>
            <div className="result">
                {listData.length > 0 ? (
                    listData.map((movie) => <Card movie={movie} key={movie.id} />)
                ) : (
                    <h2>No favourite for the moment</h2>
                )}
            </div>
        </div>
    )
}

export default UserList;