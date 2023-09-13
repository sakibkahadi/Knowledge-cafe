

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks]= useState([]);
  const [readingTime, setReadingTime]= useState(0)
  const handleAddToBookmark =blog =>{
  
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
    
  }
  const handleMakAsRead = (id, time)=>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }
  return (
    <>
    <Header></Header>
    <main className='md:flex max-w-7xl mx-auto '>
    <Blogs handleAddToBookmark={handleAddToBookmark} handleMakAsRead={handleMakAsRead} ></Blogs>
    <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
    </main>
    </>
  )
}

export default App
