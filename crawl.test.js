const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')
const baseUrl = 'blog.boot.dev/path'

test('should normalize a URL with double slashes to a single slash', () => {
    const inputPath ='blog.boot.dev//path';
    const normalizedPath = normalizeURL(inputPath);
    expect(normalizedPath).toBe(baseUrl);
  });
  
  test('should normalize a URL with trailing slash to remove the slash', () => {
    const inputPath = 'blog.boot.dev/path/';
    const normalizedPath = normalizeURL(inputPath);
    expect(normalizedPath).toBe(baseUrl);
  });
  
  test('should normalize a URL with baseUrl to prepend the baseUrl', () => {
    const inputPath = '/path/subpage';
    const expectedNormalizedPath = baseUrl + '/path/subpage';
    const normalizedPath = normalizeURL(inputPath);
    expect(normalizedPath).toBe(expectedNormalizedPath);
  });
  
  test('should handle an already normalized URL without changes', () => {
    const inputPath = 'blog.boot.dev/path';
    const normalizedPath = normalizeURL(inputPath);
    expect(normalizedPath).toBe(baseUrl);
  });
  
  test('should handle an empty URL path by returning the baseUrl', () => {
    const inputPath = '';
    const normalizedPath = normalizeURL(inputPath);
    expect(normalizedPath).toBe(baseUrl);
  });
  
  test('should handle a URL with only slashes by returning the baseUrl', () => {
    const inputPath = '///';
    const normalizedPath = normalizeURL(inputPath);
    expect(normalizedPath).toBe(baseUrl);
  });
