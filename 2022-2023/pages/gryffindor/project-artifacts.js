import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

const ProjectArtifacts = () => {
  return (
    <div>
      <Image
        src='/sd.github.io/gryffindorpics/HousePic.jpeg'
        width='100%'
        height='300'
        alt='sda'
      />

      <h2>
        {' '}
        <br></br>Prototype Evolution
      </h2>
      <p>
        &emsp;&emsp;Our current implementation of Venus allows us to have it
        live in _something that is to be determined soon_<br></br>
        &emsp;&emsp;This will be avalible at{' '}
        <strong>
          <a href='https://github.com/sopiloteh/490Gryffindor'>
            {' '}
            this location.{' '}
          </a>
        </strong>
      </p>
      <h2>Our Desired outcome</h2>
      <p>
        &emsp;&emsp;With the implementation of our protoype, we hope to have it
        be fruitful for gamers in that they can accomplish the goal of enjoying
        thier games.<br></br>
        &emsp;&emsp;Furthermore for future use, Venus can be used to advise
        gamers in other browser adventures, this will be avalible via a browser
        plugin. <br></br>
      </p>
      <h2>Initial Presentation</h2>
      <p>
        &emsp;&emsp;For our initial presentation and overview of our senior
        design project.<br></br>
        &emsp;&emsp;Please click here to take{' '}
        <strong>
          <a href='/sd.github.io/gryffindorpics/VenusPresentation.pdf'>
            {' '}
            a look.{' '}
          </a>
        </strong>
      </p>
      <h2>Final Presentation</h2>
      <p>
        &emsp;&emsp;Thank you for wanting to know more about our project,{' '}
        <i>Venus, an AI helper for you</i>
        <br></br>
        &emsp;&emsp;Please feel free to take{' '}
        <strong>
          <a href='/sd.github.io/gryffindorpics/Group3-Venus.pdf'> a look. </a>
        </strong>
      </p>
      <h2>Final Project Report</h2>
      <p>
        &emsp;&emsp;Our Senior design abstract can be found at this{' '}
        <strong>
          <a href='/sd.github.io/gryffindorpics/Gryffindor-SeniorDesignDoc.docx.pdf'>
            {' '}
            following link.{' '}
          </a>
        </strong>
      </p>
      <h2>Acknowledgements</h2>
      <p>
        &emsp;&emsp;Many thanks to the following companies and people . . .
        <br></br>
        <br></br>
        &emsp;&emsp;Arthur Kot, The House, for providing a suspensefully{' '}
        <strong>
          <a href='https://the-house.arturkot.pl/'> fun game. </a>
        </strong>
        <br></br>
        &emsp;&emsp;Sony, for providing the massive background in proving this
        is{' '}
        <strong>
          <a href='https://patentscope.wipo.int/search/en/detail.jsf?docId=US321828987&tab=NATIONALBIBLIO'>
            {' '}
            possible.{' '}
          </a>
        </strong>{' '}
        <br></br>
        &emsp;&emsp;mL5, for giving us an excellent machine learning template{' '}
        <strong>
          <a href='https://ml5js.org/'> and library. </a>
        </strong>
        <br></br>
        &emsp;&emsp;vSyncTester, for showing us telemetry data{' '}
        <strong>
          <a href='https://www.vsynctester.com/testing/mouse.html'>
            {' '}
            in real time.{' '}
          </a>
        </strong>
        <br></br>
        &emsp;&emsp;Finally we would like to thank our professor, Dr Li Liu, for
        giving us a nudge in the right{' '}
        <strong>
          <a href='https://ieeexplore.ieee.org/document/8122747'>
            {' '}
            direction.{' '}
          </a>
        </strong>
      </p>
    </div>
  )
}

export default ProjectArtifacts
