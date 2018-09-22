AFRAME.registerComponent('a-shopping-mall',{
	scheme:{
		url :{
			type:'string'
		},
		doorWidth:{
			type:'number',
			default:1
		},
		doorHeight:{
			type:'number',
			default:1
		}
	},
	init:function(){
	var _this = this

		var doorWidth = this.data.doorWidth
		var doorHeight = this.data.doorHeight
		var imageURL = this.data.url

		var portalDoor = new THREEx.Portal360(imageURL, doorWidth, doorHeight)
		this._portalDoor = portalDoor

		this.el.object3D.add(portalDoor.object3d)
	},
	tick: function(){
		this._portalDoor.update()
	}
})

AFRAME.registerPrimitive('a-shopping-mall', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
	defaultComponents: {
		'a-shopping-mall': {},
	},
	mappings: {
		'url': 'a-shopping-mall.url',
	}
}))