import { useCallback, useState } from "react";
import shortid from 'shortid';
import {contactsOperations, contactsSelectors} from '../../redux/contacts';
import s from './ContactForm.module.css'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";



export default function ContactForm() {
  const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();

  const contacts = useSelector(contactsSelectors.getAllContacts);

    const handleChange = useCallback( e => {
        const { name, value } = e.currentTarget;

        switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
    }, []);
    
      
  const onAddContact = useCallback(e => {
    e.preventDefault();
        
    if (contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} такий контакт вже є.`);
      return
    }
    dispatch(contactsOperations.addContacts(name, number));

    setName('');
    setNumber('');
  },
    [contacts, dispatch, name, number]
  );


    return (
            <>
            <form className={s.formContact} onSubmit={onAddContact}>
                    <label htmlFor={ nameInputId} className={s.formLabel} >Name
           <input
                            type='text'
                            name='name'
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            className={s.formInput}
                            id={nameInputId}
                            value={name}
                            onChange={handleChange} />
          </label>
          <label htmlFor={ numberInputId} className={s.formLabel} >Number
           <input
                            type='number'
                            name='number'
                            required
                            className={s.formInput}
                            id={numberInputId}
                            value={number}
                            onChange={handleChange} />
                </label>
                
                    <Button type='submit' variant="primary">Add contact</Button>
                    
        </form>
            </>
        )
}