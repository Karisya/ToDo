import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom';

const validationSchema = yup.object().shape({
    email: yup.string().required('Обязательное поле').email('Неверный адрес'),
    password: yup.string().min(6).required('Обязательное поле').matches(/Q|W|E|R|T|Y|U|I|O|P|A|S|D|F|G|H|J|K|L|Z|X|C|V|B|N|M/, 'Некорректный пароль'),
})

export const LogIn = () => {
    const navigate = useNavigate();

    return (
        <div className='login'>
            <div className='login__container container'>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        let token = ''
                        const login = { email: values.email, password: values.password }
                        const cheakLogin = async () => {
                            try {
                                const response = await fetch('https://todo-redev.herokuapp.com/api/auth/login',
                                    {
                                        method: "POST",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(login)
                                    });
                                const data = await response.json();
                                if (token.token === localStorage.getItem('token'))
                                    navigate('/mainList.js')
                                else {
                                    navigate('/registrationForm.js')
                                }
                            } catch (error) {
                                console.log("error: ", error);
                            }
                        }
                        cheakLogin()
                    }}>
                    <Form className='login__input-holder'>
                        <div className='login__input-item'>
                            <label >Электронная почта</label>
                            < Field type='email' id='email' name='email'
                                // onChange={handleEmail}
                                validate={validationSchema} />
                        </div>
                        <ErrorMessage className='login__error' name='email' component='div'></ErrorMessage>
                        <div className='login__input-item'>
                            <label >Пароль</label>
                            < Field type='password' id='password' name='password'
                                // onChange={handlePassword}
                                validate={validationSchema} />
                        </div>
                        <ErrorMessage className='login__error' name='password' component='div'></ErrorMessage>
                        <button type='submit'>Log in</button>
                    </Form>
                </Formik>
            </div>
            <div className='login__link'>
                Don`t have an account?<Link to='/registrationForm'>Sign up!</Link>
            </div>
        </div>
    )
}