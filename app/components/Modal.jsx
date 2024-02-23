'use client'
import Image from 'next/image';
import ReactModal from 'react-modal';
import Link from 'next/link';
import { motion } from "framer-motion";
const links =[{
  label : 'Conoce más',
  route : '/detail'
}]
const Modal = ({ isOpen, onClose, children, title, closeFunction, srcImageOne, date, site, srcImageTwo, srcImageThree, srcImageFour }) => {
  return (
    <>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} className="lg:w-auto w-[85%] absolute inset-10 border border-solid border-modalBorder dark:bg-[#666666] bg-white overflow-auto rounded outline-none p-5 lg:top-[6.5rem] top-[4.5rem] h-[80%] animate-modal">
        <h1 className='font-bold text-[2em] uppercase text-left p-2 font-Quicksand text-black dark:text-white'>{title}</h1>
        <motion.button onClick={closeFunction} className="lg:text-[2em] text-[1.5em] absolute top-3 right-[1rem]" whileHover={{scale: 1.3}} whileTap={{scale: 1}}><i className='icon-Cerrar-menu'></i></motion.button>
        <br />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-center">
          <Image src={srcImageOne} width={550} height={480} alt={title} className="w-auto lg:w-[51rem] lg:h-[25rem] h-auto lg:col-span-2"/>
          <div className="w-[95%] h-[25rem] lg:border lg:border-solid lg:border-black dark:lg:border-white border-hidden">
            <h1 className='font-bold text-[1.5em] text-left p-4 font-Quicksand text-black dark:text-white'>{date}</h1>
            <h2 className='font-bold text-[1.1em] text-left px-4 font-Quicksand text-black dark:text-white'>{site}</h2>
            <h2 className='font-bold text-[1.1em] text-left px-4 font-Quicksand text-black dark:text-white'>Proyecto/Construcción</h2>
            <p className='font-normal text-[1em] px-4 font-Quicksand text-black dark:text-white text-justify'>
              {children}
            </p>
            <div className='h-[40%] w-auto flex flex-col items-center justify-center'>
              <button className='font-normal text-[1.5em] px-2 font-Quicksand  text-black text-justify z-10 bg-white border border-solid border-black dark:border-white'>
                {links.map(({label,route})=>(
                  <div key={route} className=" text-black font-Raleway text-[0.9em]">
                    <Link href={route}>{label}</Link>
                  </div>
                ))}
              </button>
              <div className="w-[9rem] h-[2.3rem] bottom-7 left-2 relative border border-solid border-black dark:border-white"></div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-center mt-4">
          <Image src={srcImageTwo} width={550} height={480} alt="Logo naatyab" className="w-auto lg:h-[24rem] h-[14rem]"/>
          <Image src={srcImageThree} width={550} height={480} alt="Logo naatyab" className="w-auto lg:h-[24rem] h-[14rem]"/>
          <Image src={srcImageFour} width={550} height={480} alt="Logo naatyab" className="w-auto lg:h-[24rem] h-[14rem]"/>
        </div>
      </ReactModal>
    </>
  );
};

export default Modal;
