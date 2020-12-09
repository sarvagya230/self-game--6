class factory
{
    constructor(x,y)
    {
        this.body=createSprite(x,y,40,40)

        database.ref('/').update(
            {
                wood:woodCount,
                steel:steelCount,
            }
          )
          if(hour-k>1)
          {
              steelCount=steelCount+50
              woodCount=woodCount+50
          }
          if(hour-k>2)
          {
              steelCount=steelCount+100
              woodCount=woodCount+100
          }
          if(hour-k>3)
          {
              steelCount=steelCount+150
              woodCount=woodCount+150
          }
          if(hour-k>4)
          {
              steelCount=steelCount+200
              woodCount=woodCount+200
          }
          if(hour-k>5)
          {
              steelCount=steelCount+250
              woodCount=woodCount+250
          }
          if(hour-k>6)
          {
              steelCount=steelCount+300
              woodCount=woodCount+300
          }
          if(hour-k>7)
          {
              steelCount=steelCount+350
              woodCount=woodCount+350
          }
          if(hour-k>8)
          {
              steelCount=steelCount+350
              woodCount=woodCount+350
          }

          database.ref('/').update(
              {
                  lastRan:hour
              }
          )

         
 

     

    }
   clicked()
    {
        this.body.shapeColor='red'
    }
  
  
 
}
