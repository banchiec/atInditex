export const setWithExpiry = async (key, value, ttl) =>  {
	const now = new Date()
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	await localStorage.setItem(key, JSON.stringify(item))
}

export const getWithExpiry = async (key) =>  {
	const itemStr =  localStorage.getItem(key)
	if (!itemStr) {
		return null
	}
	const item = await JSON.parse(itemStr)
	const now = new Date()
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(key)
		return null
	}
	return  JSON.parse( item.value)
}