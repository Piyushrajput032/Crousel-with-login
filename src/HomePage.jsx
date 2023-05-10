import { useLocation } from "react-router-dom";
import {useRef, useState} from 'react'
import './HomePage.css'
import Slider from "react-slick";
import { Button } from "@mui/material";
const HomePage = () => {
  const location = useLocation();
  const { UserName } = location.state.data;
  const[autoplay,setAutoplay]=useState(true);
//   const [pouseonHover,setPauseOnHover]=useState(true);

 

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed:2000,
    
  };
console.log(settings)
  
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text absolute top-0 text-center">
        <h6>Welcome, {UserName}!</h6>
      </div>
      <div className="user-icon absolute top-0 right-0 m-2 ">
        <img className='w-20 rounded-full' src="https://picsum.photos/200" alt="User Icon"/>
        <span>{UserName.slice(0,3).toUpperCase()}</span>
      </div>
      <div style={{width:"800px",height:'500px',margin:'50px'}}>
      <Slider  {...settings}>
        <div>
            <img  className="hover:scale-110 ease-out" src="https://picsum.photos/800/400?random=1" alt="image1"/>
        </div>
        <div>
            <img className="hover:scale-110 ease-out" src="https://picsum.photos/800/400?random=2" alt="image2"/>
        </div>
        <div>
            <img className="hover:scale-110 ease-out" src="https://picsum.photos/800/400?random=3" alt="image3"/>
        </div>
        <div>
            <img className="hover:scale-110 ease-out" src="https://picsum.photos/800/400?random=4" alt="image4"/>
        </div>
        <div>
            <img className="hover:scale-110 ease-out" src="https://picsum.photos/800/400?random=5" alt="image5"/>
        </div>
      </Slider>
      </div>
      <div className=" hover:scale-125 ">
        <Button variant="success" onClick={() => setAutoplay(!autoplay)}>{autoplay?'Pause':'Play'}</Button>
      </div>
    </div>
  );
};

export default HomePage;
