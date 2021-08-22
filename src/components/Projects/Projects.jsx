import styled from "styled-components";
import img_1 from "../../images/carousel-1.png";
import img_2 from "../../images/carousel-2.png";
import img_3 from "../../images/carousel-5.png";
import img_4 from "../../images/carousel-4.png";
import Carousel from "react-elastic-carousel";

function Projects() {
  const slideImages = [
    { img: img_1 },
    { img: img_2 },
    { img: img_3 },
    { img: img_4 },
  ];

  const breakPoints = [
    { width: 300, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  return (
    <ProjectsContainer>
      <ProjectsHeading>
        Here are some of <span style={{ color: "#7AB259" }}>our works</span>
      </ProjectsHeading>
      <Carousel breakPoints={breakPoints}>
        {slideImages.map((photo) => {
          return (
            <div style={{ marginLeft: "6rem" }}>
              <img
                src={photo.img}
                className="w-75"
                style={{ height: "100%" }}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </ProjectsContainer>
  );
}

export default Projects;

const ProjectsContainer = styled.div`
  background: #111430;
  padding-top: 70px;
  padding-bottom: 50px;
`;

const ProjectsHeading = styled.h3`
  text-align: center;
  margin-bottom: 5rem;
  color: white;
  font-weight: bold;
`;
