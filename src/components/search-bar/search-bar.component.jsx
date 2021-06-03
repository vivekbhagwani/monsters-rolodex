import React from 'react'
import './search-bar.styles.css'

export const SearchBar = ({ placeholder, handleChange }) => {
    return (
        <div class='search-bar'>
            <input
                className='search-input'
                type='search'
                placeholder={placeholder} 
                onChange={handleChange}
            />
        </div>
    )
}