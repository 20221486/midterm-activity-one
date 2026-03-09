import React, { useEffect, useState } from 'react';

const Students = () => {
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        const data = [
            { id: 1, name: 'Elijah', course: 'APTECH1' },
            { id: 2, name: 'Elijah', course: 'PROGIT2' },
            { id: 3, name: 'Elijah', course: 'NSTPRO2' },
            { id: 4, name: 'Elijah', course: 'NETCOM1' },
            { id: 5, name: 'Elijah', course: 'LITERA1' },
            { id: 6, name: 'Elijah', course: 'ITETHC1' },
            { id: 7, name: 'Elijah', course: 'CIVIL1' },
            { id: 8, name: 'Elijah', course: 'ART1' },
            { id: 9, name: 'Elijah', course: 'CORPHIL1' },
            { id: 10, name: 'Elijah', course: 'PHYSICS1' },
        ];
        setStudentData(data);
    }, []);

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {studentData.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.course}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Students;