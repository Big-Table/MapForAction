import React from 'react'
import "./IncidentForm.css";

function ImageForm(){
    
    handleImageChange(e){
        // console.log(e)
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        console.log(e.target.files)
    
    
        let formData = new FormData()
        formData.append("upload", e.target.files[0])
        formData.append("id", "5ef11198fbb261536728be00")
        
        for (var key of formData.entries()) {
          console.log(key[0] + ', ' + key[1]);
        }
        console.log(formData)
        fetch('http://localhost:5000/incidents/upload', {
          method: "POST",
          // headers: {
          //   'Content-Type': 'application/json'
          // },
          body: formData
        })
      }


    return (
        <div id="incidentForm">
            <form>
                <label htmlFor="image">Upload Photo</label>
                <input
                    name="image"
                    type="file"
                    id="imageUpload"
                    // value={this.state.image_url}
                    onChange={this.handleImageChange}
                    accept=".png, .jpg, .jpeg"
                />
            </form>
        </div>
    )
}

export default ImageForm