// DOM elements
const form = document.getElementById("businessForm");
const output = document.getElementById("generatedContent");

// Event listener
form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("businessName").value;
    const service = document.getElementById("service").value;
    const location = document.getElementById("location").value;

    // Generate content using AI generator function
    const content = generateBusinessContent(name, service, location);

    // Show output
    output.textContent = content;
});
