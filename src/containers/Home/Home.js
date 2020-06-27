import React, { useState } from 'react'
import get from 'lodash/get'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { useIdentity } from 'components/Identity'
import { CustomInput } from 'reactstrap'
import { map } from 'lodash'
import { Page, MoodForm, PageTitle, Container, EmojiContainer, StyledEmoji, StyledLabel } from './fragments'
import moodOptions from './moodOptions'

const Home = () => {
	const identity = useIdentity()
	const [mood, setMood] = useState('')

	return (
		<>
			<Page>
				<Header />
				<PageTitle>{`Hello ${get(identity, 'name', 'there')}!`}</PageTitle>
				<Container>
					<MoodForm>
						<StyledLabel for='exampleCheckbox'>{'How are you feeling today?'}</StyledLabel>
						<div>
							{map(moodOptions, ({ value, name }) => (
								<CustomInput
									key={name}
									inline
									type='radio'
									id={name}
									onChange={() => setMood(value)}
									name={'mood'}
									label={name}
								/>
							))}
						</div>
					</MoodForm>
					<EmojiContainer>
						<StyledEmoji text={mood} />
					</EmojiContainer>
				</Container>
			</Page>
			<Footer />
		</>
	)
}

export default Home
