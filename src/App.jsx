import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"
import { ThemeProvider } from "@/contexts/theme-context"
import Layout from "./routes/Layout"
import DashboardPage from "./routes/dashboard/Page"
import Analytics from "./routes/dashboard/Analytics"
import Login from "./routes/dashboard/Login"
import Register from "./routes/dashboard/Register"
import NewProject from "./pages/NewProject"




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />, // Redirect root to login
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "analytics",
          element: <Analytics />,
        },
        {
          path: "reports",
          element: <NewProject />,
        },
        {
          path: "customers",
          element: <h1 className="title">Customers</h1>,
        },
        {
          path: "new-customer",
          element: <h1 className="title">New Customer</h1>,
        },
        {
          path: "verified-customers",
          element: <h1 className="title">Verified Customers</h1>,
        },
        {
          path: "products",
          element: <h1 className="title">Products</h1>,
        },
        {
          path: "new-product",
          element: <h1 className="title">New Product</h1>,
        },
        {
          path: "inventory",
          element: <h1 className="title">Inventory</h1>,
        },
        {
          path: "settings",
          element: <h1 className="title">Settings</h1>,
        },
      ],
    },
  ])

  return (
    <ThemeProvider storageKey="theme">
       <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
