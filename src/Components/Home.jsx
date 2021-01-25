import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Home.css'
import logo1 from '../Images/axios1.jpg'
import logo3 from '../Images/axios3.png'
import logo4 from '../Images/react-bootstrap.png'

function displayCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={logo1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Axios</h3>
                    <p>Axios is a popular, promise-based HTTP client that sports an easy-to-use API</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={logo4}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>React-Bootstrap</h3>
                    <p>The most popular front-end framework. Rebuilt for React.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={logo3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default displayCarousel