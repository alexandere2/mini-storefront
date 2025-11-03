//app/components/catalog
'use client';
import { useState } from 'react';
import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';
import ProductList from './ProductListFiltered';

export default function ProductCatalog() {
    const [filters, setFilters] = useState({ price: '', category: '' });
    const update =(k,v) => setFilters(prev => ({ ...prev, [k]: v }));
    return (
        <div>
        <h2>Product Catalog</h2>
        <PriceFilter value={filters.price} onChange={(v) => update('price', v)} />
        <CategoryFilter value={filters.category} onChange={(v)} => update('category', v)} />
        <ProductList filters={filters} />
        </div>
    );
}
