import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Products } from "./pages/Products";
import { About } from "./pages/About";

export const App = () => {
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
        </Routes>
      </Layout>
    </>
  );
};
