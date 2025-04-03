import React from 'react'
import './Blog.css'
import header from '../assets/header.png'
import images from '../assets/images'
const Blog = (nnakn,aksdjnv) => {

    const headers={
        backgroundImage: `url(${header})`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        transition:  `all ease .8s`
    }
  return (
    <div>
        <div style={headers} className="header">
            <h1>Blog Page</h1>
        </div>

        <div className="display-content">
            {images.map((item,index)=>{
                return(
                    <div className="container" key={index}>
                        <div className="img-container">
                            <img src={item.src} alt="" />
                        </div>
                        <div className="img-content">
                            <div className="date">
                                <p>February 24,2025 | 0 Comment</p>
                                <h1>{item.desc}</h1>
                                <p>One may not need charts and graphs at this point...</p>
                            </div>
                            <div className="btn">
                                <span>READ MORE</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Blog