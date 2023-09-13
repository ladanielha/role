import React from 'react'


const navbar = () => {
  return (
    <header>
        <div className="navbar" data-theme="light">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Halalku - Wisata Halal Cirebon</a>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Tentang Kami</a></li>
                <li><a>Rekomendasi Wisata Halal</a></li>
                <li><a>Login</a></li>
                </ul>
            </div>
            <div className="flex-none gap-2">
                
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                    </div>
                </label>
                
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    </header>

  )
}

export default navbar