import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

let appointmentRequests = [
    {
        id: '1',
        patientName: 'John Doe',
        disease: 'Flu',
        age: 29,
        gender: 'Male',
        dateTime: '2024-07-12 10:00 AM',
        description: 'High fever and cough'
    },
    {
        id: '2',
        patientName: 'Jane Smith',
        disease: 'Cold',
        age: 22,
        gender: 'Female',
        dateTime: '2024-07-12 11:00 AM',
        description: 'Running nose and sore throat'
    }
];

const historicalPatients = [
    {
        id: '3',
        patientName: 'Alice Johnson',
        disease: 'Allergy',
        age: 34,
        gender: 'Female',
        lastVisit: '2023-06-12',
        description: 'Seasonal allergies'
    },
    {
        id: '4',
        patientName: 'Bob Brown',
        disease: 'Asthma',
        age: 45,
        gender: 'Male',
        lastVisit: '2023-05-25',
        description: 'Asthma check-up'
    }
];

app.get('/api/appointments', (req, res) => {
    res.json(appointmentRequests);
});

app.get('/api/historicalPatients', (req, res) => {
    res.json(historicalPatients);
});

app.post('/api/appointments/accept', (req, res) => {
    const { id } = req.body;
    const index = appointmentRequests.findIndex(request => request.id === id);
    if (index !== -1) {
        appointmentRequests.splice(index, 1);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.post('/api/appointments/reject', (req, res) => {
    const { id } = req.body;
    const index = appointmentRequests.findIndex(request => request.id === id);
    if (index !== -1) {
        appointmentRequests.splice(index, 1);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.post('/api/appointments', (req, res) => {
    const newAppointment = {
        id: String(appointmentRequests.length + 1),
        ...req.body
    };
    appointmentRequests.push(newAppointment);
    res.json({ success: true, appointment: newAppointment });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
