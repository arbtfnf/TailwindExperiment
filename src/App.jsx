import { useCallback, useEffect, useState } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [char, setChar] = useState(false);
  const [number, setNumber] = useState(false);
  const [text, setText] = useState();

  const textGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tmpText = ""
    
    if (number) str += "0123456789"; 

    if (char) str += "`~!@#$%^&*()_-+={[}]|\:;'<,>.?/";
    
    for (let i = 0; i < length; i++) {

      let index = Math.floor(Math.random() * str.length + 1); 

      tmpText += str.charAt(index); 

     }

     setText(tmpText)

  }, [length, char, number, setText]);


  useEffect(() => {
    textGenerator()
  }, [length, number, char, textGenerator]);

  return (
    <>
      <div className='w-full max-w-md shadow-md mx-auto rounded-lg px-4 my-8 text-orange-700 bg-slate-900'>
      <form>
      <label class="block">
        <span class="block text-lg font-medium text-white-700">Username</span>
        <input 
        type="text" 
        value="tbone" 
        disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "/>
      </label>
      </form>
      <form>
      <label class="block">
        <span class="block text-lg font-medium text-white-700">Email</span>
        <input type="email" class="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
          <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
          </label>
        </form>

        <h1 className='text-white my-3'>Username Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-auto'>
          <input
          type="text"
          value={text}
          className='outline-full w-full px-3 py-1'
          placeholder='text'
          readOnly
          />

        <button
        className='bg-blue-700 text-white px-2 mx-auto py-1 shrink-0 hover:bg-sky-600'
        >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
          <input
          type='range' 
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
          type='checkbox' 
          value={char}
          className='cursor-pointer'
          onChange={() => {setChar((prev) => !prev);
          }}
          />
          <label>Character</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
          type='checkbox' 
          value={number}
          className='cursor-pointer'
          onChange={() => {setNumber((prev) => !prev);
          }}
          />
          <label>Number</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
