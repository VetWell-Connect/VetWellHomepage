import React from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className='signup d-flex justify-content-center align-items-center vh-100 bg-dark'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign Up</h3>
                    <div className='mb-2'>
                        <label htmlFor='fname'>First Name</label>
                        <input type='text' placeholder='Enter First Name' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lname'>Last Name</label>
                        <input type='text' placeholder='Enter Last Name' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Enter Password' className='form-control' />
                    </div>
                    <div className='d-grid mt-2'>
                        <button className='btn btn-primary'>Sign Up</button>
                    </div>
                    <p className='justiy-content-center'>
                        Already Registered?<Link to='/login' href='/login' className='ms-2'>Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;