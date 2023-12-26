import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <header className="px-3 py-4 border-b border-gray-100">
        <div class="grid grid-cols-2justify-between text-xl font-bold leading-none text-gray-900 dark:text-white">
        <div className="card bg-base-100 shadow-sm justify-center">
          <div className="card-body text-center">
            <div className="card-actions my-5">
              <div>Welcome to Minimal User Management System. </div><br/> 
          <div>You can Create, Update, Delete the User Information. The User Email is Unique.
            And The email is not editable.
          </div>
            </div>
          </div>
        </div>
          

        </div>

      </header>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://www.loginradius.com/blog/static/3d1a7f9993b6334444b52ae84a06f852/d3746/user-mngmnt.jpg" alt="demo" /></figure>
          <div className="card-body text-center">
            <div className="card-actions my-5">
              <Link href="/user/add-user" className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full text-sm'>Add New User</Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://milgrasp.com/img/sections/features/user_management1.jpg" alt="demo" /></figure>
          <div className="card-body text-center">
            <div className="card-actions my-5">
              <Link href="/user/view-users" className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full text-sm'>View All User</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
