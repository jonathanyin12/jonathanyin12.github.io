import React, {Component} from 'react';
import Particles from "react-tsparticles";

class ParticlesContainer extends Component {
render() {
    return ( 
            <Particles
                className='particles'
                id="tsparticles"
                options={{
                    background: {
                    color: {
                        value: "000000",
                    },
                    },
                    fpsLimit: 60,
                    interactivity: {
                    events: {
                        onClick: {
                        enable: true,
                        mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                        quantity: 4,
                        }
                    }
                    },
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 0.5,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                        enable: true,
                        area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: 1,
                    },
                    },
                    detectRetina: false,
                }}
            />
        )
    }
}


export default ParticlesContainer;
