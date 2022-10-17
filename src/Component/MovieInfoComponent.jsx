import Axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
const API_KEY = '3746563d';

const Container = styled.div`
display:flex;
flex-direction:row;
padding:20px 30px;
border-bottom:3px solid lightgray;
justify-content : center;
align-item : center;

`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
  margin-left : 0px;
`;

const InfoColumn = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`;

const MovieName = styled.span`
font-size : 18px;
font-weight:600;
color:black;
margin:5px 0px  0px 0px;
white-space: nowrap;
text-overflow: ellipsis;
overflow : hidden;
`;

const MovieInfo = styled.span`
font-size : 16px;
font-weight:500;
color:black;
margin:5px 0px  0px 0px;
white-space: nowrap;
text-overflow: ellipsis;
overflow : hidden;
&span{
    opacity: 0.5;
}
`;


function MovieInfoComponent(props) {

    const[movieInfo , setMovieInfo] = useState();
    const{selectedMovie} = props;

    useEffect(()=>{
        Axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`).then((response)=>{
            console.log(response);
            console.log('hellow');
            setMovieInfo(response);
        })
    },[selectedMovie])

    console.log(props);
    console.log("Movie Info"+movieInfo);
  return (
    <>
      <Container>
        <CoverImage src={movieInfo.data.Poster} />
        <InfoColumn>
            <MovieName>Movie :{movieInfo.data.Title}</MovieName>
            {/* <MovieInfo>IMBD Rating:<span>{movieInfo.data.imdbRating}</span></MovieInfo> */}
            <MovieInfo>Year:{movieInfo.data.Year}</MovieInfo>
            <MovieInfo>Language:{movieInfo.data.Language}</MovieInfo>
            <MovieInfo>Awards:{movieInfo.data.Awards}</MovieInfo>
            <MovieInfo>Country:{movieInfo.data.Country}</MovieInfo>
            <MovieInfo>Runtime:{movieInfo.data.Runtime}</MovieInfo>
            <MovieInfo>Genre:{movieInfo.data.Genre}</MovieInfo>
            <MovieInfo>Director:{movieInfo.data.Director}</MovieInfo>
            <MovieInfo>Type:{movieInfo.data.Type}</MovieInfo>
            <MovieInfo>Writer:{movieInfo.data.Writer}</MovieInfo>
        </InfoColumn>
     
      </Container>
    </>
  )
}

export default MovieInfoComponent