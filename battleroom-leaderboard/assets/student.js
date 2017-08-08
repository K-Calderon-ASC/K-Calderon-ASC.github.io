function authenticate(){
    if($("#password").val() == "kevinrools") {
        $("#everything").html(`
            <br><br>
            <p>Add Student</p>
            <input type="text" id="name" placeholder="Name">
            <input type="text" id="points" placeholder="Points">
            <input type="text" id="cohort" placeholder="Cohort">
            <button onclick="submitStudent()">Submit</button>
            <br><br>
            <p>Update Stats</p>
            <--Student dropdown-->
            <input type="text" id="newpoints" placeholder="Add Points">
            <button onclick="updateStats()">Submit</button>
        `);
    }
    else {
        $("#everything").html("<p style='color: red'>Nope.</p>");
    }
}