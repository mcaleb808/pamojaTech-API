import request from 'supertest';
import server from '../api/index';

describe('root tests', () => {
  let app;
  beforeEach(() => {
    app = server;
    return app.close();
  });

  afterEach(() => app.close());
  it('test root endpoint', async () => {
    const res = await request(app).get('/api/v1');
    expect(res.body.message).toBe('Welcome to PamojaTech APIs');
  });
});
