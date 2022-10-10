import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/tanoto.jpg'
import img2 from '../Assets/img2.jpeg'
import img3 from '../Assets/img3.jpg'

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} style={{height: '550px'}}>
        <img
          className=" w-100 h-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Program Beasiswa 2021</h3>
          <p>PT. Tanoto Group di Institut Teknologi Del.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{height: '550px'}}>
        <img
          className=" w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '550px'}}>
        <img
          className="w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;