import type { IBase, ITrack } from "./music.types";

type EntractArrayType<T> = T extends (infer U)[] ? U : never;

export type TrackType = EntractArrayType<ITrack[]>;

type Optional<T> = {
	[K in keyof T]?: T[K];
};
type Nullable<T> = {
	[K in keyof T]: T[K] | null;
};
export type TrackDraft = Optional<ITrack>;
export type TrackUpdate = Nullable<ITrack>;

type Getter<T> = {
	[K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
export type TrackGetter = Getter<Omit<ITrack, keyof IBase>>;
