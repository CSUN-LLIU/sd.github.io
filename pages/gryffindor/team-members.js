import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from "next/image"

const TeamMembers = () => {
  return <div>
  <h1>Team Gryffindor</h1>

    <div class="card bg-light">
    <p class = "card-text">Jazlyn Fernandez:</p>
      <Image src="/sd.github.io-main/gryffindor/sloth.jpg" height="150px" width="150px" border="5px" class="mb-3" alt = "Jazlyn" />
    </div>

    <div class="card bg-light">
    <p class = "card-text">Angelina Nantanapramoth: Experience with GUI, Unity, Java, C#, C, and R</p>
      <Image src="/sd.github.io-main/gryffindor/sloth.jpg" height="150px" width="150px" border="5px" class="mb-3" alt="Angelina" />
    </div>

      <div class="card bg-light">
      <p class = "card-text">Kathareeya Atthajaroon:</p>
      <Image src="/sd.github.io-main/gryffindor/sloth.jpg" height="150px" width="150px" border="5px" class="mb-3" alt="Kathareeya" />
      </div>

      <div class="card bg-light">
      <p class = "card-text">Daniel Esquivel:</p>
      <Image src="/sd.github.io-main/gryffindor/sloth.jpg" height="150px" width="150px" border="5px" class="mb-3" alt="Daniel" />
      </div>

      <div class="card bg-light">
      <p class = "card-text">Juan Vazquez: Experience with Java, C++, C.</p>
     <Image src="/sd.github.io-main/gryffindor/sloth.jpg" height="150px" width="150px" border="5px" class="mb-3" alt="Juan" />
      </div>

    <div class="card bg-light">
    <p class = "card-text">Erick Bravo: Experiance with C++, Java, Golang, C, Databases</p>
    <Image src="/sd.github.io-main/gryffindor/panda.jpg" height="150px" width="150px"  alt="Erick" />
    </div>

</div>
}

export default TeamMembers
