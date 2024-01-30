
import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
function Weather() {
  const search=()=>{
alert(location);
  }
let api_key='4d381e6e91b9632a473625b2c0d0db6f';

  const[location,setLocation]=useState("");
  const[weather,setWeather]=useState({});
  return (
    <div style={{ width: "100%", height: "350px", paddingTop:"30px",backgroundImage: 'url("https://i.pinimg.com/originals/87/9e/00/879e002a9082b4d32901840cb70c0929.gif")' }}>
 
<MDBCard style={{ maxWidth: '440px',height:"4",margin:"auto",paddingTop:"30px",backgroundImage:'url("https://miro.medium.com/v2/resize:fit:868/1*Z1dakwOS4YFPw3SJRkl94A.gif")',borderRadius:"25px"}}>
      <MDBRow className='g-0'>
        
           <MDBInputGroup style={{width:"290px",margin:"auto"}}>
      <MDBInput label='Search'onChange={(e)=>{setLocation(e.target.value)}}value={location||""} />
      <MDBBtn rippleColor='dark'>
        <MDBIcon icon='search' onClick={search}/>
      </MDBBtn>
    </MDBInputGroup>
       
     
          <MDBCardBody>
            <MDBCardTitle>Weather Now</MDBCardTitle>
            <MDBCardText>
       
            </MDBCardText>
            <MDBCardText>
              <small className='text'></small>
            </MDBCardText>
          </MDBCardBody>
      
      </MDBRow>
    </MDBCard>

    </div>
  )
}

export default Weather