import {useRef} from 'react'

import './App.css';



function App() {
  const fileInputRef=useRef();

  const logo=`https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-28670.jpg?w=740&t=st=1726933079~exp=1726933679~hmac=ad75440a1ee068af4e8e9e73180f4902f9eb9f069e26908cf4eb5af7dde47803`

  const onUploadClick=()=>{
    fileInputRef.current.click();
  }
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
            />
        </div>
    </div>
  );
}

export default App;
