import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

const HomePage = () => {
  return <div>
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome to Team Gryffindor!</h1>
      <Image
        src='/sd.github.io/gryffindorpics/Venuslogo.jpg'
        display = 'flex'
        height='250px'
        width='200px'
        border='5px'
        justify-content = 'center'
      />
      </div>
      <h1>Say Hello to Venus <br></br>
    <font size="5">
    <i>A proposed solution to confusing game tactics</i>
    </font>
      
    </h1>
    <p>
      
      
      When playing a video game, there's often a sense of thrill when players are out exploring in the digital frontier. However there are moments in games where <br></br>
      one is often left confused on what to do. Usually these confused moments are met with hints and guides to get a player out of that situation. That is, if it’s <br></br>
      added to the game. New video games such as Scorn offer visually fantastic games but they leave the player wondering what exactly is going on. There is no built-in sense<br></br>
      of what to do and if the player does manage to figure something out, they wind up frustrated at it having taken so long. What we aim to do is create a virtual <br></br>
      helper that will calm down those moments of confused panic. The helper, Venus won’t play the game but will be a vigilant sentinel ready at a moments notice to <br></br>
      leap in and see what the player needs help with gamewise. <br></br>
    </p>
    <h2>The Problem</h2>
    <p>
    &emsp;Too often games come out with complex tasks that seem obscure to the player. Our Venus Hint system, assisted by machine learning techniques, <br></br>
    is specifically designed to alleviate gamer’s frustrations caused by the complexity of the puzzle game. Our goal is to provide assistance to gamers <br></br>
    during gameplay, while also respecting their preferences by allowing them to disable the hint system. We want Venus to give value to the player by allowing them<br></br>
    a way to play the game without unnecessary frustration. Venus will help with that undue stress. This will give a sense of satisfaction when the player completes the game.<br></br>

    </p>
    <h2>Thinking outside the box</h2>
    
    <p>
    &emsp;Our proposed solution for this problem is to create an AI helper called Venus that can anticipate the player's frsutration and read their current progress.<br></br>
    The proof of concept would take this AI helper and apply it to a confusing browser based game called <strong><a herf="https://the-house.arturkot.pl/"> The House </a></strong>by Arthur Kot<br></br>
    As the game is browser based we will have to implement a way to a way to analyze player's moveents, game state, and generate hints.<br></br>
    
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
