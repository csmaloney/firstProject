import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const RegistrationForm = () => {

    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ formErrors, setFormErrors ] = useState({});
    const [ userId, setUserId ] = useState(localStorage.getItem('userId'));
    const [ accessToken, setAccessToken ] = useState(localStorage.getItem('accessToken'));

    const navigate = useNavigate();

    const handleUsername = (e) => {
        setUsername(e.target.value)
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }; 
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }; 
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }; 


    const onSubmitHandler = (e) => {

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users", {
            username,
            email,
            password,
            confirmPassword
        }).then((res) => {
            console.log(res);
            console.log(res.data);
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('')
            navigate('/');
        }).catch((err) => {
            console.log(err);
            const errObj = err.response.data.error.errors;
            setFormErrors(errObj);
        });
    }


  return (
      <div className='backBack'>
    <div className='mb-44 absolute top-[103px] text-white right-10 z-100 bg-slate-700 shadow rounded p-4'>
        <div className='flex flex-col items-center'>
            <h1 className="text-2xl m-3">Register User</h1>
        <form onSubmit={handleSubmit} className="w-[500px] flex flex-col">
            <div className='flex'>
                <section className='m-4'>
                <div className="flex flex-col gap-2">
                    {formErrors.username && <p className="text-center text-red-500">{formErrors.username.message}</p>}
                        <label htmlFor="username">Username: </label>
                        <input id="username" className="text-slate-700 border border-black rounded w-[400px]" type="text" onChange={handleUsername} value={username}/>
                    </div>
                    <div className="flex flex-col gap-2">
                    {formErrors.email && <p className="text-center text-red-500">{formErrors.email.message}</p>}
                        <label htmlFor="email">Email: </label>
                        <input id="email" className="text-slate-700 border border-black rounded" type="text" onChange={handleEmail} value={email}/>
                    </div>
                    <div className="flex flex-col gap-2">
                    {formErrors.password && <p className="text-center text-red-500">{formErrors.password.message}</p>}
                        <label htmlFor="password">Password: </label>
                        <input id="password" className="text-slate-700 border border-black rounded" type="password" onChange={handlePassword} value={password}/>
                    </div>
                    <div className="flex flex-col gap-2">
                    {formErrors.confirmPassword && <p className="text-center text-red-500">{formErrors.confirmPassword.message}</p>}
                        <label htmlFor="confirmPassword">Password: (Confirm) </label>
                        <input id="confirmPassword" className="text-slate-700 border border-black rounded" type="password" onChange={handleConfirmPassword} value={confirmPassword}/>
                    </div>
                </section>
            </div>
                <button className="border border-white font-bold rounded p-2 m-2 bg-slate-700 hover:bg-white hover:text-slate-700 text-white">Register</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default RegistrationForm