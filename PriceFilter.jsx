// app/components/PriceFilter.jsx
'use client';
export default function PriceFilter({ value, onChange}) {
    return {
        <label> 
        Max Price: 
        <input type="number" value={value} onChange={e => onChange(e.target.value)} /> 
        </label>
    };
}