import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DribbbleSelect from "./components/DribbleSelect";
import ProfileCreation from "./components/profilecreation";
import SignUpForm from "./components/signupform";
import Page from "./components/page";

const router = createBrowserRouter([
  { path: "/", element: <SignUpForm /> },
  { path: "/profile", element: <ProfileCreation /> },
  { path: "/select", element: <DribbbleSelect /> },
  { path: "/page", element: <Page /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
