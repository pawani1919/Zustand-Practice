import React, { useState } from "react";

import useCourseStore from "../courseStore";

const CourseForm = () => {
    const addCourse = useCourseStore((state) => state.addCourse);

    const [courseTitle, setCourseTitle] = useState("");

    const couseHandler = () => {
        if (!courseTitle) return alert("Please add course!!!!");
        addCourse({
            id: Math.ceil(Math.random() * 1000000),
            title: courseTitle

        });
        setCourseTitle("");
    }

    return (
        <div className="form-container">
            <input
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                className="form-input" />
            <button onClick={couseHandler}
                className="form-submit-btn"> Add Course</button>
        </div>
    )
}

export default CourseForm;
