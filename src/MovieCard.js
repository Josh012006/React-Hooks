import Card from 'react-bootstrap/Card';


/**
 * Description placeholder
 *
 * @param {{ Title: string; Description: string; PosterURL: string; Rating: number; }} param0
 * @param {string} param0.Title
 * @param {string} param0.Description
 * @param {string} param0.PosterURL
 * @param {number} param0.Rating
 * @returns {JSX Bootstrap Card Element}
 */
function MovieCard({Title, Description, PosterURL, Rating}) {
    return(
        <div className='col-12 col-lg-4'>
            <Card style={{ width: '25rem', minHeight: '820px', marginTop: '15px', backgroundColor: 'rgb(137, 233, 166)'}}>
                <Card.Img variant="top" src={PosterURL} alt = "filmPoster" style={{ width: '24.9rem', height: '39.2rem' }} />
                <Card.Body>
                    <Card.Title style = {{fontWeight: 'bold'}}>{Title}</Card.Title>
                    <Card.Text>
                        {Description}
                    </Card.Text>
                    <span style = {{fontWeight: 'bold'}}>{Rating}</span>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;