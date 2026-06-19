import React from "react";

class CalendlyEmbed extends React.Component {

    render() {

        return (

            <section className="calendly-section">

                <div className="container">

                    <div className="section-header">

                        <h2>Book a Consultation</h2>

                        <p>
                            Schedule a meeting with our
                            AI and enterprise technology experts.
                        </p>

                    </div>

                    <div className="calendly-wrapper glass-card">

                        <iframe
                            title="Calendly Scheduling"
                            src="https://calendly.com/"
                            width="100%"
                            height="700"
                            frameBorder="0"
                        ></iframe>

                    </div>

                </div>

            </section>
        );
    }
}

export default CalendlyEmbed;
