import { useState } from 'react';
import { UploadCloud, Image as ImageIcon } from 'lucide-react';

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'found',
    location: '',
    date: '',
    contactName: '',
    contactPhone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('SYSTEM UPDATED: Item successfully posted.');
    setFormData({
      title: '', description: '', type: 'found', location: '', date: '', contactName: '', contactPhone: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      
      {/* Item Type Toggle */}
      <div className="form-section">
        <label className="form-label">REPORT TYPE</label>
        <div className="radio-group">
          <label className="radio-label">
            <input type="radio" name="type" value="lost" checked={formData.type === 'lost'} onChange={handleChange} />
            I Lost Something
          </label>
          <label className="radio-label">
            <input type="radio" name="type" value="found" checked={formData.type === 'found'} onChange={handleChange} />
            I Found Something
          </label>
        </div>
      </div>

      {/* Title & Description */}
      <div className="form-section">
        <label className="form-label">ITEM DESIGNATION (TITLE)</label>
        <input type="text" name="title" required value={formData.title} onChange={handleChange} placeholder="e.g., Black Leather Wallet" className="form-input mb-4" style={{marginBottom: '1.5rem'}} />
        
        <label className="form-label">PHYSICAL DESCRIPTION</label>
        <textarea name="description" required value={formData.description} onChange={handleChange} placeholder="Provide details like color, brand, or unique marks..." className="form-input"></textarea>
      </div>

      {/* Location & Date */}
      <div className="form-row">
        <div>
          <label className="form-label">LAST KNOWN LOCATION</label>
          <input 
            type="text" 
            name="location" 
            required 
            value={formData.location} 
            onChange={handleChange} 
            placeholder="e.g., Library Desk 4, Food Court" 
            className="form-input" 
          />
        </div>
        <div>
          <label className="form-label">DATE RECORDED</label>
          <input type="date" name="date" required value={formData.date} onChange={handleChange} className="form-input" />
        </div>
      </div>

      {/* Image Upload Area */}
      <div className="form-section">
        <label className="form-label">VISUAL DATA (UPLOAD IMAGE)</label>
        <label className="file-upload-box">
          <ImageIcon size={48} strokeWidth={1.5} color="var(--black)" />
          <span className="file-upload-text">CLICK TO SELECT FILE</span>
          <span className="file-upload-subtext">SUPPORTED: PNG, JPG (MAX 5MB)</span>
          <input type="file" style={{ display: 'none' }} accept="image/*" />
        </label>
      </div>

      <hr className="section-divider" />

      {/* Contact Details */}
      <div className="form-section">
        <h3 className="form-label" style={{fontSize: '1.2rem', marginBottom: '1.5rem'}}>USER CONTACT PROTOCOL</h3>
        <div className="form-row">
          <div>
            <label className="form-label">FULL NAME</label>
            <input type="text" name="contactName" required value={formData.contactName} onChange={handleChange} placeholder="ENTER NAME" className="form-input" />
          </div>
          <div>
            <label className="form-label">COMMUNICATION LINK (PHONE)</label>
            <input type="tel" name="contactPhone" required value={formData.contactPhone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="form-input" />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn-submit">
        <UploadCloud size={24} strokeWidth={2.5} />
        INITIALIZE UPLOAD
      </button>

    </form>
  );
};

export default UploadForm;