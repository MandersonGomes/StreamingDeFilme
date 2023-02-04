import React from 'react'
import './MovieHeader.css'

function MovieHeader({item}) {

    let date = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200) + "..."; 
    }

    return(
        <section className="headmovie" style={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>

            <div className="horizontalFade">
                <div className="verticalFade">

                    <div className="headName">{item.original_name}</div>

                    <div className="headInfo">
                        <div className="headPoints">{item.vote_average} Pontos</div>
                        <div className="headYear">{date.getFullYear()}</div>
                        <div className="headSeasons">{item.number_of_seasons} Temporada{
                            item.number_of_seasons !== 1 ? 's':''}
                        </div>
                    </div>

                    <div className="headDescription">{description}</div> 

                    <div className="headButtons">
                        <a href={`/watch/${item.id}`} className="play">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="myList">+ Minha Lista</a>
                    </div>

                    <div className="headGenres">
                        <strong>Gêneros:</strong> {genres.join(', ')}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default MovieHeader