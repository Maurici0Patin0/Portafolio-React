import React from 'react'

const About = () => {
    return (
        <div name='about' 
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
            >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>

                <p className='text-xl mt-16'>
                Desarrollador Full Stack egresado en Academlo startup educativa en programación y ciencias de computación con Certificado en Fundamentos de Desarrollo Web, Desarrollo de Aplicaciones con React y  Node.  Con experiencia en el area de las  telecomunicaciones fribra optica.
                </p>
                <br />
                <p className='text-xl'>
                Ingeniero de Sistemas en formación 4 semestre. apacionado por la tegnologia, trabajo en equipo y liderasgo.
                </p>
            </div>

        </div>
    );
}

export default About