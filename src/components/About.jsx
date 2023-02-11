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
                Desarrollador Full Stack egresado en Academlo startup educativa en programación y ciencias de computación. Obteniendo Certificado en Fundamentos de Desarrollo Web, Desarrollo de Aplicaciones Web con React y Back-End Node. 
                </p>
                <br />
                <p className='text-xl'>
                Ingeniero Electrónico en formación actualmente 7 semestre, Técnico en mantenimiento electrónico
                </p>
            </div>

        </div>
    );
}

export default About