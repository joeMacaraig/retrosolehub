import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Admin } from "./pages/Admin";
import { AdminLogin } from "./pages/AdminLogin";
import { useAuthContext } from "./hooks/useAuthContext";

export const App = () => {
  const {user} = useAuthContext(); 
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>          
          <Route exact path="/products" element={<Products />}></Route>
          <Route
            exact
            path="/products/:id"
            element={<ProductDetails />}
          ></Route>
          <Route exact path="/about-us" element={<About />}></Route>
          <Route exact path="/admin-login" element={!user ? <AdminLogin /> : <Admin/>}></Route>
          <Route exact path="/admin" element={user ? <Admin/> : <AdminLogin/>}></Route>
        </Routes>
      </Layout>
    </>
  );
};
