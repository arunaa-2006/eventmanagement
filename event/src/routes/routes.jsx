import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetail from "../pages/EventDetails/EventDetails";
import MyEvents from "../pages/MyEvents/MyEvents"; // Add this import
import CreateEvents from "../pages/CreateEvents/CreateEvents"; // Add this import
import Orders from "../pages/Orders/Orders"; // Add this import
import Login from "../pages/Login/Login"; // Add this import
import SignIn from "../pages/Signin/Signin";
import PaymentPage from "../pages/PaymentPage/Paymentpage";
import HomePage from "../pages/HomePage/HomePage";

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/events', element: <EventList /> },
  { path: '/find-events', element: <FilterEvents /> },
  { path: '/events/:id', element: <EventDetail /> },
  { path: '/my-events', element: <MyEvents /> }, // Add this route
  { path: '/create-events', element: <CreateEvents /> }, // Add this route
  { path: '/orders', element: <Orders /> }, // Add this route
  { path: '/login', element: <Login /> },
  { path: '/signin', element: <SignIn /> } ,// Add this route
  { path: '/paymentpage', element: <PaymentPage /> } // Add this route
   // Add this route
];