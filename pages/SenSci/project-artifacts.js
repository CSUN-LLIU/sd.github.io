import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import Link from 'next/link'

const ProjectArtifacts = () => {
  return (
    <div>
      <h1>Project Artifacts</h1>

      <section>
        <h2> Final Project Report </h2>
        <div>
          <p>
            Our current official project documentation can be found
            <a href='https://docs.google.com/document/d/1W8AYJvntC81KEhiRTthsnQXE__kXxjszISBdXba7k30/edit?usp=sharing'>
              <strong style={{ cursor: 'pointer' }}> through this link</strong>
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2> Prototype Design </h2>
        <div>
          <Image
            src='/sd.github.io/SenSci/Homepage_Proto.png'
            alt='prototype homepage'
            width={300}
            height={200}
          />
          &emsp;
          <Image
            src='/sd.github.io/SenSci/Availabilitypage_Proto.png'
            alt='prototype availability page'
            width={300}
            height={200}
          />
          <p>
            Our original mockup through figma can be seen
            <a href='https://www.figma.com/proto/UvsKT4Mr2HHBQ2lVhRGDXn/Sensci?node-id=104%3A3'>
              <strong style={{ cursor: 'pointer' }}> Here</strong>
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2> Presentations </h2>
        <div>
          Fall Semester 2022: <br />
          <ul>
            <li>
              <a href='https://docs.google.com/presentation/d/1F1gokomLcg2TaZxro8V1LoMdwN3igK3UMj9yOxfw_oc/edit?usp=sharing'>
                <strong style={{ cursor: 'pointer' }}>
                  First Presentation (10/19)
                </strong>
              </a>
            </li>
            <br />
            <li>
              <a href='https://docs.google.com/presentation/d/1DL4skIaf1X5FcFdBXsvaYY46K5TqpbXgwjt0Ryj1tTA/edit?usp=sharing'>
                <strong style={{ cursor: 'pointer' }}>
                  Update Presentation for Sponsor (11/15)
                </strong>
              </a>
            </li>
            <br />
            <li>
              <a href='https://docs.google.com/presentation/d/1xVa58xZhgdAnUQCorHjk01xcKRqMZPMOSaaie21Z8fc/edit?usp=sharing'>
                <strong style={{ cursor: 'pointer' }}>
                  Second Presentation (12/07)
                </strong>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2> Misc </h2>
        <div>Product Beta</div>
				<a href='https://lucent-douhua-90f874.netlify.app/'>
            https://lucent-douhua-90f874.netlify.app/
          </a>
				<div>Source Code</div>
				<a href='https://github.com/Auraxium/MataPark'>
            https://github.com/Auraxium/MataPark
          </a>
      </section>

      {/* <section>
        <h2> Videos </h2>
        <div></div>
      </section> */}
    </div>
  )
}

export default ProjectArtifacts
