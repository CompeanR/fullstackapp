import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Header from './Header'

export default class Courses extends Component {
    
    state = {
        courses: []
    };
    
    componentDidMount() {
        axios.get('http://localhost:5000/api/courses').then(response => {
            this.setState({
                courses: response.data
            });
        })
        .catch(err => {
            console.log('Error fetching and parsing data', err);
        });
    };


    render() {
        console.log(this.state.courses)
        return (
            <>
                <Header />
                
                <main>
                    <div className="wrap main--grid">
                    {this.state.courses.map(course => (
                        <Link to={`/courses/${course.id}`} key={course.id} className="course--module course--link" href="course-detail.html">
                            <h2 className="course--label">Course</h2>
                            <h3 className="course--title">{course.title}</h3>
                        </Link>
                    ))}
                        <Link to={`/create-course`} className="course--module course--add--module" href="create-course.html">
                            <span className="course--add--title">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                                New Course
                            </span>
                        </Link>
                    </div>
                </main>
            </>
        );
    };
};