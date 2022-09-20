import React from 'react'
import { Link } from 'react-router-dom';

// styles 
import styles from './ListItem.module.css';

const ListItem = ({ name, image, id, rating }) => {
    return (
        <Link to={`/singleshow/${id}`} key={id} className={styles.list}>
            <img src={image} alt={name} />
            <div className={styles.info}>
                <h4 className={styles.name}>{name}</h4>
                <h4 className={styles.rating}>{rating}</h4>
            </div>
        </Link>
    )
}

export default ListItem