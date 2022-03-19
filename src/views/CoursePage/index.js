import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CoursePage.scss';

class CoursePage extends Component {
    handleRemoveCourse = (courseId) => {
        this.props.removeCourse(courseId);
    };

    render() {
        const courseList = this.props.dataRedux;
        return (
            <div className="course-page">
                <h2>Danh sách khóa học (Redux - Click vào mỗi item để xóa)</h2>
                <div className="course-list">
                    {courseList &&
                        courseList.length > 0 &&
                        courseList.map((course) => {
                            return (
                                <div
                                    onClick={() =>
                                        this.handleRemoveCourse(course.id)
                                    }
                                    key={course.id}
                                    className="course-item"
                                >
                                    {course.name}
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.courses };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeCourse: (courseId) =>
            dispatch({
                type: 'REMOVE_COURSE',
                payload: courseId,
            }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
