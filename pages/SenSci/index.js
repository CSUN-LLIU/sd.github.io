import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";

const HomePage = () => {

  return (
    <>
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
          <h1>
            Parking At CSUN <span className="text-warning">Made Easy</span>
          </h1>
          <div className="lead">
            No more standing in line for a parking pass
          </div>
        </div>
        <Image
            src='/sd.github.io/Sensci/Parked-Cars.jpg'
            alt='parked cars'
            objectFit="cover"
            width={2000}
            height={200}
            />

        <section className="bg-danger text-light p-5">
          <div className="container row flex-column lead">
            <h2 class="">Problems</h2>
            <br/>
            <p>{`Parking at CSUN...\n`}</p>
            <p>
              {`CSUN students who need to park on campus are spending an
              increasing amount of time knowing how full a parking lot is,
              searching for spots that meet their personal needs of being close
              to a specific building or handicap accesibility, knowing if it's
              more value added to get a permit, citation payment concerns, and
              dealing with getting parking tickets for daily use.\n`}
            </p>
            <p>
            {`MataPark will solve these issues in one fluid app, dealing with
            everything CSUN parking related for all students and faculty.\n`}
            </p>
            <p>{`Welcome to convenience.`}</p>
          </div>
        </section>

        <section className="p-5">
          <h2>Solution</h2>
        </section>
    </>
  );
};

export default HomePage;
