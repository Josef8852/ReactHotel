import {BrowserRouter, Navigate} from "react-router-dom"
import { Routes , Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import NewUsers from "./pages/Users";
import Bookings from "./pages/Bookings";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
    
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/dashboard" />} />
        <Route index path="/dashboard"  element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cabins" element={<Cabins />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={<NewUsers />} />
        <Route path="/bookings" element={<Bookings />} /> 
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
  
}


export default App;