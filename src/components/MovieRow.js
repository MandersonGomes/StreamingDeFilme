import React, { useState } from 'react'
import './MovieRow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function MovieRow({title, items}) {
    const [scrollX, setScrollX] = useState(0);

    const handleLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) { 
            x = 0;
        }
        setScrollX(x);
    }

    const handleRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWith = items.results.length * 150;
        if((window.innerWidth - listWith) > x) {
            x = (window.innerWidth - listWith) - 60;
        }
        setScrollX(x);
    }

    return(
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="iconLeft" onClick={handleLeft}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="iconRight" onClick={handleRight}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="listArea">
                <div className="list" style={{marginLeft: scrollX, width: items.results.length * 150}}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="items">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                                 alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieRow