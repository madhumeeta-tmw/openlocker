import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

/**
 * @param {number|string} lockerId
 * @returns {Promise<object>}
 */
export async function openLocker(lockerId) {
  try {
    const payload = {
      locker_id: lockerId.toString(),
    };

    const response = await axios.post(API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.error || error.message || 'Unknown error';
    throw new Error(errorMessage);
  }
}
