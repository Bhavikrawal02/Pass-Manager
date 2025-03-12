import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {

  const ref = useRef()
  const passref = useRef()
  const [form, setform] = useState(
    {
      site: "",
      username: "",
      password: ""
    }
  )
  const [passwordarr, setpassarr] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setpassarr(JSON.parse(passwords))
    }
  }, [])




  const copyhandle = (text) => {



    toast('🦄 Copied To Clipboard', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
    });


    navigator.clipboard.writeText(text);

  }

  const showpass = () => {
    passref.current.type = "text"
    if (ref.current.src.includes("/Icons/view.png")) {
      ref.current.src = "Icons/hidden.png"
      passref.current.type = "password"
    }
    else {
      ref.current.src = "Icons/view.png"
      passref.current.type = "text"
    }

  }

  const savepass = () => {
    const newpass={ ...form, id: uuidv4()};
    const updatedpass=[ ...passwordarr,newpass];
    setpassarr(updatedpass);

    localStorage.setItem("passwords", JSON.stringify(updatedpass));
    setform({ site: "", username: "", password: "" });
  }

  const handlechange = (e) => {

    setform({ ...form, [e.target.name]: e.target.value })

  }

  const deletepass = (id) => {
    const updatedpass=passwordarr.filter(item=>item.id!==id);
    setpassarr(updatedpass)
    localStorage.setItem("passwords",JSON.stringify(updatedpass))
  }
  
  const editpass=(id)=>{
    setform(passwordarr.filter(item=>item.id===id)[0])
    const updatedpass=passwordarr.filter(item=>item.id!==id)
    setpassarr(updatedpass)
    localStorage.setItem("passwords",JSON.stringify(updatedpass))



  }



  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />

      <div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(100%_150%_at_50%_100%,#000_40%,#63e_100%)]"></div>

        <div className="manager w-3/5 mx-auto ">

          <div className="heading text-center text-white py-5 text-xl">
            <span className='text-blue-500 font-bold'>&lt;</span>
            <span>MY</span>
            <span className='text-blue-500 font-bold '> PASS/&gt;</span>
            <p className='text-sm text-white'>Manage Your Password</p>
          </div>
          <div className="inputs flex flex-col p-4 gap-6 text-center items-center">
            <input value={form.site} onChange={handlechange} placeholder='Enter Website URL' className=' rounded-xl w-full px-4 border-2 border-blue-700' type="text" name="site" id="" />
            <div className='flex gap-8'>
              <input value={form.username} onChange={handlechange} placeholder='Enter Username' className=' rounded-xl w-full px-4 border-2 border-blue-700' type="text" name="username" id="" />
              <div className='relative w-full'>
                <input ref={passref} value={form.password} onChange={handlechange} placeholder='Enter Password' className=' rounded-xl w-full px-4 border-2 border-blue-700' type="password" name="password" id="" />
                <img ref={ref} onClick={showpass} className=' w-4 absolute top-1.5 right-2 cursor-pointer' src="/Icons/view.png" alt=" no image" />
              </div>
            </div>
            <button onClick={savepass} className='text-white flex hover:border bg-blue-600 rounded-full w-fit px-4 hover:bg-blue-500 items-center gap-1' type="button">
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover">
              </lord-icon>

              Save
            </button>
          </div>

        </div>
        <h1 className="heading  w-3/5 p-5 mx-auto text-white font-bold">
          YOUR PASSWORDS
        </h1>
        {passwordarr.length === 0 && <div className='w-1.2 text-center p-5 mx-auto text-white underline font-extrabold font-serif'>No Passwords to Show - Add your Password</div>}
        {passwordarr.length != 0 &&
          <table className="table-auto text-white w-3/5 mx-auto rounded-xl overflow-hidden">

            <thead className='bg-blue-700 py-10 w-3/5'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-blue-50'>
              {passwordarr.map((item, index) => {

                return <tr key={index} className='border-blue-500 border '>
                  <td className='text-black text-center p-3 w-1'>

                    <div className=' justify-center flex gap-3 cursor-pointer'>
                      <div>
                        {item.site}
                      </div>


                      <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover">
                      </lord-icon>

                    </div>

                  </td>

                  <td className='text-black text-center p-3 w-1'>

                    <div className=' justify-center flex gap-3 cursor-pointer'>
                      <div>
                        {item.username}
                      </div>


                      <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover">
                      </lord-icon>

                    </div>

                  </td>

                  <td className='text-black text-center p-3 w-1'>

                    <div className=' justify-center flex gap-3 cursor-pointer'>
                      <div>
                        {item.password}
                      </div>


                      <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover">
                      </lord-icon>

                    </div>

                  </td>
                  <td className='text-black text-center p-3 w-1'>

                    <div className=' justify-center flex gap-3'>

                      <div className='cursor-pointer' onClick={() => {deletepass(item.id)}}>

                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover">
                        </lord-icon>

                      </div>

                      <div className='w-7 cursor-pointer' onClick={()=>{editpass(item.id)}}>
                        <lord-icon
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover">
                        </lord-icon>
                      </div>

                    </div>


                  </td>

                </tr>

              })}

            </tbody>
          </table>
        }


      </div>

    </>
  )
}

export default Manager
