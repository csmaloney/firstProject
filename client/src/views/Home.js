import React from 'react';
import ImageSlider from '../components/ImageSlider';
import SliderData from '../assets/SliderData';
import '../App.css';
import '../styles/Home.css';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {


  return (

    <div className='container1'>
      <ImageSlider slides={SliderData}/>

      <h1>Featured Products</h1>

        <div className='featured-prod-list'>

            {/* <div className='card'>

              <div className='card-top'>
                <img src={require('../assets/38hxNutZp.jpg')} className='featured-pic'></img>
              </div>

              <div className='card-bottom'>

                <div className='prod-price'>
                  <p>$0.01 / each</p>
                </div>
                
                <div className='prod-description'>
                  <p>3/8" zinc plated hex nuts</p>
                </div>

              </div>

            </div>

          <div className='card'>
            <div className='card-top'>
              <img src={require('../assets/10x1HhTek.jpg')} className='featured-pic'></img>
            </div>

            <div className='card-bottom'>

              <div className='prod-price'>
                <p>$10.00 / thousand </p>
              </div>
              
              <div className='prod-description'>
                <p>#10 x 1" hex head self drilling screw</p>
              </div>

            </div>

          </div>

          <div className='card'>

            <div className='card-top'>
              <img src={require('../assets/strut.jpeg')} className='featured-pic'></img>
            </div>

            <div className='card-bottom'>

              <div className='prod-price'>
                <p>$3.50 / ft</p>
              </div>
              
              <div className='prod-description'>
                <p>1 5/8" x 10' Unistrut, Pregalvanized</p>
              </div>

            </div>
            
          </div> */}

        

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require('../assets/10x1HhTek.jpg')} />
          <Card.Body>
            <Card.Title>#10 x 1 Tek Screw</Card.Title>
            <Card.Text>
              $10.00 / Thousand
            </Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require('../assets/38hxNutZp.jpg')} />
          <Card.Body>
            <Card.Title>3/8" Hex Nut</Card.Title>
            <Card.Text>
              $0.01 / Each
            </Card.Text>
            <Button variant="primary" >Add to cart</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require('../assets/strut.jpeg')} />
          <Card.Body>
            <Card.Title>1 5/8" x 10' Unistrut </Card.Title>
            <Card.Text>
              $4.45 / Foot
            </Card.Text>
            <Button variant="primary" >Add to cart</Button>
          </Card.Body>
        </Card>

      </div>


    </div>
  );
}