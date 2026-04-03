import UploadForm from '../components/UploadForm';

export default function Upload() {
  return (
    <div className="upload-page-wrapper">
      <div className="page-header" style={{ textAlign: 'center' }}>
        <h1 className="page-title">Data Entry Terminal</h1>
        <p className="page-subtitle">Submit missing or retrieved items into the campus ledger.</p>
      </div>

      <UploadForm />
    </div>
  );
}