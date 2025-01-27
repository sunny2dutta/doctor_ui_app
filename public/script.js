console.log("Script loaded"); // Verify the script is being loaded

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed"); // Verify the DOMContentLoaded event is fired

    fetch('/api/appointments')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched appointment data:', data); // Log the fetched data
            const appointmentRequests = document.getElementById('appointment-requests');
            appointmentRequests.innerHTML = ''; // Clear existing content
            data.forEach(request => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${request.patientName}</td>
                    <td>${request.disease}</td>
                    <td>${request.age}</td>
                    <td>${request.gender}</td>
                    <td>${request.dateTime}</td>
                    <td>${request.description}</td>
                    <td class="actions">
                        <button class="accept" onclick="handleAction('accept', '${request.id}')">Accept</button>
                        <button class="reject" onclick="handleAction('reject', '${request.id}')">Reject</button>
                    </td>
                `;
                appointmentRequests.appendChild(row);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    fetch('/api/historicalPatients')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched historical patient data:', data); // Log the fetched data
            const historicalPatients = document.getElementById('historical-patients');
            historicalPatients.innerHTML = ''; // Clear existing content
            data.forEach(patient => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${patient.patientName}</td>
                    <td>${patient.disease}</td>
                    <td>${patient.age}</td>
                    <td>${patient.gender}</td>
                    <td>${patient.lastVisit}</td>
                    <td>${patient.description}</td>
                    <td class="actions">
                        <button class="remind" onclick="sendReminder('${patient.id}')">Send Reminder</button>
                    </td>
                `;
                historicalPatients.appendChild(row);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    // Show the appointments tab by default
    showTab('appointments');
});

function handleAction(action, id) {
    console.log(`Handling action: ${action} for id: ${id}`); // Log the action
    fetch(`/api/appointments/${action}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(`Appointment ${action}ed successfully`);
                location.reload();
            } else {
                alert(`Failed to ${action} the appointment`);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function sendReminder(id) {
    console.log(`Sending reminder for patient id: ${id}`); // Log the reminder action
    // Implement the reminder sending functionality here, for example:
    alert(`Reminder sent to patient with id: ${id}`);
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabName + '-tab').style.display = 'block';
}
