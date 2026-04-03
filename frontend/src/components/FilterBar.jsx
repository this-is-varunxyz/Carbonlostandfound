import { Search } from 'lucide-react';

const FilterBar = ({ searchQuery, setSearchQuery, filterType, setFilterType }) => {
  return (
    <div className="filter-bar">
      {/* Search Input */}
      <div className="search-wrapper">
        <Search className="search-icon" size={18} strokeWidth={2.5} />
        <input
          type="text"
          placeholder="SEARCH TERMINAL..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Type Filter */}
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="filter-select"
      >
        <option value="all">ALL ITEMS</option>
        <option value="lost">LOST ITEMS</option>
        <option value="found">FOUND ITEMS</option>
      </select>
    </div>
  );
};

export default FilterBar;