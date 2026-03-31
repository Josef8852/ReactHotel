import {BrowserRouter, Navigate} from "react-router-dom"
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { toasterStyles } from "./ui/Toaster";
import { Suspense , lazy } from "react";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import AppProvider from "./context/AppProvider";
import SpinnerFullPage from "./pages/SpinnerFullPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime : 0,
    }
  }
});



const Dashboard = lazy(() => import("./pages/Dashboard"));

const Account = lazy(() => import("./pages/Account"));

const Cabins = lazy(() => import("./pages/Cabins"));

const Settings = lazy(() => import("./pages/Settings"));

const Users = lazy(() => import("./pages/Users"));

const Bookings = lazy(() => import("./pages/Bookings"));

const BookingPage = lazy(() => import("./pages/BookingPage"));

const CheckIn = lazy(() => import("./pages/CheckIn"));


const App: React.FC = () => {
    
  return (
    <AppProvider>
    <QueryClientProvider client={queryClient}>
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
          <Suspense  fallback={<SpinnerFullPage/>} >
        <Routes>
          <Route element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>} 
          >
            <Route index element={<Navigate replace to="/dashboard" />} />
            <Route  path="/dashboard"  element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cabins" element={<Cabins />} /> 
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
            <Route path="/bookings" element={<Bookings />} /> 
            <Route path="/booking/:bookingId" element={<BookingPage />} /> 
            <Route path="/checkin/:bookingId" element={<CheckIn />} /> 
          </Route>
  
             <Route path="/login" element={<Login />} />  
             <Route path="*" element={<PageNotFound />} /> 
          
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </AppProvider>
  )
  
}


export default App;