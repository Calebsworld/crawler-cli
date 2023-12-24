const baseUrl = 'blog.boot.dev/path';

const normalizeURL = (inputPath) => {
  // Remove leading and trailing slashes and normalize internal multiple slashes
  let normalizedPath = inputPath.replace(/^\/+|\/+$/g, '').replace(/\/+/g, '/');

  // Return baseUrl for empty or slash-only paths
  if (!normalizedPath || normalizedPath === '/') {
    return baseUrl;
  }

  // Check if the path already includes the base URL
  if (normalizedPath.startsWith(baseUrl)) {
    return normalizedPath;
  }

  // Append the normalized path to the baseUrl
  return `${baseUrl}/${normalizedPath}`;
};

module.exports = {
  normalizeURL
};
