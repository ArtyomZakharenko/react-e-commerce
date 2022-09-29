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
