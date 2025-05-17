import React, { useState } from 'react';
import { openLocker } from '../services/lockerService';
import './LockerControl.css'; // component-specific styless

function LockerControl() {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState('');

  const handleOpen = async (id) => {
    setError('');
    setLoading(id);
    try {
      await openLocker(id);
      alert(`Command sent: Open Locker ${id}`);
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

export default LockerControl;