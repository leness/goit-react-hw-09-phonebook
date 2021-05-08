import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png'
import { Button } from 'react-bootstrap';
import { useCallback } from "react";

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};


export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onLogOut = useCallback(() => dispatch(authOperations.logOut()), [dispatch])

  return (
    <div style={styles.container}>
        <img src={defaultAvatar} alt="" width="32" style={styles.avatar}/>
        <span style={styles.name}>Ласкаво просимо, {name}</span>
    <Button type="button" onClick={onLogOut} variant="outline-primary">Вийти</Button>
    </div>
  )
}
