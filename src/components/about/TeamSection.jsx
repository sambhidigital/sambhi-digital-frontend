import React from "react";

import TeamCard
    from "./TeamCard";

import teamService
    from "../../services/teamService";

class TeamSection extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            teamMembers: [],

            loading: true
        };
    }

    componentDidMount() {

        this.loadTeamMembers();
    }

    loadTeamMembers = async () => {

        try {

            const response =
                await teamService
                    .getFeaturedTeamMembers();

            this.setState({

                teamMembers:
                    response.data.data || [],

                loading: false
            });

        } catch (error) {

            console.error(
                "Team Members Error:",
                error
            );

            this.setState({

                loading: false
            });
        }
    };

    render() {

        const {

            teamMembers,

            loading

        } = this.state;

        if (loading) {

            return null;
        }

        if (
            teamMembers.length === 0
        ) {

            return null;
        }

        return (

            <section
                className="team-section"
            >

                <div className="container">

                    <div className="section-header">

                        <h2>

                            Meet Our Team

                        </h2>

                        <p>

                            Experts driving innovation,
                            technology and digital transformation.

                        </p>

                    </div>

                    <div className="team-grid">

                        {
                            teamMembers.map(
                                (member) => (

                                    <TeamCard

                                        key={
                                            member.id
                                        }

                                        member={
                                            member
                                        }

                                    />
                                )
                            )
                        }

                    </div>

                </div>

            </section>
        );
    }
}

export default TeamSection;
