export const getUrl = () => {
	let current = window.location+''
	let split = current.split('/')
	let id = split[split.length-1]
	return id
}