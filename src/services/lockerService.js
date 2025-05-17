// Encapsulate all API calls related to locker control
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * Sends a request to open a specific locker.
 * @param {number} lockerId
 */
export async function openLocker(lockerId) {
  const response = await fetch(`${API_URL}/openLocker/${lockerId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({ locker_id: lockerId }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }
}