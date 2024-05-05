import React from 'react'
import loading from './loading.gif.gif'

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