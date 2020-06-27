import React from 'react'
import { Navbar, NavbarBrand, Nav, NavbarText, Button } from 'reactstrap'
import auth from 'auth'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.div`
	margin-bottom: 0.5rem;
`

const Header = () => {
	const history = useHistory()
	return (
		<StyledHeader>
			<Navbar color='dark' dark expand='md'>
				<NavbarBrand href='/'>React App</NavbarBrand>
				<Nav className='mr-auto' navbar></Nav>
				<NavbarText>
					<Button onClick={() => auth.logout(() => history.push('/'))}>{'Logout'}</Button>
				</NavbarText>
			</Navbar>
		</StyledHeader>
	)
}

export default Header
