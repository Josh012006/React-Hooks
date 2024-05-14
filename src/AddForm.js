import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './AddForm.css';

function AddForm ({SetMovies}) {
    return (
        <form 
        style = {{marginTop: '60px', marginBottom: '60px', marginLeft: 'auto', marginRight: 'auto'}} 
        id = 'addForm'
        onSubmit={(e) => {
            e.preventDefault();
            SetMovies(mov => 
                {
                    let newFilm = 
                    {
                        title: `${document.getElementById("input1").value}`,
                        description: `${document.getElementById("input2").value}`,
                        posterURL: `${document.getElementById("input3").value}`,
                        rating: Number(`${document.getElementById("input4").value}`)
                    }
                    return [...mov, JSON.stringify(newFilm)];
                }
            )
            document.getElementById("input1").value = "";
            document.getElementById("input2").value = "";
            document.getElementById("input3").value = "";
            document.getElementById("input4").value = "";
        }}
        >
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" className='bg-success'>
                    Titre
                </InputGroup.Text>
                <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className='inputPlace'
                placeholder = "Entrer le titre ici"
                id = "input1"
                required
                />
            </InputGroup>
            <br />
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className='bg-success p-2 rounded'>Description</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Entrer la description ici..." 
                    className='inputPlace'
                    id = "input2"
                    required
                />
            </Form.Group>
            <br />
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" className='bg-success'>
                    URL du poster du film
                </InputGroup.Text>
                <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className='inputPlace'
                placeholder = "Entrer l'URL de l'image du poster du film"
                id = "input3"
                required
                />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" className='bg-success'>
                    Rating (sur 10)
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    className='inputPlace'
                    placeholder="Entrer un rating allant de 0 à 10"
                    id="input4"
                    required
                />
            </InputGroup>
            <br />
            <Button variant="success" form='addForm' style = {{color: 'black'}} type='submit'>Ajouter le film</Button>
        </form>
    );
}


export default AddForm;