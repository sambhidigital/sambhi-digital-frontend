import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CareerForm from "../components/careers/CareerForm";

class InternshipApply extends React.Component {

    render() {

        return (

            <>
                <Navbar />

                <section className="internship-hero">

                    <div className="container">

                        <h1>
                            Internship Program
                        </h1>

                        <p>
                            Gain real-world experience in AI,
                            Cloud, Networking and Enterprise
                            Technology Solutions.
                        </p>

                    </div>

                </section>

                <CareerForm
                    position="Internship Program"
                />

                <Footer />
            </>
        );
    }
}

export default InternshipApply;
