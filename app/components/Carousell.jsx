'use client'
import React from 'react'
import Carousel from 'better-react-carousel'
import Image from 'next/image';

export function Carousell() {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        position:'absolute',
        display: 'flex',
        justifyContent: 'space-between',
        height: isActive ? '7px' : '5px',
        width: isActive ? '7px' : '5px',
        background: '#FFFFFF',
        borderRadius: '20px',
        top: '-30px',
      }}
    ></span>
  )
  
  return (

  <Carousel dot={MyDot}  showDots={true} gap={0} loop={true} cols={1} rows={1} mobileBreakpoint={0}  scrollSnap={true} responsiveLayout={[
      {
        breakpoint:1024,
        cols: 1,
        rows: 3,
        gap: 0,
        loop: true,
      },
      {
        breakpoint:600,
        cols: 1,
        rows: 3,
        gap: 0,
        loop: true,
      },
      {
        breakpoint:300,
        cols: 1,
        rows: 3,
        gap: 0,
        loop: true,
      },


  ]}>
        <Carousel.Item >
            <Image
              width="100"
              height="200"
              alt="image"
              src='/images/home.jpeg'
              className={'m-0 bg-cover bg-center bg-no-repeat'}
            /> 
        </Carousel.Item>
        <Carousel.Item >
            <Image
              width="100"
              height="200"
              alt="image"
              src='/images/home.jpeg'
              className={' m-0 bg-cover bg-center bg-no-repeat'}
            /> 
        </Carousel.Item>
        <Carousel.Item >
            <Image
              width="100"
              height="200"
              alt="image"
              src='/images/home.jpeg'
              className={' bg-cover bg-center bg-no-repeat'}
            /> 
        </Carousel.Item>
        <Carousel.Item >
            <Image
              width="100"
              height="200"
              alt="image"
              src='/images/home.jpeg'
              className={' bg-cover bg-center bg-no-repeat'}
            /> 
        </Carousel.Item>
      </Carousel>

  )
}
