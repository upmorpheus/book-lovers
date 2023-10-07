import { useSelector } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from "./views";
import Login from "./views/auth/Login";
import Header from "./components/header";
import './App.scss';

const publicRouter = createBrowserRouter(createRoutesFromElements(
  [
    <Route path='/' element={<Home />} />,
    <Route path='/login' element={<Login />}/>
  ]
));

const privateRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home />}>
            <Route path='start'>
                <Route path='home' element={<Home />} />
            </Route>
      </Route>
    ),
);

function App() {
    const logged = useSelector((state) => state.app.data)
    return (
      <>
        <Header />
        <RouterProvider router={!logged ? privateRouter : publicRouter} />
      </>
    );
};

export default App;
