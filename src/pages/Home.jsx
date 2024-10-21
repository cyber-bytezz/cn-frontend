import React from 'react'
import Header from '../components/Header'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import SpecialityMenu from '../components/SpecialityMenu'
import StudyGoals from '../components/StudyGoals'
import ExplorePrograms from '../components/ExplorePrograms'
import TopColleges from '../components/TopColleges'
import CollegeRankingTable from '../components/CollegeRankingTable';
import States from '../components/States';
import Admission2024 from '../components/Admission2024'
import StudyAbroad from '../components/StudyAbroad'
import TopCollegesGrid from '../components/TopCollegesGrid'


const Home = () => {
  return (
    <div>
      <Header />
      <StudyGoals /> 
      <ExplorePrograms/>
      <TopColleges/>
      <TopCollegesGrid/>
      <CollegeRankingTable />
      <States/>
      <Admission2024/>
      <StudyAbroad/>
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home