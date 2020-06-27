import styled from 'styled-components'
import Emoji from 'react-emoji-render'
import { Label } from 'reactstrap'

export const Page = styled.div.attrs({ className: 'content' })`
	background-color: ${`hsl(${360 * Math.random()}, ${25 + 70 * Math.random()}%, ${85 + 10 * Math.random()}%)`};
`

export const PageTitle = styled.h1`
	text-align: center;
	word-break: break-all;
`

export const Container = styled.div`
	padding: 1rem;
	margin: auto;
	max-width: 400px;
`

export const MoodForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 0.5rem;
	background: white;
	padding: 1rem;
	box-shadow: 3px 3px 6px grey;
`

export const StyledLabel = styled(Label)`
	font-size: 1.5rem;
	font-weight: 500;
`

export const EmojiContainer = styled.div`
	display: flex;
	justify-content: center;
`

export const StyledEmoji = styled(Emoji)`
	font-size: 10rem;
`
