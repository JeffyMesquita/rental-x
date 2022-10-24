import request from 'supertest';
import { Connection } from 'typeorm';
import { hash } from 'bcryptjs';
import { v4 as uuidV4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('List Categories', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuidV4();
    const password = await hash('admin', 8);

    await connection.query(
      `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
      values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXXX-XXXXXX-XXX')`
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to to list al;l categories', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@rentx.com.br',
      password: 'admin',
    });

    const { token } = responseToken.body.data;

    await request(app)
      .post('/categories')
      .send({
        name: 'Category Supertest',
        description: 'Supertest description',
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    await request(app)
      .post('/categories')
      .send({
        name: 'Category Supertest 2',
        description: 'Supertest description',
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    const response = await request(app).get('/categories');

    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(2);
    expect(response.body.data[0].name).toEqual('Category Supertest');
    expect(response.body.data[0]).toHaveProperty('id');
  });
});
