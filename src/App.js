import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import Watch from "./components/Watch";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <Provider store={appStore}>
        <div>
          <Header />
          <RouterProvider router={appRouter}>
            <Body />
            <Outlet />
          </RouterProvider>
        </div>
      </Provider>
    </div>
  );
}

export default App;
