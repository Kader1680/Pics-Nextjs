import React from 'react'

const FilterBars = () => {
  return (
    <div className='mt-4'>
        <select >
            <option>Color</option>
            <option>White & Black</option>
        </select>
        <select style={{ marginLeft: "1rem" }} >
            <option>Type</option>
            <option>Png</option>
            <option>Jpg</option>
            <option>Pdf</option>
        </select>
        <select style={{ marginLeft: "1rem" }}>
            <option>Free</option>
            <option>Primum</option>
        </select>
    </div>
  )
}

export default FilterBars