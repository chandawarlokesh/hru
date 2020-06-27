import React, { useState, useCallback } from 'react'
import { Container, Form, FormGroup, Label, Col, Input, Button } from 'reactstrap'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import useLoginUser from './useLoginUser'

const LoginContainer = styled(Container)`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledForm = styled(Form)`
	border-radius: 0.5rem;
	box-shadow: 3px 3px 6px grey;
	padding: 1rem;
	width: 400px;
`

const defaultState = {
	name: '',
	password: '',
}

const Login = () => {
	const history = useHistory()
	const [loginData, setLoginData] = useState(defaultState)
	const { login, loading } = useLoginUser({
		onSuccess: () => {
			history.push('/')
		},
		onError: (err) => alert(err.message),
	})

	const handleChange = useCallback(
		(event) =>
			setLoginData({
				...loginData,
				[event.target.name]: event.target.value,
			}),
		[loginData, setLoginData]
	)

	const handleLogin = (event) => {
		event.preventDefault()
		login(loginData)
	}

	return (
		<>
			<LoginContainer>
				<StyledForm onSubmit={handleLogin}>
					<FormGroup row>
						<Label for='name' sm={4}>
							{'Name'}
						</Label>
						<Col sm={8}>
							<Input
								type='name'
								name='name'
								value={loginData['name']}
								id='name'
								placeholder="What's your good name?"
								disabled={loading}
								onChange={handleChange}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label for='password' sm={4}>
							{'Password'}
						</Label>
						<Col sm={8}>
							<Input
								type='password'
								name='password'
								value={loginData['password']}
								id='password'
								placeholder='*********'
								disabled={loading}
								onChange={handleChange}
							/>
						</Col>
					</FormGroup>
					<FormGroup check row className='clearfix'>
						<Col>
							<Button className='float-right' disabled={loading}>
								{'Login'}
							</Button>
						</Col>
					</FormGroup>
				</StyledForm>
			</LoginContainer>
		</>
	)
}

export default Login
