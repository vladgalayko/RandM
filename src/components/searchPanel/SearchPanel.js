import React from 'react';

export default function SearchPanel({handleSearchChange, search}) {
    return (
      <div className="conversation-search">
        <input
          onChange={handleSearchChange}
          type="text"
          value={search}
          className="conversation-search-input"
          placeholder="Filter by name..."
        />
      </div>
    );
}