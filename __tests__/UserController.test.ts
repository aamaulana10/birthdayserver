// __tests__/userController.test.ts
import request from 'supertest';
import app from '../src/app';

describe('User API', () => {
    it('should create a new user', async () => {
        const response = await request(app)
            .post('/user')
            .send({
                firstName: 'Aa',
                lastName: 'Maulana',
                email: 'aamaulanabola10@gmail.com',
                birthday: '1993-10-24'
            });

        expect(response.status).toBe(201);
        expect(response.body.firstName).toBe('Aa');
    });

    it('should delete a user', async () => {
        const user = await request(app)
            .post('/user')
            .send({
                firstName: 'Ressa',
                lastName: 'Theresia',
                email: 'ressa@gmail.com',
                birthday: '1999-07-13'
            });

        const response = await request(app).delete(`/user/${user.body.id}`);
        expect(response.status).toBe(204);
    });
});
