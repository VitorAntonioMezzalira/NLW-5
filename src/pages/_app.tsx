import { Header } from '../components/Header';
import '../styles/global.scss';
import styles from '../styles/app.module.scss'
import { Player } from '../components/Player';
import { PlayerContext } from '../contexts/PlayersContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  return (
    <div className={styles.wrapper}>

      <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play, isPlaying }}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </PlayerContext.Provider>

    </div>
  )
}

export default MyApp
