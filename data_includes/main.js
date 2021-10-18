PennController.DebugOff(); 
PennController.ResetPrefix(null);
CheckPreloaded();
PennController.SetCounter( "setcounter" );
PennController.Sequence( "setcounter","Hi there!", "preexperiment", randomize("test"), "send" , "final")
;
Header( /* void */ )
    // This .log command will apply to all trials
    .log( "ID" , GetURLParameter("id") ) // Append the "ID" URL parameter to each result line

PennController( "Hi there!" ,
    defaultText.print()
    ,
    newText ("Welcome to the game!"),
    newText("<p> Would you like to play a fun game? </p>" ),
    newText("<p> Tell me your first name, answer some questions and then click the button to start the game.</p>")
    ,
    newTextInput("ID")
	       .settings.log()
    .settings.lines(0)
        .print()
    ,
     newText("<p> How old are you? </p>"),
    newTextInput("Age")
	       .settings.log()
    .settings.lines(0)
        .print()
	       ,
	  newText("<p> What's your gender?</p>"),
	       newTextInput ("Gender")
	       .settings.log()
    .settings.lines(0)
        .print()
	       , 
	     
	       newText ("<p> To move to the next page, use the spacebar. </p>")
	       .print()
	       ,
	       
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID")))
	      
.log( "ID" , getVar("ID") );

PennController("preexperiment" ,
defaultText.center().print(),
newText("Welcome!"),
newText ("Snorkmaiden and Moomin are relaxing outside looking at some pictures with animals and people."),
newText ("Snorkmaiden is always referring to only one picture, but Moomin is a bit confused about what she means."),
newText("Let's  help Moomin choose the picture that best fits the sentence said by Snorkmaiden."),
    newText("To do this, click on the picture you think fits the sentence said by Snorkmaiden.")
    ,
    newText("You should do this as quickly as you can, but try to be sure of what you choose.")
	       ,
	  
	       newImage("snorkmaiden", "snorkmaidenandmoomin.png"),
         newCanvas(450,200)
        .add(100, 0 , getImage("snorkmaiden") )
       
        .print()
	        
	       ,
	       
   newText ("<p> Let's begin! </p>")
	       ,
	       newKey(" ")
        .wait());
 CheckPreloaded();
Template( "list.csv",
    variable => newTrial("test" , 
     defaultText.print(),
     defaultTimer.start().wait(),
       
    newText("Prime",variable.Prime)
    .print()
	       
    ,
    newImage("two", variable.PrimePictureCritical)
        .size(200,200)
    ,
    newImage("one", variable.PrimePictureOther)
        .size(200,200)
    ,
    newCanvas(450,200)
        .add(   0 , 0 , getImage("two") )
        .add( 250 , 0 , getImage("one") )
        .print()
    ,
    newSelector()
        .add( getImage("two") , getImage("one") )
        .shuffle()
        .keys(          "F"    ,          "J"   )
        .log()
        .wait(),
       clear (),
    newText("Target",variable.Target).print(),
    
    newImage("four", variable.TargetPictureFigurative)
        .size(200,200)
    ,
    newImage("three", variable.TargetPictureLiteral)
        .size(200,200)
    ,
    newCanvas(450,200)
        .add(   0 , 0 , getImage("four") )
        .add( 250 , 0 , getImage("three") )
        .print()
    ,
    newSelector()
        .add( getImage("four") , getImage("three") )
        .shuffle()
        .keys(          "F"    ,          "J"   )
        .log()
        .wait())
  .log( "ID"     , getVar("ID")    )
  .log( "TargetItem"   , variable.TargetItem)
  .log( "PrimeItem"   , variable.PrimeItem)
  .log( "ExperimentType" , variable.ExperimentType)
  .log( "Group"  , variable.Group  )
  );

SendResults( "send" );
PennController( "final" ,
	       newText ("<p> Thanks for playing the game! </p>")
	       .print()
	       ,
	 newText("<p> Bubbye!</p>")
        .print(),
	      
    newButton("void")
        .wait()
	       )
	       .setOption("countsForProgressBar" , false)
;

  
		
	      

		
              
  
