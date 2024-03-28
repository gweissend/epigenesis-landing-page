import { useState, useEffect } from 'react'
import { db } from './firebase/config'
import { collection, getDocs, addDoc } from 'firebase/firestore'

//firebase 

export default function App() {
  const [newEmail, setNewEmail] = useState('')
  const [newBooks, setBooks] = useState(null)


  // RETRIEVE COLLECTION FROM DATABASE HERE
  // useEffect(() => {
  //   console.log(db)
  //   const ref = collection(db, 'books')
  //   getDocs(ref)
  //     .then((snapshot) => {
  //       console.log(snapshot)
  //       let results = []
  //       snapshot.docs.forEach(doc=> {
  //         results.push({id:doc.id,...doc.data()})
  //         setBooks(results)
  //       })
  //     })
  // },[])



  // ENTER EMAIL HERE
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
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            {/* ADD GRID PATTERN HERE */}
            {/* <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            /> */}
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            {/* ADD SCREENSHOT HERE */}
            {/* <Image className="w-full" src={coverImage} alt="" priority /> */}
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              Get lost in the world of icon design.
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              A book and video course that teaches you how to design your own
              icons from scratch.
            </p>
            <div className="mt-8 flex gap-4">
              <form onSubmit={handleSubmit}>
              <label>
        <span>Add a new book title:</span>
        <input 
          required
          className="min-w-0 flex-auto rounded-md border-0 bg-indigo-500 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          type="text"
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
        />
      </label>
      <button>Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
