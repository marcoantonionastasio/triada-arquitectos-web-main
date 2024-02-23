'use client'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import Link from 'next/link'
import { SwitchThemeButton } from '@/ui/switch-theme-button'

const links = [
  {
    label: 'Inicio',
    route: '/',
  },
]
const linksModal = [
  {
    label : 'DESARROLLOS INTEGRALES',
    route : '/desarrollosIntegrales'
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
  return (
    <>
      <div className={styles.mainContainer}>
        <nav
          className={`${styles.navbarDark} bg-navbarClear dark:bg-navbar`}
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
              {links.map(({ label, route }) => (
                <li key={route} className={`${styles.optionList}`}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
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
            src={isDarkMode ? '/images/NaatYaab.png' : '/images/NaatYaab.png'}
            width={190}
            height={40}
            alt='Logo Triada'
            className={styles.navbarLogo}
          />
          <div className={styles.navbarOption}>
            <div
              className={`${styles.option} dark:text-white text-black`}
            >
              {links.map(({ label, route }) => (
                <div key={route} className={`${styles.textNav} dark:text-white text-black`}>
                  <Link href={route}>{label}</Link>
                </div>
              ))}
            </div>
          </div>
          <SwitchThemeButton></SwitchThemeButton>
        </nav>
        <section className={`${styles.sectionMain} dark:bg-[#666666] bg-white`}>
          <div className={styles.containerMain}>
            <h1 className={`${styles.titleMain} dark:text-white text-black`}>Life Hospital</h1>
            {linksModal.map(({route})=>(
              <div key={route} className={`${styles.route} dark:text-white text-black`}>
                <Link href={route}><i className='icon-Flecha-derecha rotate-180 dark:text-white text-black'></i></Link>
              </div>
            ))}
            <div className={`${styles.firstGrid}`}>
              <Image src={'/images/modal-p1-img1.png'} width={550} height={480} alt='Life hospital' className={styles.mainImage}/>
              <div className={`${styles.containerText} border-black dark:border-white`}>
                <h1 className="dark:text-white text-black">Julio 2022</h1>
                <h2 className="dark:text-white text-black">San Pedro Garza Garcia N.L</h2>
                <h2 className="dark:text-white text-black">Proyecto/Construcción</h2>
                <p className="dark:text-white text-black">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.  
                </p>
              </div>
            </div>
            <div className={styles.secondContainer}>
              <Image src={'/images/modal-p1-img2.png'} width={550} height={480} alt="Logo naatyab" className={styles.secondImage}/>
              <Image src={'/images/modal-p1-img3.png'} width={550} height={480} alt="Logo naatyab" className={styles.secondImage}/>
              <Image src={'/images/modal-p1-img4.png'} width={550} height={480} alt="Logo naatyab" className={styles.secondImage}/>
            </div>
            <div className={styles.secondContainer}>
              <Image src={'/images/modal-p1-img2.png'} width={550} height={480} alt="Logo naatyab" className={styles.secondImage}/>
              <Image src={'/images/modal-p1-img3.png'} width={550} height={480} alt="Logo naatyab" className={styles.secondImage}/>
              <Image src={'/images/modal-p1-img4.png'} width={550} height={480} alt="Logo naatyab" className={styles.secondImage}/>
            </div>
            <div className={styles.containerSocial}>
              <div>
                <i className={`${styles.iconSocial} icon-Whats-negro`}>
                  <span className='path1'></span>
                  <span className='path2'></span>
                </i>
              </div>
              <div>
                <i className={`${styles.iconSocial} icon-Correo-oscuro`}>
                  <span className='path1'></span>
                  <span className='path2'></span>
                  <span className='path3'></span>
                </i>
              </div>
              <div>
                <i className={`${styles.iconSocial} icon-Facebook-Dark`}>
                  <span className='path1'></span>
                  <span className='path2'></span>
                </i>
              </div>
              <div>
                <i className={`${styles.iconSocial} icon-Instagram-Dark`}>
                  <span className='path1'></span>
                  <span className='path2'></span>
                </i>
              </div>
              <div>
                <i className={`${styles.iconSocial} icon-Pinterest-Dark`}>
                  <span className='path1'></span>
                  <span className='path2'></span>
                </i>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
