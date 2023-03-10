import React, {useState} from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import CharList from '../charList/CharList';
import AppBanner from '../appBaner/AppBanner';
import { Helmet } from 'react-helmet';

const MainPage = () => {

  const [selectedChar, setChar] = useState(null)
   
  const onCharSelected = (id) => {
      setChar(id);
  }

  return (
    <>
        <Helmet>
        <meta
            name="description"
            content="Rick and Morty"
            />
        <title>Rick and Morty</title>
        </Helmet>
             <ErrorBoundary>
                <AppBanner/>
            </ErrorBoundary>
        <div className="char__content">
            <ErrorBoundary>
                <CharList onCharSelected={onCharSelected}/>
            </ErrorBoundary>
        </div>
    </>
  )
}

export default MainPage
