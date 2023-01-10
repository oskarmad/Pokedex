import { Link } from "react-router-dom";
import PokemonPic from "../assets/pikachu.png"
import LocationPic from "../assets/pointer.png"
import ItemPic from "../assets/pokeball.png"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/pokemons"  className={styles.footerLink}>
        <img src={PokemonPic} alt="Pokeball" className={styles.footerIcon}/>
        Pokemons
      </Link>
      <Link to="/items"  className={styles.footerLink} onClick={(event) => event.preventDefault()}>
        <img src={ItemPic} alt="Pokeball" className={styles.footerIcon}/>
        Items
      </Link>
      <Link to="/location"  className={styles.footerLink} onClick={(event) => event.preventDefault()}>
        <img src={LocationPic} alt="Pokeball" className={styles.footerIcon}/>
        Map
      </Link>
    </footer>
  );
};

export default Footer;
