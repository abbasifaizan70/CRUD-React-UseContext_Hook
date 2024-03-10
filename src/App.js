import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContext } from "./UserContext";
import { Suspense,lazy, useState } from "react";

const Home = lazy(() => import("./components/Layout/Home"));
const CreateUser = lazy(() => import("./components/User/CreateUser"));
const ShowUser = lazy(() => import("./components/User/ShowUser"));
const User = lazy(() => import("./components/User/User"));
const NavBar = lazy(() => import("./components/Common/NavBar"));

const Layout = ({ children }) =>
  <>
    <NavBar />
    {children}
  </>;

function App() {
  const [users, setUsers] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      )
    },
    {
      path: "/create-user",
      element: (
        <Layout>
          <CreateUser />
        </Layout>
      )
    },
    {
      path: "/show-user",
      element: (
        <Layout>
          <ShowUser />
        </Layout>
      )
    },
    {
      path: "/user/:id",
      element: (
        <Layout>
          <User />
        </Layout>
      )
    },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </UserContext.Provider>
  );
}

export default App;
