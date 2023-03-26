import React from "react";
import CourseCard from "../card/CourseCard";
import { HomeComponentTitle } from "../title/ComponentTitle";
import "./Carousel.scss"

const HomeCarousel = () => {
    return (
        <div className="home-carousel">
            <HomeComponentTitle title="Top Favorite Courses" />
            <CourseCard></CourseCard>
        </div>
    )
}

export default HomeCarousel
