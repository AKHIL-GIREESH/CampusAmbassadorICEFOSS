/*const participants = [

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

// Add participants to the HTML table
function displayParticipants() {
    const participantTableBody = document.querySelector('#participantTable tbody');
    
    participants.forEach(participant => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const idCell = document.createElement('td');
        const pointsCell = document.createElement('td');
        
        nameCell.textContent = participant.name;
        idCell.textContent = participant.id;
        pointsCell.textContent = participant.points;
        
        row.appendChild(nameCell);
        row.appendChild(idCell);
        row.appendChild(pointsCell);
        
        participantTableBody.appendChild(row);
    });
}

// Call the function to display participants
displayParticipants();
*/
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
  { name: "Aswin Radhakrishnan", id: "ICE-QXX2FTCU", points: 0 },
];

// Mock CSV data (you can replace this with actual file reading logic)
const registrationData = `
name,email,institution,semester,phone,referral_id,type
John Doe,johndoe@example.com,University A,Semester 1,1234567890,ICE-B4UiqGql,hackathon
Jane Smith,janesmith@example.com,University B,Semester 2,0987654321,ICE-7i2mTxqY,normal
`;

// Function to parse CSV data
// function parseCSV(data) {
//     const lines = data.trim().split('\n');
//     const headers = lines[0].split(',');

//     return lines.slice(1).map(line => {
//         const values = line.split(',');
//         const entry = {};
//         headers.forEach((header, index) => {
//             entry[header] = values[index];
//         });
//         return entry;
//     });
// }

// // Function to update points based on registrations
// function updatePoints() {
//     const registrations = parseCSV(registrationData);
//     registrations.forEach(registration => {
//         const participant = participants.find(p => p.id === registration.referral_id);
//         if (participant) {
//             if (registration.type === 'hackathon') {
//                 participant.points += 20;
//             } else if (registration.type === 'normal') {
//                 participant.points += 10;
//             }
//                 else if(registeration.type === 'hackthon' && registration.type === 'normal')
//                 {
//                 participant.points +=30;
//             }
//         }
//     });
// }

// // Function to display participants in a table
// function displayParticipants() {
//     updatePoints();
//     const participantTableBody = document.querySelector('#participantTable tbody');
//     participantTableBody.innerHTML = ''; // Clear existing rows

//     participants.forEach(participant => {
//         const row = document.createElement('tr');
//         const nameCell = document.createElement('td');
//         const idCell = document.createElement('td');
//         const pointsCell = document.createElement('td');

//         nameCell.textContent = participant.name;
//         idCell.textContent = participant.id;
//         pointsCell.textContent = participant.points;

//         row.appendChild(nameCell);
//         row.appendChild(idCell);
//         row.appendChild(pointsCell);

//         participantTableBody.appendChild(row);
//     });
// }

// // Call the function to display participants
// displayParticipants();
