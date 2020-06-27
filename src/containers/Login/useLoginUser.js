import { useState } from 'react'
import auth from 'auth'
import { safeInvoke } from 'utils'

const useLoginUser = ({ onSuccess, onError }) => {
	const [loading, setLoading] = useState(false)

	const handleLogin = ({ name, password }) => {
		setLoading(true)
		setTimeout(() => {
			if (password === 'realtime') {
				auth.authenticated()
				// Set Fake data
				localStorage.setItem('user_name', name)
				console.log('set name', name)
				safeInvoke(onSuccess)
			} else {
				safeInvoke(onError, {
					message: 'Password is incorrect!\nHint: use "realtime"',
				})
			}
			setLoading(false)
		}, 3000)
	}

	return { login: handleLogin, loading }
}

export default useLoginUser
