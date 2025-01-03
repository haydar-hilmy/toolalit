import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorRoute } from './Pages/ErrorRoute';
import Home from './Pages/Home';
import LondonTimer from './Pages/LondonTimer';
import QrCode from './Pages/QrCode';
import RandomName from './Pages/RandomName';

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/london-timer",
    element: <LondonTimer />
  },
  {
    path: "/qrcode",
    element: <QrCode />
  },
  {
    path: "/random-name",
    element: <RandomName />
  },
  {
    path: "*",
    element: <ErrorRoute />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App
