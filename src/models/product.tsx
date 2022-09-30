export interface IProduct {
	id: string;
	category: string;
	colors: string[];
	company: string;
	description: string;
	featured?: boolean;
	image: string;
	name: string;
	price: number;
	shipping?: boolean;
}

export interface ISingleProduct {
	id: string;
	name: string;
	price: number;
	description: string;
	image: string;
	images: Images[];
	company: string;
	category: string;
	shipping: boolean;
	stock: number;
	stars: number;
	reviews: number;
	colors: string[];
}

export interface Images {
	filename: string;
	height: number;
	width: number;
	id: string;
	size: number;
	type: string;
	url: string;
	thumbnails: IThumbnails;
}

interface IThumbnails {
	full: {
			height: number;
			width: number;
			url: string;
		};
	large: {
		height: number;
		width: number;
		url: string;
	};
	small: {
		height: number;
		width: number;
		url: string;
	}
}
