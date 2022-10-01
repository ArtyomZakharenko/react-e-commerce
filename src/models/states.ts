import { IProduct, ISingleProduct } from "./product";
import { ICartItem } from "./cart";

export interface IProductState {
	isSidebarOpen: boolean;
	products_loading: boolean;
	products_error: boolean;
	products: IProduct[];
	featured_products: IProduct[];
	single_product_loading: boolean;
	single_product_error: boolean;
	single_product: ISingleProduct;
}

export interface IFilterState {
	filtered_products: IProduct[];
	all_products: IProduct[];
	grid_view: boolean;
	sort: string;
	filters: {
		text: string;
		company: string;
		category: string;
		color: string;
		min_price: number;
		max_price: number;
		price: number;
		shipping: boolean;
	},
}
export interface ICartState {
	cart: ICartItem[];
	total_items: number;
	total_amount: number;
	shipping_fee: number;
}
