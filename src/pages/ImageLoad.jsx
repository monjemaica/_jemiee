import React, { useEffect, useState } from 'react'

export default function ImageLoad({src, openImg, cursorChangeHandler}) {
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        const img = new Image()

        img.onload = () => {
            setImgLoaded(true)
        }
        img.src = src

    }, [src])

    return (
        <>
             {!imgLoaded ? 
            <div class="blur-load" style={{backgroundImage: "url('/public/assets/images/projects/payrol1-sm.jpg')"}}>
            <img src={src} loading='lazy' alt=""  onClick={() => openImg(src)} onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}/>
          </div>: 
          <img src={src} loading='lazy' alt=""  onClick={() => openImg(src)} onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}/>
          }
        </>
    )
}
