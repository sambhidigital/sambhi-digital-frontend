import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

class FAQAccordion extends React.Component {

    render() {

        const { faqs } = this.props;

        return (

            <section className="faq-section">

                <div className="container">

                    <div className="section-header">

                        <h2>Frequently Asked Questions</h2>

                        <p>
                            Common questions regarding our
                            enterprise IT and AI services.
                        </p>

                    </div>

                    <Accordion multiple={true}>

                        {
                            faqs &&
                            faqs.map((faq, index) => (

                                <AccordionTab
                                    key={index}
                                    header={faq.question}
                                >

                                    <p>
                                        {faq.answer}
                                    </p>

                                </AccordionTab>
                            ))
                        }

                    </Accordion>

                </div>

            </section>
        );
    }
}

export default FAQAccordion;
