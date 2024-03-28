import { useState, useEffect } from 'react'
import { db } from './firebase/config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
// ExampleModule.js
export const coverImage = require('./images/cover.png');

//firebase 

export default function App() {
  // setState
  const [newEmail, setNewEmail] = useState('')
  const [newBooks, setBooks] = useState(null)

  // Add email to waitlist collection in DB on submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const ref = collection(db, 'waitlist')

    await addDoc(ref, {
      email: newEmail
    })
    .then(console.log(newEmail))
    setNewEmail('')
  }

  return (
    <>
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-purple-800 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            {/* ADD GRID PATTERN HERE */}
            {/* <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            /> */}
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl md:w-80 lg:w-auto">
            {/* ADD SCREENSHOT HERE */}
            
            {/* <Image className="w-full" src={coverImage} alt="" priority /> */}
            
            <img src={coverImage} alt="Example" style={{ width: '70%', height: 'auto' }} />

            {/* <img src={coverImage} alt="Example" /> */}
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
            Every Symptom Tells a Story.
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
            Track your triggers and triumphs to create a tailored roadmap for allergy management.
            </p>
            <div className="mt-8 flex gap-4">
              <form onSubmit={handleSubmit}>
              <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-3 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                  onChange={(e) => setNewEmail(e.target.value)}
                />
                <button
                  className="rounded bg-purple-800  px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-purple-400  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
     <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
     <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
       {/* <GridPattern x="50%" /> */}
     </div>
     <div className="relative text-center text-sm text-slate-600">
       <p>Copyright &copy; {new Date().getFullYear()} Epigenesis LLC</p>
       <p>All rights reserved.</p>
     </div>
   </footer>
   </>
  )
}
