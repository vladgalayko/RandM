import React, {useState} from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import CharList from '../charList/CharList';
import AppBanner from '../appBaner/AppBanner';
import SearchPanel from '../searchPanel/SearchPanel';

const MainPage = () => {

  const [selectedChar, setChar] = useState(null)
   
  const onCharSelected = (id) => {
      setChar(id);
  }

  return (
    <>
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
