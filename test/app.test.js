const request = require('supertest');
const app = require('../src/index');

describe('Test Rate Limiting', () => {
  it('should allow requests within the rate limit"', async () => {
    // Make 10 requests within a short time interval
    for (let i = 0; i < 10; i++) {
      const response = await request(app).get('/api/data');
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('welcome to rate limiting in node.js apis');
    }
  });
  it('should block requests that exceed the rate limit', async () => {
    // Make 11th request that exceeds the rate limit
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(429); // 429 means "Too Many Requests"
    expect(response.body.message).toBe('Too many requests, please try again later.');
  });
});
