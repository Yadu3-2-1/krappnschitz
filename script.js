function generatePrediction() {
    // --- Step 1: Get user's answers ---
    const name = document.getElementById('question1').value;
    // FIXED: Correctly get the value from the input fields
    const destination = document.getElementById('question2').value;
    const skill = document.getElementById('question3').value;
    const outputContainer = document.getElementById('output-area');

    // --- Step 2: Basic validation ---
    if (!name || !destination || !skill) {
        outputContainer.style.display = 'block';
        outputContainer.innerHTML = `<p style="color: #e71d36;">The cosmos requires all fields to be filled before it reveals its secrets.</p>`;
        return;
    }

    // --- Step 3: Humorous Prediction Logic ---
    const pastLives = [
        "ഞാൻ മുമ്പ് ജനിച്ചത് ഒരു ചായക്കടയിലെ സ്റ്റീൽ ഗ്ലാസ് ആയിരുന്നു… എല്ലാ ദിവസവും ചായ കുടിക്കാൻ മാത്രം!",
        "പഴയ ജന്മത്തിൽ ഞാൻ ഡ്രൈവർ ഇല്ലാത്ത KSRTC ബസ് ആയിരുന്നു… യാത്രക്കാരെ എടുക്കാൻ പോലും സമയം കിട്ടിയില്ല!",
        "ഞാൻ ഒരിക്കൽ ചക്കക്കുരു ആയിരുന്നു… അടുപ്പിൽ കിടന്നു പൊട്ടിത്തെറിച്ചു!",
        "പഴയ ജന്മത്തിൽ ഞാൻ സ്കൂൾ ബെൽ ആയിരുന്നു… കുട്ടികൾക്ക് എൻ്റെ ശബ്ദം കേൾക്കുമ്പോൾ മാത്രമായിരുന്നു സന്തോഷം!",
        "ഞാൻ മുമ്പ് Netflix subscription ആയിരുന്നു… എല്ലാവരും എന്നെ share ചെയ്ത് ഉപയോഗിച്ചു!",
        "പഴയ ജന്മത്തിൽ ഞാൻ ഒരു മിക്സി ആയിരുന്നു... എപ്പോഴും തലകറക്കം!",
        "ഞാൻ പണ്ട് തേങ്ങയായിരുന്നു... അവസാനം തലയിൽ അടി കിട്ടി പൊട്ടിപ്പോയി!",
        "മുൻജന്മത്തിൽ ഞാൻ ഒരു മൊബൈൽ ഫോൺ ചാർജർ ആയിരുന്നു... ആർക്കും വേണ്ടാതാകുമ്പോൾ എന്നെ മൂലക്കിടും.",
        "ഞാൻ പണ്ട് ഒരു പഴയ പത്രമായിരുന്നു... ആളുകൾ വായിച്ചു കഴിഞ്ഞാൽ എന്നെക്കൊണ്ട് പലചരക്ക് പൊതിയും."
            ];
    const futureLives = [
         "അടുത്ത ജന്മത്തിൽ ഞാൻ ബാറ്ററി 100% ചാർജ് ഉള്ള പവർ ബാങ്ക് ആകും… പക്ഷെ ആരും ഉപയോഗിക്കില്ല!",
        "ഞാൻ വെന്റിലേറ്ററിൽ കിടക്കുന്ന Wi-Fi റൂട്ടർ ആയി ജനിക്കും – സിഗ്നൽ ഫുൾ, സ്പീഡ് പൂജ്യം!",
        "അടുത്ത ജന്മത്തിൽ ഞാൻ ഓട്ടോ-ക്ലോസ് ഡോർ ആയിരിക്കും… ആളുകൾ പേടിച്ച് നേരത്തെ ഇറങ്ങിപ്പോകും!",
        "ഭാവിയിൽ ഞാൻ സ്വയം എഴുതുന്ന ഉത്തരക്കടലാസ് ആയിരിക്കും… പക്ഷെ ചോദ്യപേപ്പർ ശൂന്യമായിരിക്കും!",
        "അടുത്ത ജന്മത്തിൽ ഞാൻ ഒരു AI ചാറ്റ്ബോട്ട് ആയിരിക്കും… പക്ഷെ എൻ്റെ ഒരേയൊരു മറുപടി: ‘എനിക്കറിയില്ല’ എന്നായിരിക്കും!",
        "ഞാൻ Google Maps-ലെ ചേച്ചിയുടെ ശബ്ദമാകും... പക്ഷെ വഴി മുഴുവൻ തെറ്റിച്ചു പറയും!",
        "വരും ജന്മത്തിൽ ഞാൻ ATM മെഷീൻ ആകും... പൈസക്ക് പകരം നല്ല വാക്കുകൾ മാത്രം തരും!",
        "അടുത്ത ജന്മത്തിൽ ഞാൻ ഒരു ഫയർ അലാറം ആകും... പക്ഷെ തീ വരുമ്പോൾ ഉറക്കെ പാട്ട് പാടും!"
    ];

    // --- Step 4: Select the predictions RANDOMLY ---
    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const myPastLife = getRandomItem(pastLives);
    const myFutureLife = getRandomItem(futureLives);
    

    // --- Step 5: Build and display the output ---
     // ---<h3>The Stars Have Spoken, ${name}!</h3>---
    const outputHTML = `
       
        <p><strong>Past Life:</strong> ${myPastLife}</p>
        <p><strong>Future Life:</strong>  ${myFutureLife}</p>
       
    `;

    outputContainer.style.display = 'block';
    outputContainer.innerHTML = outputHTML;
}

// ADDED: The missing resetForm function
function resetForm() {
    // Clear the input fields
    document.getElementById('question1').value = '';
    document.getElementById('question2').value = '2025-08-09'; // Reset date to default
    document.getElementById('question3').value = '';

    // Hide and clear the output area
    const outputContainer = document.getElementById('output-area');
    if (outputContainer) {
        outputContainer.style.display = 'none';
        outputContainer.innerHTML = '';
    }
}

// FIXED: Removed the extra closing brace that was causing a syntax error
