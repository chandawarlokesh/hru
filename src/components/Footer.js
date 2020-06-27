import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div.attrs({ className: 'footer' })`
	background-color: #343a40;
	color: #fff;
	display: flex;
	justify-content: center;
	padding: 0.5rem 1rem;
	font-size: 0.8rem;
`

const Header = () => <StyledFooter>{`CopyRight @ Author ${new Date().getFullYear()}`}</StyledFooter>

export default Header
