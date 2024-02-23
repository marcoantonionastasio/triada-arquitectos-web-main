'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';
import Modal from 'app/components/Modal'
import { SwitchThemeButton } from '@/ui/switch-theme-button'
import Link from 'next/link' 
import {  useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from "framer-motion";

const links =[{
  label : 'Inicio',
  route : '/'
}]


export default function Home() {
  // Theme Switch State
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDarkMode = currentTheme === 'dark'

  // Cambio de botón de Menu
  const [changeMenu, setChangeMenu] = useState(false)
  const switchChangeMenu = () => setChangeMenu(!changeMenu)

  // Uso de scroll para cada sección
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollTop = window.pageYOffset

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          setActive(section.id)
          break
        }
      }
    }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
  }, [])

  // Function for modal 1
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function for modal 2
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
  const handleOpenModalTwo = () => {
    setIsModalOpenTwo(true);
  };
  const handleCloseModalTwo = () => {
    setIsModalOpenTwo(false);
  };
  // Function for modal 3
  const [isModalOpenThree, setIsModalOpenThree] = useState(false);
  const handleOpenModalThree = () => {
    setIsModalOpenThree(true);
  };
  const handleCloseModalThree = () => {
    setIsModalOpenThree(false);
  };
  // Function for modal 4
  const [isModalOpenFour, setIsModalOpenFour] = useState(false);
  const handleOpenModalFour = () => {
    setIsModalOpenFour(true);
  };
  const handleCloseModalFour = () => {
    setIsModalOpenFour(false);
  };
  // Function for modal 5
  const [isModalOpenFive, setIsModalOpenFive] = useState(false);
  const handleOpenModalFive = () => {
    setIsModalOpenFive(true);
  };
  const handleCloseModalFive = () => {
    setIsModalOpenFive(false);
  };
  // Function for modal 6
  const [isModalOpenSix, setIsModalOpenSix] = useState(false);
  const handleOpenModalSix = () => {
    setIsModalOpenSix(true);
  };
  const handleCloseModalSix = () => {
    setIsModalOpenSix(false);
  };
  return (
    <>
    <div className={styles.mainContainer}>
      <nav className='fixed top-[46%] z-10 '>
                <ul className='lg:text-center'>
                  <li className={active === 'section1' ? styles.active : ''}>
                    <a href='#section1' className=' hidden lg:block p-2 lg:text-xs'>
                      <i
                        className={
                          active === 'section1'
                            ? 'icon-Ellipse-16px text-black dark:text-white'
                            : 'icon-Ellipse-8px text-black dark:text-white'
                        }
                      ></i>
                    </a>
                    <div>
                    <a className='hidden lg:block p-2 lg:text-xs'>
                      <div className=' absolute top-[1.313rem] h-[2.313rem] border-l-2 left-[0.781rem] border-solid border-black dark:border-white'></div>
                    </a>
                  </div>
                  </li>
                  <li className={active === 'section2' ? styles.active : ''}>
                  <a href='#section2' className='hidden lg:block p-2 text-xs'>
                    <i
                      className={
                        active === 'section2'
                          ? 'icon-Ellipse-16px text-black dark:text-white'
                          : 'icon-Ellipse-8px text-black dark:text-white'
                      }
                    ></i>
                  </a>
                </li>
                </ul>
        </nav>
      <nav className={`${styles.navbarDark} ${styles.colorBlackTheme} bg-navbarClear dark:bg-navbar`}>
          <button
            type='button'
            className={
              isDarkMode
                ? `${styles.sizeIconMenu} ${styles.colorClearTheme} `
                : `${styles.sizeIconMenu} ${styles.colorBlackTheme}`
            }
            onClick={switchChangeMenu}
          >
            <i
              className={changeMenu ? 'icon-Cerrar-menu' : 'icon-Menu-16px'}
            ></i>
          </button>
          <div className={changeMenu ? styles.navbarMenu : 'hidden'}>
            <ul className={styles.list}>
              <li className={styles.optionList}>
              {links.map(({label,route})=>(
              <div key={route} className='uppercase' onClick={switchChangeMenu}>
                <Link href={route}>{label}</Link>
              </div>
              ))}
              </li>
              <hr />
              <li className={styles.optionList}>
                <a href='#section0' onClick={switchChangeMenu}>
                  CONOCENOS
                </a>
              </li>
              <hr />
              <li className={styles.optionList}>
                <a href='#section2' onClick={switchChangeMenu}>
                  PROYECTOS
                </a>
              </li>
              <hr />
              <div className={styles.optionListPhone}>
                <p>(427) 236 1397</p>
                <p>triadarq.reos@gmail.com</p>
              </div>
              <div className={styles.optionListSocial}>
                <button type='button' className={styles.buttonSocialMenu}>
                  <i className='icon-Facebook-Dark'>
                    <span className='path1'></span>
                    <span className='path2'></span>
                  </i>
                </button>
                <hr className={styles.hrMenu} />
                <button type='button' className={styles.buttonSocialMenu}>
                  <i className='icon-Instagram-Dark'>
                    <span className='path1'></span>
                    <span className='path2'></span>
                  </i>
                </button>
                <hr className={styles.hrMenu} />
                <button type='button' className={styles.buttonSocialMenu}>
                  <i className='icon-Pinterest-Dark'>
                    <span className='path1'></span>
                    <span className='path2'></span>
                  </i>
                </button>
                <hr className={styles.hrMenu} />
                <button type='button' className={styles.buttonSocialMenu}>
                  <i className='icon-Whats-negro'>
                    <span className='path1'></span>
                    <span className='path2'></span>
                  </i>
                </button>
                <hr className={styles.hrMenu} />
                <button type='button' className={styles.buttonSocialMenu}>
                <i className='icon-Correo-oscuro text-4xl'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                        <span className='path3'></span>
                  </i>
                </button>
              </div>
            </ul>
          </div>
          <Image
            src={
              isDarkMode ? '/images/NaatYaab.png' : '/images/NaatYaab.png'
            }
            width={190}
            height={40}
            alt='Logo Triada'
            className={styles.navbarLogo}
          />
          <div className={styles.navbarOption}>
            <div
              className={
                isDarkMode
                  ? `${styles.option} ${styles.colorClearTheme}`
                  : `${styles.option} ${styles.colorBlackTheme}`
              }
            >
            {links.map(({label,route})=>(
              <div key={route} className={`${styles.textNav} dark:text-white text-black`}>
                <Link href={route}>{label}</Link>
              </div>
            ))}
            </div>
          </div>
          <SwitchThemeButton></SwitchThemeButton>
        
      </nav>
      <div className={styles.fondo}>
        <div className={'w-auto h-full lg:w-full lg:h-[56.25rem] lg:left-0 lg:top-[5rem] dark:bg-black mix-blend-normal opacity-[0.3]'}>        
        </div>
        <div className={styles.boxTitle}>
          <h1 className={styles.titleMain}>Construimos tu idea.</h1>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.container}>
          <ul className={styles.iconW}>
            <i className='icon-Whats-negro text-[0rem] lg:text-4xl border-b-2 border-black pb-3'>
              <span className='path1'></span>
              <span className='path2'></span>
            </i>
          </ul>
          <ul className={styles.iconC}>
            <i className='icon-Correo-oscuro text-[0rem] lg:text-4xl border-b-2 border-black pb-3'>
              <span className='path1'></span>
              <span className='path2'></span>
              <span className='path3'></span>
            </i>
          </ul>
          <ul className={styles.iconF}>
            <i className='icon-Facebook-Dark text-[0rem] lg:text-4xl border-b-2 border-black pb-3'>
              <span className='path1'></span>
              <span className='path2'></span>
            </i>
          </ul>
          <ul className={styles.iconI}>
            <i className='icon-Instagram-Dark text-[0rem] lg:text-4xl border-b-2 border-black pb-3'>
              <span className='path1'></span>
              <span className='path2'></span>
            </i>
          </ul>
          <ul className={styles.iconP}>
            <i className='icon-Pinterest-Dark text-[0rem] lg:text-4xl '>
              <span className='path1'></span>
              <span className='path2'></span>
            </i>
          </ul>
         </div>
         </div>
        
      </div>
      <section id='section1' className='grid lg:h-0 lg:w-0  h-auto  w-auto grid-cols-1 gap-12 placeholder:bg-cover bg-fixed bg-center bg-no-repeat bg-zinc-100  dark:bg-backgroundDark'>
        <div className={styles.imagen}></div>
        <div className={styles.informationMovil}>
        <div className={`${styles.boxSup} dark:border-white `}></div>
        <h1 >CONOCENOS</h1>
        <p >somos una empresa enfocada al desarrollo de proyectos, construcción e interiorismo...
        </p>
        <button ><i className='icon-Flecha-derecha text-1xl '></i>
        </button>
        <div className={`${styles.boxInf} dark:border-white `}></div>

        </div>
      </section>
      <section id='section1' className={styles.conocenosSection}>
        <div className={`${styles.boxInformation} bg-zinc-400 dark:bg-zinc-700 dark:bg-opacity-40 bg-opacity-25`}>
          <div className='h-full absolute w-auto '>
          <h1 className='dark:text-white' >CONOCENOS</h1>
          <p className='dark:text-white'>somos una empresa enfocada al desarrollo de proyectos, construcción e interiorismo</p>
          <button ><i className='icon-Flecha-derecha text-3xl '></i>
          </button>
          </div>
        </div>
      </section>
      <section id='section2' className={`${styles.sectionProjects} dark:bg-themeDark-microsite bg-themeClear-microsite`}>
        <button className={`${styles.project} dark:bg-[#666666] bg-white`} onClick={handleOpenModal}>
          <Image src={'/images/project1.png'} width={550} height={550} alt="Logo naatyab" className={styles.projectImage}/>
          <div className={styles.infoProyect}>
            <h1 className='text-black dark:text-white'>LIFE HOSPITAL</h1>
          </div>
        </button>
        <motion.button className={`${styles.project} dark:bg-[#666666] bg-white`} onClick={handleOpenModalTwo} whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 1 }}>
          <Image src={'/images/project2.png'} width={550} height={550} alt="Logo naatyab" className={styles.projectImage}/>
          <div className={styles.infoProyect}>
            <h1 className='text-black dark:text-white'>DEPARTAMENTOS MZQ</h1>
          </div>
        </motion.button>
        <button className={`${styles.project} dark:bg-[#666666] bg-white`} onClick={handleOpenModalThree}>
          <Image src={'/images/project3.png'} width={550} height={550} alt="Logo naatyab" className={styles.projectImage}/>
          <div className={styles.infoProyect}>
            <h1 className='text-black dark:text-white'>OFICINAS MKM BOLSA PRIVADA</h1>
          </div>
        </button>
        <button className={`${styles.project} dark:bg-[#666666] bg-white`} onClick={handleOpenModalFour}>
          <Image src={'/images/project4.png'} width={550} height={550} alt="Logo naatyab" className={styles.projectImage}/>
          <div className={styles.infoProyect}>
            <h1 className='text-black dark:text-white'>CASA GUANACASTE</h1>
          </div>
        </button>
        <button className={`${styles.project} dark:bg-[#666666] bg-white`} onClick={handleOpenModalFive}>
          <Image src={'/images/project5.png'} width={550} height={550} alt="Logo naatyab" className={styles.projectImage}/>
          <div className={styles.infoProyect}>
            <h1 className='text-black dark:text-white'>CASA monteverde</h1>
          </div>
        </button>
        <button className={`${styles.project} dark:bg-[#666666] bg-white`} onClick={handleOpenModalSix}>
          <Image src={'/images/project6.png'} width={550} height={550} alt="Logo naatyab" className={styles.projectImage}/>
          <div className={styles.infoProyect}>
            <h1 className='text-black dark:text-white'>Casa AC</h1>
          </div>
        </button>
        <br />
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={"life hospital"}
        closeFunction={handleCloseModal}
        srcImageOne={'/images/modal-p1-img1.png'}
        date={"Julio 2022"}
        site={"San Pedro Garza Garcia N.L"}
        srcImageTwo={'/images/modal-p1-img2.png'}
        srcImageThree={'/images/modal-p1-img3.png'}
        srcImageFour={'/images/modal-p1-img4.png'}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.     
      </Modal>
      <Modal
        isOpen={isModalOpenTwo}
        onClose={handleCloseModalTwo}
        title={"DEPARTAMENTOS MZQ"}
        closeFunction={handleCloseModalTwo}
        srcImageOne={'/images/modal-p1-img1.png'}
        date={"Julio 2022"}
        site={"San Pedro Garza Garcia N.L"}
        srcImageTwo={'/images/modal-p1-img2.png'}
        srcImageThree={'/images/modal-p1-img3.png'}
        srcImageFour={'/images/modal-p1-img4.png'}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.     
      </Modal>
      <Modal
        isOpen={isModalOpenThree}
        onClose={handleCloseModalThree}
        title={"Oficinas MKM Bolsa Privada"}
        closeFunction={handleCloseModalThree}
        srcImageOne={'/images/modal-p1-img1.png'}
        date={"Julio 2022"}
        site={"San Pedro Garza Garcia N.L"}
        srcImageTwo={'/images/modal-p1-img2.png'}
        srcImageThree={'/images/modal-p1-img3.png'}
        srcImageFour={'/images/modal-p1-img4.png'}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.     
      </Modal>
      <Modal
        isOpen={isModalOpenFour}
        onClose={handleCloseModalFour}
        title={"Casa Guanacaste"}
        closeFunction={handleCloseModalFour}
        srcImageOne={'/images/modal-p1-img1.png'}
        date={"Julio 2022"}
        site={"San Pedro Garza Garcia N.L"}
        srcImageTwo={'/images/modal-p1-img2.png'}
        srcImageThree={'/images/modal-p1-img3.png'}
        srcImageFour={'/images/modal-p1-img4.png'}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.     
      </Modal>
      <Modal
        isOpen={isModalOpenFive}
        onClose={handleCloseModalFive}
        title={"Casa Monteverde"}
        closeFunction={handleCloseModalFive}
        srcImageOne={'/images/modal-p1-img1.png'}
        date={"Julio 2022"}
        site={"San Pedro Garza Garcia N.L"}
        srcImageTwo={'/images/modal-p1-img2.png'}
        srcImageThree={'/images/modal-p1-img3.png'}
        srcImageFour={'/images/modal-p1-img4.png'}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.     
      </Modal>
      <Modal
        isOpen={isModalOpenSix}
        onClose={handleCloseModalSix}
        title={"Casa AC"}
        closeFunction={handleCloseModalSix}
        srcImageOne={'/images/modal-p1-img1.png'}
        date={"Julio 2022"}
        site={"San Pedro Garza Garcia N.L"}
        srcImageTwo={'/images/modal-p1-img2.png'}
        srcImageThree={'/images/modal-p1-img3.png'}
        srcImageFour={'/images/modal-p1-img4.png'}
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.     
      </Modal>
    </div>
    </>
  )
}
