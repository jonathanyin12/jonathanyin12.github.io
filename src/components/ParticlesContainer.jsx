import React, {Component} from 'react';
import Particles from "react-tsparticles";

class ParticlesContainer extends Component {
render() {
    return ( 
            <Particles
                className='particles'
                options={{
                    background: {
                    color: {
                        value: "000000",
                    },
                    },
                    fpsLimit: 30,
                    interactivity: {
                    events: {
                        onClick: {
                        enable: true,
                        mode: "push",
                        },
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
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
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
                    size: {
                        value: 1,
                    },
                    },
                    detectRetina: true,
                }}
            />
        )
    }
}


export default ParticlesContainer;
