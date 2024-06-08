import React from 'react';
import database_image from "../images/database_image.jpg";
import gta_image from "../images/gta5.jpg"

 
export default function Project() {


  return (
    <div id='main-div-project'>  
        <p className='text-xl md:text-3xl font-semibold mx-10 md:mx-24'>Some Of My</p>
        <h1 className='text-6xl font-bold mx-10 md:mx-24'>Full Stack Projects</h1>
        <div id='project-main-div' className='flex-col md:flex-row items-center gap-5 mt-5'>

            
            {/* PROJECT 1 */}
            <div>
                <div id="project1-image-div" className='cursor-pointer' onClick={()=>window.open("https://mrmahmoodalam.github.io/SQL_database/")}>
                    <img  src={database_image} alt='...'/>
                </div>
                <div>
                    <h4 className='text-2xl font-semibold my-2 cursor-pointer' onClick={ ()=>window.open("https://mrmahmoodalam.github.io/SQL_database/")}>Made SQL Database</h4>
                    <div className='flex felex-row gap-1 justify-start my-3' id='project-used-div'>
                        <div><p>SQL</p></div>
                        <div><p>MYSQL</p></div>
                        <div><p>Developed</p></div>
                    </div>
                </div>
            </div>


            {/* PROJECT 2 */}
            <div>
                <div id="project1-image-div" className='cursor-pointer' onClick={ ()=> window.open("https://mrmahmoodalam.github.io/Rockstar_Game/")}>
                    <img  src={gta_image} alt='...' />
                </div>
                <div>
                    <h4 className='text-2xl font-semibold my-2 cursor-pointer' onClick={()=> window.open("https://mrmahmoodalam.github.io/Rockstar_Game/")}>Rockstar Clone</h4>
                    <div className='flex felex-row gap-1 flex-wrap justify-start mt-3' id='project-used-div'>
                        <div><p>HTML</p></div>
                        <div><p>CSS</p></div>
                        <div><p>Javascript</p></div>
                        <div><p>Tailwind CSS</p></div>
                    </div>
                </div>
            </div>


            
        </div>

    </div>
  )
}
