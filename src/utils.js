export const safeInvoke = (func, ...args) => (typeof func === 'function' ? func(...args) : null)
