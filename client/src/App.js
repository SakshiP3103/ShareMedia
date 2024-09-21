import {useRef,useState,useEffect} from 'react'

import './App.css';

import { uploadFile } from './services/api';



function App() {
  const[file,setFile]=useState('');

  const [result,setResult]=useState('');
  const fileInputRef=useRef();

  const logo=`https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-28670.jpg?w=740&t=st=1726933079~exp=1726933679~hmac=ad75440a1ee068af4e8e9e73180f4902f9eb9f069e26908cf4eb5af7dde47803`

useEffect(()=>{
   const getImage=async ()=>{
    if(file){
      const data=new FormData();
      data.append("name",file.name);
      data.append("file",file)
      let response= await uploadFile(data);
      setResult(response.path);
    }
   }
   getImage();
},[file])

  const onUploadClick=()=>{
    fileInputRef.current.click();
  }
  console.log(file);
  return (
    <div className="container">
     <img src={logo} alt="banner"/>
        <div className='wrapper'>
            <h1> Simple file sharing</h1>
            <p>upload and share the download link to anywhere!</p>

            <button onClick={()=>onUploadClick()}>Upload</button>
            <input type="file"
              ref={fileInputRef}
              style={{display:'none'}}
              onChange={(e)=>setFile(e.target.files[0 ])}
            />

            <a href={result} target="_blank">{result}</a>
        </div>
    </div>
  );
}

export default App;
