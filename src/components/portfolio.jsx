import React from 'react'

export default function Portfolio(){
    return(
        <div id='portfolio' className='section mb-[50px]'>
            <div className='container mx-auto max-w-[1200px] px-3 pt-3 pb-500'>
            <div className='flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >   <div>
                    <div className='order-2 lg:order-1 pt-9 mt-9'>
                        <h4 className='text-secondary font-secondary text-[24px]'>
                        </h4>
                        <div className='text-gradient font-primary max-w-[700px] mx-auto text-[24px]'>    
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className='order-1 lg:order-2 text-center'>
                        <h2 className='text-gradient font-primary max-w-[700px] mx-auto text-[50px]'>
                        
                        </h2>
                        <div></div>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >   <div>
                    <div className='order-2 lg:order-1 pt-9 mt-9'>
                        <h4 className='text-secondary font-secondary text-[24px]'>
                        </h4>
                        <div className='text-gradient font-primary max-w-[700px] mx-auto text-[24px]'>    
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className='order-1 lg:order-2 text-center'>
                        <h2 className='text-gradient font-primary max-w-[700px] mx-auto text-[50px]'>
                        
                        </h2>
                        <div></div>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >   <div>
                    <div className='order-2 lg:order-1 pt-9 mt-9'>
                        <h4 className='text-secondary font-secondary text-[24px]'>
                            Recent Work
                        </h4>
                        <div className='text-gradient font-primary max-w-[700px] mx-auto text-[24px]'>
                            
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className='order-1 lg:order-2 text-center'>
                        <h2 className='text-gradient font-primary max-w-[700px] mx-auto text-[50px]'>
                            07
                        </h2>
                        <div>Completed Projects</div>
                    </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 text-center'
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                >
                    <div className='w-full'>
                        <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                            <img src="images/keka.png" alt="" />
                            <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                <div className='text-center w-full text-white'>
                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                        <h4 className='text-gradient'>
                                            Kekaid
                                        </h4>
                                        <div>
                                          <a href="https://anggadk01.github.io/kekadk.io/" target="_blank" rel="noopener noreferrer">
                                        <button className='text-gradient'>Click</button>
                                            </a>
                                        </div>

                                    </div>
                                    <p>
                                        Kekaid is simple E-Commerce website that developed using HTML, CSS, JavaScript, and PHP
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='w-full'>
                        <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                            <img src="images/apkflu.png" alt="" />
                            <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                <div className='text-center w-full text-white'>
                                    <div className='bg-white rounded-full px-5 py-2 inline-block mb-2'>
                                        <h4 className='text-gradient'>
                                            Deka.apk
                                        </h4>
                                        <div>
                                          <a href="https://github.com/anggadk01/deka.apk" target="_blank" rel="noopener noreferrer">
                                        <button className='text-gradient'>Click</button>
                                            </a>
                                        </div>

                                    </div>
                                    <p>
                                        Deka.apk is simple Birthday application that developed using Flutter Framework
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                            <img src="images/odooalbum.png" alt=""/>
                            <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                <div className='text-center w-full text-white'>
                                    <div id="odoo"className='bg-white rounded-full px-1 py-2 inline-block mb-2'>
                                    <h4 className='text-gradient'>
                                            Klasik_Mart
                                        </h4>

                                        <div>
                                          <a href="https://github.com/anggadk01/klasikmart_project" target="_blank" rel="noopener noreferrer">
                                        <button className='text-gradient'>Click</button>
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        Klasik_Mart is E-Commerce website that developed using Odoo Framework
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-full'>
                        <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                            <img src="images/bangkit.png" alt=""/>
                            <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                <div className='text-center w-full text-white'>
                                    <div id="odoo"className='bg-white rounded-full px-1 py-2 inline-block mb-2'>
                                    <h4 className='text-gradient'>
                                            Capstone Bangkit
                                        </h4>

                                        <div>
                                          <a href="https://github.com/Bangkit-Capstone-Toor-App" target="_blank" rel="noopener noreferrer">
                                        <button className='text-gradient'>Click</button>
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        Tor App is an Android application that assists travelers in recommending tourist destinations based on user preferences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='w-full'>
                        <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                            <img src="images/skripsi.png" alt=""/>
                            <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                <div className='text-center w-full text-white'>
                                    <div id="odoo"className='bg-white rounded-full px-1 py-2 inline-block mb-2'>
                                    <h4 className='text-gradient'>
                                            Book Reccomendation
                                        </h4>

                                        <div>
                                          <a href="images/skripsi.png" target="_blank" rel="noopener noreferrer">
                                        <button className='text-gradient'>Click</button>
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        The book recommendation system uses the Content-Based Filtering (CBF) method with the TF-IDF algorithm and Cosine Similarity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='w-full'>
                        <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                            <img src="images/API_POSTMAN.png" alt=""/>
                            <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                <div className='text-center w-full text-white'>
                                    <div id="odoo"className='bg-white rounded-full px-1 py-2 inline-block mb-2'>
                                    <h4 className='text-gradient'>
                                            API Using Django
                                        </h4>

                                        <div>
                                          <a href="https://github.com/anggadk01/RestAPI_Student" target="_blank" rel="noopener noreferrer">
                                        <button className='text-gradient'>Click</button>
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        This Simple CRUD API project is made to test CRUD function with 3 variables Name, Email, and Phone Number using Postman

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className='bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group'>
                            <img src="images/training_root.png" alt=""/>
                            <div className='absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear'>
                                <div className='text-center w-full text-white'>
                                    <div id="odoo"className='bg-white rounded-full px-1 py-2 inline-block mb-2'>
                                    <h4 className='text-gradient'>
                                            LMS Project
                                        </h4>

                                        <div>
                                          <a href="https://github.com/anggadk01/LMS-Project/tree/main" target="_blank" rel="noopener noreferrer">
                                        <button className='text-gradient'>Click</button>
                                            </a>
                                        </div>
                                    </div>
                                    <p>
                                        Here is a project for an LMS website that has already been integrated with Odoo at PT. MAP.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
