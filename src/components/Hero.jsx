import React from 'react'

import { style } from '../style'
import { ComputersCanvas  } from './canvas'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#8f5cff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${style.heroHeadText} text-white`}>
            Olá, eu sou <span className='text-[#8f5cff]'>Vitor</span>
          </h1>
          <p className={`${style.heroSubText} mt-2 text-white-100`}>
            Sou estudante de ADS e atualmente estou me desenvolvendo como profissional, 
            praticante de metodologias Front-end e Back-end, bem como estudando técnicas 
            para análise de dados.

          </p>
        </div>
      </div>

      <ComputersCanvas />

    </section>
  )
}

export default Hero
