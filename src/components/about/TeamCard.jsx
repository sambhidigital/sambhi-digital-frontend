import React from "react";

class TeamCard extends React.Component {

    render() {

        const {
            member
        } = this.props;

        return (

            <div className="team-card">

                <div className="team-image">

                    <img
                        src={
                            member.imageUrl ||
                            "/assets/images/team/default-team.jpg"
                        }
                        alt={
                            member.fullName
                        }
                    />

                </div>

                <div className="team-content">

                    <h3>
                        {member.fullName}
                    </h3>

                    <span className="team-designation">

                        {member.designation}

                    </span>

                    <p>

                        {member.bio}

                    </p>

                    <div className="team-socials">

                        {
                            member.linkedinUrl && (

                                <a
                                    href={
                                        member.linkedinUrl
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >

                                    <i className="pi pi-linkedin"></i>

                                </a>
                            )
                        }

                        {
                            member.githubUrl && (

                                <a
                                    href={
                                        member.githubUrl
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >

                                    <i className="pi pi-github"></i>

                                </a>
                            )
                        }

                        {
                            member.email && (

                                <a
                                    href={`mailto:${member.email}`}
                                >

                                    <i className="pi pi-envelope"></i>

                                </a>
                            )
                        }

                    </div>

                </div>

            </div>
        );
    }
}

export default TeamCard;
