import { useEffect, useReducer } from 'react'
import axios from 'axios';

// context
import ShowsContext from './showsContext';
import ShowsReducer from './showsReducer';

// types
import {
    SEARCH_SHOWS,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW
} from '../Types';

const ShowsState = (props) => {
    const initialState = {
        shows: [],
        singleShow: {}
    }

    const [state, dispatch] = useReducer(ShowsReducer, initialState);

    useEffect(() => {
        const getDefaultShows = async () => {
            const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=avengers`)
            dispatch({
                type: SEARCH_SHOWS,
                payload: data
            })
        }
        getDefaultShows();
    }, [])


    const searchShow = async (props) => {
        const { searchTerm, selectedChoice } = props;

        if (searchTerm.length === 0) {
            return;
        }

        if (selectedChoice === 'actor') {
            const { data } = await axios.get(`https://api.tvmaze.com/search/people?q=${searchTerm}`)
            const person = data.filter(item => item.person.name.toLowerCase() === searchTerm.toLowerCase())

            if (person.length > 0) {
                const actorId = person[0].person.id;
                const showData = await axios.get(`https://api.tvmaze.com/people/${actorId}/castcredits?embed=show`)
                const actualData = [];
                actualData.push(showData.data[0]._embedded);
                dispatch({
                    type: SEARCH_SHOWS,
                    payload: actualData
                })
            }
        }
        else if (selectedChoice === 'show') {
            const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
            dispatch({
                type: SEARCH_SHOWS,
                payload: data
            })
        }
    }

    const getSingleShow = async (id) => {
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

        dispatch({
            type: SET_SINGLE_SHOW,
            payload: data
        })
    }

    const clearSingleShow = () => {
        dispatch({
            type: CLEAR_SINGLE_SHOW
        })
    }

    


    return (
        <ShowsContext.Provider
            value={{
                shows: state.shows,
                singleShow: state.singleShow,
                getSingleShow,
                clearSingleShow,
                searchShow
            }}
        >
            {props.children}
        </ShowsContext.Provider>
    )
}

export default ShowsState
