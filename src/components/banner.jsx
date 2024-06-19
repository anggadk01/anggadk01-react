import React from 'react'
import { TypeAnimation } from 'react-type-animation';


export default function Banner(){
    return(
    <div id="home" className='section container mx-auto max-w-[1200px] px-3 items-center'>
        <div className='w-full'data-aos="zoom-in">
            <div className='block text-center font-secondary font-black text-[30px]'>
                Hello, i am TEST 3
                <div>
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Angga Dwi Kurniawan',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'A fresh graduate of Informatics Engineering major',
                        1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                    className='ml-3 text-secondary'
                    />
                </div>
            </div>
                <div className='max-w-[750px] text-center mx-auto mt-5'>
                Who is interested in Technology,Machine Learning.
                Currently still improving for some skills and desire for new experiences. Continuously exploring and expanding my knowledge in the field of technology through online courses, webinars, and
                research. Current areas of focus include machine learning, and software development.
                </div>
        </div>
    </div>
    )
}
