import React from 'react'

const HomePage = () => {
  return <div>
    <h1>Welcome to Team Gryffindor!</h1>
    <h1>Say Hello to Venus <br></br>
    <font size="5">
    <i>A proposed solution to confusing game tactics</i>
    </font>
      
    </h1>
    <p>
      Here at Gryffindor industries, were striving to change the world in inovative ways
      With the advent of new technologies, we are harnessing this to force a change to improve with our new solutions<br></br><br></br>
      
      <i>&emsp;&emsp;Machine learning algorithims, Interactive procedural built worlds, downloadable content, VR gaming, movie quality storylines<br></br>
      &emsp;&emsp;Ray tracing, Cloud gaming, The advent of massively online multiplayer, both player vs enviroment and player vs player & enviroment</i><br></br><br></br>
      These are just some of the latest technologies & improvements a person can find in the latest AAA game. All these technologies can provide a fascinatingly amazing game<br></br> 
      experiance which can lead to new insights into experiancing life. However all of these implementations can lead to some confusion, a tsunami of information.<br></br>
      This often times can instead of creating wonder, will cause discord with the player base.<br></br>
    </p>
    <h2>The Problem</h2>
    <p>
    &emsp;In our research we have found this troubling problem affecting our community. Often times, a new game will come up with no tutorial or have a confusing<br></br> 
      way to play that can infuriate the player. Enraged the player will then rage in an onine forum or demand a refund claiming the game has broken mechanics.<br></br>
      The problem is exacerbated by the decline of offical game guides which were prevalent from the advent of video games until the early 2010s and <br></br> 
      the advent of streaming via Twitch or YouTube where an expecation is set when a person is watching who is intrested in a new game.<br></br>
      A player then wants to get that same experiance but with no recording, article or other information and often times little patience, would then <br></br>
      loose it in the heat of battle. These experiances can be troubling and dissaude game develepers from wanting to create new intricate games.<br></br>

    </p>
    <h2>Thinking outside the box</h2>
    
    <p>
    &emsp;Our proposed solution for this problem is to create an AI helper called Venus that can learn the players play-style and situations where the player is having difficulty.<br></br>
    The proof of concept would take this AI helper and apply it to a confusingly fun browser based game called <strong><a herf="https://the-house.arturkot.pl/"> The House </a></strong>by Arthur Kot<br></br>
    As the game is browser based we will have to implement a way to capture the users gameplay then send this back to the users game state to allow the new solution to play out.<br></br>
    
    </p>

    <h3>Venus requirements</h3>
    <p>
       * Capture users mouse acceleration and use machine learning to anazlye the telemetry *<br></br>
      &emsp;&emsp;- Mouse accleration is dependent on spikes in user movement, the large the spike, the more confused the user
      <br></br><br></br>
      * Game data provides a foundation for our machine learning algorithim to search out the best solution *<br></br>
      &emsp;&emsp;- Using mL5, a tensorflow based Javascript library, we aim to provide an excelent solution
      <br></br><br></br>
      * Venus would provide hints at the users request, it waits for the user, it will never play the game for them *<br></br>
      &emsp;&emsp;- We want to give the user the full satisfaction of playing and winning at the game. <br></br>
      <br></br>
      * Data created by the solution would be created just in time, nothing is saved *<br></br>
      &emsp;&emsp;- User data in this modern era is tantamount to gold, keeping it temporarily is our goal.<br></br>
    </p>
    </div>
}

export default HomePage
