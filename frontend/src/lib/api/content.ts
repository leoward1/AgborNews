const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Admin API calls require token

export const getArticles = async () => {
  const response = await fetch(`${API_URL}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
};

export const createArticle = async (articleData: any, token: string) => {
  const response = await fetch(`${API_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(articleData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to create article');
  }
  return data;
};

export const getStreamEvents = async () => {
    const response = await fetch(`${API_URL}/stream`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch stream events');
    }
    return response.json();
  };

export const createStreamEvent = async (eventData: any, token: string) => {
    const response = await fetch(`${API_URL}/stream`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Failed to create stream event');
    }
    return data;
};

export const updateStreamEvent = async (id: string, eventData: any, token: string) => {
    const response = await fetch(`${API_URL}/stream/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Failed to update stream event');
    }
    return data;
};
