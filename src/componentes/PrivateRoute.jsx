/* eslint-disable react/react-in-jsx-scope */
import { Route, Redirect } from "react-router";


const PrivateRoute = ({ component: Component, ...rest}) => {
  let auth;
  const token = localStorage.token;
  // const token = null;
  console.log(token);
  // token != null ? token != undefined ? auth = true : null : null;
  token ? auth = true : null;
  return (
    <Route {...rest}>{auth ? <Component/> : <Redirect to = '/'/>}</Route>
  );
};

export default PrivateRoute;