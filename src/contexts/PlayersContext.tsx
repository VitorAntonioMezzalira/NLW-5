import { createContext, ReactNode, useState } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  url: string;
  duration: number;
}

type PlayerContextData = {
  episodeList: Array<Episode>;
  currentEpisodeIndex: number;
  play: (episode: Episode) => void;
  playList: (list: Array<Episode>, index: number) => void;
  hasNext: boolean;
  hasPrevius: boolean;
  playNext: () => void;
  playPrevius: () => void;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  togglePlay: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  setPlayingState: (state: boolean) => void;
  clearPlayState: () => void;

}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerContexProviderProps = {
  children: ReactNode
}

export function PlayerContextProvider({ children }: PlayerContexProviderProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list: Array<Episode>, index: number) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true)
  }

  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;
  const hasPrevius = currentEpisodeIndex > 0;

  function playNext() {
    if (isShuffling) {
      const nextRandonEpisodeIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextRandonEpisodeIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevius() {
    if (hasPrevius) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
  }

  function clearPlayState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        play,
        playList,
        hasNext,
        hasPrevius,
        playNext,
        playPrevius,
        isPlaying,
        isLooping,
        isShuffling,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        setPlayingState,
        clearPlayState
      }}>
      {children}
    </PlayerContext.Provider>
  )

}


