import { useDispatch, useSelector } from 'react-redux'
import s from './Filter.module.css'
import {contactsSelectors, changeFilter} from '../../redux/contacts'
import { useCallback } from 'react';


export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(contactsSelectors.getFilter);

    const onChange = useCallback(e => dispatch(changeFilter(e.target.value)), [dispatch])

    return (
        <div>
            <label className={s.filter} >
                <p className={s.filterTitle}>Find contacts by name</p>
                <input type="text" value={value} onChange={onChange} className={s.filterInput} />
            </label >
        </div>
        
    )
}





// const Filter = ({ value, onChange }) => {
    // return (
    //     <div>
    //         <label className={s.filter} >
    //           <p className={s.filterTitle}>Find contacts by name</p>  
    //     <input type="text" value={value} onChange={onChange} className={s.filterInput} />
    // </label >
    //     </div>
        
    // ) 
// }



// const mapStateToProps = state => ({
//     value: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//     onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter)



    