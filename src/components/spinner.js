import React from 'react'
import loading from './loading.gif.gif'
//Adding a spinner component that feels something is ready to load
const Spinner = ()=> {
    
        return (
            <div >
                <img  style={{
                width: "50px",
                height: "auto"
              }}  src={loading} alt="loading" />
            </div>
        )
}

export default Spinner