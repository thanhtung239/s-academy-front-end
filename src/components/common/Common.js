import React from "react";
import "./Common.scss"

export const RowInfoCourseCard = (props) => {
    let value = '';

    if (props.title === 'Course') {
        value = props.data.name;
    }

    return (
        <div className="row-info-course-card">
            {props.icon}
            <div style={{ marginLeft: 10 }}>{props.title}: {value}</div>
        </div>
    )
}

