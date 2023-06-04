import React, { Component } from 'react';
import { Song } from './song';
import { api } from '../rest/api';
import { NewSongForm } from './newsongform'


export class SongList extends Component {
    state = {
        songs: []
    };

    componentDidMount() {
        this.fetchSongs();
    }

    fetchSongs = async () => {
        const songs = await api.get();
        this.setState({Song});
    };

    updateToDo = async (updatedSong) => {
        console.log(updatedSong);
        await api.put(updatedSong);
        this.fetchSongs();
    };

    createSong = async (newSong) => {
        await api.create(newSong);
        this.fetchSongs();
        document.getElementById("create-song").value = '';
    };

    deleteSong = async (id) => {
        await api.delete(id);
        this.fetchSongs();
    };

    render() {
        return (
            <div>
                <NewSongForm fetchSongs={this.fetchSongs}/>
                {
                    this.state.songs.map((song) => (
                    <Song song={song} key={song.id} updateToDo={this.updateSong} deleteSong={this.deleteSong}/>
                ))}
           
            </div>
        );
    }
}
