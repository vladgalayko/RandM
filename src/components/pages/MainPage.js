import React, {useState} from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import CharList from '../charList/CharList';

const MainPage = () => {
    
    const [selectedChar, setChar] = useState(null)
   
    const onCharSelected = (id) => {
        setChar(id);
    }

  return (
        <div className="char__content">
            <ErrorBoundary>
                <CharList onCharSelected={onCharSelected}/>
            </ErrorBoundary>
            <div>
            <ErrorBoundary>
                {/* <CharInfo charId={selectedChar}/> */}
            </ErrorBoundary>
            </div>
        </div>
    
  )
}

export default MainPage
