import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Context
import ShowsContext from "../../context/shows/showsContext";

// styles
import styles from './Singlepage.module.css';

const Singlepage = () => {
  const { getSingleShow, singleShow } = useContext(ShowsContext);
  const { id } = useParams();

  useEffect(()=>{
    getSingleShow(id);
  },[])

  const removeTags = (text) => {
    if(text === null || text === "") {
      return false;
    }

    let modified__text =  text.replace(/(<([^>]+)>)/gi, "");
    return modified__text;
  }

  return (
    <div className={styles.singlepage}>
    <img src={singleShow.image ? singleShow.image.medium : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQh4u1077PsTGtQpyUyxRDE0DeFv4XkjPotroq7_-ed9X9pKPSvsFlarxciUJC9LIQs4Y&usqp=CAU'} alt={singleShow.name}
    />
    <div className={styles.info}>
      <h1>{singleShow.name}</h1>
      {singleShow.genres && singleShow.genres.map(genre => {
        return <span key={genre} className={styles.genre}>{genre}</span>
      })}
      <p>
        <strong>Status:</strong> {singleShow.status && singleShow.status}
      </p>
      <p>
        <strong>Rating:</strong> {singleShow.rating ? singleShow.rating.average : "No rating"}
      </p>
      <p>
        <strong>Official Site:</strong> {singleShow.officialSite ? (<a href={singleShow.officialSite}
        target="_blank" rel="noreferrer">{singleShow.officialSite}</a>) : "No official site"}
      </p>
      <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
    </div>
  </div>
  )
}

export default Singlepage;