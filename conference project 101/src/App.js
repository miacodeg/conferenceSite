//This App.js file serves as a container that holds the uploaded files and it just displays them after fetching from storage on firebase
import './App.css';
import { useEffect, useState } from "react"; 
import { storage,  } from "./firebase"; //importing storage module from firebase
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';  
import { v4 } from "uuid"; //allows users to save their files with unique name, to avoid applauds of same name

function App() {
  const[imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  // this code references the storage in firebase and the file name is images
  const imageListRef = ref(storage, "images/")
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, 'images/${imageUpload.name + v4()}');
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev,url]); //returns an array of the files
      });
    });
  };
//function to uploaded data in an array form
useEffect (() => {
   listAll(imageListRef).then((response) => {
      response.items.forEach((item) => { 
        getDownloadURL(item).then((url) => {
          setImageList((prev) =>[...prev,url]);
        });
      });
   });
},[]);
//html code for the react app, displays how the files will look like on our website
  return (
    <div className="App">
      <input 
      type="file" 
      onChange={(event) => {
        setImageUpload(event.target.files[0])
        }}
        />
      <button onClick={upload}>Upload files here</button>

      {imageList.map((url) => {
        return <img src={url} />
        })}
    </div>
  );  
}

export default App;
