import { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import ItemCard from '../components/ItemCard';

export default function Feed() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Fetch items from the backend
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/items');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []); // Empty array means this runs once when the page loads

  // Filter the live data
  const filteredItems = items.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filterType === 'all' || item.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Campus Ledger</h1>
        <p className="page-subtitle">A decentralized board to track lost and found items.</p>
      </div>

      <FilterBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        filterType={filterType} 
        setFilterType={setFilterType} 
      />

      {/* Show loading state while fetching from DB */}
      {isLoading ? (
        <div className="empty-state">
          <p>ESTABLISHING CONNECTION... FETCHING DATA</p>
        </div>
      ) : filteredItems.length > 0 ? (
        <div className="item-grid">
          {/* Note: MongoDB uses _id instead of id */}
          {filteredItems.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>ERR: NO RECORDS MATCH CURRENT FILTER OR DATABASE IS EMPTY</p>
          <button 
            onClick={() => { setSearchQuery(''); setFilterType('all'); }}
            className="btn-clear"
          >
            RESET_PARAMETERS
          </button>
        </div>
      )}
    </div>
  );
}