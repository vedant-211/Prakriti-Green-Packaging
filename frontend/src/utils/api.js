// api.js — Prakriti lead form submission utility
// Handles POST /api/leads to the Express/MongoDB backend.
// Returns a resolved promise on success, throws on failure.

import axios from 'axios';

/**
 * Submit a lead (email) to the Prakriti backend.
 * @param {{ email: string, source?: string }} data
 * @returns {Promise<{ message: string }>}
 */
export async function submitLeadForm(data) {
  try {
    const response = await axios.post('/api/leads', {
      email: data.email,
      source: data.source || 'landing-page',
      requestedAt: new Date().toISOString(),
    });
    return response.data;
  } catch (error) {
    // Surface a clean error message to the UI
    const message =
      error?.response?.data?.message ||
      'Something went wrong. Please try again.';
    throw new Error(message);
  }
}
