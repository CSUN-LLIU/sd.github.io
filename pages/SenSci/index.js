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
                Parking at CSUN... <br/>
                CSUN students who need to park on campus are spending an increasing amount of time knowing how full a parking lot is, searching for spots that meet their personal needs of being close to a specific building or handicap accesibility, knowing if it's more value added to get a permit, citation payment concerns, and dealing with getting parking tickets for daily use. <br/>
                MataPark will solve these issues in one fluid app, dealing with everything CSUN parking related for all students and faculty. <br/>
                Welcome to convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
