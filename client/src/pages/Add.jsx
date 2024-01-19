import React, { useContext, useState } from 'react'
import top from '../assets/images/images.jpeg'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const { user } = useContext(UserContext)
    const [title, setTitle] = useState('')
    const [cat, setCat] = useState('')
    const [article, setArticle] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {data} = await axios.post('/article', {
            owner: user?.id, title, cat, article
        })
        if(data){
            navigate(`/profile/${user.id}`)
        }
    }
  return (
    <form className='grid grid-cols-2 h-[calc(100vh-11.5rem)]' onSubmit={handleSubmit}>
        <div className=' w-full h-full p-[10%] '>
            <img className='w-[25rem] rounded-xl' src={top} alt="" />
            <p>{user?.name}</p>
        </div>
        <div className='flex flex-col p-[4rem]'>
            <label htmlFor="title">Title:</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className='outline-none' type="text" placeholder='Enter title...' />
            <label htmlFor="">Category:</label>
            <select value={cat} onChange={(e) => setCat(e.target.value)} className='w-[5rem]' name="" id="">
                <option value='politics'>Politics</option>
                <option value="sports">Sports</option>
                <option value="fashion">Fashion</option>
                <option value="technology">Technology</option>
            </select>
            <label>Article:</label>
            <textarea value={article} onChange={(e) => setArticle(e.target.value)} className='outline-none resize-none' placeholder='Enter article...' name="" id="" cols="30" rows="10"></textarea>
            <button className='bg-black text-white py-2 font-semibold' type='submit'>Publish</button>
        </div>
    </form>
  )
}

export default Add