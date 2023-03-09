import { useParams, Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
// import { Helmet } from 'react-helmet';
// import AppBanner from "../appBanner/AppBanner";
import useRandMService from '../../services/RandMService';
import setContent from '../../utils/setContent';

import './singleCharPage.scss';


const SingleCharPage = () => {
    const {charId} = useParams();
    const [char, setChar] = useState(null);

    const {getCharacter, clearError, process, setProcess} = useRandMService();
    useEffect(() => {
        updateChar()
    }, [charId])

    const updateChar = () => {
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCharLoaded = (char) => {
        setChar(char)
    }

    return (
        <>
        {setContent(process, View, char)}
        </>
    )
}
const View = ({data}) => {
    const {name, image, status, gender, species, origin, type} = data;

    return (
        <>
        {/* <Helmet>
        <meta
            name="description"
            content="Marvel information portal"
            />
        <title>{`${name} page`}</title>
        </Helmet> */}
        {/* <AppBanner /> */}
        <Link to="/" className="single-comic__back">GO BACK</Link>
            <div className="single-comic">
                <img src={image} alt={name} className="single-comic__img" />
                    <h2 className="single-comic__name">{name}</h2>
                    <h2 className="single-comic__informations">Informations</h2>
                <div className="single-comic__info">
                    <h2 className="single-comic__descr">Gender<p>{gender}</p></h2>
                    <h2 className="single-comic__descr">Status<p>{status}</p></h2>
                    <h2 className="single-comic__descr">Specie<p>{species}</p></h2>
                    <h2 className="single-comic__descr">Origin<p>{origin}</p></h2>
                    <h2 className="single-comic__descr">Type<p>{type ? type :'uknown' }</p></h2>
                </div>
            </div>
        </>
    )
}

export default SingleCharPage;