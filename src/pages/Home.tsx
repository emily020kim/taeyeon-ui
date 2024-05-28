import { useEffect } from "react";
import "../style/Home.css";


const Home = () => {
    useEffect(() => {
        const handleInputChange = () => {
            document.body.classList.toggle('blue');
        };

        const inputs = document.querySelectorAll('input[name="slider"]');
        inputs.forEach(input => input.addEventListener('change', handleInputChange));

        return () => {
            inputs.forEach(input => input.removeEventListener('change', handleInputChange));
        };
    }, []);

    return (
        <div className="flex bg-yellow-50 h-full w-screen">
            <div className="flex w-1/2 h-screen items-center justify-center">
                <h1 className="text-3xl font-semibold font-mono uppercase">
                    kim taeyeon 
                </h1>
            </div>

            <div className="flex w-1/2 h-screen items-center justify-center">
                <div className="container">
                    <input type="radio" name="slider" id="item-1" defaultChecked />
                    <input type="radio" name="slider" id="item-2" />
                    <input type="radio" name="slider" id="item-3" />
                    <div className="cards">
                        <label className="card" htmlFor="item-1" id="song-1">
                            <img src="https://i.pinimg.com/originals/37/8a/b5/378ab5d59704ff3d6456ac87cf93b421.jpg" alt="song" />
                        </label>
                        <label className="card" htmlFor="item-2" id="song-2">
                            <img src="https://i.pinimg.com/originals/4c/4c/16/4c4c16a5fce442d4ed64e58dd9c02d09.jpg" alt="song" />
                        </label>
                        <label className="card" htmlFor="item-3" id="song-3">
                            <img src="https://i.pinimg.com/originals/a1/c5/1e/a1c51e0342e9c2ae630d37d4e3bb1af2.jpg" alt="song" />
                        </label>
                    </div>
                    <div className="player">
                        <div className="upper-part">
                            <div className="play-icon">
                                <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-play" viewBox="0 0 24 24">
                                    <path d="M5 3l14 9-14 9V3z" />
                                </svg>
                            </div>
                            <div className="info-area" id="test">
                                <label className="song-info" id="song-info-1">
                                    <div className="title">INVU</div>
                                    <div className="sub-line">
                                        <div className="subtitle">Taeyeon</div>
                                        <div className="time">3.09</div>
                                    </div>
                                </label>
                                <label className="song-info" id="song-info-2">
                                    <div className="title">Feel So Fine</div>
                                    <div className="sub-line">
                                        <div className="subtitle">Taeyeon</div>
                                        <div className="time">3.09</div>
                                    </div>
                                </label>
                                <label className="song-info" id="song-info-3">
                                    <div className="title">U R</div>
                                    <div className="sub-line">
                                        <div className="subtitle">Taeyeon</div>
                                        <div className="time">3.09</div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <span className="progress"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home