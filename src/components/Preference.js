import React, {useContext, useState}from 'react'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import {updatePreference} from '../api/userApi'
import './Preference.css'

function Preference() {
  const {userEmail, userPreference, authToken} = useContext(UserContext);
  const navigate = useNavigate()
  if(authToken == null) {
    navigate('/')
  }
  const [preference, setPreference] = useState(userPreference);
  const [errorHandling, setErrorHandling] = useState('')
  const [isPreferenceUpdate, setPreferenceUpdate] = useState('')

  const getPrefferedColor = (e) => {
    const targetLiTagVal = e.target.getAttribute('value')
    setPreference(targetLiTagVal)
    const reqBody = {
      "email": userEmail,
      "preference": targetLiTagVal
    }
    updatePreference(reqBody, authToken).then((res) => {
      setPreferenceUpdate(targetLiTagVal)
    }).catch((error) => {
      setErrorHandling("SOMETHING WENT WRONG")
    })
  }
  return (
    <div className='box'>
      <div>
       <ul>
         <li value="#FF0000" onClick={e => getPrefferedColor(e)} style={{"color": "#FF0000"}}>RED</li>
         <li value="#FFDB58" onClick={e => getPrefferedColor(e)} style={{"color": "#FFDB58"}}>YELLOW</li>
         <li value="#000000" onClick={e => getPrefferedColor(e)} style={{"color": "#000000"}}>BLACK</li>
         <li value="#FFFFFF" onClick={e => getPrefferedColor(e)} style={{"color": "#FFFFFF"}}>WHITE</li>
         <li value="#00FF00" onClick={e => getPrefferedColor(e)} style={{"color": "#00FF00"}}>GREEN</li>
         <li value="#0000FF" onClick={e => getPrefferedColor(e)} style={{"color": "#0000FF"}}>BLUE</li>
       </ul>
      </div>
      <div className='preference-div' style={{"backgroundColor": `${preference}`}}>
        <span style={{"color": `${preference === "#000000" ? "#FFFFFF":"#000000"}`}}>PREFERENCE</span>
      </div>
      <div><span style={{"color": `${isPreferenceUpdate ? isPreferenceUpdate : "#FFFFFF"}`}}>{isPreferenceUpdate ? `PREFERENCE UPDATED` : ''}</span></div>
      <div><span>{errorHandling ? errorHandling : ''}</span></div>
    </div>
   
  )
}

export default Preference