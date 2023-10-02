import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return(
        <main className="home__content-wrapper">
            <div className="home__header-wrapper">
                <div className="home__header-upper">
                    <p>Hi and welcome to my world!</p>
                    <p>My name is <span className="home__header-color">Shalom Jamaica Ave</span>.</p>
                </div>
                <div className="home__header-lower">
                    <p>A <span className="home__header-color">creative</span> frontend developer currently</p>
                    <p>a college student.</p>
                </div>
            </div>
            <div className="home__button-wrapper">
                <button className="home__resume-btn">
                    RESUME
                </button>
            </div>
        </main>
    )
}

export default Home