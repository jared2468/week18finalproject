import React from 'react';

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Voting from './voting';

export const Song = (props) => {
    const { song, updateSong, deleteSong } = props;

    const editClick = (e) => {
        e.preventDefault();

        const song = document.getElementById("edit-song").value;
        const artist = document.getElementById("edit-artist").value;

        let songToUse = "";
        let artistToUse = "";

        (song !== "" && song !== song.song) ? songToUse = song : songToUse = song.song;
        (artist !== "" && artist !== song.artist) ? artistToUse = artist : artistToUse = song.artist;
     

        updateSong({song: songToUse, artist: artistToUse}, song.id);
    };

    const deleteClick = (e) => {
        deleteSong(song.id);
    };

    return (
        <Card>
        <Card.Header>{song.song}</Card.Header>
        <Card.Body>

            <Card.Subtitle>Song</Card.Subtitle>
            <Card.Text>{song.song}</Card.Text>
            <Card.Subtitle>{song.artist}</Card.Subtitle>
            <Voting />
        </Card.Body>
        <Card.Footer>
            <input type="text" placeholder="Edit Song Name" id="edit-song"></input>
            <input type="text" placeholder="Edit Artist" id="edit-artist"></input>
            <Button variant="warning" onClick={editClick}>Submit Song Edits</Button>
            <Button variant="danger" onClick={deleteClick}>Delete Song</Button>
        </Card.Footer>
        </Card>
    );
};
// import React from "react";
// import { NewSongForm } from './NewSongForm';

// export const Song = (props) => {
//     const { song, updateSong } = props;

//     const deleteSong = (songId) => {
//         const updatedSong = {
//             ...songs,
//             songs: songs.song.filter((x) => x.id !== songId)
//         };
//         updateSong(updatedSong);
//     }

//     const addNewSong = (song) => updateSong({ ...songs, songs.song, artist });

//     const songs = () => (
//         <ul>
//            {songs.song.map((song, id) => (
//             <li key={id}>
//                 <label> {`Song: ${song.name} Artist: ${song.artist}`} </label>
//                 <button onClick={(e) => deleteSong(song.id)}>Delete</button>
//             </li>
//            ))} 
//         </ul>
//     );

//     return (
//         console.log(songs.song),
//         <div>
//             <h1>{songs.song}</h1>
//             {
//                 songs({ song, songs: .id deleteSong})
//             }
//             <NewSongForm addNewSong={addNewSong} />
//         </div>
//     );

// };