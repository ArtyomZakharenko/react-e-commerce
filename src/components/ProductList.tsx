import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import { IFilterState } from "../models/states";

const ProductList = () => {
  const { filtered_products: products, grid_view } : IFilterState = useFilterContext()

  if (!products.length) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    )
  }

  if (!grid_view) {
    return <ListView products={products} />
  }
  return <GridView products={products} />
}

export default ProductList
