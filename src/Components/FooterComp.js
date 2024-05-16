import React from 'react'
import { Footer } from "flowbite-react";
import { FaDribbble, FaFacebook,
FaGithub, FaInstagram, FaTwitter 
} from "react-icons/fa";
export default function FooterComp() {
  return (
   <>
    <div>
    <Footer className='bg-purple mt-8'>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" className="text-white font-bold" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white font-bold">About</Footer.Link>
              <Footer.Link href="#" className="text-white font-bold">Careers</Footer.Link>
              <Footer.Link href="#" className="text-white font-bold">Brand Center</Footer.Link>
              <Footer.Link href="#" className="text-white font-bold">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" className="text-white font-bold"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white font-bold">Discord Server</Footer.Link>
              <Footer.Link href="#" className="text-white font-bold">Twitter</Footer.Link>
              <Footer.Link href="#" className="text-white font-bold">Facebook</Footer.Link>
              <Footer.Link href="#" className="text-white font-bold">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" className="text-white font-bold"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white font-bold">Privacy Policy</Footer.Link>
              <Footer.Link href="#" className="text-white font-bold">Licensing</Footer.Link>
              <Footer.Link href="#" className="text-white font-bold">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" className="text-white font-bold"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-white font-bold">iOS</Footer.Link>
              <Footer.Link href="#" className="text-white font-bold">Android</Footer.Link>
              <Footer.Link href="#" className="text-white font-bold">Windows</Footer.Link>
              <Footer.Link href="#" className="text-white font-bold">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-purple px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="QuizWiz™" year={2022} className="text-white font-bold"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" className="text-white font-bold" icon={FaFacebook} />
            <Footer.Icon href="#" className="text-white font-bold" icon={FaInstagram} />
            <Footer.Icon href="#" className="text-white font-bold" icon={FaTwitter} />
            <Footer.Icon href="#" className="text-white font-bold" icon={FaGithub} />
            <Footer.Icon href="#" className="text-white font-bold" icon={FaDribbble} />
          </div>
        </div>
      </div>
    </Footer>
    </div>
   </>
  )
}
