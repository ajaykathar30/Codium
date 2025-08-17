import React from 'react'

const ProfileTable = ({ bookmarks }) => {
  return (
    <div className='max-w-4xl  my-10'>
      <h1 className='text-2xl font-bold'>Your Bookmarked Questions</h1>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Youtube</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        bookmarks.map((bookmark, index) => (
          <tr key={bookmark._id}>
            <th>{index + 1}</th>
            <td>
                <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                    {bookmark.title}
                </a>
            </td>
            <td>
              <a href={bookmark.yt} target="_blank" rel="noopener noreferrer">
                <img src="/ytLogo.png" alt="YouTube Link" className='w-8 rounded' />
              </a>
            </td>
          </tr>
        ))
      }

      
    </tbody>
  </table>
</div>
     
    </div>
  )
}

export default ProfileTable
