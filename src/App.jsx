import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import LondonTimer from './Pages/LondonTimer';

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/london-timer",
    element: <LondonTimer />
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
