# Default styles
defaults = {
	screenWidth: Screen.width
	screenHeight: Screen.height
	fabButton: "../images/fab_button.png"
	open: false
	fabImgs: [
		Experiment: {image: "images/experiment-fab.png", name:"Experiment"}
		Post: {image: "images/post-fab.png", name:"Post"},
		Hypothesis: {image: "images/hypothesis-fab.png", name:"Hypothesis"},
		Research: {image: "images/research-fab.png", name:"Research"}
	]
}
defaults.labelTextStyle = {
	fontSize: "20px"
	textAlign: "center"
	fontFamily: "Helvetica Neue', sans-serif"
}
defaults.badgeTextStyle = {
	fontSize: "26px"
	lineHeight: "36px"
	color: "#fff"
	textAlign: "center"
	fontFamily: "Helvetica Neue', sans-serif"
}
exports.defaults = defaults

# fab functionality
openCloseFab = () ->
	this.onClick ->
		for item in @items
			item.stateCycle("open", "closed")

exports.fabButton = (newFabItems, defaultImgs=defaults.fabImgs[0]) ->
	fab  = new Layer
		x: defaults.screenWidth - 100
		y: 60
		width: 43
		height: 43
		name: "FabButton"
	fab.items = []
	i = 0
	for name, params of defaultImgs # rename var customImg
		if newFabItems && newFabItems[name] != undefined then shouldOveride = newFabItems[name].image
		buttonLayer = new Layer
			image: shouldOveride ||  params.image
			width: 40
			height: 40
			x: defaults.screenWidth - 100
			y: i * 55 + (fab.height + 10 + fab.y)
			name: "FabBtn"+ params.name
			borderRadius: 50
			visible: false
		buttonLayer.states =
			open:
				visible: true
			closed:
				visible: false

		fab.items.push(buttonLayer)
		shouldOveride = false
		i += 1
	# bind events
	fab.openCloseFab  = openCloseFab
	fab.open = false

	return fab