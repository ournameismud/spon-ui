const view = {
	onEnter({ next }) {
		window.scrollTo(0, 0)

		next()
	},

	onLeave({ next }) {
		next()
	}
}

export default [
	{
		path: '/',
		view,
		name: 'home-page'
	},
	{
		path: '*',
		name: 'default',
		view
	}
]
