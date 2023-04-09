import { useState,useEffect } from "react";
import '../style/AlbumList.css';

import AlbumBox from "./AlbumBox";

function AlbumList(props) {
  
  const data = props.data;
  const deleteAlbum = props.deleteAlbum;
  const updateAlbum = props.updateAlbum;

  return (
    <main className="AlbumList">

      <h1>Album Collection</h1>

      <div className="container">
        {data &&
          data.length > 0 &&
          data.map((dataObj, index) => 
              <AlbumBox dataObj={dataObj} deleteAlbum={deleteAlbum} updateAlbum={updateAlbum}/>
          )}
      </div>
    </main>
  );
}

export default AlbumList;
