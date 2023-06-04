import React from "react";
import { NewSongForm } from "./newsongform";
import { SongList } from "./songlist";

export function Home() {
   return (
    <>
      <div>
         <h3>Home</h3>
         <SongList />
      </div>
    </>
   )
}
