import {Header} from './components'
import { socialInfo } from './constants'

export default function App() {
  return (
    <main>
      <Header name="zafeer" socialInfo={socialInfo} />
      <section id="about" className="py-20 px-5 w-full flex justify-center bg-opacity-30">  
        <div className="w-full max-w-[820px]">
          <h1 className="text-5xl font-bold mb-7">About Me</h1>
          <p className="text-xl text-slate-500">
            I'm a software engineer based in Pakistan. I have a passion for web development and love to create web applications. I have experience working with JavaScript, React, Node.js, and other web technologies. I'm always learning and improving my skills.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 px-5 w-full flex justify-center bg-opacity-30">
        <div className="w-full max-w-[820px]">
          <h1 className="text-5xl font-bold mb-7">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-7 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-3">Project 1</h2>
              <p className="text-lg text-slate-500">
                This is a project description. It can be a brief overview of the project.
              </p>
            </div>
            <div className="bg-white p-7 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-3">Project 2</h2>
              <p className="text-lg text-slate-500">
                This is a project description. It can be a brief overview of the project.
              </p>
            </div>
            <div className="bg-white p-7 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-3">Project 3</h2>
              <p className="text-lg text-slate-500">
                This is a project description. It can be a brief overview of the project.
              </p>
            </div>
            <div className="bg-white p-7 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-3">Project 4</h2>
              <p className="text-lg text-slate-500">
                This is a project description. It can be a brief overview of the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-5 w-full flex justify-center bg-opacity-30">
        <div className="w-full max-w-[820px]">
          <h1 className="text-5xl font-bold mb-7">Contact</h1>
          <form>
            <div className="flex flex-col space-y-5">
              <div>
                <label htmlFor="name" className="text-lg text-slate-500">Name</label>
                <input type="text" id="name" className="w-full p-3 rounded-lg border border-slate-200" />
              </div>
              <div>
                <label htmlFor="email" className="text-lg text-slate-500">Email</label>
                <input type="email" id="email" className="w-full p-3 rounded-lg border border-slate-200" />
              </div>
              <div>
                <label htmlFor="message" className="text-lg text-slate-500">Message</label>
                <textarea id="message" className="w-full p-3 rounded-lg border border-slate-200"></textarea>
              </div>
              <button type="submit" className="bg-slate-900 text-white py-3 rounded-lg">Send</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}