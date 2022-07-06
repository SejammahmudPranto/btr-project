import React, { useState } from 'react'
import "./division.css"; 

const Division = ({bg1 , bg2, title, details, size}) => {
    const [hover, setHover] = useState(false);

  return (
    <div className='division' style={ hover ? {    
      backgroundImage: `url(${bg1})`,
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: "100%",
                      
      } : {
      backgroundImage: `url(${bg2})`,
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: "100%", 
      filter: "saturate(0)",
      }}
      onMouseEnter={() => (setHover(true))} 
      onMouseLeave={() => (setHover(false))}>
        {hover ? <div className='division-details'>
                <h5>{title}</h5>
                <h4 style={{fontSize: `${size}`}}>{details}</h4>
        </div>   :
        <div className='division-detail'>   
            <h3>{title}</h3>    
        </div>
        }

        {/* <div className='division-detail'>   
            <h3>{title}</h3>    
        </div>*/}
        {/* <div className='division-details'>
                <h5>{title}</h5>
                <h4 style={{fontSize: `${size}`}}>{details}</h4>
        </div>  */}
      </div>
  )
}

export default Division