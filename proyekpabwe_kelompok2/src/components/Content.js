import kaprodi from '../Assets/Pak_Arie.jpg';

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
            <div data-aos="fade-right" className="container py-5 d-flex bg-light rounded-3">
                <img src={kaprodi} alt="Arie Satia Darma" width="200" height="200" class="d-inline-block"></img>
                <div className='px-5'>
                    <p className='border 2px p-3 rounded-3'>The discipline of International Relations has now encompassed issues that are interdisciplinary in nature. Therefore, we need to capitalize on this development for the advantage
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
            </div></>
    );
}

export default content;