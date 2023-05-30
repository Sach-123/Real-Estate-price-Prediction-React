import React from 'react'
import Navbar from './Navbar'
import Sachin from '../img/Sachin Choudhary.jpg'
import Mentor from '../img/Geocey Shejy.jpg'
import Sahil from '../img/Sahil.jpg'
import Siddhant from '../img/Siddhant Kodolkar.jpg'
import Harsh from '../img/Harsh.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom'
export default function About() {
  return (
    // https://wallpaperaccess.com/full/1899390.jpg
    <div className='bg-slate-800 min-h-screen'>
      <Navbar />
      <section className="text-white body-font pt-16">
        <div className="container px-5 py-1 mx-auto rounded-lg">
          <div className="flex flex-col text-center w-full mb-4 bg-b">
            <h1 className="text-2xl font-medium title-font text-white">OUR TEAM</h1>
          </div>
          <div className="flex justify-center flex-wrap ">
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 border-white border-2 " src={Mentor} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">Geocey Shejy</h2>
                  <h3 className="text-yellow-100 text-[12px] mb-3">Mentor</h3>
                  <span className="inline-flex">
                    <Link to='mailto:geocey.shejy@ves.ac.in'>
                      <EmailIcon />
                    </Link>
                    <Link to="https://in.linkedin.com/in/geocey-shejy-88a244132" className="ml-2">
                      <LinkedInIcon />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 border-2" src={Sachin} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">Sachin Choudhary</h2>
                  <h3 className="text-yellow-100  text-[12px] mb-3">Backend Developer</h3>
                  <span className="inline-flex">
                  <Link to='mailto:2020.sachin.choudhary@ves.ac.in'>
                      <EmailIcon />
                    </Link>
                    <Link to="https://in.linkedin.com/in/sachin0203" className="ml-2">
                      <LinkedInIcon />
                    </Link>
                    <Link to="https://github.com/Sach-123" className="ml-2">
                      <GitHubIcon/>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 border-2" src={Harsh} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">Harsh Karira</h2>
                  <h3 className="text-yellow-100 text-[12px] mb-3">UI Developer</h3>
                  <span className="inline-flex">
                    <Link to='mailto:2020.harsh.karira@ves.ac.in'>
                      <EmailIcon />
                    </Link>
                    <Link to="https://in.linkedin.com/in/harsh-karira-9b96471bb" className="ml-2">
                      <LinkedInIcon />
                    </Link>
                    <Link to="https://github.com/Harshkarira" className="ml-2">
                      <GitHubIcon/>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 border-2" src={Siddhant} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">Siddhant Kodolkar</h2>
                  <h3 className="text-yellow-100 text-[12px] mb-3">Backend Developer</h3>
                  <span className="inline-flex">
                  <Link to='mailto:2020.siddhant.kodolkar@ves.ac.in'>
                      <EmailIcon />
                    </Link>
                    <Link to="https://www.linkedin.com/in/siddhant-kodolkar-927505203/" className="ml-2">
                      <LinkedInIcon />
                    </Link>
                    <Link to="https://github.com/SiddhantKodolkar" className="ml-2">
                      <GitHubIcon/>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 border-2" src={Sahil} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">Sahil Madhyan</h2>
                  <h3 className="text-yellow-100 text-[12px] mb-3">UI Developer</h3>
                  <span className="inline-flex">
                  <Link to='mailto:2020.sahil.madhyan@ves.ac.in'>
                      <EmailIcon />
                    </Link>
                    <Link to="https://in.linkedin.com/in/sahil-madhyan" className="ml-2">
                      <LinkedInIcon />
                    </Link>
                    <Link to="https://github.com/Sahil-Madhyan" className="ml-2">
                      <GitHubIcon/>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
