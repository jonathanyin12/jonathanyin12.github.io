import React, {Component} from 'react';
import Particles from "react-particles-js";

class ParticlesContainer extends Component {
render() {
    return ( 
        <div style={{
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: '#000000'
            }}>
            <Particles
                // className='particles'
                // id="tsparticles"
                params={{
                    particles: {
                        color: {
                            value: "#FFFFFF"                            
                        },
                        
                        line_linked: {
                            color:  "#FFFFFF",
                            distance: 150,
                        },
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        size: {
                            value: 1
                        },
                        move: {
                            speed: 0.5,
                            attract: {
                                enable: true
                            }
                            
                        },
                    },
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push"
                              },
                            onHover: {
                                enable: false,
                                parallax: {
                                    enable:false,
                                    force:100,
                                    smooth:50,
                                },
                                resize: true
                            }
                        },
                        modes:{
                            push: {
                                quantity: 3
                            }
                        }
                    },
                    detectRetina: true
                }} 
                // options={{
                //     background: {
                //     color: {
                //         value: "000000",
                //     },
                //     },
                //     fpsLimit: 60,
                //     interactivity: {
                //     events: {
                //         onClick: {
                //         enable: true,
                //         mode: "push",
                //         },
                //         resize: true,
                //     },
                //     modes: {
                //         push: {
                //         quantity: 4,
                //         }
                //     }
                //     },
                //     particles: {
                //     color: {
                //         value: "#ffffff",
                //     },
                //     links: {
                //         color: "#ffffff",
                //         distance: 150,
                //         enable: true,
                //         opacity: 0.5,
                //         width: 1,
                //     },
                //     collisions: {
                //         enable: true,
                //     },
                //     move: {
                //         direction: "none",
                //         enable: true,
                //         speed: 1,
                //         straight: false,
                //     },
                //     number: {
                //         density: {
                //         enable: true,
                //         area: 800,
                //         },
                //         value: 80,
                //     },
                //     opacity: {
                //         value: 0.5
                //     },
                //     shape: {
                //         type: "circle",
                //     },
                //     size: {
                //         value: 1,
                //     },
                //     },
                //     detectRetina: false,
                // }}
            />
            </div>
        )
    }
}


export default ParticlesContainer;
