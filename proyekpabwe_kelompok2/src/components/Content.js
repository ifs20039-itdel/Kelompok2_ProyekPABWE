import kaprodi from '../Assets/Pak_Arie.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup  from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import coba from '../Assets/coba.jpg';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            opacity:0.5,
            backgroundColor: color,
            height: 1,
            width: '90%',
            margin: '20px auto'
        }}
    />
);

function content(){
    return(
            <>
            <div>
                <ColoredLine color='red'></ColoredLine>
            </div>
            <div data-aos="fade-right" className="container py-5 px-5 d-flex rounded-3" style={{backgroundColor:"gainsboro"}}>
                <img src={kaprodi} alt="Arie Satia Darma" width="210" height="210" class="d-inline-block rounded-4"></img>
                <div className='px-5'>
                    <p className='border border-light shadow-lg p-3 mb-5 bg-body p-3 rounded-3'>
                        "The discipline of International Relations has now encompassed issues that are interdisciplinary in nature. Therefore, we need to capitalize on this development for the advantage
                        of future generations who will carry the responsibility over Indonesias resilience,
                        development, and participation in the realization of world peace based on freedom,
                        perpetual peace and social justice."
                        <br></br>
                        <br></br>
                        <p><b>Arie Satia Dharma, M.T</b></p>

                    </p>
                    <p className='px-2'>Kepala Program Studi Sarjana Informatika, <br></br> Dosen Mahasiswa Informatika
                    </p>
                </div>
            </div>
            <div>
                <ColoredLine color='red'></ColoredLine>
            </div>
            <div data-aos="fade-up w-100" className="container py-3 px-5 d-flex rounded-2" style={{backgroundColor:"gainsboro"}}>
                <h3 className='w-100'>Event Terkini</h3>
                <a className='w-100 position text-end' >Lihat lebih banyak</a>
            </div>
            <CardGroup className="container">
            <Card data-aos = "flip-left" data-aos-duration = "1500" style={{ width: '18rem' }} className="container">
                <Card.Img variant="top" src={coba} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Lihat Selengkapnya</Button>
                </Card.Body>
            </Card>
            <Card data-aos = "flip-left" data-aos-duration = "1500" style={{ width: '18rem' }} className="container">
                <Card.Img variant="top" src={coba} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Lihat Selengkapnya</Button>
                </Card.Body>
            </Card>
            <Card data-aos = "flip-left" data-aos-duration = "1500" style={{ width: '18rem' }} className="container">
                <Card.Img variant="top" src={coba} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Lihat Selengkapnya</Button>
                </Card.Body>
            </Card>
            <Card data-aos = "flip-left" data-aos-duration = "1500">
            <Form className="p-3">
                <h4 className='text-center py-2'>Follow News</h4>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan Nama" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alamat Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted" style={{fontSize:"12px",paddingLeft:"10px"}}>
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control type="textArea"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Card>
        
            </CardGroup>
            </>
    );
}

export default content;