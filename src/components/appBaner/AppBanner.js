import bannerDesktop from './rickandmorty.png';
import bannerMobile from './rickandmortymobile.png';
import './appBanner.scss'

const AppBanner = () => {
    return (
        <div className="app__banner">
            <img className="app__baner_img" src={bannerDesktop} alt="banner" />
            <img className="app__baner_img--mobile" src={bannerMobile} alt="banner" />
        </div>
    )
}

export default AppBanner;