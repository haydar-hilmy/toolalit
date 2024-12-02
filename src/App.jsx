import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App
