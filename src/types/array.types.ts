import type { ITrack } from "./music,types";

export const recentlyPlayed: ITrack[] = [];
export const topTracks: ReadonlyArray<ITrack[]> = [];

export type TAudioVisualizerBar = [frequency: number, amplitude: number];
type TTimeFormat = [minutes: number, seconds: number];
export function formatDuration(duration: number): TTimeFormat {
	return [Math.floor(duration / 60), duration % 60];
}
