import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserAdmin from './componets/UserAdmin';
import Login from './componets/Login';
import  SignUp  from './componets/SignUp';
import { AuthoProvider } from './Auth';
import PrivateRoute from './PrivateRoute';


const App = () => {
    return(
        <AuthoProvider>
            <Router>
                <div>
                    <PrivateRoute exact path="/" component={UserAdmin} />  
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signin" component={SignUp} />
                    
                </div>
            </Router>
        </AuthoProvider>
    )
}

export default App;