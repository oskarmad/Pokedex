import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPokemon } from '../api/fetchPokemons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoadingScreen from '../components/LoadingScreen';
import { Pokemon } from '../types/types';
import { waitFor } from '../utils/utils';
import styles from "./pokemons.module.css";

const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

useEffect(() => {
  const fetchAllPokemons = async () => {
    setIsLoading(true);
    await waitFor(500);
    const allPokemons = await fetchPokemon();
    setPokemons(allPokemons); 
    setIsLoading(false);
  }

  fetchAllPokemons();
},[])

if(isLoading || !pokemons){
  return <LoadingScreen/>
}

const filterPokemons = pokemons?.slice(0,151).filter ((pokemon: Pokemon) =>{
  return pokemon.name.toLowerCase().match(query.toLowerCase());
})


  return(
  <>
    <Header query={query} setQuery={setQuery}/>
      
    <main>
      <nav>
        {
        filterPokemons?.slice(0,151).map((pokemon: Pokemon) => (
          <Link key={pokemon.id} className={styles.listItem} to={`/pokemon/${pokemon.name.toLowerCase()}`}>
            <img className={styles.listItemIcon} src={pokemon.imgSrc} alt={pokemon.name}/>
            <div className={styles.listItemText}>
              <span>{pokemon.name}</span>
              <span>{pokemon.id}</span>
            </div>
          </Link>
        ))
        }
      </nav>
    </main>
    <Footer/>
  </>
  
)};

export default Pokemons;