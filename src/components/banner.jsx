import React from 'react'
import { TypeAnimation } from 'react-type-animation';


export default function Banner(){
    return(
    <div id="home" className='section container mx-auto max-w-[1200px] px-3 items-center'>
        <div className='w-full'data-aos="zoom-in">
            <div className='block text-center font-secondary font-black text-[30px]'>
                Hello, i am
                <div>
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Angga Dwi Kurniawan',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        ' ',
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
                I am a graduate of Informatics Engineering from Perbanas Institute Jakarta with a GPA of 3.63. With experience as an ITDS Staff at <b>PT. Mitra Asa Pratama</b>, I developed new features, handled bugs, and resolved hardware and software issues in Odoo. I also interned at <b>PT. Hashmicro Solusi Indonesia</b> and participated in <b>Bangkit Academy</b> with a focus on the Machine Learning learning path.<div> <p>I have skills in Python, MySQL, HTML, CSS, and web design. I am highly adaptable, able to work effectively in teams, and manage my time efficiently.</p></div>
                </div>
                {/* I am a recent graduate with a degree in Informatics Engineering, passionate about technology and software development. I 
                am currently honing my skills and seeking new experiences */}
        </div>
    </div>
    )
}
