import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataContext from "./dataContext/DataContext.jsx";
import LikedPage from "./components/LikedPage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/liked",
    element: <LikedPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContext>
    <RouterProvider router={router} />
  </DataContext>
);
