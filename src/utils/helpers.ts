import { IProduct } from "../models/product";

export const formatPrice = (number: number) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(number / 100)
}

export const getUniqueValues = (data: IProduct[], type: string) => {
	let unique = data.map((item) => item[type as keyof IProduct])
	if (type === 'colors') {
		unique = unique.flat()
	}
	return ['all', ...new Set(unique)] as string[];
}
