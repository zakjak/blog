import React from 'react'
import TopStories from '../components/TopStories'
import TrendingSection from '../components/TrendingSection'


const Home = () => {
  return (
    <div className="w-[90%] m-auto">
      <TopStories />
      <TrendingSection />
    </div>
  )
}

export default Home