import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image"


const TeamMembers = () => {
  return (
  <>
    <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <Image src="/sd.github.io/SenSci/Lemond.jpg" width="150px" height="200px" class="mb-3" alt=""/>
                            <h3 class="card-title mb-3">Lemond Wyatt</h3>
                            <p class="card-text">Senior in Computer Science. Fullstack developer using React, Node.js, Express, and more. Also have done game development with Unity Engine.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <Image src="/sd.github.io/SenSci/May.jpg" width="150px" height="200px"  class="mb-3" alt=""/>
                            <h3 class="card-title mb-3">Mahima Mishor</h3>
                            <p class="card-text">Senior in Computer Science. Interests include game development, 
                                and web/app development. I would really like to work more with Swift and use it to develop an app. 
                                Specializations include Java programming language and HTML.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <Image src="/sd.github.io/SenSci/LyanaCurry.png" width="150px" height="200px"  class="mb-3" alt=""/>
                            <h3 class="card-title mb-3">Lyana Curry</h3>
                            <p class="card-text">Computer Science Major
                          Interested in Front-End Web & Mobile Development
                          Experience largely in Java, C++, HTML, CSS, and a little experience with Python & JS
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <Image src="/sd.github.io/SenSci/Isaias.jpg" width="150px" height="200px"  class="mb-3" alt=""/>
                            <h3 class="card-title mb-3">Isaias Ramirez</h3>
                            <p class="card-text"> Senior in computer science. Interested in front-end web and mobile devlopment.
                            I have been developing in Java, C, HTML, CSS, Javascript and mips. I am looking into venturing into full stack development</p>
                        </div>
                    </div>
                    </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <Image src="" width="150px" height="200px"  class="mb-3" alt=""/>
                            <h3 class="card-title mb-3">Shashi Wong</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Accusantium praesentium pariatur maxime veritatis doloremque! Doloribus?
                            </p>
                        </div>
                    </div>
                </div>
  </>
  )
}

export default TeamMembers
