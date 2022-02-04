import React from "react";



const MovieList = (props) => {

    return(

        <>
            {props.movies.map((movie, index) => (

                <div className="image-container d-flex justify-content-start m3">

                    <img src={movie.Poster} alt="movies" />

                    <div

                        onClick = {() => props.handleFavoritesClick(movie)}
                        className="overlay d-flex align-items-center justify-content-center"
                    >

                        


                    </div>


                </div>

            ))}
        </>
    );

}

export default MovieList;