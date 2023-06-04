const ENDPOINT = 'https://64436e3f466f7c2b4b53846d.mockapi.io/songs';

class Api {

//   get = async () => {
//     try {
//     const resp = await fetch(ENDPOINT);
//     const data = await resp.json();
//     console.log(data);
//     return data;
//     } catch(e) {
//         console.log('Oops, looks like fetch Endpoint had an issue', e);
//     }
// }

// put = async (song) => {
//     try {
//         const resp = await fetch (`${ENDPOINT}/${song.id}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(song)
//         });
//         return await resp.json()
//     } catch(e) {
//         console.log('Oops, looks like updating Endpoint had an issue', e);
//     }
    
// }
// }

  // const getAllSongs = async () => {
  //   const response = await fetch(ENDPOINT)
  //   const data = await response.json()
  //   return data
  // }
  
  // const getOneSong = async (id) => {
  //   const response = await fetch(ENDPOINT + id)
  //   const data = await response.json()
  //   return data
  // }
  
  // const deleteSong = async (id) => {
  //   const response = await fetch(ENDPOINT + id, {
  //     method: "DELETE"
  //   })
  // }
  // const createSong = async (newSong) => {
  //   const response = await fetch(ENDPOINT, {
  //     method: "POST", 
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newSong)
  //   })
  //   const data = await response.json()
  //   return data
  // }
  
  // const updateSong = async (thread) => {
  //   const response = await fetch(ENDPOINT + song.id, {
  //     method: "PUT", 
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(song)
  //   })
  // }
  







  async get() {
    try {
      const resp = await fetch(ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log('Oops, looks like fetchENDPOINT had an issue.', e);
    }
  }

  async put(song) {
    try {
      const resp = await fetch(`${ENDPOINT}/${song.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(song)
      });
      return await resp.json();
    } catch (e) {
      console.log('Oops, looks like updating ENDPOINT had an issue.', e);
    }
  }

  async delete(id) {
    try {
      const resp = await fetch(`${ENDPOINT}/${id}`, {
        method: 'DELETE'
      });
      return await resp.json();
    } catch (e) {
      console.error(`Oops, looks like deleting ENDPOINT didn't work.`, e);
    }
  }

  async post(song) {
    try {
      const resp = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(song)
      });
      return await resp.json();
    } catch (e) {
      console.log('Oops, looks like adding ENDPOINT had an issue.', e);
    }
  }
  async getById(id) {
    try {
      const resp = await fetch(`${ENDPOINT}/${id}`);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log('Oops, looks like getById had an issue.', e);
    }
  }
  
  async create(song) {
    try {
      const resp = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(song)
      });
      return await resp.json();
    } catch (e) {
      console.log('Oops, looks like creating ENDPOINT had an issue.', e);
    }
  }
}

export const api = new Api();