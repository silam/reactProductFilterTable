import logo from './logo.svg';
import './App.css';
import {FilterableProductTable}  from './FilterableProductTable/FilterableProductTable';
import {PRODUCTS } from './Products';



export default function App() {
 
    return <FilterableProductTable products={PRODUCTS} />;

}

