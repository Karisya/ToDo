export const Registration = () => { 

    
    return (
        <Formik initialValues={
            { userName: '' }
        }
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
                setValue(JSON.stringify(values, {}, 5))
                setShow(true)
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
                <div className='App__input-item'>
                    <label >Подтверждение пароля</label>
                    < Field type='password' id='confirmPassword' name='confirmPassword'
                        validate={validationSchema} />
                    <ErrorMessage className='App__error' name='confirmPassword' component='div'></ErrorMessage>
                </div>
                <div className='App__input-item'>
                    <label >Дата рождения</label>
                    < Field type='date' id='dateOfBirth' name='dateOfBirth'
                        validate={validationSchema} />
                    <ErrorMessage className='App__error' name='dateOfBirth' component='div'></ErrorMessage>
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