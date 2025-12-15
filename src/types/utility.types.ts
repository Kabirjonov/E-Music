import type { IBase, ITrack, Tid } from "./music.types";
import type { IPlayList } from "./playlist.types";
export function updateTrack(
	trackid: Tid,
	data: Partial<Omit<ITrack, keyof IBase>>
): void {
	console.log("Update track:", trackid, data);
}
export type LockPlatList = Readonly<IPlayList>;
