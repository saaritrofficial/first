import React, { useState } from 'react';
import { sizeOptions } from '../data/ProductDetails'; // Import the JSON data

const ProductPrice = () => {
  const [selectedSize, setSelectedSize] = useState("60ml");
  const currentProduct = sizeOptions[selectedSize];

  return (
    <div>
      {/* Add the select/combo box here */}
      <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
        {Object.keys(sizeOptions).map(size => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>

      {/* Your original modified code */}
      <p className="text-xl font-medium mb-4 flex items-center gap-2">
        <span className="text-base font-normal">Price for {selectedSize}:</span>
        {currentProduct.launchPrice ? (
          <>
            <span className="line-through decoration-red-500 text-red-500">{currentProduct.price}</span>
            <span className="text-green-500">{currentProduct.launchPrice}</span>
          </>
        ) : (
          <span>{currentProduct.price}</span>
        )}
      </p>
    </div>
  );
};