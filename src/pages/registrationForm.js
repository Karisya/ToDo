import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom';

const validationSchema = yup.object().shape({
    username: yup.string().required('Обязательное поле'),
    email: yup.string().required('Обязательное поле').email('Неверный адрес'),
    password: yup.string().min(8).required('Обязательное поле').matches(/Q|W|E|R|T|Y|U|I|O|P|A|S|D|F|G|H|J|K|L|Z|X|C|V|B|N|M|@|#|&|1|2|3|4|5|6|7|8|9/, 'Некорректный пароль'),
    gender: yup.string().required('Обязательное поле'),
    age: yup.number().required('Обязательное поле').min(18)
})

export const Registration = () => {

    const navigate = useNavigate();
    return (
        <div className='registration'>
            <div className='registration__container container'>
                <Formik className='registration__content'
                    initialValues={{ username: '', email: '', password: '', gender: '', age: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        const sendPostRequest = async () => {
                            console.log(values)
                            try {
                                const responce = await fetch("https://todo-redev.herokuapp.com/api/users/register",
                                    {
                                        method: "POST",
                                        headers: {
                                            Accept: "application/json",
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(values)
                                    });
                                let token = await responce.json();
                                console.log(token)
                                localStorage.setItem("token", token.token)
                                navigate('/logIn')
                            } catch (err) {
                                console.log(err)
                            }
                        }
                        sendPostRequest();
                    }}>
                    <Form className='registration__input-holder'>
                        <div className='registration__input-item'>
                            <label >Имя пользователя</label>
                            < Field type='text' id='username' name='username'
                                validate={validationSchema} />

                        </div>
                        <div className='registration__input-item'>
                            <label >Электронная почта</label>
                            < Field type='email' id='email' name='email'
                                validate={validationSchema} />

                        </div>
                        <ErrorMessage className='registration__error' name='email' component='div'></ErrorMessage>
                        <div className='registration__input-item'>
                            <label>Пароль</label>
                            < Field type='password' id='password' name='password'
                                validate={validationSchema} />
                        </div>
                        <ErrorMessage className='registration__error' name='password' component='div'></ErrorMessage>
                        <div className='registration__input-item input-item'>
                            <label >Пол</label>
                            <div className='input-item__holder'>
                                <label className='input-item__gender'>
                                    < Field type='radio' name='gender' value='male'
                                        validate={validationSchema} />
                                    Мужской
                                </label>
                                <label className='input-item__gender'>
                                    < Field type='radio' name='gender' value='female'
                                        validate={validationSchema} />
                                    Женский
                                </label>
                            </div>
                        </div>
                        <ErrorMessage className='registration__error' name='gender' component='div'></ErrorMessage>
                        <div className='registration__input-item'>
                            <label >Возраст</label>
                            < Field type='text' id='age' name='age'
                                validate={validationSchema} />
                        </div>
                        <ErrorMessage className='registration__error' name='age' component='div'></ErrorMessage>
                        <button type='submit'>Sign up</button>
                    </Form>
                </Formik>
            </div>
            <div className='registration__path'>
                Alredy have an account? <Link className='registration__logIn' to='/logIn'>Log in!</Link>
            </div>
        </div>
    )
}
