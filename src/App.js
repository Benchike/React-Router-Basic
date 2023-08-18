import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/Home';
import React from 'react';
import Root from './components/Root';
import ErrorPage from './components/Error';
import ProductDetailPage from './components/ProductDetail';
import ProductsPage from './components/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: '', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
