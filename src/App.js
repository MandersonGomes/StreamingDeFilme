import React, { useEffect, useState }from 'react'

import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow'
import MovieHeader from './components/MovieHeader'
import Header from './components/Header'

import './App.css'

function App() {

  const [movieList, setMovieList] = useState([]);
  const [movieHeader, setMovieHeader] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    //Taking all the list
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)

    //Taking the header
      let header = list.filter(i => i.slug === 'originals');
      let randomHeader = Math.floor(Math.random() * (header[0].items.results.length));
      let choosen = header[0].items.results[randomHeader];
      let choosenInfo = await Tmdb.getMovieInfo(choosen.id, 'tv');
      setMovieHeader(choosenInfo)
    }
  
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      }else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="page">
      
      <Header black={blackHeader}/>

      {movieHeader && 
        <MovieHeader item={movieHeader}/>
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Construído pela GH Enterprise.<br/>
        Dados retirados do site themoviedb.org 
      </footer>
    </div>
  );
}
export default App