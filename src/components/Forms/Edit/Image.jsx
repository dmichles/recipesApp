import { useState,  useEffect } from "react";
import { MuiFileInput } from "mui-file-input";
import { Button } from "@mui/material";

function Image({onImageUrlChange, imageUrl}) {
    const [value, setValue] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploaded, setUploaded] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState(imageUrl);

     useEffect(() => {
        setSelectedUrl(imageUrl);
  }, [imageUrl]);


    const handleChange = (newValue) => {
        setValue(newValue);
        setSelectedUrl(URL.createObjectURL(newValue));
        setUploaded(false);

    }

    const handleImageUpload = async ()=> {    
        const data = new FormData();
        data.append('file', value);
        data.append('upload_preset', 'unsigned_preset');

        const result = await fetch(
            'https://api.cloudinary.com/v1_1/dttx4s9nh/image/upload',
            { method: 'POST', body: data }
        )
        setUploaded(true);
        const res = await result.json();
        console.log(res.secure_url);

        onImageUrlChange(res.secure_url);

    } 
    
    return <div className="input">        
        <MuiFileInput value={value}
                label='Select image file'
                size='small'
                sx={{ width: 488 }}
            onChange={handleChange} />
        {selectedUrl && <img className='image-show' src={selectedUrl} />}
        {selectedUrl && value && !uploaded && <div className='subcontainer'>
            <Button
                variant='contained'
                size='medium'
                onClick={handleImageUpload}
                className='button-ingredient'
            >
                Upload image
            </Button>
        </div>}
        </div>
}

export default Image;