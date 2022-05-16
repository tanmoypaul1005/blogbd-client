import './App.css';
import Home from './components/Home';
import Register from './components/auth/Register';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Login from './components/auth/Login';
import './main.scss';
import NavBar from './components/NavBar';
import PrivateRoute from './private/PrivateRoute';
import NotFound from './components/NotFound';
import Create from './components/Create';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { detail_post, fetch } from './redux/AsyncAction/PostAction';
import Details from './components/Details';
import MyProfile from './components/MyProfile';
import DashBoard from './components/DashBoard';
import { fetchDashboard } from './redux/AsyncAction/DashboardAction';
import Edit from './components/Edit';
import Footer from './components/Footer/Footer';




function App() {
  const auth = useSelector((state) => state.auth.user);
  // console.log(auth)

  const dispatch = useDispatch();
  if (auth) {
    const email = auth.email
    dispatch(fetch(email));
  } else {

  }


  const { id } = useParams();
  useEffect(() => {
    dispatch(detail_post(id));
    dispatch(fetchDashboard());
  }, [dispatch]);


  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          {/* <Route path="/dashBoard" element={<Home />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<PrivateRoute><Create /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><DashBoard /></PrivateRoute>} />
          <Route path="/details/:id" element={<PrivateRoute><Details /></PrivateRoute>} />
          <Route path="/post/edit/:id" element={<PrivateRoute><Edit /></PrivateRoute>} />
          <Route path="/*" element={<NotFound></NotFound>} />
        </Routes>

      </BrowserRouter >
      <Footer></Footer>
    </div>
  );
}
// font-family: 'Poppins', sans-serif;
export default App;
