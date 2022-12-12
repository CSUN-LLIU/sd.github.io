import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

const HomePage = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center p-5'>
        <h1>
          Parking At CSUN <span className='text-warning'>Made Easy</span>
        </h1>
        <div className='lead d-flex flex-column text-center'>
          <div className=''>Website:</div>
          <a href='https://lucent-douhua-90f874.netlify.app/'>
            https://lucent-douhua-90f874.netlify.app/
          </a>
          <a href='https://github.com/Auraxium/MataPark'>
            https://github.com/Auraxium/MataPark
          </a>
        </div>
      </div>
      <Image
        src='/sd.github.io/SenSci/Parked-Cars.jpg'
        alt='parked cars'
        objectFit='cover'
        width={2000}
        height={200}
      />

      <section className='bg-danger text-light p-5'>
        <div className='container row flex-column lead'>
          <h2 className=''>Problems</h2>
          <br />
          <p>{`Parking at CSUN...\n`}</p>
          <p>
            {`CSUN students and visitors who need to park on campus are spending an
              increasing amount of time getting information on how full a parking lot is,
              searching for spots that meet their personal needs of being close
              to a specific building or handicap accessibility, knowing if it's
              more value added to get a permit, where to go if they want to safely park on 
              the streets instead, and getting information on alternative 
              transportation.\n`}
          </p>
        </div>
      </section>

      <section className='p-5'>
        <div className='container row flex-column lead'>
          <h2>Solution</h2>
          <p>
            {`MataPark will solve these issues in one fluid web application, providing info and advice
          on all things CSUN parking and transportation that truely matter to students, visitors, 
          and faculty. CSUN transportation information- customized to you.`}{' '}
            <br />
            {`For the students, by the students.`} <br />
            {`Welcome to convenience.`}
          </p>
        </div>
      </section>
    </>
  )
}

export default HomePage
