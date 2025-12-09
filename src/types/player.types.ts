import type { ITrack } from "./music,types";

export interface IPlayerState {
	currentTrackId: ITrack | null;
	queue: ITrack[];
	history: ITrack[];
	isPlaying: boolean;
	valume: number;
	currentTime: number;
	repeatMode: "off" | "one" | "all";
	isShuffling: boolean;
}
