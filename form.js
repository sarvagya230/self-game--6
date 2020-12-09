class Form 
{
    constructor()
    {
       
        
        this.sbmit=createButton('submit')
        this.sbmit.mousePressed(this.citynName)
      
        this.name=createInput('').attribute('placeholder', 'Name');
        this.name.position(width/2 ,height/2)
        this.name.input(this.update)
    }
    update()
    {
        database.ref('/').update(
            {
                name:this.name.value(),
            }
        )

    }
    citynName()
    {
        this.name.hide()
        this.submit.hide()
        this.citynNameButton=createInput('').attribute('placeholder','CITY Name')
        this.citynNameButton.input(this.update2)
        this.citynNameSubmit=createButton('submit')
        this.citynNameSubmit.mousePressed(knowA)
        
    }
    update2()
    {
        database.ref('/').update(
            {
                cityName:this.citynNameButton.value(),
            }
        )

    }
    knowA()
    {
        a=1
    }
}