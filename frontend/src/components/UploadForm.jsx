import { useState } from 'react';
import { UploadCloud, Image as ImageIcon, X } from 'lucide-react';

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: '', description: '', type: 'found', location: '', date: '', contactName: '', contactPhone: '',
  });

  // New state for handling the actual image file and its preview
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      // Create a local URL to show a preview before uploading
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // To send files, we MUST use FormData instead of JSON
    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });
    
    // Append the image file if it exists
    if (imageFile) {
      submitData.append('image', imageFile);
    }

    try {
      const response = await fetch('http://localhost:5000/api/items', {
        method: 'POST',
        // DO NOT set Content-Type header here. The browser automatically sets it 
        // to 'multipart/form-data' with the correct boundary when passing FormData.
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        alert('SYSTEM UPDATED: Item successfully saved with image.');
        setFormData({ title: '', description: '', type: 'found', location: '', date: '', contactName: '', contactPhone: '' });
        clearImage();
      } else {
        alert(`ERR: ${data.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('ERR: Could not connect to the server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {/* ... Report Type, Title, Location sections stay EXACTLY the same ... */}
      
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
          <input type="text" name="location" required value={formData.location} onChange={handleChange} placeholder="e.g., Library Desk 4" className="form-input" />
        </div>
        <div>
          <label className="form-label">DATE RECORDED</label>
          <input type="date" name="date" required value={formData.date} onChange={handleChange} className="form-input" />
        </div>
      </div>

      {/* Image Upload Area with Preview Logic */}
      <div className="form-section">
        <label className="form-label">VISUAL DATA (UPLOAD IMAGE)</label>
        
        {!imagePreview ? (
          <label className="file-upload-box">
            <ImageIcon size={48} strokeWidth={1.5} color="var(--black)" />
            <span className="file-upload-text">CLICK TO SELECT FILE</span>
            <span className="file-upload-subtext">SUPPORTED: PNG, JPG (MAX 5MB)</span>
            <input type="file" style={{ display: 'none' }} accept="image/*" onChange={handleImageChange} />
          </label>
        ) : (
          <div className="relative border-4 border-black inline-block p-2 bg-gray-50">
            <img src={imagePreview} alt="Preview" className="max-h-64 object-contain" />
            <button 
              type="button" 
              onClick={clearImage}
              className="absolute -top-4 -right-4 bg-black text-white p-2 rounded-none hover:bg-gray-800 transition-colors"
              title="Remove Image"
            >
              <X size={20} />
            </button>
          </div>
        )}
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
      <button type="submit" className="btn-submit" disabled={isSubmitting}>
        <UploadCloud size={24} strokeWidth={2.5} />
        {isSubmitting ? 'UPLOADING DATA...' : 'INITIALIZE UPLOAD'}
      </button>

    </form>
  );
};

export default UploadForm;