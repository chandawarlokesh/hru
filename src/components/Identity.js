import React, { useState, useContext, useEffect, useCallback } from 'react'

const IdentityContext = React.createContext()

export const useIdentity = () => useContext(IdentityContext)

const useGetIdentity = () => {
	const [identity, setIdentity] = useState()
	// TODO: Replace with actual API call
	const fetchIdentity = useCallback(
		() =>
			setTimeout(() => {
				// Get Fake Data
				const name = localStorage.getItem('user_name')
				console.log('get name', name)
				setIdentity({
					name,
				})
			}, 3000),
		[setIdentity]
	)

	useEffect(() => {
		if (!identity) {
			fetchIdentity()
		}
	}, [identity, fetchIdentity])

	return identity
}

const Identity = ({ children }) => {
	const value = useGetIdentity()
	return <IdentityContext.Provider value={value}>{children}</IdentityContext.Provider>
}

export default Identity
