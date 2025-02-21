import { useState } from 'react'

import './App.css'

function App() {
  // return JSX that will be rendered

  return (
      // Apply inline styles to the div element

      <div style={{backgroundColor: "#dfe6e9", height: "100vh"}}>
          
          <div>
             style= {{
              display: "flex",
              justifyContent: "center",
             }}
          </div>

          <div>
            <div>
              {/* Call PostCOmponent here with props to render it in the App component */}

              <PostComponent></PostComponent>
            </div>
          </div>

      </div>
  )
}

// create a style object to apply styles to the div element in postComponent





// create a function component named PostComponent with props to render it in the App

function PostComponent({ name, followerCount, time, image, description}) {
  // return JSX that will be rendered

  return (
    // apply style object to the div element

    <div style={style}>
      
      <div style={{display: "flex"}}>

        <img src={image} style={{width: 40, height: 40}} />
      </div>
    </div>
  )
}


export default App
