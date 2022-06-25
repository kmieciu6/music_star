import React from 'react';
import '../scss/main.scss'
import {Carousel} from 'react-bootstrap';
import photo1 from '../assets/lady-pank1.jpg'
import photo2 from '../assets/lady-pank2.jpg'
import photo3 from '../assets/lady-pank3.jpg'
import photo4 from '../assets/lady-pank4.jpg'
import photo5 from '../assets/lady-pank5.jpg'
import photo6 from '../assets/lady-pank6.jpg'

const Opening = () => {
    const interval = 3000;

    return (
        <Carousel className='opening'>
            <Carousel.Item interval={interval}>
                <img
                    className="d-block w-100"
                    src={photo1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={interval}>
                <img
                    className="d-block w-100"
                    src={photo2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={interval}>
                <img
                    className="d-block w-100"
                    src={photo3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={interval}>
                <img
                    className="d-block w-100"
                    src={photo4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={interval}>
                <img
                    className="d-block w-100"
                    src={photo5}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={interval}>
                <img
                    className="d-block w-100"
                    src={photo6}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Opening;