import React from 'react';
import { Link } from 'react-router-dom';
import './StudentList.css';
const StudentList = ({ students }) => {
    return (
        <div>
            <h1>Student List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.course}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;