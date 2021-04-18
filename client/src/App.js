import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuthUser } from "./js/action/authAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);
  const { isLoading } = useSelector((state) => state.authReducer);
  return (
    <div className="App">
      <Router>
        <NavBar />
        {isLoading?<h1>..........Loading</h1>:<div>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>}
      </Router>
    </div>
  );
}

export default App;
