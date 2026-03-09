import { useParams } from 'react-router-dom';

const studentData = [
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

export default function Details() {
    const { id } = useParams();
    const student = studentData.find(s => s.id === parseInt(id));

    if (!student) {
        return <div className="details"><p>Student not found</p></div>;
    }

    return (
        <div className="details">
            <div className="card">
                <div className="details-header">
                    <h2>Student Details</h2>
                </div>
                <div className="details-list">
                    <p><strong>ID:</strong> {student.id}</p>
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Course:</strong> {student.course}</p>
                </div>
            </div>
        </div>
    );
}