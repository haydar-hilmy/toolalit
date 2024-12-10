import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { _404_ } from './Pages/404';
import Home from './Pages/Home';
import LondonTimer from './Pages/LondonTimer';
import QrCode from './Pages/QrCode';

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
    path: "*",
    element: <_404_ />
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
