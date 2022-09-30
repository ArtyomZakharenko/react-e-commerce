import { IProduct, ISingleProduct } from "./product";

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

