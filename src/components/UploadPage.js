import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Upload Image</h1>
      <input type="file" onChange={handleFileChange} />
      {file && <p className="mt-4">Selected: {file.name}</p>}
    </div>
  );
}