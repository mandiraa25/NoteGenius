import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";


import Dashboard from "./pages/dashboard";



import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";
import ASignin from "./pages/adminsignin";
import Profile from "./pages/profile";

import Noteadd from "./pages/note/noteadd";
import Notetabl from "./pages/note/notetable";
import Noteupdate from "./pages/note/noteupdate";


import Dashtable from "./pages/dash/table";
import Updateuser from "./pages/dash/Update";
import Staff from "./pages/dash/staff";


import Sidebar from "./pages/sidbar";

import ASidebar from "./pages/adminsidbar";

import Firebase from "./pages/image";
import RAudio from "./pages/audio";

























export default function App() {
  return (
    <BrowserRouter>
     
      <Routes>


      <Route path="/" element={<Signin />} />

      <Route path="/admin" element={<ASignin />} />
     


      <Route path="/sign-up" element={<SignUp />} />

    
      <Route element={<PrivateRoute />}>

      <Route path="/dashboard" element={<Sidebar/>}>
      <Route path="note" element={<Noteadd />} />

      <Route path="notetable" element={<Notetabl />} />

      <Route path="iupdate/:incomid" element={<Noteupdate />} />

      

    

      <Route path="dash" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="image" element={<Firebase />} />
      <Route path="audio" element={<RAudio />} />


      </Route>

      <Route path="/adashboard" element={<ASidebar/>}>
      

      <Route path="Uupdate/:mid" element={<Updateuser/>} />

      <Route path="dashbord" element={<Dashtable />} />

      <Route path="dash" element={<Dashboard />} />
      <Route path="staff" element={<Staff/>} />
      
      

      </Route>
    


    
      
     
     

   
       


        


       
        </Route>

      
       
     
      </Routes>
     
    </BrowserRouter>
  );
}
