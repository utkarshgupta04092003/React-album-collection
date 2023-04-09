
import '../style/updateAlbum.css';
import {Link, useParams, useLocation, json } from "react-router-dom";

// update particular album data component
function AddAlbum(props) {

    console.log(props.dataObj)
    let dataObj = props.dataObj;

    const { albumId } = useParams();
    console.log(albumId);
    let currData;
    for(let i=0;i<dataObj.length;i++){
        if(dataObj[i].id == albumId){
            currData = dataObj[i];
            break;
        }
    }

    let t = localStorage.getItem('data');
    let d = JSON.parse(t);
    console.log('local',d);
    console.log('curr data', currData);
    const getUpdateData = function(){
        const id = currData.id;
        console.log(currData.id);



        let updateTitle = document.getElementById('title-inp').value;
        let updateUserid = document.getElementById('userid-inp').value;
        console.log('updated values',updateTitle,updateUserid);

        if (updateTitle === '' || updateTitle===undefined) {
            updateTitle = currData.title;
        }
        if (updateUserid === '' || updateUserid===undefined) {
            updateUserid = currData.userId;
        }

        console.log('data', id,updateTitle,updateUserid,currData);
        props.updateAlbum(id, updateTitle, Number(updateUserid), currData);
    }



  return (
   
      <>

        
        <div className="update-album">
          <div className="form-container">
            <h4>Title : {currData.title}</h4>
            <div className="inp-container">
              Enter New Title :<input type="text" id="title-inp"></input>
            </div>

            <h4>User Id : {currData.userId}</h4>
            <div className="inp-container">
              Enter New UserId :<input type="number" id="userid-inp"></input>
            </div>

            <Link to='/'>
              <button type="submit" onClick={getUpdateData}>
                Save
              </button>
            </Link>
          </div>
        </div>
      </>
    
  );
}

export default AddAlbum;
