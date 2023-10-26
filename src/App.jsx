import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/TvSeries/TvSeries";
import Signin from "./pages/Signin/Signin";
import SignUp from "./pages/SignUp/SignUp";
import Bookmark from "./pages/Bookmark/Bookmark";
import Error from "./pages/Error/Error";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <AuthProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvseries" element={<TvSeries />} />

              <Route element={<PrivateRoute />}>
                <Route path="/bookmark" element={<Bookmark />} />
              </Route>
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
