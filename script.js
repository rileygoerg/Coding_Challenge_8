// U14123683
document.getElementById("eventForm").addEventListener("submit",(event)=>{ // listens for the submit button to be clicked
    event.preventDefault(); // Prevents auto reload

    const first = document.getElementById("firstName").value; // taking input value for first name
    const last = document.getElementById("lastName").value;   // last name 
    const email = document.getElementById("emailAddress").value; // email 
    const date = document.getElementById("eventDate").value; // event date
    const food = [] // food array
    document.querySelectorAll("input[type=checkbox]:checked").forEach(check => { // finds all checked boxes
        food.push(check.value); // pushes the value of each checked box to food array
    })

    if (first == "" || last == "" || email == "" || date == "" || food == "") { // submission validation
        alert("Please fill out every part of the form.") // all parts must be filled out
    } else {
    document.getElementById("eventData").innerHTML = // all inputs will be displayed in the div tag
    `<h2>Successfully registered.</h2>
    <p><strong>${first} ${last} (${email}) registered for the ${date} event.</strong></p>
    <p>Food Preferences Selected: ${food.join(", ")}</p>` // used to separate food array items with a comma
    };
});