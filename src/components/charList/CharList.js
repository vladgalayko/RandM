import { useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import useRandMService from '../../services/RandMService';
import SearchPanel from '../searchPanel/SearchPanel';
import './charList.scss';
import { Link } from 'react-router-dom';

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [search, setNewSearch] = useState("");
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(826);
    const [charEnded, setCharEnded] = useState(false);

    const {getAllCharacters, setProcess} = useRandMService();


    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
      };

    const filtered = !search
    ? charList
    : charList
    .filter((char) =>
        char.name.toLowerCase().includes(search.toLowerCase())
    );

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onCharListLoaded = (newcharList) => {
        let ended = false;
        if (newcharList.length < 8) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newcharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 8);
        setCharEnded(charEnded => ended);
    }

    function renderItems(arr) {
        const items =  arr.map((item, i) => {
            return (
                 <li
                    key={item.id}
                    className="char__item">
                        <Link to={`character/${item.id}`}>
                        <img src={item.image} alt={item.name}/>
                        <div className="char__name">{item.name}</div>
                        <div className="char__description">{item.species}</div>
                        </Link>
                </li>
            )
        });
        return (
            <ul className="char__grid">
                    {items}
            </ul>
        )
    }

    const elements = renderItems(filtered);

    return (
        <>
        <div>
            <SearchPanel
            filtered={filtered}
            handleSearchChange={handleSearchChange}
            search={search}
            />
        </div>
        <div>
            {elements}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
        </>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;