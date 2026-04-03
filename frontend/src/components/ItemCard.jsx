import { useState } from 'react';
import { MapPin, Calendar, Terminal } from 'lucide-react';

const ItemCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="item-card">
      <div className="card-image-wrapper">
        {item.image ? (
          <img src={item.image} alt={item.title} className="card-image" />
        ) : (
          <div className="card-no-image">
            [ NO IMAGE DATA ]
          </div>
        )}
        
        <div className={`card-badge ${item.type === 'lost' ? 'badge-lost' : 'badge-found'}`}>
          {item.type}
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-desc">{item.description}</p>
        
        <div className="card-meta">
          <div className="meta-item">
            <MapPin size={16} />
            <span>LOC: {item.location}</span>
          </div>
          <div className="meta-item">
            <Calendar size={16} />
            <span>DAT: {item.date}</span>
          </div>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className={`btn-action ${item.type === 'lost' ? 'btn-lost' : 'btn-found'}`}
        >
          <Terminal size={18} strokeWidth={2.5} />
          {item.type === 'lost' ? 'I Have Found It' : "Claim: It's Mine"}
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4 className="modal-title">System Contact Info</h4>
            <div className="contact-info">
              <p className="contact-name">USR: {item.contactName}</p>
              <p className="contact-phone">{item.contactPhone}</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="btn-action btn-lost"
            >
              [ CLOSE CONNECTION ]
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;