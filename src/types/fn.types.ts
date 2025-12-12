import type { ITrack } from "./music.types";

export type TPlayFunction = (trackId: string) => void;
export type TVolumeFunction = (level: number) => void;

export function setVolume(level: number): void {
	if (level < 0 || level > 100) {
		throw new Error("Volume level must be between 0 and 100");
	}
	console.log(`Setting volume ti ${level}`);
}
export function addToQueue(
	track: ITrack,
	position: number = 1,
	isPlayNext: boolean = false
): void {
	console.log(`Add track: ${track.title} to position: ${position} in queue`);
}
