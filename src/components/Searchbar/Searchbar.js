import { useContext, useState, useEffect } from 'react';

// context
import ShowsContext from '../../context/shows/showsContext';

// components
import Message from '../Message/Message';

// Styles 
import styles from './Searchbar.module.css';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedChoice, setSelectedChoice] = useState('show'); // false = show
    const { searchShow } = useContext(ShowsContext);

    const inputHandler = (event) => {
        setSearchTerm(event.target.value);
    }

    const selectedChoiceHandler = (event) => {
        setSelectedChoice(event.target.id)

    }

    useEffect(() => {
        const setTimeoutID = setTimeout(() => {
            searchShow({searchTerm, selectedChoice});
        }, 500)
        
        return () => clearTimeout(setTimeoutID);
    }, [searchTerm, selectedChoice])
   

    return (
        <div className={styles.searchbar}>
            <div className={styles.radio}>
                <input type="radio" id="show" name='choice' onChange={selectedChoiceHandler} />
                <label htmlFor='show'>Show</label>
                <input type="radio" id="actor" name='choice' onChange={selectedChoiceHandler} />
                <label htmlFor='actor'>Actor</label>
            </div>
            <Message selectedChoice={selectedChoice}/>
            <div className={styles.input}>
                <input onChange={inputHandler} type="text" placeholder="Search Show" />
            </div>
        </div>
    )
}

export default Searchbar;