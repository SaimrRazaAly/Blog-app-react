import { useState, useEffect } from "react";
import { Header, Footer } from "./Components/index";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";

const App = () => {
  const [loading, setLoading] = useState(true);
  let dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((data) => {
        if (data) {
          dispatch(login({ data }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? <Header></Header> : null;
};

export default App;
