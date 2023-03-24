import { SearchBar } from "./SearchBar/SearchBar";

import { ProductTable } from "./ProductTable/ProductTable";
import { useState } from "react";
export function FilterableProductTable({products})
{

  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false )


  return (
    <div>
      <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}

        ></SearchBar>
      <ProductTable products={products}

        filterText={filterText}
        inStockOnly={inStockOnly}

      />
    </div>
  )
}