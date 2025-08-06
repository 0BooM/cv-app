import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import EducationalInfo from './components/EducationalInfo'
import PracticalInfo from './components/PracticalInfo'
import CvPreview from './components/CvPreview'
function App() {
  const [count, setCount] = useState(0)
  const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phone: ''});
  const [educationalInfo, setEducationalInfo] = useState({school: '', studyTitle: '', schoolDateStart: '', schoolDateEnd: ''});
  const [practicalInfo, setPracticalInfo] = useState({company: '', position: '', responsibilities: '', jobDateStart: '', jobDateEnd: ''});

  return (
    <>
    <div className='flex flex-col w-full justify-around lg:flex-row'>
      <div>
        <GeneralInfo data={generalInfo} dataSetter={setGeneralInfo}></GeneralInfo>
        <EducationalInfo data={educationalInfo} dataSetter={setEducationalInfo}></EducationalInfo>
        <PracticalInfo data={practicalInfo} dataSetter={setPracticalInfo}></PracticalInfo>
      </div>
      <CvPreview generalInfo={generalInfo} educationalInfo={educationalInfo} jobInfo={practicalInfo}></CvPreview>
    </div>
    </>
  )
}

export default App
