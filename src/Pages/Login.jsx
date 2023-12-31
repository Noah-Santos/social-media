import {useRef} from 'react';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav';
import LogForm from '../Components/LogForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const data = useRef([
    {
      title: 'name',
      type: 'text',
      id:1,
    },
    {
      title: 'email',
      type: 'email',
      id:2,
    },
    {
      title: 'password',
      type: 'password',
      id:3,
    },
  ])

  if(sessionStorage.getItem("authenticated") == 'true'){
    navigate('/home');
    // window.location.replace('/home');
  }

  return (
    <>
      <Nav  logged={false}></Nav>
      <div className='stretch'>
        <LogForm></LogForm>
      </div>
    </>
  )
}

export default Login