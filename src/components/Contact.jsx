import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Contact = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={40} />
                </>
            ),
            href: 'https://www.linkedin.com/in/andres-mauricio-pati%C3%B1o-maldonado-b69013230/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={40} />
                </>
            ),
            href: 'https://github.com/Maurici0Patin0',
        },
        {
            id: 3,
            child: (
                <>
                    Mail < HiOutlineMail size={40} />
                </>
            ),
            href: 'mailto:foo@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    CV <BsFillPersonLinesFill size={40} />
                </>
            ),
            href: '/FullStackMauricioPt.pdf',
            style: 'rounded-br-md',
            dowload: true,
        },
    ];
    return (
        <div name='contact'
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='mt-40'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Contact
                    </p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/13c56240-3e7f-4ad9-b4b8-49bbb39e8488" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>lest talk</button>
                    </form>
                </div>


                <div className='flex flex-col w-full justify-center items-center to-gray-800 pb-32'>
                    <ul className='p-1 '>
                        {links.map(({ id, child, href, style, download }) => (
                            <li key={id} className={'py-2 px-16 flex justify-center items-center w-96 bg-gray-500' + " " + style}>

                                <a href={href}
                                    className='flex justify-between items-center w-full text-white text-3xl hover:underline hover:text-blue-800'
                                    download={download}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    {child}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Contact