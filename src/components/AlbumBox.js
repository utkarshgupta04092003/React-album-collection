import '../style/AlbumBox.css';
import { Link, json } from 'react-router-dom';

// particular single album box
function AlbumBox(props){
   
      
    const dataObj = props.dataObj;
    const updateAlbum = props.updateAlbum;

    function fun(){
        let d = {dataObj:dataObj,updateAlbum:updateAlbum};
        let newData = JSON.stringify(d);
        localStorage.setItem('data',newData);
    }

    return(
        <div className="AlbumBox">
            <h3>{props.dataObj.title}
            </h3>

            <div className='buttons'>
            
            <Link to={`/update-album/${props.dataObj.id}`} onClick={fun}  >
                
                <button type='button' className='update-btn' >Update</button>
            
            </Link> 

            <Link>
            <button className='delete-btn' id={props.dataObj.id}  onClick={props.deleteAlbum}>Delete</button>
            
            </Link> 
            </div>
        </div>
    )
}

export default AlbumBox;