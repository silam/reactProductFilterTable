import { ProductCategoryRow } from "./ProductCategoryRow/ProductCategoryRow";
import {ProductRow } from "./ProductRow/ProductRow";



export function ProductTable({products})
{
  const row = [];
  let lastCategory = null;
  products.forEach(product => {

    if (product.category !== lastCategory)
    {
      row.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );

    }

    row.push(<ProductRow product={product}
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
