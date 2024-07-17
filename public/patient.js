document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('/api/appointments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('Appointment booked successfully!');
            event.target.reset();
        } else {
            alert('Failed to book appointment.');
        }
    })
    .catch(error => {
        console.error('Error booking appointment:', error);
    });
});

