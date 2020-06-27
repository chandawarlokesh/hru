import React from 'react'
import { Spinner } from 'reactstrap'
import styled from 'styled-components'
import { map } from 'lodash'

const SpinnerContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const colors = ['primary', 'success', 'danger', 'warning', 'info']

const CustomSpinner = () => (
	<SpinnerContainer>
		{map(colors, (color) => (
			<Spinner type='grow' color={color} key={color} />
		))}
	</SpinnerContainer>
)

export default CustomSpinner
