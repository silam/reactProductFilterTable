import { ProductCategoryRow } from "./ProductCategoryRow/ProductCategoryRow";
import {ProductRow } from "./ProductRow/ProductRow";



export function ProductTable({products, filterText, inStockOnly})
{
  const row = [];
  let lastCategory = null;
  products.forEach(product => {
    if ( 
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    )
    {
      return;
    }


    if ( inStockOnly && !product.stocked){
      return;
    }
    if (product.category !== lastCategory)
    {
      row.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );

    }

    row.push(<ProductRow 
                      product={product}
                      key={product.name} />
    );
    
    lastCategory = product.category;


    
  });


  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  )
}
