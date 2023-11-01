import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik'

export const Registration = () => { 
    const validationSchema = yup.object().shape({
        userName: yup.string().required('Обязательное поле'),
        email: yup.string().required('Обязательное поле').email('Неверный адрес'),
        password: yup.string().min(6).required('Обязательное поле').matches(/Q|W|E|R|T|Y|U|I|O|P|A|S|D|F|G|H|J|K|L|Z|X|C|V|B|N|M/, 'Некорректный пароль'),
        gender: yup.string().required('Обязательное поле'),
        age:yup.string().required()
    })
    return (
        <Formik initialValues={
            { userName: '' }
        }
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <Form className='App__input-holder'>
                <div className='App__input-item'>
                    <label >Имя пользователя</label>
                    < Field type='text' id='userName' name='userName'
                        validate={validationSchema} />
                    <ErrorMessage className='App__error' name='userName' component='div'></ErrorMessage>
                </div>
                <div className='App__input-item'>
                    <label >Электронная почта</label>
                    < Field type='email' id='email' name='email'
                        validate={validationSchema} />
                    <ErrorMessage className='App__error' name='email' component='div'></ErrorMessage>
                </div>
                <div className='App__input-item'>
                    <label >Пароль</label>
                    < Field type='password' id='password' name='password'
                        validate={validationSchema} />
                    <ErrorMessage className='App__error' name='password' component='div'></ErrorMessage>
                </div>
               
                
                <div className='App__input-item input-item'>
                    <label >Пол</label>
                    <div className='input-item__holder'>
                        <label className='input-item__gender'>
                            < Field type='radio' name='gender' value='мужской'
                                validate={validationSchema} />
                            Мужской
                        </label>
                        <label className='input-item__gender'>
                            < Field type='radio' name='gender' value='женский'
                                validate={validationSchema} />
                            Женский
                        </label>
                    </div>
                    <ErrorMessage className='App__error' name='gender' component='div'></ErrorMessage>
                </div>
                <div className='App__input-item'>
                    <label >Telephone</label>
                    < Field type='tel' id='phone' name='phone'
                        validate={validationSchema} />
                    <ErrorMessage className='App__error' name='phone' component='div'></ErrorMessage>
                </div>
                <Modal show={show} value={value} onClose={() => setShow(false)} />
                <button type='submit'>зарегистрироваться</button>
            </Form>
        </Formik>
    )
}