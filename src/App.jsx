import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "./components/ui/toaster";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <div className="App ">
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} position="top-right" />
      <Toaster />
    </div>
  );
}
