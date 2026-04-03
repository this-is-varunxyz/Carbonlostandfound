import { useState } from 'react';
import FilterBar from '../components/FilterBar';
import ItemCard from '../components/ItemCard';

const dummyItems = [
  {
    id: 1,
    title: "Black Leather Wallet",
    description: "Lost my black leather wallet containing my ID card and some cash. Please let me know if you find it!",
    type: "lost",
    location: "Academic Block",
    date: "2026-04-03",
    contactName: "Rahul S.",
    contactPhone: "+91 9876543210",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "Boat Wireless Earphones",
    description: "Found a pair of black Boat wireless earphones on a bench near the food court.",
    type: "found",
    location: "Cafeteria",
    date: "2026-04-02",
    contactName: "Priya M.",
    contactPhone: "+91 9123456789",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "Casio Scientific Calculator",
    description: "Left my Casio FX-991EX calculator in the Computer Networks lab yesterday evening.",
    type: "lost",
    location: "Academic Block",
    date: "2026-04-01",
    contactName: "Amit K.",
    contactPhone: "+91 9988776655",
    image: null 
  }
];

export default function Feed() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredItems = dummyItems.filter((item) => {
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

      {filteredItems.length > 0 ? (
        <div className="item-grid">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>ERR: NO RECORDS MATCH CURRENT FILTER</p>
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