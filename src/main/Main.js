import React from 'react';
import Foto from '../main/foto.png';
import './Main.css';


class Main extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="container-main">
                    <main className="content">
                        <div className="content-header">
                            <h2 className="subtitle">My name is</h2>
                            <h1 className="title">Nikolay Vetrov and I'm <span>Web Developer</span></h1>
                        </div>
                        <div className="text">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using ‘Content here, content here’, making it look like
                            </p>
                        </div>
                        <a href="#" className="btn">Contact me</a>
                    </main>
                </div>
                <img src={Foto} class="author" alt="men"></img>
            </div>
        )
    }
}
export default Main;