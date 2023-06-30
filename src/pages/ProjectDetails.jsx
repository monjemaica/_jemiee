import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProject } from '../services/projectData';
import useModal from '../hooks/useModal';
import { MouseContext } from '../context/MouseContextProvider';
import Modal from '../components/Modal';

export const ProjectDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  let item = getProject(params.id)

  const { cursorChangeHandler } = useContext(MouseContext);
  const {isOpen, img, setIsOpen, setImg, openImg} = useModal();
  return (
    <>
      <div className=" project grid-container grid-3">
        <div className="project-details">
          <a type='button' onClick={() => navigate(-1)}>

            <i className="fas fa-chevron-left navbar-logo"></i>
          </a>
          <div className="project--content">
            <div className="project--heading">
              {item.header}
            </div>
            <div className="heading hover-underline-animation">
              {item.project}
            </div>
            <p className='project--details'>
              {item.description}
            </p>
          </div>
          <div className="project--tech">
            <div className='pb-1'>
              Tech Stack:
            </div>
            {item.badge.map((e, i) =>
              <span className="badge badge--primary badge--small" key={i}>{e}</span>
            )}
          </div>
          <div className="project--tech">
            <div className='pb-1'>Category:</div>
            <span className="badge badge--primary badge--small">{item.category}</span>
          </div>
          <div className="project--tech">
            <div className='pb-1'>Type:</div>
            {item.type.map(e =>
              <span className="badge badge--primary badge--small">{e}</span>
            )}
          </div>
          {/* <div className="project--tech">
            <div><BsGlobeAmericas /> Website: &nbsp;</div>
            <a href="https://jemiee.vercel.app/" className='link'>https://jemiee.vercel.app/</a>
          </div> */}
        </div>
        <div className="project--img">
          {item.imgs.map(e =>
            <img src={e} alt=""  onClick={() => openImg(e)} onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}/>
          )}

        </div>
      </div>
      {isOpen && <Modal img={img} onClose={setIsOpen}/>}
    </>
  )
}
