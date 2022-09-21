import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image"

const TeamMembers = () => {
  return <div>
  <h1>Team Gryffindor</h1>

    <div class="card bg-light">
    <p>Jazlyn Fernandez:</p>
      <Image src="/sd.github.io-main/gryffindor/sloth.jpg" height="150px" width="150px" border="5px" class="mb-3" alt = "Jazlyn" />
    </div>

    <div class="card bg-light">
    <p>Angelina Nantanapramoth: Experience with GUI, Unity, Java, C#, C, and R</p>
      <Image src="/sd.github.io-main/gryffindor/sloth.jpg" height="150px" width="150px" border="5px" class="mb-3" alt="Angelina" />
    </div>

      <div class="card bg-light">
      <p>Kathareeya Atthajaroon: </p>
      <p> Greetings! I am Kathy, it is nice to meet everyone of you.
       I have experienced with UI/UX designs, Java/script, C,C++, NODE JS, basics of python, and MYSQL database.
       My current interest in the fields of computer science is data science, and hoping to improve my Python skills.
       I am willing to learn more skills through new projects that I'm working on.</p>
      <Image src="/sd.github.io-main/gryffindor/sloth.jpg" height="150px" width="150px" border="5px" class="mb-3" alt="Kathareeya" />
      </div>

      <div class="card bg-light">
      <p>Daniel Esquivel:</p>
      <Image src="/sd.github.io-main/gryffindor/sloth.jpg" height="150px" width="150px" border="5px" class="mb-3" alt="Daniel" />
      </div>

      <div class="card bg-light">
      <p>Juan Vazquez: Experience with Java, C++, C.</p>
     <Image src="/sd.github.io-main/gryffindor/sloth.jpg" height="150px" width="150px" border="5px" class="mb-3" alt="Juan" />
      </div>

    <div class="card bg-light">
    <p>Erick Bravo: Hallo I am Erick, Ill be graduating in Spring 2023 if all goes well<br></br>
        I have the following experiance with C++, Java, Golang, C, Databases. Im currently intrested in imagry and robotics<br></br>
        Always willing to lend a hand with anything and everything as long as we all learn from it.</p>
    <Image src="/sd.github.io-main/gryffindor/panda.jpg" height="150px" width="150px"  alt="Erick" />
    </div>

</div>
}

export default TeamMembers
