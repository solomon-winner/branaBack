import request from 'supertest';
import app from '../app.js';
import { User } from '../models/user.js';

describe('POST /api/authentication/register', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/authentication/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        password: 'securePassword123',
        phoneNo: '09012345678',
        altPhoneNo: '09087654321'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.email).toBe('test@example.com');
  });
});