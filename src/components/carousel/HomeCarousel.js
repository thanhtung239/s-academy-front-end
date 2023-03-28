import React from "react";
import Slider from "react-slick";
import { homeCarouselSettings } from "../../constants/utils";
import CourseCard from "../card/CourseCard";
import { HomeComponentTitle } from "../title/ComponentTitle";
import "./Carousel.scss"

const HomeCarousel = () => {
    const settings = homeCarouselSettings;

    return (
        <div className="home-carousel">
            <HomeComponentTitle title="Top Favorite Courses" />
            <div className="carousel-container">
                <Slider {...settings}>
                    <CourseCard></CourseCard>
                    <CourseCard></CourseCard>
                    <CourseCard></CourseCard>
                    <CourseCard></CourseCard>
                    <CourseCard></CourseCard>
                    <CourseCard></CourseCard>
                    <CourseCard></CourseCard>
                    <CourseCard></CourseCard>
                </Slider>
            </div>
            
            
        </div>
    )
}

export default HomeCarousel
