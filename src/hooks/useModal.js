import { useEffect, useState } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState('');

    const openImg = (img) => {
        setIsOpen(true);
        setImg(img)
    }
      
  return{isOpen, img, setIsOpen, setImg, openImg};
}

export default useModal