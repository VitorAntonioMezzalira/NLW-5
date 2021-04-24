import { Header } from '../components/Header';
import '../styles/global.scss';
import styles from '../styles/app.module.scss'
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayersContext';

function MyApp({ Component, pageProps }) {



  return (
    <div className={styles.wrapper}>
      <PlayerContextProvider>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </PlayerContextProvider>
    </div>
  )
}

export default MyApp
