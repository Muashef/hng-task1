import React from 'react';
import logo from "./images/profile.jpg"
import share from "./images/share-button-desktop.png"
import button from "./images/share-button-mobile.png"
import slack from "./images/slack.png"
import github from "./images/git.png"
import zuri from "./images/zuri-internship.png"
import I4G from "./images/I4G.png"
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <main className="flex flex-col w-full max-w-3xl px-5 py-6 mx-auto text-gray-900 font-inter gap-y-5">
        <section id='profile' className='w-full mt-5'>
          <header className='relative flex flex-col justify-center items-center text-center text-xl font-bold gap-y-3'>
            <div className='relative'>
              <img id="profile__img" src={logo} alt="logo" className='rounded-full w-20'/>
            </div>
            <h1 id="twitter">muashef1</h1>
            <p id="slack" className='hidden'>Sherif</p>
            <img src={share} className="hidden sm:block absolute right-10 top-[-10px]" alt="share button"/>
            <img src={button} className="sm:hidden absolute right-10 top-[-10px] block w-7 h-auto" alt="share button"/>
          </header>
        </section>
        <section id="links" className='flex flex-col w-full mx-auto mt-6 gap-y-5'>
          <a href='https://twitter.com/muashef1' id='twitter' target="_blank" rel="noopener noreferrer" className="text-center py-4 bg-gray-200 border border-gray-200 rounded-lg font-medium hover:bg-gray-300 focus:border-gray-400">Twitter Link</a>
          <a href='https://training.zuri.team/' id='btn__zuri' target="_blank" rel="noopener noreferrer" className="text-center py-4 bg-gray-200 border border-gray-200 rounded-lg font-medium hover:bg-gray-300 focus:border-gray-400">Zuri Team</a>
          <a href='https://books.zuri.team/' id='books' target="_blank" rel="noopener noreferrer" className="text-center py-4 bg-gray-200 border border-gray-200 rounded-lg font-medium hover:bg-gray-300 focus:border-gray-400">Zuri Books</a>
          <a href='https://books.zuri.team/python-for-beginners?ref_id=sherif' id='book__python' target="_blank" rel="noopener noreferrer" className="text-center py-4 bg-gray-200 border border-gray-200 rounded-lg font-medium hover:bg-gray-300 focus:border-gray-400">Python Books</a>
          <a href='https://background.zuri.team' id='pitch' target="_blank" rel="noopener noreferrer" className="text-center py-4 bg-gray-200 border border-gray-200 rounded-lg font-medium hover:bg-gray-300 focus:border-gray-400">Background Check for Coders</a>
          <a href='https://books.zuri.team/design-rules' id='book__design' target="_blank" rel="noopener noreferrer" className="text-center py-4 bg-gray-200 border border-gray-200 rounded-lg font-medium hover:bg-gray-300 focus:border-gray-400">Design Books</a>
          <Link to='/contact' className="text-center py-4 bg-gray-200 border border-gray-200 rounded-lg font-medium hover:bg-gray-300 focus:border-gray-400">Contact Me</Link>      
        </section>
        <section id='social-links' className='flex justify-center gap-x-6 mt-5'>
          <img src={slack} alt="slack"/>
          <img src={github} alt="github"/>
        </section>
        <section id='footer' className='flex flex-col items-start sm:flex-row sm:justify-between sm:items-center text-center text-sm text-gray-500 gap-y-4'>
          <img src={zuri} alt="zuri"/>
          <p>HNG Internship 9 Frontend Task</p>
          <img src={I4G} alt="I4G"/>
        </section>
      </main>
    </div>
  );
}

export default App;
