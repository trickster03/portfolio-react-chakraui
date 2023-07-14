import React from 'react'
import LoaderCss from '../styles/Preloader.module.css'
const Preloader = () => {
    
  return (
    <div className={LoaderCss.loader}>
      <div className={LoaderCss.loaderspinner}>
        <div className={LoaderCss.loaderdot}></div>
        <div className={LoaderCss.loaderdot}></div>
        <div className={LoaderCss.loaderdot}></div>
      </div>
      <div className={LoaderCss.loadertext}>Loading...</div>
    </div>

  )
}

export default Preloader