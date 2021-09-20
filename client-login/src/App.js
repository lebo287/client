import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.scss";

import Login from "./components/login";
import Register from "./components/register";
// import Home from "./components/home";
import Profile from "./components/profile";
import BoardUser from "./components/boardUser";
import BoardModerator from "./components/boardModerator";
import BoardAdmin from "./components/boardAdmin";
import ChatRoom from "./components/chat/Chat";

// import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

const App = () => {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);

  // const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  // useEffect(() => {
  //   if (currentUser) {
  //     setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
  //   }
  // }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
        

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/chat" component={ChatRoom} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
    </Router>
  );
};

export default App;
