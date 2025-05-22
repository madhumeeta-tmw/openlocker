import React, { useState } from 'react';
import { openLocker } from '../services/lockerService';
import './LockerControl.css';

export default function LockerControl() {
  const [loading, setLoading] = useState(null);
  const [error, setError]     = useState('');

  const handleOpen = async (id) => {
    setError('');
    setLoading(id);
    try {
      const msg = await openLocker(id);
      alert(msg.message || JSON.stringify(msg));
    } catch (err) {
      console.error(err);
      setError(`Failed to open locker ${id}: ${err.message}`);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="locker-control-container">
      <h1 className="title">Smart Locker Control</h1>
      {error && <div className="error">{error}</div>}
      <div className="button-grid">
        {[1, 2, 3, 4].map((id) => (
          <button
            key={id}
            onClick={() => handleOpen(id)}
            className="locker-button"
            disabled={loading === id}
          >
            {loading === id ? 'Opening...' : `Open Locker ${id}`}
          </button>
        ))}
      </div>
    </div>
  );
}
