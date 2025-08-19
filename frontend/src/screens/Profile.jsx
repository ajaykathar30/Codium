import React, { use } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import useGetBookmarkQuestion from '../hooks/useGetBookmarkQuestion';
import ProfileTable from '../components/ProfileTable';
import Footer from '../components/Footer';

const Profile = () => {
  const {user}=useSelector((state) => state.auth);
  let bookmarks = [];
  useGetBookmarkQuestion()
  if(user){
    bookmarks = useSelector((state) => state.question.bookmarks);
  }
  return (
    <div>
     <Navbar/>
     <div className='mx-auto max-w-4xl my-10'>
        <h1 className='text-3xl font-bold'>Profile</h1>
        <div className='flex flex-wrap items-center gap-5 mt-5 space-y-10'>
          <div className='w-1/3 bg-base-200 p-5 min-w-[300px] rounded-lg space-y-3'>
            <h2 className='text-xl font-semibold'>User Information</h2>
            <p className='mt-2 font-medium'>Name: {user?.name}</p>
            <p className='font-medium'>Email: {user?.email}</p>

          </div>
          <div className='w-1/3 bg-base-200 p-5 rounded-lg space-y-3'>
            <h2 className='text-xl font-semibold'>Questions Completed</h2>
            <p>{user?.completedQuestions?user.completedQuestions.length:0} out of 362</p>
            <div 
  className="radial-progress" 
  style={{ "--value": ((user?.completedQuestions ? user.completedQuestions.length : 0) / 362) * 100 }} 
  aria-valuenow={((user?.completedQuestions ? user.completedQuestions.length : 0) / 362) * 100} 
  role="progressbar"
>
  {Math.round(((user?.completedQuestions ? user.completedQuestions.length : 0) / 362) * 100)}%
</div>

          </div>
        </div>
      <ProfileTable bookmarks={bookmarks}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile
