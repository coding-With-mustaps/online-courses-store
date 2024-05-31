
import { useState } from "react";

const App = () => {
  const [image, setImage] = useState(null);

  const handleFIleUpload = (e) => {
    const file = e.target.files[0];
    setImage(e.target.files[0])
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avater", image);

    const res = await fetch("/upload", {
      method: "POST",
      body: formData
    })

    const data = await res.json();

    if(data.error) {
      console.log("Error occured", data.error)
      return;
    }

    if(!res.ok) {
      console.log("Something went wrong")
      return;
    }

    console.log(data);

    
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="file"
          accept="image/*"
          onChange={handleFIleUpload}
        />
        <button>Submit</button>
      </form>
    </div>
  )
};

export default App;
