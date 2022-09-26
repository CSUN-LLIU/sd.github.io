import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";

const HomePage = () => {
  let main = { backgroundColor: "#343a40", width: "100%" };

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-column justify-content-center align-items-center p-5">
          <h1>
            Parking At CSUN <span className="text-warning">Made Easy</span>
          </h1>
          <div className="lead">
            No more standing in line for a parking pass
          </div>
        </div>

        <section className="bg-primary text-light p-5">
          <div className="container row flex-column lead">
            <h2 class="">Problems</h2>
            <div class="">Parking at CSUN...</div>
            <br/>
            <div>
              CSUN students who need to park on campus are spending an
              increasing amount of time knowing how full a parking lot is,
              searching for spots that meet their personal needs of being close
              to a specific building or handicap accesibility, knowing if it's
              more value added to get a permit, citation payment concerns, and
              dealing with getting parking tickets for daily use.
            </div>
            <br/>
            <div>
              MataPark will solve these issues in one fluid app, dealing with
              everything CSUN parking related for all students and faculty.
            </div>
            <br/>
            <div>Welcome to convenience.</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
