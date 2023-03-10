import React from 'react';
import './searchPanel.scss';

export default function SearchPanel({handleSearchChange, search}) {
    return (
      <div className="search">
        <input
          onChange={handleSearchChange}
          type="text"
          value={search}
          className="search-input"
          placeholder="Filter by name..."
        />
      </div>
    );
}