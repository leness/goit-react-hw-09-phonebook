import { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router";

import Container from './components/Container/Container'
import AppBar from './components/AppBar'
import {authOperations} from './redux/auth'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { useDispatch } from "react-redux";



const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch]);

   return (
       
       <Container>
         <AppBar />
 
         <Suspense fallback={<p>Загружаєм...</p>}>
         <Switch>
           
           <PublicRoute exact path="/">
             <HomeView/>
           </PublicRoute>
           
           <PublicRoute path="/register" restricted redirectTo="/contacts">
             <RegisterView />
             </PublicRoute>

           <PublicRoute path="/login" restricted redirectTo="/contacts">
             <LoginView />
           </PublicRoute>

           <PrivateRoute path="/contacts" redirectTo="/login">
           <ContactsView />
           </PrivateRoute>

         </Switch>
         </Suspense>

       </Container>
     )
}









