import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'


const HomePage = () => {

  let main = { backgroundColor: "#343a40", width: "100%" }

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-light p-5">
        <h1>Parking At CSUN <span className="text-warning">Made Easy</span></h1>
        <div className='lead'>No more standing in line for a parking pass</div>
      </div>

      <section className='bg-primary text-light p-5'>
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h2 class="">Problems</h2>
              <p class="lead">
                Parking at CSUN...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
