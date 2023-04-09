import React from 'react'
import { Link } from "react-router-dom";
import '../style/AddAlbum.css';

const AddAlbum = (props) => {

  //this function get all the input like userid and title then call add albumm function for add it on the album list
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <>
   
      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h4>Enter New Album Details</h4>
          <div className='inp-container'>
            Enter User Id :
            <input id='aaform-userid-inp' type="number" required/>
          </div>
          <div className='inp-container'>
            Enter Album Title :
            <input id='aaform-title-inp' type="text" required/>
          </div>
          <div>
            <Link to="/"><button onClick={getAlbumFormData}>Add To List</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAlbum
