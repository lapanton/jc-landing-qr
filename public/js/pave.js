(function(){

//IMPORT JSBAND FUNCTIONS AND CLASSES
				
	var
	trace = jsband.trace,	
	extend = jsband.extend,
	getHslComponents = jsband.getHslComponents,
	Ease = jsband.Ease,
	Tween = jsband.Tween,		
	CanvasContainer = jsband.CanvasContainer,
	CanvasComposition = jsband.CanvasComposition,		
	EventDispatcherBehaivor = jsband.EventDispatcherBehaivor, 
	CssProp = jsband.CssProp,
	Matrix = jsband.Matrix,		
	Swing = jsband.Swing,
	Wave = jsband.Wave;



//GLOBAL VARIABLES

	var
	powOutEasing = Ease.powOut(3),
	brickReleaseTypes = 
	{
		normal: 1,
		elastic: 1,
		bounce: 1
	},			
	swingTypes = 
	{
		sine: Wave.sin,
		linear: Wave.triangle,
		pulse: Wave.pulse
	};



//GLOBAL CONSTANTS

	var INF = Number.POSITIVE_INFINITY,
		NINF = Number.NEGATIVE_INFINITY;		



//UTILS		

	//Create web element
		function create(elementType){ return document.createElement(elementType) }			
	
	//Validate number
		function validateNumber(value, defaultValue, minValue, maxValue)
		{
			if(isNaN(value)) return defaultValue
			if(value < minValue) return minValue
			if(value > maxValue) return maxValue
			return value
		}
	
	//Validate numeric property of an object
		function validateNumericProperty(object, propName, defaultValue, minValue, maxValue)
		{
			return validateNumber(object[propName], defaultValue, minValue, maxValue)
		}
	
	//Generate HSL-color code by HSL-components 
		function hsl(h, s, l){ return "hsl(" + h + "," + s + "%," + l + "%)" }
	
	//Generate HSL-color code by HSL-components and shading factor	
		function hslk(h, s, l, k){ return "hsl(" + h + "," + s + "%," + k * l + "%)" }		
		
	//Get random HSL-component value by base value	
		function getRandomColorComponent(baseValue, epsilon, weight, maxValue)
		{
			var finalEpsilon = maxValue * weight * epsilon,
				min = Math.max(baseValue - finalEpsilon, 0),
				max = Math.min(baseValue + finalEpsilon, maxValue);
			return Math.round(min + Math.random() * (max - min))
		}
	
	//Get random HSL-color by base HSL-object	
		function getRandomColor(baseColorObject, randomizationGlobal, randomizationH, randomizationS, randomizationL)
		{
			return "hsl(" + getRandomColorComponent(baseColorObject.h, randomizationGlobal, randomizationH, 360) + "," + 
							getRandomColorComponent(baseColorObject.s, randomizationGlobal, randomizationS, 100) + "%," + 
							getRandomColorComponent(baseColorObject.l, randomizationGlobal, randomizationL, 100) +  "%)"		
		}



//CLASS SimpleRectLayer.

	function SimpleRectLayer(width, height, color)
	{ 
   		//Layer common props
			this.__context = null;
	   		this.__stage = null;
	   		this.parent = null;
			this.__name = undefined;
   			this.x = this.y = 0; 
   			this.rotation = 0;
   			this.scaleX = this.scaleY = 1; 
   			this.originX = this.originY = 0;
   			this.alpha = 1;
   			
		//Layer specific props
			this.width = !width && width !== 0 ? 150 : width; 
   			this.height = !height && height !== 0 ? 100 : height;
   			this.color = color || "black";
   			this.matrixLocal = undefined;
   			this.matrixGlobal = Matrix.ZERO;		   			
   			this.useDeepHitTest = false;
   			this.calcOwnMatrices = this.calc;
   		
   		//Make layer able to dispatch events
   			EventDispatcherBehaivor.init(this); 
	}	
	SimpleRectLayer.prototype = 
	{
	    //Prototype's properties
		    className: "SimpleRectLayer",
	    	superclassName: "CanvasLayer",
	    	constructor: SimpleRectLayer,		   			    
	    
	    //Getter & setter for layer's name
	    	get name(){ return this.__name },
	    	set name(v)
	    	{
	    		var parent = this.parent;
				if(parent)
				{
					if(typeof(v) == "string")
					{
						if(!(v in parent) || ("parent" in parent[v] && parent[v].parent == parent && parent[v].name === v)) parent[v] = this ;
					}
					else if(this.__name in parent && parent[this.__name] == this) delete parent[this.__name]						
				}
				this.__name = v
	    	},
    	
    	//Set canvas context in which the layer will be drawn
			setContext: function (context) { this.__context = context },
        
        //Set reference to canvas composition
	        setStage: function (stage)
	        {
	            this.__stage = stage;
	            if(this.onDisplayed && stage) this.onDisplayed()
	        },
        
        //Calculate transformation matrices
	        calc: function() 
		    {
		    	this.matrixLocal = Matrix.get(this.x, this.y, this.rotation, this.scaleX, this.scaleY);
	           	this.matrixGlobal = Matrix.multiply(this.parent.matrixGlobal, this.matrixLocal);
		    },
	    
	    //Draw layer into canvas
		    draw: function ()
	        {
	          	var ctx = this.__context;		          
	           		ctx.save();		           		
	           		Matrix.setTransform(ctx, this.matrixGlobal);		            
		            ctx.globalAlpha *= this.alpha;
		            ctx.fillStyle = this.color;			            
		            ctx.fillRect(-this.originX, -this.originY, this.width, this.height);
		            ctx.restore();
	        },
		
		//Isolate layer from canvas composition
	        isolate: function ()
	        {
	            this.parent = null;
	            this.__stage = null;
	            this.__context = null
	        },
        
        //Check if the point is within layer's rectangle
	        hitTest: function(x, y)	 
	        {
	        	var ctx = this.__context;				           		
	           	Matrix.setTransform(ctx, this.matrixGlobal);			           		
	       		ctx.beginPath();
	        	ctx.rect(-this.originX, -this.originY, this.width, this.height);			        	
			    var hit = ctx.isPointInPath(x, y);					    
			    ctx.closePath();				    
			    return hit
	        }	        
	};

			

//CLASS Pave.
	
	function Pave(divID, settings)
	{
		//CHECKING ARGUMENTS. AVOIDING CONFLICTS WITH OTHER Pave INSTANCES.
		
			//Check availability of the specified div
				var divPave = document.getElementById(divID);
				if(!divPave)
				{
					 alert('Pave ERROR: There is no element with the specified id');
					 return
				}
			
			//Check if some Pave instance already associated with divID. If yes, destroy it.
				if(Pave.instances[divID]) Pave.instances[divID].destroy();
				
			//Register instance
				Pave.instances[divID] = this;
			
			//If settings are not specified, create an empty settings object
				if(!settings) settings = {};		
				
		
		
		//CONSTANTS
				
			//Settings validation		
				var BRICK_SIZE = validateNumericProperty(settings, "BRICK_SIZE", 100, 10, INF);
				var BRICK_SPACING = validateNumericProperty(settings, "BRICK_SPACING", 6, 0, INF);
				var CAMERA_ANGLE = validateNumericProperty(settings, "CAMERA_ANGLE", 30, 20, 90);
				var BRICK_COLOR = "BRICK_COLOR" in settings ? settings.BRICK_COLOR : "rgb(249, 250, 251)";
				var BRICK_COLOR_RANDOMIZATION = validateNumericProperty(settings, "BRICK_COLOR_RANDOMIZATION", 0, 0, 1);
				var BRICK_COLOR_HUE_RANDOMIZATION = validateNumericProperty(settings, "BRICK_COLOR_HUE_RANDOMIZATION", 1, 0, 1);
				var BRICK_COLOR_SATURATION_RANDOMIZATION = validateNumericProperty(settings, "BRICK_COLOR_SATURATION_RANDOMIZATION", 1, 0, 1);
				var BRICK_COLOR_LIGHTNESS_RANDOMIZATION = validateNumericProperty(settings, "BRICK_COLOR_LIGHTNESS_RANDOMIZATION", 1, 0, 1);
				var BRICK_COLOR_HUE_OFFSET = validateNumericProperty(settings, "BRICK_COLOR_HUE_OFFSET", 0, NINF, INF);
				var BRICK_COLOR_SATURATION_OFFSET = validateNumericProperty(settings, "BRICK_COLOR_SATURATION_OFFSET", 0, NINF, INF);
				var BRICK_COLOR_LIGHTNESS_OFFSET = validateNumericProperty(settings, "BRICK_COLOR_LIGHTNESS_OFFSET", 0, NINF, INF);
				var SHADOW_COLOR_HUE_OFFSET = validateNumericProperty(settings, "SHADOW_COLOR_HUE_OFFSET", 0, NINF, INF);
				var SHADOW_COLOR_SATURATION_OFFSET = validateNumericProperty(settings, "SHADOW_COLOR_SATURATION_OFFSET", 0, NINF, INF);
				var SHADOW_COLOR_LIGHTNESS_OFFSET = validateNumericProperty(settings, "SHADOW_COLOR_LIGHTNESS_OFFSET", 0, NINF, INF);
				var SHADOW_CONTRAST = validateNumericProperty(settings, "SHADOW_CONTRAST", 0.5, 0, 1);
				var SWING_TYPE = "SWING_TYPE" in settings && settings.SWING_TYPE in swingTypes ? settings.SWING_TYPE : "sine";
				var SWING_DISTRIBUTION = "SWING_DISTRIBUTION" in settings ? settings.SWING_DISTRIBUTION : "random";
				var SWING_AMPLITUDE = validateNumericProperty(settings, "SWING_AMPLITUDE", 6, NINF, INF);
				var SWING_FREQUENCY = validateNumericProperty(settings, "SWING_FREQUENCY", SWING_DISTRIBUTION == "random" ? 0.1 : 0.3, 0.00001, INF);
				var SWING_FREQUENCY_RANDOMIZATION = validateNumericProperty(settings, "SWING_FREQUENCY_RANDOMIZATION", 0, 0, INF);
				var SWING_WAVE_DIRECTION = "SWING_WAVE_DIRECTION" in settings ? settings.SWING_WAVE_DIRECTION : "bottom-right";  
				var SWING_WAVE_LENGTH = validateNumericProperty(settings, "SWING_WAVE_LENGTH", 15, 2, INF);
				var MOUSE_IMPACT_FACTOR = validateNumericProperty(settings, "MOUSE_IMPACT_FACTOR", BRICK_SIZE/2, NINF, INF);
				var MOUSE_IMPACT_RADIUS = validateNumericProperty(settings, "MOUSE_IMPACT_RADIUS", Math.max(200, BRICK_SIZE), BRICK_SIZE, INF);
				var BRICK_RELEASE_TYPE = "BRICK_RELEASE_TYPE" in settings && settings.BRICK_RELEASE_TYPE in brickReleaseTypes ? settings.BRICK_RELEASE_TYPE : "normal";
				var BRICK_RELEASE_TIME = 1000 * validateNumericProperty(settings, "BRICK_RELEASE_TIME", 1.5, 0.01, INF);
				var BRICK_RELEASE_NORMAL_CURVE = validateNumericProperty(settings, "BRICK_RELEASE_NORMAL_CURVE", 3, 0.01, INF);
				var BRICK_RELEASE_ELASTIC_CURVE = validateNumericProperty(settings, "BRICK_RELEASE_ELASTIC_CURVE", 4, 1, INF);
				var BRICK_RELEASE_ELASTIC_FREQUENCY = Math.ceil( validateNumericProperty(settings, "BRICK_RELEASE_ELASTIC_FREQUENCY", 11, 1, INF) );
				var BRICK_RELEASE_BOUNCE_CURVE = validateNumericProperty(settings, "BRICK_RELEASE_BOUNCE_CURVE", 0.25, 0.01, 1); 
				var BRICK_RELEASE_BOUNCE_FREQUENCY = Math.ceil( validateNumericProperty(settings, "BRICK_RELEASE_BOUNCE_FREQUENCY", 5, 1, INF) );
				var USE_MOVING_SHADOW = "USE_MOVING_SHADOW" in settings ? settings.USE_MOVING_SHADOW : true;
				var MOVING_SHADOW_SIZE_RATIO = validateNumericProperty(settings, "MOVING_SHADOW_SIZE_RATIO", 3, 0.1, INF);
		
				SWING_AMPLITUDE *= -1;
				if(BRICK_SPACING === 0) BRICK_SPACING = -1.5;
				
			//Other constants
				var BRICK_SIZE_2 = BRICK_SIZE / 2 ;				
				var SCALE = Math.tan(CAMERA_ANGLE * Math.PI / 360);
				var BRICK_WIDTH = BRICK_SIZE * Math.SQRT2;
				var BRICK_WIDTH_2 = BRICK_SIZE * Math.SQRT1_2;
				var BRICK_HEIGHT = BRICK_WIDTH * SCALE;
				var BRICK_HEIGHT_2 = BRICK_HEIGHT / 2;	
				var BRICK_CORNER_SPACING = BRICK_SPACING * Math.SQRT2;
				var BRICK_LINE_HEIGHT = BRICK_HEIGHT_2 + BRICK_CORNER_SPACING * SCALE;
				var BRICK_COLUMN_WIDTH = BRICK_WIDTH_2 + BRICK_CORNER_SPACING / 2;		
				var SWING_AMPLITUDE_ABS = Math.abs(SWING_AMPLITUDE);		
					var brickColorComponents = getHslComponents(BRICK_COLOR); //trace(brickColorComponents)		
				var H = brickColorComponents.h + BRICK_COLOR_HUE_OFFSET,
					S = brickColorComponents.s + BRICK_COLOR_SATURATION_OFFSET,
					L = brickColorComponents.l + BRICK_COLOR_LIGHTNESS_OFFSET;			
				var SH = H + SHADOW_COLOR_HUE_OFFSET,
					SS = S + SHADOW_COLOR_SATURATION_OFFSET,
					SL = L + SHADOW_COLOR_LIGHTNESS_OFFSET;				
				var BRICK_LEFT_COLOR = hslk(SH, SS, SL, 0.5 + 0.5 * (1 - SHADOW_CONTRAST)),
					BRICK_RIGHT_COLOR = hslk(SH, SS, SL, 1 - SHADOW_CONTRAST);		
				var DO_NOTHING = function(){};
		
		
		
		//PRIVATE VARIABLES
		
			var 
			body = document.body,	
			canvas = (function()
			{
				var cnv = create("canvas");
				CssProp.set(cnv, 
				{
					position: "relative",
					backgroundColor: BRICK_RIGHT_COLOR
				});
				divPave.appendChild(cnv);
				return cnv
			})(),
			root = new CanvasContainer(),
			stage = (function(){
				var s = new CanvasComposition();
					s.canvas = canvas; 
					s.container = root;
				return s
			})(), 
			metronome = stage.metronome,
			BrickClass,
			brick,
			bricks = [],
			bricksLinear = root.children,
			bricksTotal,
			rowLength,
			oddRowLength,
			columnLength, 
			startX,
			lineY,
			mouseMoved = false,
			mousePoint,
			easingTypes = 
			{
				normal: Ease.powOut(BRICK_RELEASE_NORMAL_CURVE),
				elastic: Ease.oscOut(BRICK_RELEASE_ELASTIC_CURVE, BRICK_RELEASE_ELASTIC_FREQUENCY),
				bounce: Ease.bncOut(BRICK_RELEASE_BOUNCE_FREQUENCY, BRICK_RELEASE_BOUNCE_CURVE)
			},
			brickReleaseEasing = easingTypes[BRICK_RELEASE_TYPE],
			updater = {	updateBricks: function()
			{
				if(mouseMoved)
				{
					for(var i = bricksTotal; i--;)
					{
						brick = bricksLinear[i];
						brick.updateShadows();
						mouseMoveAction(brick)
					}
					mouseMoved = false;
					return
				}
				for(var i = bricksTotal; i--;) bricksLinear[i].updateShadows()
			}};
		
		
		
		//PRIVATE CLASSES
			
			//Class SolidColorBrick. It is responsible for rendering of a brick having solid color.
				function SolidColorBrick()
				{
					this.super();
					
					var right = new SimpleRectLayer(BRICK_WIDTH_2, Math.abs(MOUSE_IMPACT_FACTOR) + 2*SWING_AMPLITUDE_ABS + BRICK_SPACING + BRICK_HEIGHT_2, BRICK_RIGHT_COLOR);
					var left = new SimpleRectLayer(BRICK_WIDTH_2 + 1, Math.abs(MOUSE_IMPACT_FACTOR) + 2*SWING_AMPLITUDE_ABS + BRICK_SPACING + BRICK_HEIGHT_2, BRICK_LEFT_COLOR);
						left.x = -BRICK_WIDTH_2;
					
					this.topContatiner = new CanvasContainer();
					this.top = new SimpleRectLayer(BRICK_SIZE, BRICK_SIZE, hsl(H, S, L)); 			
					this.top.rotation = 45;
					this.topContatiner.addChild(this.top);
					if(USE_MOVING_SHADOW)
					{
						 this.shadow = new SimpleRectLayer(BRICK_SIZE, BRICK_SIZE);
						 this.shadow.rotation = 45;
						 this.hasShadow = false
					}	
					this.topContatiner.y = -BRICK_HEIGHT_2;	
					this.topContatiner.scaleY = SCALE * 0.995;
					
					this.addChild(left);
					this.addChild(right);
					this.addChild(this.topContatiner);			
					
					this.neighbours = [];
				}
				extend(SolidColorBrick, CanvasContainer)
				SolidColorBrick.prototype.updateShadows = function()
				{
					var n = this.neighbours.length,
						yRelative = this.y - this.yInit,
					    neighbours = this.neighbours,
						sum = 0;
					
					for(var i = n; i--;) sum += yRelative - neighbours[i].y + neighbours[i].yInit;
					
					var k = sum / (4 * BRICK_SIZE) ;			
					k = 1 - ( k > 0 ? ( k < 1 ? k : 1 ) : 0 );
					var k2 = Math.pow(k, 6),
						SH2 = k2*H+(1-k2)*SH,
						SS2 = k2*S+(1-k2)*SS,
						SL2 = k2*L+(1-k2)*SL;
					
					this.top.color = hslk(SH2, SS2, SL2, Math.max(1 - 2 * SHADOW_CONTRAST * (1 - k), 1 - SHADOW_CONTRAST) );
					
					if(USE_MOVING_SHADOW)
					{		
						this.shadow.color = hslk(SH2, SS2, SL2, Math.max(1 - 2 * SHADOW_CONTRAST * (1 - 0.92*k), 1 - SHADOW_CONTRAST) );			
						var dy = yRelative - neighbours[0].y + neighbours[0].yInit;			
						dy = dy > 0 ? dy : 0 ;
						if(dy)
						{
							if(!this.hasShadow) 
							{
								this.topContatiner.addChild(this.shadow);
								this.hasShadow = true
							}
							this.shadow.width = Math.min(MOVING_SHADOW_SIZE_RATIO * dy, BRICK_SIZE)
						}
						else if(this.hasShadow) 
						{
							this.topContatiner.removeChild(this.shadow);
							this.hasShadow = false
						}
					}
				}
			
			//Class RandomColorBrick. It is responsible for rendering of a brick having random color.
				function RandomColorBrick()
				{
					this.super();
					
					var colorObject = randomHslObject(H, S, L);
					this.H = getRandomColorComponent(colorObject.h, BRICK_COLOR_RANDOMIZATION, BRICK_COLOR_HUE_RANDOMIZATION, 360);
					this.S = getRandomColorComponent(colorObject.s, BRICK_COLOR_RANDOMIZATION, BRICK_COLOR_SATURATION_RANDOMIZATION, 100);
					this.L = getRandomColorComponent(colorObject.l, BRICK_COLOR_RANDOMIZATION, BRICK_COLOR_LIGHTNESS_RANDOMIZATION, 100);
					this.SH = this.H + SHADOW_COLOR_HUE_OFFSET;
					this.SS = this.S + SHADOW_COLOR_SATURATION_OFFSET;
					this.SL = this.L + SHADOW_COLOR_LIGHTNESS_OFFSET;
					
					var right = new SimpleRectLayer(BRICK_WIDTH_2, Math.abs(MOUSE_IMPACT_FACTOR) + 2*SWING_AMPLITUDE_ABS + BRICK_SPACING + BRICK_HEIGHT_2, hslk(this.SH, this.SS, this.SL, 1 - SHADOW_CONTRAST));
					var left = new SimpleRectLayer(BRICK_WIDTH_2 + 1, Math.abs(MOUSE_IMPACT_FACTOR) + 2*SWING_AMPLITUDE_ABS + BRICK_SPACING + BRICK_HEIGHT_2, hslk(this.SH, this.SS, this.SL, 0.5 + 0.5 * (1 - SHADOW_CONTRAST)));
						left.x = -BRICK_WIDTH_2;
					
					this.topContatiner = new CanvasContainer();
					this.top = new SimpleRectLayer(BRICK_SIZE, BRICK_SIZE, hsl(this.H, this.S, this.L)); 
					this.top.rotation = 45;
					this.topContatiner.addChild(this.top);
					if(USE_MOVING_SHADOW)
					{
						 this.shadow = new SimpleRectLayer(BRICK_SIZE, BRICK_SIZE);
						 this.shadow.rotation = 45;
						 this.hasShadow = false
					}
					this.topContatiner.y = -BRICK_HEIGHT_2;	
					this.topContatiner.scaleY = SCALE * 0.995;
					
					this.addChild(left);
					this.addChild(right);
					this.addChild(this.topContatiner);
					
					this.neighbours = [];
				}
				extend(RandomColorBrick, CanvasContainer)
				RandomColorBrick.prototype.updateShadows = function()
				{
					var n = this.neighbours.length,
						yRelative = this.y - this.yInit,
					    neighbours = this.neighbours,
						sum = 0;
					
					for(var i = n; i--;) sum += yRelative - neighbours[i].y + neighbours[i].yInit;
					
					var k = sum / (4 * BRICK_SIZE) ;			
					k = 1 - ( k > 0 ? ( k < 1 ? k : 1 ) : 0 );
					var k2 = Math.pow(k, 6),
						SH2 = k2*this.H+(1-k2)*this.SH,
						SS2 = k2*this.S+(1-k2)*this.SS,
						SL2 = k2*this.L+(1-k2)*this.SL;
					
					this.top.color = hslk(SH2, SS2, SL2, Math.max(1 - 2 * SHADOW_CONTRAST * (1 - k), 1 - SHADOW_CONTRAST) );				
					
					if(USE_MOVING_SHADOW)
					{
						this.shadow.color = hslk(SH2, SS2, SL2, Math.max(1 - 2 * SHADOW_CONTRAST * (1 - 0.92*k), 1 - SHADOW_CONTRAST) );
						var dy = yRelative - neighbours[0].y + neighbours[0].yInit;			
						dy = dy > 0 ? dy : 0 ;
						if(dy)
						{
							if(!this.hasShadow) 
							{
								this.topContatiner.addChild(this.shadow);
								this.hasShadow = true
							}
							this.shadow.width = Math.min(MOVING_SHADOW_SIZE_RATIO * dy, BRICK_SIZE)
						}
						else if(this.hasShadow) 
						{
							this.topContatiner.removeChild(this.shadow);
							this.hasShadow = false
						}
					}
				}
		
		
		
		//PRIVATE METHODS	
		
			//Get random HSL-object by HSL-components
				function randomHslObject(h, s, l)
				{
					return { 
								h: getRandomColorComponent(h, BRICK_COLOR_RANDOMIZATION, BRICK_COLOR_HUE_RANDOMIZATION, 360),
								s: getRandomColorComponent(s, BRICK_COLOR_RANDOMIZATION, BRICK_COLOR_SATURATION_RANDOMIZATION, 100),
								l: getRandomColorComponent(l, BRICK_COLOR_RANDOMIZATION, BRICK_COLOR_LIGHTNESS_RANDOMIZATION, 100)
						   }	
				}
			
			//Create bricks, define their behavior, start animations				
				function createBricks()
				{			
					var swingFrequency, swingPhase;
					
					BrickClass = (BRICK_COLOR_RANDOMIZATION * (BRICK_COLOR_HUE_RANDOMIZATION + BRICK_COLOR_SATURATION_RANDOMIZATION + BRICK_COLOR_LIGHTNESS_RANDOMIZATION)) ? RandomColorBrick : SolidColorBrick ;
		
					root.y = -BRICK_HEIGHT_2;
					for(var j = 0; j < columnLength; j++)
					{
						bricks[j] = [];
						lineY = j * BRICK_LINE_HEIGHT;
						if(j % 2)
						{
							startX = BRICK_COLUMN_WIDTH;
							rowLength = oddRowLength - 1
						}
						else
						{
							startX = 0;
							rowLength = oddRowLength
						}
						for(var i = 0; i < rowLength; i++)
						{
							//Create new brick
								brick = bricks[j][i] = new BrickClass();
								brick.x = startX + i * 2 * BRICK_COLUMN_WIDTH;
								brick.y = brick.yInit = lineY;
								root.addChild(brick);
							
							//Define brick neighbours
								if(startX)
								{							
									brick.neighbours.push(bricks[j-1][i]);
									brick.neighbours.push(bricks[j-1][i+1]);
									bricks[j-1][i].neighbours.push(brick);
									bricks[j-1][i+1].neighbours.push(brick)
								}
								else
								{
									if(lineY)
									{
										if(i)
										{
											brick.neighbours.push(bricks[j-1][i-1]);
											bricks[j-1][i-1].neighbours.push(brick);
											if(i < rowLength - 1)
											{
												brick.neighbours.push(bricks[j-1][i]);
												bricks[j-1][i].neighbours.push(brick);
											}
										}
										else
										{
											brick.neighbours.push(bricks[j-1][i]);
											bricks[j-1][i].neighbours.push(brick);
										}
									}
								}
							
							//Define brick swinging
								if(SWING_DISTRIBUTION == "wave")
								{
									swingFrequency = SWING_FREQUENCY;
									
									if(SWING_WAVE_DIRECTION == "top-left") swingPhase = ( ( startX ? j+1 : j ) / 2 + i ) / SWING_WAVE_LENGTH * 2*Math.PI
									else if(SWING_WAVE_DIRECTION == "bottom-left") swingPhase = 2*Math.PI * ( ( startX ? j+1 : j ) / 2 + oddRowLength - (startX ? 2 : 1) - i )*(1 - 1 / SWING_WAVE_LENGTH)
									else if(SWING_WAVE_DIRECTION == "top-right") swingPhase = ( ( startX ? j+1 : j ) / 2 + oddRowLength - (startX ? 2 : 1) - i ) / SWING_WAVE_LENGTH * 2*Math.PI
									else if(SWING_WAVE_DIRECTION == "top") swingPhase = j / SWING_WAVE_LENGTH * 2*Math.PI
									else if(SWING_WAVE_DIRECTION == "bottom") swingPhase = 2*Math.PI * j * (1 - 1 / SWING_WAVE_LENGTH)						
									else if(SWING_WAVE_DIRECTION == "right") swingPhase = 2*Math.PI * (startX ? 2*i + 1 : 2*i)*(1 - 1 / SWING_WAVE_LENGTH)
									else if(SWING_WAVE_DIRECTION == "left") swingPhase = 2*Math.PI * (startX ? 2*i + 1 : 2*i) / SWING_WAVE_LENGTH
									else swingPhase = 2*Math.PI * ( ( startX ? j+1 : j ) / 2 + i )*(1 - 1 / SWING_WAVE_LENGTH) // i.e. SWING_WAVE_DIRECTION == "bottom-right"
								}
								else // i.e. SWING_DISTRIBUTION == "random"
								{
									swingFrequency = SWING_FREQUENCY + SWING_FREQUENCY_RANDOMIZATION * Math.random();
									swingPhase = 2 * Math.PI * Math.random()
								}							
								brick.swing = new Swing(brick, "y", {wave: swingTypes[SWING_TYPE], amplitude: SWING_AMPLITUDE, frequency: swingFrequency, phase: swingPhase});
								if(SWING_AMPLITUDE) brick.swing.play()
						}
					}
					
					//Configure event listeners to define brick reaction to its neighbors and mouse movements
						if(!metronome.listenersTotal()) metronome.addListener(DO_NOTHING);
						bricksTotal = bricksLinear.length;
						document.addEventListener("mousemove", onMouseMove);
						// canvas.addEventListener("mouseleave", onMouseLeave);
						metronome.addUpdateListener(updater, "updateBricks");
				}
			
			//Remove bricks, cancel their behavior, stop animations
				function removeBricks()
				{
					if(bricksTotal)
					{
						document.removeEventListener("mousemove", onMouseMove);
						// canvas.removeEventListener("mouseleave", onMouseLeave);
						metronome.removeUpdateListener(updater, "updateBricks");
						bricks.length = bricksLinear.length = bricksTotal = 0;
						metronome.removeAllListeners()		
					}			
				}
			
			//Calculate a distance between 2 points of isometric projection	
				function dist(brick, point) { return Math.sqrt(Math.pow(brick.x - point.x, 2) + Math.pow((brick.yInit - point.y)/SCALE, 2)) }
			
			//React to mouse movement	
				function mouseMoveAction(brick)
				{
					var d = dist(brick, mousePoint);
					if(d < MOUSE_IMPACT_RADIUS)
					{
						brick.active = true;
						var newValue = brick.yInit + MOUSE_IMPACT_FACTOR * (1 - d / MOUSE_IMPACT_RADIUS);				
						brick.swing.baseValue += 0.15 * (newValue - brick.swing.baseValue);
						Tween.run(brick.swing, {baseValue: newValue}, powOutEasing, 500);					
					}
					else if(brick.active)
					{
						brick.swing.baseValue += 0.15 * (brick.yInit - brick.swing.baseValue);
						Tween.run(brick.swing, {baseValue: brick.yInit}, brickReleaseEasing, BRICK_RELEASE_TIME);
						brick.active = false
					}
				}
			
			//Register mouse movement	
				function onMouseMove(e)
				{
					mouseMoved = true;
					mousePoint = stage.getMousePoint(e);
					mousePoint.y += BRICK_HEIGHT_2
				}
			
			//React to mouse leaving the canvas
				function onMouseLeave(e)
				{
					mouseMoved = true;
					mousePoint.x = 1000000000;
					updater.updateBricks()
				}
		
			//Adapt composition to the new page layout
				function onContainerResize(e)
				{
					stage.width = divPave.clientWidth;
					stage.height = divPave.clientHeight;
					
					newColumnLength = 2 + 2 * Math.ceil(stage.height / (BRICK_HEIGHT + BRICK_CORNER_SPACING * SCALE));
					newOddRowLength = 1 + Math.ceil(stage.width / (BRICK_WIDTH + BRICK_CORNER_SPACING / 2));
					
					if(newColumnLength != columnLength || newOddRowLength != oddRowLength)
					{
						columnLength = newColumnLength;
						oddRowLength = newOddRowLength;
						removeBricks();
						createBricks()					
					}
					
					stage.$()			
				}		
					
			//Define response to the window resize
				window.addEventListener("resize", onContainerResize);
			
			
		
		//PUBLIC METHODS
		
			//Adapt composition to the new page layout
				this.resize = function(){ onContainerResize() }	;
		
			//Stop all animations, free memory, delete everything related to Pave instance			
				this.destroy = function()
				{
					//Unregister instance
						Pave.instances[divID] = null;
						
					//Stop all animations
						metronome.removeAllListeners();
						metronome.removeUpdateListener(updater, "updateBricks");
						
					//Remove all DOM event listeners 
						// canvas.removeEventListener("mouseleave", onMouseLeave);
						document.removeEventListener("mousemove", onMouseMove);						
						window.removeEventListener("resize", onContainerResize);
					
					//Remove dynamically created web elements
						divPave.removeChild(canvas);
					
					//Remove everything from memory
						divPave = divID = settings = BRICK_SIZE = BRICK_SPACING = CAMERA_ANGLE = 
						BRICK_COLOR = BRICK_COLOR_RANDOMIZATION = BRICK_COLOR_HUE_RANDOMIZATION = BRICK_COLOR_SATURATION_RANDOMIZATION = 
						BRICK_COLOR_LIGHTNESS_RANDOMIZATION = BRICK_COLOR_HUE_OFFSET = BRICK_COLOR_SATURATION_OFFSET = BRICK_COLOR_LIGHTNESS_OFFSET = 
						SHADOW_COLOR_HUE_OFFSET = SHADOW_COLOR_SATURATION_OFFSET = SHADOW_COLOR_LIGHTNESS_OFFSET = SHADOW_CONTRAST = SWING_TYPE = 
						SWING_DISTRIBUTION = SWING_AMPLITUDE = SWING_FREQUENCY = SWING_FREQUENCY_RANDOMIZATION = 
						SWING_WAVE_DIRECTION = SWING_WAVE_LENGTH = MOUSE_IMPACT_FACTOR = MOUSE_IMPACT_RADIUS = BRICK_RELEASE_TYPE = 
						BRICK_RELEASE_TIME = BRICK_RELEASE_NORMAL_CURVE = BRICK_RELEASE_ELASTIC_CURVE = BRICK_RELEASE_ELASTIC_FREQUENCY = BRICK_RELEASE_BOUNCE_CURVE = 
						BRICK_RELEASE_BOUNCE_FREQUENCY = USE_MOVING_SHADOW = MOVING_SHADOW_SIZE_RATIO = BRICK_SIZE_2 = SCALE = 
						BRICK_WIDTH = BRICK_WIDTH_2 = BRICK_HEIGHT = BRICK_HEIGHT_2 = BRICK_CORNER_SPACING = BRICK_LINE_HEIGHT = BRICK_COLUMN_WIDTH = SWING_AMPLITUDE_ABS = 
						brickColorComponents = H = S = L = SH = SS = SL = BRICK_LEFT_COLOR = BRICK_RIGHT_COLOR = body = canvas = root = stage = 
						metronome = BrickClass = brick = bricks = bricksLinear = bricksTotal = rowLength = 
						oddRowLength = columnLength = startX = lineY = mouseMoved = mousePoint = easingTypes = brickReleaseEasing = 
						updater = RandomColorBrick = SolidColorBrick = randomHslObject = createBricks = 
						removeBricks = dist = mouseMoveAction = onMouseMove = onMouseLeave = onContainerResize = null;					
						
					//Redefine public methods	
						this.resize = this.destroy = DO_NOTHING
				}
		
		onContainerResize();
	}
	
	//Create a repository for Pave instances
		Pave.instances = {};
	
	//Define global variable 'Pave'	
		window.Pave = Pave;
		// if(!window.hasOwnProperty('Pave')) window.Pave = Pave 
		// else alert('Unable to load "Pave" source code. Make sure the document does not contain a global variable named "Pave"');	
})();