import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

const ProjectArtifacts = () => {
  return <div>
    
    <h1>Project Artifacts</h1>

    <section>
    <h2> Final Project Report </h2>
      <div>
        <p>
          Our current official project documentation can be found
          <a href="https://docs.google.com/document/d/1W8AYJvntC81KEhiRTthsnQXE__kXxjszISBdXba7k30/edit?usp=sharing" target={"_blank"}>
          <strong> through this link</strong>
          </a>
        </p>
      </div>
    </section>

    <section>
    <h2> Prototype Design </h2>
      <div>
      <Image
        src="/sd.github.io/Sensci/Homepage_Proto.png"
        alt="parked cars"
        width={300}
        height={200}
        border
      />
      &emsp;
      <Image
        src="/sd.github.io/Sensci/Availabilitypage_Proto.png"
        alt="parked cars"
        width={300}
        height={200}
      />
        <p>
          Our original mockup through figma can be seen 
          <a href='https://www.figma.com/proto/UvsKT4Mr2HHBQ2lVhRGDXn/Sensci?node-id=104%3A3' target={'_blank'}>
            <strong> Here</strong>
          </a>
        </p>
      </div>
    </section>

    <section>
    <h2> Presentations </h2>
      <div>
        <p><a></a></p>
      </div>
    </section>

    <section>
    <h2> Misc </h2>
      <div>

      </div>
    </section>

    <section>
    <h2> Videos </h2>
      <div>

      </div>
    </section>

  </div>
}

export default ProjectArtifacts
