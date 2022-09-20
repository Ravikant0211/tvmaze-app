import { useContext } from "react";

// context
import ShowsContext from "../../context/shows/showsContext";

// components
import ListItem from "../../components/ListItem/ListItem";
import Searchbar from "../../components/Searchbar/Searchbar";

// styles
import styles from './Homepage.module.css';

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { shows } = showsContext;

  return (
    <div className={styles.Homepage}>
      <h3>Search For Shows</h3>
      <Searchbar />
      {shows.length === 0 && <h4 className={styles.message}>Results are not found</h4>}
      <div className={styles.lists}>
        {shows.map(item => (
          <ListItem
            key={item.show.id}
            name={item.show.name}
            image={item.show.image ? item.show.image.medium : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQh4u1077PsTGtQpyUyxRDE0DeFv4XkjPotroq7_-ed9X9pKPSvsFlarxciUJC9LIQs4Y&usqp=CAU'}
            id={item.show.id}
            rating={item.show.rating ? item.show.rating.average : 'No rating'}
          />
        ))}
      </div>
    </div>
  )
}


export default Homepage;