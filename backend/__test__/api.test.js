import request from "supertest";

describe('test all endpoints', () => {
    const URL = "http://localhost:8000"
    it('should test questions endpoint', async () => {
        const response = await request(URL).get('/questions');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(3)
    })

    it('should test calculate endpoint ', async () => {
        const response = await request(URL).post('/calculate');
        expect(response.statusCode).toBe(400);
        const response2 = await request(URL).post('/calculate').send({
            selectedAnswers: {
                1: 1,
                2: 2
            }
        });
        expect(response2.statusCode).toBe(400);
        const response3 = await request(URL).post('/calculate').send({
            selectedAnswers: {
                1: 1,
                2: 1,
                3: 1
            }
        });
        expect(response3.statusCode).toBe(200);
        expect(response3.text).toBe("INTROVERT")
    })
})