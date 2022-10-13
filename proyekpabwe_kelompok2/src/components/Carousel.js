import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/tanoto.jpg'
import img2 from '../Assets/img2.jpeg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/Pic4.png'
import img5 from '../Assets/pic5.png'

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1500} style={{height: '550px'}}>
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
      <Carousel.Item interval={1500} style={{height: '550px'}}>
        <img
          className=" w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Kunjungan GMR Varalakshmi Foundation India</h3>
          <p> di Institut Teknologi Del.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{height: '550px'}}>
        <img
          className="w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Penandatanganan MoU dan PKS</h3>
          <p>
            IT Del dan PT Gramedia.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500} style={{height: '550px'}}>
        <img
          className=" w-100 h-100"
          src={img4}
          alt="Forth slide"
        />
        <Carousel.Caption>
          <h3>Launching white Paper Book</h3>
          <p> IT Del dan Poltek SSN.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500} style={{height: '550px'}}>
        <img
          className=" w-100 h-100"
          src={img5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>Kunjungan PT Riset Perkebunan Nusantara</h3>
          <p> Kampus IT DEL dan KHDTK IT DEL.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;