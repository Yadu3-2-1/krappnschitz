 function showAnswers() {
            // Step 1: Read the value from each input field using its ID
            const color = document.getElementById('question1').value;
            const destination = document.getElementById('question2').value;
            const skill = document.getElementById('question3').value;

            // Step 2: Find the element where we will display the output
            const outputContainer = document.getElementById('output-area');
            
            // Optional: Basic validation to check if fields are empty
            if (!color || !destination || !skill) {
                outputContainer.innerHTML = `<p style="color: red;">Please fill out all the fields before submitting.</p>`;
                return; // Stop the function here
            }

            // Step 3: Create the HTML content with the collected answers
            const outputHTML = `
                <h3>Your Submitted Answers:</h3>
                <p><strong>Favorite Color:</strong> ${color}</p>
                <p><strong>Dream Destination:</strong> ${destination}</p>
                <p><strong>Skill to Learn:</strong> ${skill}</p>
            `;

            // Step 4: Place the new HTML content into the output container
            outputContainer.innerHTML = outputHTML;
        }