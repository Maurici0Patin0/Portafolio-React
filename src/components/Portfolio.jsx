import React from 'react'
import pokedex from '../assets/portafolio/pokedex.png'
import watherapp from '../assets/portafolio/watherapp.png'
import inspiringphrase from '../assets/portafolio/inspiringphrase.png'
import usercrud from '../assets/portafolio/usercrud.png'
import tmdc from '../assets/portafolio/tmdc.png'
import rickandmorty from '../assets/portafolio/rickandmorty.png'

const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: pokedex,
            demo:'https://pokeapimp.netlify.app',
            code:'https://github.com/Maurici0Patin0/Poke-Api-Mp.git'

        },
        {
            id: 2,
            src: usercrud,
            demo:'https://userscrud1.netlify.app',
            code:'https://github.com/Maurici0Patin0/usercrud.git'
        },
        {
            id: 3,
            src: watherapp,
            demo:'https://weatherappmpt.netlify.app',
            code:'https://github.com/Maurici0Patin0/Weather-App.git'
           
        },
        {
            id: 4,
            src: rickandmorty,
            demo:'https://r1ckandm0rty.netlify.app',
            code:'https://github.com/Maurici0Patin0/RickandMorty.git'
        },
        {
            id: 5,
            src: inspiringphrase,
            demo:'https://inspiringphrase.netlify.app/',
            code:'https://github.com/Maurici0Patin0/Fraces.git'
        },
        {
            id: 6,
            src: tmdc,
            demo:'https://camisetas-mundial-de-quatar-2022.netlify.app',
            code:'https://github.com/Maurici0Patin0/TMDC.git'
            
        },
    ]

    return (
        <div name='portfolio'
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
            >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                    </p>
                    <p className='py-6'>check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {portfolio.map(({ id, src, demo, code }) => (

                        <div key={id} className='shadow-md shadow-gray-600 reouded-lg'>
                            <img
                                src={src}
                                alt=""
                                className='rouded-md duration-300 hover:scale-125'
                            />
                            <div className='flex items-center justify-center'>
                                <button type="button" onClick={(e) => {e.preventDefault();window.location.href = demo;
                                }} className='w-1/2 px-6 py-3 m4 duration-200 hover:scale-110 hover:text-green-500'>
                                Demo
                                </button>

                                <button type="button" onClick={(e) => {e.preventDefault();window.location.href = code;
                                }} className='w-1/2 px-6 py-3 m4 duration-200 hover:scale-110 hover:text-green-500'>
                                Code</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio