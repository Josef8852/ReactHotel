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
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { toasterStyles } from "./ui/Toaster";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime : 0,
    }
  }
});




const App: React.FC = () => {
    
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-center"
        gutter={12} containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration:3000,
          },
          error: {
          duration:5000,
          },
          style: toasterStyles
        }}
      />
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>} >
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route index path="/dashboard"  element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cabins" element={<Cabins />} /> 
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<NewUsers />} />
            <Route path="/bookings" element={<Bookings />} /> 
          </Route>
  
             <Route path="/login" element={<Login />} />  
             <Route path="*" element={<PageNotFound />} /> 
          
        </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  )
  
}


export default App;