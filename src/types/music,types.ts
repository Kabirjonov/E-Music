export type Tid = string;
export type TimageUrl = string;
export type TStatus = "success" | "error" | "loading";

type TBase = {
	id: Tid;
	createdAt: string;
	updatedAt: string;
};
export type TArtist = {
	name: string;
	image: TimageUrl;
	isVerified: boolean;
} & TBase;

export interface IBase {
	id: Tid;
	createdAt: string;
	updatedAt: string;
}
export interface IArtist extends IBase {
	name: string;
	image: TimageUrl;
	ispublished: boolean;
	isVerified: boolean;
}
export interface ITrack extends IBase {
	artist: IArtist;
	title: string;
	duration: number;
	isPublished: boolean;
	audioUrl: string;
}
