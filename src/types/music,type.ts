type ID = string;
type ImageUrl = string;
interface IArtist {
	id: ID;
	name: string;
	image: ImageUrl;
	ispublished: boolean;
	isVerified: boolean;
}

interface ITrack {
	id: ID;
	artist: IArtist;
}
