import {
	CLEAR_FILTERS,
	FILTER_PRODUCTS,
	LOAD_PRODUCTS,
	SET_GRIDVIEW,
	SET_LISTVIEW,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	UPDATE_SORT,
} from '../actions'
import { IFilterState } from "../models/states";
import { IProduct } from "../models/product";

const filter_reducer = (state: IFilterState, action: { type: string, payload?: any }) => {
	switch (action.type) {
		case LOAD_PRODUCTS:
			let maxPrice = action.payload.map((p: IProduct) => p.price)
			maxPrice = Math.max(...maxPrice)
			return {
				...state,
				all_products: [...action.payload],
				filtered_products: [...action.payload],
				filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
			}
		case SET_GRIDVIEW:
			return { ...state, grid_view: true }
		case SET_LISTVIEW:
			return { ...state, grid_view: false }
		case UPDATE_SORT:
			return { ...state, sort: action.payload }
		case SORT_PRODUCTS:
			const { sort, filtered_products } = state
			let tempProducts = [...filtered_products]
			if (sort === 'price-lowest') {
				tempProducts = tempProducts.sort((a, b) => a.price - b.price);
			}
			if (sort === 'price-highest') {
				tempProducts = tempProducts.sort((a, b) => b.price - a.price);
			}
			if (sort === 'name-a') {
				tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
			}
			if (sort === 'name-z') {
				tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
			}
			return { ...state, filtered_products: tempProducts }
		case UPDATE_FILTERS:
			const { name, value } = action.payload
			return { ...state, filters: { ...state.filters, [name]: value } }
		case FILTER_PRODUCTS:
			const { all_products } = state
			const { text, category, company, color, price, shipping } = state.filters
			let tempProducts2 = [...all_products];
			if (text) {
				tempProducts2 = tempProducts2.filter((product) => product.name.toLowerCase().startsWith(text));
			}
			if (category !== 'all') {
				tempProducts2 = tempProducts2.filter((product) => product.category === category);
			}
			if (company !== 'all') {
				tempProducts2 = tempProducts2.filter((product) => product.company === company);
			}
			if (color !== 'all') {
				tempProducts2 = tempProducts2.filter((product) => product.colors.find((c) => c === color));
			}
			// filter by price
			tempProducts2 = tempProducts2.filter((product) => product.price <= price);
			// filter by shipping
			if (shipping) {
				tempProducts2 = tempProducts2.filter((product) => product.shipping);
			}
			return { ...state, filtered_products: tempProducts2 }
		case CLEAR_FILTERS:
			return {
				...state,
				filters: {
					...state.filters,
					text: '',
					category: 'all',
					company: 'all',
					color: 'all',
					price: state.filters.max_price,
					shipping: false,
				},
			}
	}
	throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
