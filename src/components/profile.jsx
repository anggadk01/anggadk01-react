import React from 'react'
import {Button} from '@mui/material';


export default function Profile(){
    return(
        <div id="profile" className='section'>
            <div className='container mx-auto max-w-[1200px] p-3 overflow-hidden'>
                <div className='font-secondary text-center font-bold mb-1'
                    data-aos="zoom-in-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    <h4 className='text-secondary mb-3'>Awesome Skill</h4>
                    <h2 className='text-gradient font-primary max-w-[700px] mx-auto text-[24px]'>
                        My knowhow list: </h2>
                    <div className='text-center w-full text-white rounded-full px-2 py-3 inline-block'>
                        <a>
                            <Button variant="contained" a href="images/Angga Dwi Kurniawan-resume.pdf" target="_blank" rel="noopener noreferrer">
                                Resume
                            </Button> {''}
                            <Button variant="contained" a href="https://www.linkedin.com/in/anggadwikurniawan01/details/certifications/" target="_blank" rel="noopener noreferrer">
                            Certification
                            </Button> {''}

                        </a>
                    </div>

                </div>
                <div className='flex flex-col lg:flex-row items-start justify-between'>
                    <div className='text-center w-full max-w-[400px] mx-auto mb-[50px]'
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    >
                        <div className='min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden'>
                            <img src="images/deka01.png" alt="" />
                        </div>
                        <h2 className='text-gradient text-[30px] mt-[20px]'>Angga Dwi Kurniawan</h2>
                        {/* <div>
                        <a href="https://github.com/anggadk01/kekadk.io/blob/main/assets/images/Angga%20Dwi%20Kurniawan-resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="contained" a href="https://github.com/anggadk01/kekadk.io/blob/main/assets/images/Angga%20Dwi%20Kurniawan-resume.pdf">
                                Resume
                            </Button>
                        </a>
                        </div> */}
                        {/* <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                            <a href="https://github.com/anggadk01/kekadk.io/blob/main/assets/images/Angga%20Dwi%20Kurniawan-resume.pdf" target="_blank" rel="noopener noreferrer">
                                <button className=''>Resume</button>
                            </a>
                        </div> */}

                    </div>

                    <div className='w-full lg:pt-[50px] lg:ml-[50px]'
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                    >
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
                            {/* skill */}
                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                    <img src="images/python.png" alt="" />
                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                        <div className='text-center w-full text-white'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    Python
                                                </h4>
                                            </div>
                                            {/* <p>Lorem, ipsum dolor sit amet consectetur</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                    <img src="images/c++.png" alt="" />
                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                        <div className='text-center w-full text-white'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    C++
                                                </h4>
                                            </div>
                                            {/* <p>Lorem, ipsum dolor sit amet consectetur</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                    <img src="images/java.png" alt="" />
                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                        <div className='text-center w-full text-white'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    Java
                                                </h4>
                                            </div>
                                            {/* <p>Lorem, ipsum dolor sit amet consectetur</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                    <img src="images/CSS.png" alt="" />
                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                        <div className='text-center w-full text-white'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    CSS
                                                </h4>
                                            </div>
                                            {/* <p>Lorem, ipsum dolor sit amet consectetur</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                    <img src="images/HTML.png" alt="" />
                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                        <div className='text-center w-full text-white'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    HTML
                                                </h4>
                                            </div>
                                            {/* <p>Lorem, ipsum dolor sit amet consectetur</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                    <img src="images/django.png" alt="" />
                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                        <div className='text-center w-full text-white'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    Django
                                                </h4>
                                            </div>
                                            {/* <p>Lorem, ipsum dolor sit amet consectetur</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                    <img src="images/mysql.png" alt="" />
                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                        <div className='text-center w-full text-white'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    Mysql
                                                </h4>
                                            </div>
                                            {/* <p>Lorem, ipsum dolor sit amet consectetur</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                    <img src="images/odoofix.png" alt="" />
                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                        <div className='text-center w-full text-white'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    Odoo
                                                </h4>
                                            </div>
                                            {/* <p>Lorem, ipsum dolor sit amet consectetur</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                    <img src="images/linux.jpg" alt="" />
                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                        <div className='text-center w-full text-white'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    OS Linux
                                                </h4>
                                            </div>
                                            {/* <p>Lorem, ipsum dolor sit amet consectetur</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                                    <img src="images/MO1.png" alt="" />
                                    <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                        <div className='text-center w-full text-white'>
                                            <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                                <h4 className='text-gradient'>
                                                    Microsoft Oficce
                                                </h4>
                                            </div>
                                            {/* <p>Lorem, ipsum dolor sit amet consectetur</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
