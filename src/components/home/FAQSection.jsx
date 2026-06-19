import React from "react";

import {
    Accordion,
    AccordionTab
} from "primereact/accordion";

import faqService from "../../services/faqService";

//CSS
import "../../styles/FAQ.css";


class FAQSection extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            faqs: [],

            loading: true
        };
    }

    componentDidMount() {

        this.loadFaqs();
    }

    loadFaqs = async () => {

        try {

            const response =
                await faqService
                    .getAllFaqs();

            this.setState({

                faqs:
                    response.data.data || [],

                loading: false
            });

        } catch (error) {

            console.error(
                "FAQ Error:",
                error
            );

            this.setState({

                loading: false
            });
        }
    };

    render() {

        const {
            faqs
        } = this.state;

        if (
            !faqs ||
            faqs.length === 0
        ) {

            return null;
        }

        return (

            <section
                className="faq-section"
            >

                <div className="container">

                    <div className="section-header">

                        <h2>

                            Frequently Asked Questions

                        </h2>

                        <p>

                            Everything you need to know
                            about our services and
                            solutions.

                        </p>

                    </div>

                    <Accordion>

                        {
                            faqs.map(
                                (faq) => (

                                    <AccordionTab

                                        key={
                                            faq.id
                                        }

                                        header={
                                            faq.question
                                        }
                                    >

                                        <p>

                                            {
                                                faq.answer
                                            }

                                        </p>

                                    </AccordionTab>
                                )
                            )
                        }

                    </Accordion>

                </div>

            </section>
        );
    }
}

export default FAQSection;
