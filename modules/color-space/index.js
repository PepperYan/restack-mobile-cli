/**
 * Color space data and conversions
 *
 * @module color-space
 *
 */


/** Exported spaces */
var spaces = {
	rgb: require('./rgb'),
	hsl: require('./hsl'),
	hsv: require('./hsv'),
	hsi: require('./hsi'),
	hwb: require('./hwb'),
	cmyk: require('./cmyk'),
	cmy: require('./cmy'),
	xyz: require('./xyz'),
	xyy: require('./xyy'),
	yiq: require('./yiq'),
	yuv: require('./yuv'),
	ydbdr: require('./ydbdr'),
	ycgco: require('./ycgco'),
	ypbpr: require('./ypbpr'),
	ycbcr: require('./ycbcr'),
	xvycc: require('./xvycc'),
	yccbccrc: require('./yccbccrc'),
	ucs: require('./ucs'),
	uvw: require('./uvw'),
	jpeg: require('./jpeg'),
	lab: require('./lab'),
	labh: require('./labh'),
	lms: require('./lms'),
	lchab: require('./lchab'),
	luv: require('./luv'),
	lchuv: require('./lchuv'),
	husl: require('./husl'),
	huslp: require('./huslp'),
	cubehelix: require('./cubehelix'),
	coloroid: require('./coloroid'),
	hcg: require('./hcg'),
	tsl: require('./tsl'),
	yes: require('./yes'),
	osaucs: require('./osaucs')
};



//build absent convertors from each to every space
var fromSpace, toSpace;
for (var fromSpaceName in spaces) {
	fromSpace = spaces[fromSpaceName];
	for (var toSpaceName in spaces) {
		toSpace = spaces[toSpaceName];
		if (!fromSpace[toSpaceName]) fromSpace[toSpaceName] = getConvertor(fromSpaceName, toSpaceName);
	}
}


/** return converter through xyz/rgb space */
function getConvertor(fromSpaceName, toSpaceName){
	var fromSpace = spaces[fromSpaceName];
	var toSpace = spaces[toSpaceName];

	//create straight converter
	if (fromSpaceName === toSpaceName) {
		return function (a) {
			return a;
		};
	}

	//create xyz converter, if available
	else if (fromSpace.xyz && spaces.xyz[toSpaceName]) {
		return function(arg){
			return spaces.xyz[toSpaceName](fromSpace.xyz(arg));
		};
	}
	//create rgb converter
	else if (fromSpace.rgb && spaces.rgb[toSpaceName]) {
		return function(arg){
			return spaces.rgb[toSpaceName](fromSpace.rgb(arg));
		};
	}
}


module.exports = spaces;