import React from "react";

import { Card } from "primereact/card";

import solutionService
    from "../../services/solutionService";

import "../../styles/IndustrySolutions.css";

class IndustrySolutions extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            solutions: [],

            loading: true
        };
    }

    componentDidMount() {

        this.loadSolutions();
    }

    loadSolutions = async () => {

        try {

            const response =
                await solutionService
                    .getFeaturedSolutions();

            this.setState({

                solutions:
                    response.data.data || [],

                loading: false
            });

        } catch (error) {

            console.error(
                "Solutions Error:",
                error
            );

            this.setState({

                loading: false
            });
        }
    };

    render() {

        const {

            solutions,

            loading

        } = this.state;

        if (loading) {

            return null;
        }

        if (
            solutions.length === 0
        ) {

            return null;
        }

        return (

            <section className="industry-section">

                <div className="container">

                    <div className="section-header">

                        <h2>

                            Industry Solutions

                        </h2>

                        <p>

                            Tailored digital infrastructure
                            for every industry sector.

                        </p>

                    </div>

                    <div className="industry-grid">

                        {
                            solutions.map(
                                (solution) => (

                                    <Card
                                        key={
                                            solution.id
                                        }
                                        className="industry-card"
                                    >

                                        {
                                            solution.imageUrl && (

                                                <img
                                                    src={
                                                        solution.imageUrl
                                                    }
                                                    alt={
                                                        solution.title
                                                    }
                                                    className="industry-image"
                                                />

                                            )
                                        }

                                        <h3>

                                            {
                                                solution.industry
                                            }

                                        </h3>

                                        <p>

                                            {
                                                solution.title
                                            }

                                        </p>

                                    </Card>
                                )
                            )
                        }

                    </div>

                </div>

            </section>
        );
    }
}

export default IndustrySolutions;
