import '@testing-library/jest-dom';

const server = require('./src/mocks/server');

beforeAll(() =>   server.listen({ onUnhandledRequest: 'error' }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
