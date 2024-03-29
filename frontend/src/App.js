// import logo from './logo.svg';
import './App.css';
import { redirect } from "react-router-dom";
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Routes, Switch, Route, Link, useLocation } from 'react-router-dom';
import ProfilePage from './Components/ProfilePage';
import Home from './Components/Home';
// import BrowserRouter from 'react-rou'
import Auth from './Components/Auth';
import Followers from './Components/Followers';
import AllUsers from './Components/AllUsers';
// import useAuth from './Components/useAuth';
// AllUsers

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Following from './Components/Following';
import MySubgredit from './Components/MySubgredit';
import SubgreditForm from './Components/SubgreditForm';
import AllGredits from './Components/AllGredits';
import GreditPage from './Components/GreditPage';
import AllPosts from './Components/AllPosts';

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        {/* <ProfilePage></ProfilePage> */}
        <div className="">
          <Routes>
            <Route exact path="/" element={<Home></Home>}>
            </Route>
            <Route path="/SignIn" element={<Auth></Auth>}>
            </Route>
            <Route exact path="/ProfilePage/Followers" element={<Followers></Followers>}>
            </Route>
            <Route exact path="/ProfilePage/Following" element={<Following></Following>}>
            </Route>
            <Route exact path="/AllUsers" element={<AllUsers></AllUsers>}>
            </Route>
           {/* <Route exact path="/SignUp" element={<SignUp></SignUp>}>
            </Route> */}
            <Route exact path="/ProfilePage" element={(<ProfilePage></ProfilePage>)}></Route>
            <Route exact path="/ProfilePage/MySubGredit" element={<MySubgredit></MySubgredit>} />
            <Route exact path="/ProfilePage/MySubGredit/form" element={<SubgreditForm></SubgreditForm>} />
            <Route exact path="/AllGredits" element={<AllGredits></AllGredits>} />
            <Route  path="/GreditPage/:Name" element={<GreditPage></GreditPage>}></Route>
            <Route  path="/AllPosts" element={<AllPosts/>}></Route>
          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
