import type { TimageUrl, ITrack, IBase, Tid } from "./music.types";

export interface IPlayList extends IBase {
	name: string;
	description?: string;
	coverImage: TimageUrl;
	tracks: ITrack[];
	owner: {
		id: Tid;
		displayName: string;
		isPremium: boolean;
	};
	isPublic: boolean;
	followers: number;
}
