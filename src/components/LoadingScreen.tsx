import React from 'react'
import pokedex from '../assets/pokedex.png'
import styles from './loadingScreen.module.css'

const LoadingScreen = () => {
    return (
        <div className={styles.loadingScreen}>
            <img src={pokedex} alt="pokedex" className={styles.loadingScreenIcon}/>
        </div>
    );
};

export default LoadingScreen;