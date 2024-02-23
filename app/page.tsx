'use client'
import Image from 'next/image'
//import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import { SwitchThemeButton } from '@/ui/switch-theme-button'

/* const inter = Inter({ subsets: ['latin'] }) */

const links = [
  {
    label: 'DESARROLLOS INTEGRALES',
    route: '/desarrollosIntegrales',
  },
]

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
  return (
    <>
      <div className={styles.mainContainer}>
        <nav className='fixed right-0 top-[38%] z-10'>
          <ul className='text-center'>
            <li className={active === 'section1' ? styles.active : ''}>
              <a href='#section1' className='p-2 text-xs'>
                <i
                  className={
                    active === 'section1'
                      ? 'icon-Ellipse-16px text-black dark:text-white'
                      : 'icon-Ellipse-8px text-black dark:text-white'
                  }
                ></i>
              </a>
            </li>
            <li className={active === 'section2' ? styles.active : ''}>
              <a href='#section2' className='p-2 text-xs'>
                <i
                  className={
                    active === 'section2'
                      ? 'icon-Ellipse-16px text-black dark:text-white'
                      : 'icon-Ellipse-8px text-black dark:text-white'
                  }
                ></i>
              </a>
            </li>
            <li className={active === 'section3' ? styles.active : ''}>
              <a href='#section3' className='p-2 text-xs'>
                <i
                  className={
                    active === 'section3'
                      ? 'icon-Ellipse-16px text-black dark:text-white'
                      : 'icon-Ellipse-8px text-black dark:text-white'
                  }
                ></i>
              </a>
            </li>
            <li className={active === 'section4' ? styles.active : ''}>
              <a href='#section4' className='p-2 text-xs'>
                <i
                  className={
                    active === 'section4'
                      ? 'icon-Ellipse-16px text-black dark:text-white'
                      : 'icon-Ellipse-8px text-black dark:text-white'
                  }
                ></i>
              </a>
            </li>
            
          </ul>
        </nav>

        <nav
          className={`${styles.navbarDark} ${styles.colorBlackTheme} bg-navbarClear dark:bg-navbar`}
        >
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
                <a href='#section2' onClick={switchChangeMenu}>
                  CONOCENOS
                </a>
              </li>
              <hr />
              <li className={styles.optionList}>
                <a href='#section3' onClick={switchChangeMenu}>
                  CREATIVOS
                </a>
              </li>
              <hr />
              <li className={styles.optionList}>
                <a href='#section4' onClick={switchChangeMenu}>
                  CONTACTO
                </a>
              </li>

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
                  <i className='icon-WhatsApp'>
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
              isDarkMode ? '/images/triadaLogoDark.png' : '/images/triada.png'
            }
            width={197}
            height={50}
            alt='Logo Triada'
            className={styles.navbarLogo}
          />
          {/*CAMBIOS TERMINADOS*/}
          <div className={styles.navbarOption}>
            <i>
              <button className={styles.buttonSocial}>
                <span className='icon-WhatsApp-Dark text-3xl'>
                  <span className='path1'></span>
                  <span className='path2'></span>
                </span>
              </button>
            </i>

            <div
              className={
                isDarkMode
                  ? `${styles.option} ${styles.colorClearTheme}`
                  : `${styles.option} ${styles.colorBlackTheme}`
              }
            >
              <a>9531144910</a>
            </div>

            <hr
              className={`${styles.hr} border-[#19191C] dark:border-[#ffffff]`}
            />
            <div
              className={
                isDarkMode
                  ? `${styles.option} ${styles.colorClearTheme}`
                  : `${styles.option} ${styles.colorBlackTheme}`
              }
            >
              <a href='#section2'>Inicio</a>
            </div>

            <div
              className={
                isDarkMode
                  ? `${styles.option} ${styles.colorClearTheme}`
                  : `${styles.option} ${styles.colorBlackTheme}`
              }
            >
              <a href='#section3'>Conocenos</a>
            </div>

            <div
              className={
                isDarkMode
                  ? `${styles.option} ${styles.colorClearTheme}`
                  : `${styles.option} ${styles.colorBlackTheme}`
              }
            >
              <a href='#section4'>Creativos</a>
            </div>

            <hr
              className={`${styles.hr} border-[#19191C] dark:border-[#ffffff]`}
            />

            {/*Empieza redes sociales */}
            {/*<div
                className={`${styles.iContent} bg-zinc-300/50 lg:bg-transparent `}
            >*/}
            <i>
              <button className={styles.buttonSocial}>
                <span className='icon-Facebook-Dark text-4xl'>
                  <span className='path1'></span>
                  <span className='path2'></span>
                </span>
              </button>
            </i>

            <i>
              <button className={styles.buttonSocial}>
                <span className='icon-Instagram-Dark text-4xl'>
                  <span className='path1'></span>
                  <span className='path2'></span>
                </span>
              </button>
            </i>

            <i>
              <button className={styles.buttonSocial}>
                <span className='icon-Pinterest-Dark text-4xl'>
                  <span className='path1'></span>
                  <span className='path2'></span>
                </span>
              </button>
            </i>
            {/*Termina redes sociales */}
          </div>{' '}
          {/*Div del Nav*/}
          {/*FIN DE CAMBIOS TERMINADOS*/}
          <SwitchThemeButton></SwitchThemeButton>
        </nav>

        <main className={styles.main}>
          <section className={styles.initial} id='section1'>
            <div className={`${styles.boxMain}`}></div>
            <div className={styles.boxTitle}>
              <h1 className={styles.titleMain}>CONSTRUIMOS TUS SUEÑOS.</h1>
            </div>
          </section>

          {/*INICIA SECCION 2*/}
          <section
            id='section2'
            className='top-[50px] h-[500px] bg-zinc-100 bg-cover bg-fixed bg-center bg-no-repeat dark:bg-backgroundDark lg:relative lg:h-[800px]'
          >
            <div className={styles.informationRight}>
              <h3 className='text-black dark:text-white'>
                Desarrollo de proyectos,
                <br />
                construcción e interiorismo
              </h3>
              <h2 className='text-gruesa text-black dark:text-white'>
                QUIENES SOMOS
              </h2>
              <div
              /*className={`${styles.boxSup} border-black dark:border-[#bcbcbc]`}*/
              ></div>
              <p className='text-black dark:text-white'>
                Somos una empresa enfocada al desarrollo de proyectos,
                construcción e interiorismo. Somos una empresa enfocada al
                desarrollo de proyectos, construcción e interiorismo. Somos una
                empresa enfocada al desarrollo de proyectos, construcción e
                interiorismo.
              </p>
              <div
                className={`${styles.recInf} border-[#44f8ef] dark:border-[#44f8ef]`}
              ></div>
              <h4 className='text-black dark:text-white'>10</h4>
              <h5 className='text-black dark:text-white'>
                años de
                <br />
                experiencia
                <br />
                trabajando
              </h5>
              <div
                className={`${styles.boxInf} border-black dark:border-[#bcbcbc]`}
              ></div>
              <button className={styles.buttonInformation}>CONOCENOS</button>
              <div className={styles.buttonBack}></div>
              <br />
            </div>
            <div className={styles.informationLeft}>
              <div className={styles.informationBack}></div>
              <div className={styles.informationImage}></div>
              <div
                className={`${styles.informationFront} border-[#202020] dark:border-[#ffffff]`}
              ></div>
            </div>
          </section>
          {/*TERMINA SECCION 2*/}

          <section id='section3' >
            <div className='top-[100px] h-[500px] bg-zinc-100 bg-cover bg-fixed bg-center bg-no-repeat dark:bg-backgroundDark lg:relative lg:h-[800px]'>
              <div className={`${styles.titleBlue} text-black dark:text-white`}>
                <h6 className='titleBlue text-black dark:text-white'>
                  CREATIVOS
                </h6>
              </div>
              <div className={styles.titleDarck}>
                <a className='titleDarck text-black dark:text-white'>
                  Conoce nuestros aliados
           
                </a>
              </div>
              <div>
                    <label
                      className={`${styles.textLine} text-black dark:text-white`}
                    >
                      Talleres Creativos
                    </label>
                    <label
                      className={`${styles.textLine1} text-black dark:text-white`}
                    >
                      Diseño y construcción
                    </label>
                    <label
                      className={`${styles.textLine2} text-black dark:text-white`}
                    >
                      Desarrollos Integrales
                    </label>
                  </div>
              <div className={styles.creativosContainer}>
                <div className={styles.box}>
                  <div
                    className={`${styles.boxImageCreat2} ${styles.creativoOndas}`}
                  ></div>
                  <div
                    className={`${styles.boxImageCreativos} ${styles.creativoNatt}`}
                  ></div>
                 
                </div>
                <div className={styles.box}>
                  <div
                    className={`${styles.boxImageCreativos} ${styles.creativoAHAU}`}
                  ></div>
                 
                </div>
                <div className={styles.box}>
                  <div
                    className={`${styles.boxImageCreativos} ${styles.creativoCEIBA}`}
                  ></div>
                  <div>
                   
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />

          {/**INICIA SECCION 5*/}
          <section
            id='section4'
            className='top-[-150px] h-[500px] bg-zinc-100 bg-cover bg-fixed bg-center bg-no-repeat dark:bg-backgroundDark lg:relative lg:h-[800px]'
          >
            
            <div className={styles.contactinfo}>
              <h1 className='dark:text-red text-black'>PROYECTOS</h1>
              <p>Plaza Victoria, San Juan</p>
              <h2 className='dark:text-red text-black dark:text-white'>
                200 mts2
              </h2>
              <h3 className='dark:text-red dark:text-opacity-900 ml-4 text-black text-black dark:text-white'>
                Ubicacion: San Juan del Rio
              </h3>
              <h3 className='dark:text-red dark:text-opacity-900 ml-4 text-black text-black dark:text-white'>
                Año: 2020
              </h3>
              {/*Se agrego esto*/}
              <div
                /*className={`${styles.boxIn} border-black dark:border-[#bcbcbc]`}*/
              ></div>
              <button className={styles.buttonIn}>VER MÁS</button>
              <div className={styles.buttonBa}></div>
            </div>

            <div className={`${styles.boxIn} `}></div>
            <button className={styles.buttonInfor}>CONOCENOS</button>
            <div className={styles.buttonBac}></div>

            <div className={styles.contactinf}>
              <h1 className='dark:text-red text-black'>CONTACTANOS</h1>
              <p>Construyamos juntos tu futuro</p>
              <div className={styles.nuevoContenedor}>
              <div className={styles.bo}>
                  <div
                    className={`${styles.boxImageCreat} ${styles.creativoF4sf}`}
                  ></div>
                  <div></div>
                </div>
              
                
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
