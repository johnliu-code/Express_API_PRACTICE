import { useState, useEffect } from "react";
import Images from "../components/Images";
import { Button, Input } from 'semantic-ui-react';

const ImagesPage = ({myImages, setMyImages}) => {
    const [images, setImages] = useState([]);
    const [pagenumber, setPagenumber] = useState(1);
    const [searchKeyword, setSearchKeyword] = useState('');
    let maxPages = 10;
    const [desoSwitchPages, setDesoSwitchPages] = useState(false);
    const [deosSearch, setDeosSearch] = useState(false);
  
    //Get API data with async function and call it when first loading...
    const getImages = async () => {
      try {
        //Hide API key with .env variable
          const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=${pagenumber}&per_page=12`);
          const data = await response.json();
          setImages(data);
      } catch (error) {
          console.log(error);
      } 
    }
  
    
    //Get photos by search keyword with API...
    const searchPhotoByKeyword = async (search) => {
      try {
        //Hide API key with .env variable
          const response = await fetch(`https://api.unsplash.com/search/photos?&query=${search}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=${pagenumber}&per_page=12`);
          const data = await response.json();
          if(data.results.length > 0){
            if(!desoSwitchPages && deosSearch){
              setPagenumber(1);        //Only reset pagenumber to default 1 once user doing search, then could change the pagenumber with search results...
            }
            setImages(data.results);
          }
          
      } catch (error) {
          console.log(error);
      } 
    }
  
    useEffect(() => {
      //Switch results with search or not search
      if(searchKeyword === ''){
        getImages();
      }
      else{
        searchPhotoByKeyword(searchKeyword);
      }
    }, [pagenumber, searchKeyword])
  
    const handleNext = () => {
      if(pagenumber < maxPages) {
        setPagenumber(pagenumber+1);
        setDesoSwitchPages(true);
      } 
      else{  
        setPagenumber(maxPages);
      }
    }
  
    const handlePrevious = () => {
      if(pagenumber > 1) {
        setPagenumber(pagenumber-1);
        setDesoSwitchPages(true);
      } 
      else{
        setPagenumber(1);
      }
    }
  
    //Switch search and changePages actions to opposite with user onFocus event changes for getting pages change with search resuts...
    const handleFocus = () => {
      setDesoSwitchPages(false);
      setDeosSearch(true);
    }
  
    const handleBlur = () => {
      setDesoSwitchPages(true);
      setDeosSearch(false);
    }
  return (
    <div className="page">
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "50px"}}>
          <h1>Search FREE images for your stories ...</h1>
          <Input icon='search' onChange={(e) => e.target.value ? setSearchKeyword(e.target.value) : undefined } placeholder='Search...' onFocus={handleFocus} onBlur={handleBlur}/> 
        </div>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", margin: "20px 0", border: "1px solid rgba(0,0,0,.15)", borderRadius: '5PX'}}>
            {images ? 
            (
                images.map((image) => (
                    <Images image={image} key={image.id} myImages={myImages} setMyImages={setMyImages} />
                ))
            ) : (
              <h2>Loading...</h2>
            )}          
        </div>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", paddingBottom: "30px"}}>
          <Button labelPosition='left' icon='left chevron' content='Previous' onClick={handlePrevious} />
            <input type = "text" readOnly  value={pagenumber}  style={{width: "50px", height: "100%", textAlign: "center", border: "none"}}/>
          <Button labelPosition='right' icon='right chevron' content='Next Page' onClick={handleNext} />  
        </div>
    </div>
  )
}

export default ImagesPage