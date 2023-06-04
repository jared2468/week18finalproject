
import { api } from '../rest/api'
import { Card } from "react-bootstrap"


export function NewSongForm(props) {

    const onSubmit = (e) => {
        e.preventDefault();
        let song = document.getElementById("create-song").value;
        let artist = document.getElementById("artist").value;

        api.create({song: song, artist: artist});
        api.get();

        document.getElementById("create-song").value = "";
        document.getElementById("artist").value = "";

    }

    return (
        <Card className="card">
            <Card.Header>Add a New Song</Card.Header>
            <Card.Body>
            <form className="from-control card" onSubmit={onSubmit}>
                <input type='text' placeholder='New Song' id='create-song'></input>
                <input type='text' placeholder='Artist' id='artist'></input>
                <button type='submit' className='btn btn-primary'>Create Song</button>
            </form>
            </Card.Body>
        </Card>



    )
};