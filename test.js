const fetch = require('node-fetch');
const qs = require('qs'); // Optional for query string handling

// Create a function to generate a custom fetch instance with default options
function createFetchDefaults(defaultOptions) {
  return async function customFetch(url, options = {}) {
    const finalOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...(defaultOptions.headers || {}),
        ...(options.headers || {}),
      },
    };

    // If a base URL is defined, prepend it to the request URL
    if (defaultOptions.baseURL) {
      url = new URL(url, defaultOptions.baseURL).toString();
    }

    // If default query parameters are defined, merge them with request-specific ones
    if (defaultOptions.query) {
      const defaultQuery = qs.stringify(defaultOptions.query);
      const requestQuery = qs.stringify(options.query || {});
      const separator = url.includes('?') ? '&' : '?';
      url += separator + [defaultQuery, requestQuery].filter(Boolean).join('&');
    }

    return fetch(url, finalOptions);
  };
}

// Example usage
const defaultFetch = createFetchDefaults({
  baseURL: 'https://api.example.com',
  headers: {
    'Authorization': 'Bearer my-token',
    'Content-Type': 'application/json',
  },
  query: {
    lang: 'en', // Example default query parameter
  },
});

// Use the custom fetch instance
(async () => {
  try {
    const response = await defaultFetch('/endpoint', {
      method: 'GET',
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
