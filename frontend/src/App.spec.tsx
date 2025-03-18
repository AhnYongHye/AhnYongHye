import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import HomePage from '@pages/HomePage/HomePage';

const testRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
];

test('RouterProvider renders HomePage on index route', () => {
  const router = createMemoryRouter(testRoutes, {
    initialEntries: ['/'],
  });

  render(<RouterProvider router={router} />);

  expect(screen.getByText('Welcome Webpack Initial Setting HomePage')).toBeInTheDocument();
});
