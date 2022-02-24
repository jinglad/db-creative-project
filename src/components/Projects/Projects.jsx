import styled from "styled-components";
import img_1 from "../../images/carousel-1.png";
import img_2 from "../../images/carousel-2.png";
import img_3 from "../../images/carousel-5.png";
import img_4 from "../../images/carousel-4.png";
import Carousel from "react-elastic-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      // {
      //   breakpoint: 576,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  return (
    <ProjectsContainer className="container-fluid">
      <ProjectsHeading>
        Here are some of <span style={{ color: "#7AB259" }}>our works</span>
      </ProjectsHeading>
      {/* <Carousel breakPoints={breakPoints}>
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
      </Carousel> */}
      <Slider {...settings} style={{ width: "90%", margin: "auto" }}>
        {slideImages.map((photo, i) => {
          return (
            // <div style={{ textAlign: "center", background: "red" }}>
            <img
              key={i}
              src={photo.img}
              className="w-75 ml_4"
              // style={{ height: "100%", marginLeft: "50rem" }}
              alt="Project Image"
            />
            // </div>
          );
        })}
      </Slider>
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
