import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import AlbumList from "./components/AlbumList";
import AddAlbum from "./components/AddAlbum";
import UpdateAlbum from "./components/UpdateAlbum";

function App() {

  // initializing hooks
  const [data, setData] = useState([]);


  // fetching data from api
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((datas) => setData(datas));
  };

  useEffect(() => {
    fetchData();
  }, []);


  // deleteAlbum from the list
  const deleteAlbum = function (e) {
    alert("Are you sure to delete ?");
    const id = e.target.id;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    const newData = [];
    for (let i = 0; i < data.length; i++) {
      if (parseInt(data[i].id) !== parseInt(id)) {
        newData.push(data[i]);
      }
    }

    alert("Album Deleted Successfully!");
    setData(newData);
  };


  // update particular album data
  const updateAlbum = function(id,updatedTitle,updateUserid,oldAlbum){
    const index = data.indexOf(oldAlbum);
    if(index == -1){
      alert('Some error occur');
      return;
    }
    let newAlbum = {
      id: id,
      userId: updateUserid,
      title: updatedTitle
    }
    data[index] = newAlbum;
    setData(data);
  }

  // add new album to the list
  let addAlbumToList = (newUserId, newTitle) => {
   
    const length = data.length;
    const lastId = data[length - 1].id;
    const album = {
      userId: newUserId,
      id: lastId + 1,
      title: newTitle,
    }
    setData([...data,album])
   
    alert("New Album added successfully in the bottom");
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AlbumList data={data} deleteAlbum={deleteAlbum} updateAlbum={updateAlbum} />}/>
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/addalbum" element={<AddAlbum addAlbumToList={addAlbumToList}  />} />
        <Route exact path="/update-album/:albumId" element={<UpdateAlbum dataObj={data} updateAlbum={updateAlbum}/>} />
      </Routes>
    </>
  );
}

export default App;
