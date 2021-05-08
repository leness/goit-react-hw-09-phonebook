import { authOperations } from '../redux/auth';
import { useState } from 'react';
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const styles = {
  form: {
    width: 230,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};


export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      
      case 'password':
        setPassword(value);
        break;
      
      default:
        console.warn(`Тип поля name - ${name} не працює`)
    }
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    
   
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
}
 

    return (
      <div>
        <h1 className="text-center">Введіть логін та пароль</h1>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={handleChange}
            />
          </label>

          <Button type="submit" variant="primary">Увійти</Button>
        </form>
      </div>
    );
}


