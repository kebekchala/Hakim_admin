import React, { useContext } from 'react';
import { Route, Redirect} from "react-router-dom";
import { AuthoContext } from './Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthoContext);

    return(
        <Route
            {...rest}
            render={routeProps => 
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/login"}/>
                )
            }
            />
    )
}

export default PrivateRoute;