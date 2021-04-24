import { createContext } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  url: string;
}

type PlayerContextData = {
  episodeList: Array<Episode>;
  currentEpisodeIndex: number;
  play: (episode: Episode) => void;
  isPlaying: boolean;
}

export const PlayerContext = createContext({} as PlayerContextData)