import { SearchBar } from "./SearchBar/SearchBar";

import { ProductTable } from "./ProductTable/ProductTable";

export function FilterableProductTable({products})
{
  return (
    <div>
      <SearchBar></SearchBar>
      <ProductTable products={products}/>
    </div>
  )
}