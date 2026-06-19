import React from "react";
import { Galleria } from "primereact/galleria";

class ProjectGallery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        };
    }

    itemTemplate = (item) => {

        return (

            <img
                src={item.image}
                alt={item.title}
                style={{
                    width: "100%",
                    borderRadius: "20px"
                }}
            />

        );
    };

    thumbnailTemplate = (item) => {

        return (

            <img
                src={item.image}
                alt={item.title}
                style={{
                    width: "100px",
                    borderRadius: "10px"
                }}
            />

        );
    };

    render() {

        const { projects } = this.props;

        return (

            <section className="project-gallery-section">

                <div className="container">

                    <div className="section-header">

                        <h2>Project Gallery</h2>

                        <p>
                            Explore our enterprise IT,
                            AI, networking, and automation projects.
                        </p>

                    </div>

                    <Galleria
                        value={projects}
                        activeIndex={this.state.activeIndex}
                        onItemChange={(e) =>
                            this.setState({
                                activeIndex: e.index
                            })
                        }
                        circular
                        showItemNavigators
                        showThumbnails
                        item={this.itemTemplate}
                        thumbnail={this.thumbnailTemplate}
                        style={{
                            maxWidth: "900px",
                            margin: "0 auto"
                        }}
                    />

                </div>

            </section>
        );
    }
}

export default ProjectGallery;
