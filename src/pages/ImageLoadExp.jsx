import React, { useEffect, useState } from 'react'

export const ImageLoadExp = ({src, i, openImg, cursorChangeHandler}) => {
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
      <div key={i} className="content--img blur-load"  style={{backgroundImage: "url('/public/assets/images/projects/payrol1-sm.jpg')"}} onClick={() => openImg(src)} onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}  >
          <img src={src} loading='lazy' alt="" />
      </div>
      :
      <div key={i} className="content--img" onClick={() => openImg(src)} onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}>
          <img src={src} loading='lazy' alt="" />
      </div>}
    </>
  )
}
