import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';

const participants = [
    { name: "Sanjay k", id: "ICE-B4UiqGql", points: 0 },
    { name: "Adithyakrishna JG", id: "ICE-7i2mTxqY", points: 0 },
    { name: "Asish P", id: "ICE-mNGPY3jH", points: 0 },
    { name: "Daniel Geo", id: "ICE-5a6NGJUf", points: 0 },
    { name: "Nandhana Ramesh", id: "ICE-RNmVWVwA", points: 0 },
    { name: "Aleena shibu", id: "ICE-qFVwuCHd", points: 0 },
    { name: "Neha B S", id: "ICE-20twUNkQ", points: 0 },
    { name: "Amal Krishna M L", id: "ICE-FASeGiCA", points: 0 },
    { name: "Saniya C", id: "ICE-AqLT0E3r", points: 0 },
    { name: "Amrutha Lakshmi S", id: "ICE-SaGvIzzf", points: 0 },
    { name: "Hana O P", id: "ICE-yvGDxfix", points: 0 },
    { name: "Anusha Sara Shaji", id: "ICE-P0VOftwn", points: 0 },
    { name: "Ashna Afsal", id: "ICE-5LEVyfxF", points: 0 },
    { name: "Navadeep Satheesh", id: "ICE-pWG7iU6G", points: 0 },
    { name: "Amala B", id: "ICE-W7ZX5Tm1", points: 0 },
    { name: "Abhinav E K", id: "ICE-abEOoUiB", points: 0 },
    { name: "ADISREE A", id: "ICE-OstS93gQ", points: 0 },
    { name: "Sebin Thomas", id: "ICE-hxILlbbJ", points: 0 },
    { name: "Irfan vs", id: "ICE-GN9FcyLr", points: 0 },
    { name: "Adel Joby", id: "ICE-ulqNhd7N", points: 0 },
    { name: "Amelin Alexander Rathappillil", id: "ICE-BYSEEiPf", points: 0 },
    { name: "Cathy George", id: "ICE-Qjt13Lnx", points: 0 },
    { name: "Amayasree R", id: "ICE-B4JUxL4F", points: 0 },
    { name: "Ayisha mol N", id: "ICE-fe2ZzRkB", points: 0 },
    { name: "Ashlin P J", id: "ICE-CAFkfygd", points: 0 },
    { name: "Abhin Pradeep", id: "ICE-91c3sXoS", points: 0 },
    { name: "Athul Krishna P", id: "ICE-nT66ejLO", points: 0 },
    { name: "ADHISH PK", id: "ICE-njLXYnQv", points: 0 },
    { name: "Tejas Ranjith", id: "ICE-vTJ2HQsD", points: 0 },
    { name: "Aalbi Jijo", id: "ICE-TveBP85j", points: 0 },
    { name: "Niranjan", id: "ICE-WQRvK5nf", points: 0 },
    { name: "Vaishnav C", id: "ICE-pEfO1xID", points: 0 },
    { name: "Aleena Jaison", id: "ICE-F5qfrBjK", points: 0 },
    { name: "Aswin Radhakrishnan", id: "ICE-QXX2FTCU", points: 0 }
 
];

const ParticipantTable = () => {
    const [registrationData, setRegistrationData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/registrations.csv');
            const result = Papa.parse(response.data, { header: true });
            setRegistrationData(result.data);
            updatePoints(result.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const updatePoints = (registrations) => {
        registrations.forEach(registration => {
            const participant = participants.find(p => p.id === registration.referral_id);
            if (participant) {
                if (registration.type === 'hackathon') {
                    participant.points += 20;
                } else if (registration.type === 'normal') {
                    participant.points += 10;
                }
                else if (registration.type === 'hackathon' && registration.type === 'normal' ){
                    participant.points += 30;
                }
            }
        });
    };

    return (
        <div>
            <h1>Participant List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map(participant => (
                        <tr key={participant.id}>
                            <td>{participant.name}</td>
                            <td>{participant.id}</td>
                            <td>{participant.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ParticipantTable;
