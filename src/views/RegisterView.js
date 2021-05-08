import { authOperations } from '../redux/auth';
import { useState } from "react";
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const styles = {
  form: {
    width: 320,
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

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  }


   return (
      <div>
        <h1 className="text-center">Сторінка реєстрації</h1>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Ім`я
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={handleChange}
            />
          </label>

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

          <Button type="submit" variant="primary">Зареєструватися</Button>
          
        </form>
      </div>
    );
 }
