import { safeInvoke } from 'utils'

const TOKEN_NAME = 'auth_token'

class Auth {
	isAuthenticated = localStorage.getItem(TOKEN_NAME) === 'true'
	authenticated() {
		localStorage.setItem(TOKEN_NAME, true)
		this.isAuthenticated = true
	}
	logout(cb) {
		localStorage.removeItem(TOKEN_NAME)
		this.isAuthenticated = false
		safeInvoke(cb)
	}
}

const auth = new Auth()

export default auth
