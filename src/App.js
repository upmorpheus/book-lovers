import { useSelector } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from "./views";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";
import Header from "./components/header";
import Footer from "./components/footer/Footer";

const publicRouter = createBrowserRouter(createRoutesFromElements(
  [
    <Route path='/' element={<Home />} />,
    <Route path='login' element={<Login />}/>,
    <Route path='register' element={<Register />} />,
  ]
));

const privateRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home />}>
            <Route path='start'>
                
            </Route>
      </Route>
    ),
);

function App() {
    const logged = useSelector((state) => state.app.data);
    
    return (
      <>
        <Header />
        <RouterProvider router={logged ? privateRouter : publicRouter} />
        <Footer />
      </>
    );
};

export default App;