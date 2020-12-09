var simcash ,cityRank ,home,createFactory,x,y,c,population,houseCount,woodCount,steelCount,name,k,m,hour;
var factoryCount;
var factoryArray=[]
var homeArray=[]
var database=firebase.database()
var referance=database.ref('simcash')
var value=referance.on("value",readData);
var ref2=database.ref('factoryCount')
var value1=ref2.on("value",readData2);
var popref=database.ref('population')
var value2=popref.on("value",knowPopulation)
var homebutton;
var houseCountref=database.ref('houses')
var value2=houseCountref.on('value',houses)
var woodCountref=database.ref('wood');
var value3=woodCountref.on('value',woodKnow)
var steelCountref=database.ref('steel')
var value4=steelCountref.on('value',steelKnow)
var a,form;
var nameRef=database.ref('name')
var value5=nameRef.on('value',nameKnow)
var minref=database.ref('minuets')
var value6=minref.on('value',minKnow)
var  lastref=database.ref('lastRan')
var value7=lastref.on('value',timeknow)
let x1=650
	let y1=130


function setup()
{
	hour=hour()
	homebutton=createButton('new house')
	homebutton.position(650,50)
	c=0
	x=0
	y=80
	createFactory= createButton('create factory');
	createFactory.position(50, 19);
	createFactory.mousePressed(writeFactory);
	

	
	
}
function draw()
{


	
	homebutton.mousePressed(HouseCreater)
	

	createCanvas(1200,600+c)
	fill(0,255,100)
	rect(600,0,600,600)

background(200)
push()
	pop()
	fill(255)
	push()
	textSize(32);
	text("factory zone",250,30)
	text("YOUR CITY!",700,20)
	pop()
	text('wood: '+woodCount,500,40)	
	text("simcash: "+simcash,300,40)
	text("factories: "+factoryCount,400,40)
	text("population: "+population,900,60)
	text('metal: '+steelCount,580,40)
	text('time: '+(k-hour),950,40)

	if(factoryCount>0&&factoryArray.length===0)
	{
		for(var i=0;i<factoryCount+1;i++)
		{
			factoryArray.push(new factory(x,y))
	if(x<500)
	{
	x=x+50
	simcash=simcash

	}
	else
	{
		x=0
		y=y+50
		simcash=simcash
	
		if(y>500)
		{
			c=c+50

		}
		}
	}
	}
	if(houseCount>0&&homeArray.length===0)
	{
		for(var i=0;i<factoryCount+1;i++)
		{
			homeArray.push(new House(x1,y1))
	if(x1<1500)
	{
	x1=x1+50
	simcash=simcash

	}
	else
	{
		x1=650
		y1=y1+50
		simcash=simcash
	
		if(y1>500)
		{
			c=c+50

		}
		}
	}
	}
	text("houses: "+houseCount,750,60)
	for(var i=0;i<factoryArray.length;i++)
	{
	
	
	}
	
	
	drawSprites()
}



function readData(data)
{
	simcash=data.val()

}
function readData2(data)
{
	factoryCount=data.val()

}
function writeFactory()
{
	
	database.ref('/').update(
		{
			factoryCount:factoryCount,
		}
	  )
	 
	if(simcash>49)
	{ factoryArray.push(new factory(10+x,10+y));factoryCount++
	if(x<500)
	{
	x=x+50
	simcash=simcash-50

	database.ref('/').update(
		{
		  simcash:simcash
	
		}
	  )
	}
	else
	{
		x=0
		y=y+50
		
		if(y>500)
		{
			c=c+50

		}
	}
}
else
{
	alert('not enoung simcash')


	
}	

}
function knowPopulation(data)
{
	population=data.val()

}
function houses(data)
{
	houseCount=data.val()
}


function HouseCreater()
{
	if(woodCount>0&&steelCount>0)
	{
		woodCount=woodCount-30
		steelCount=steelCount-30
	

	homeArray.push(new House(x1,y1,40,40))
	
	
	  if (x1<1150)
	  {
		  x1=x1+60
	  }
	  else
	  {
		  x1=650
		  y1=y1+60
		  if(y1>550)
		  {
			  c=c+50
		  }
		  
	  }
	  database.ref('/').update(
		{
			houses:houseCount,
			simcash:simcash,
			population:population,
			wood:woodCount
		}
	  )
	}
	else
	{
		alert('not enough ingreedents')
	}

	
	

}
function woodKnow(data)
{
	woodCount=data.val()
}

function steelKnow(data)
{
	steelCount=data.val()

}
function nameKnow(data)
{
	name=data.val()

}
function minKnow(data)
{
	minuets=data.val()

}
function timeknow(data)
{
	k=data.val()

}