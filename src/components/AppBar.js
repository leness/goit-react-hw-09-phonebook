import { useSelector } from 'react-redux'
import AuthNav from './AuthNav'
import UserMenu from './UserMenu/UserMenu'
import Navigation from './Navigation'
import { authSelectors } from '../redux/auth'


const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #2A363B',
    }
}

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <header style={styles.header} >
       
        <Navigation />
         
        {isLoggedIn ? <UserMenu/> : <AuthNav />}
       
        </header>
    )
}
