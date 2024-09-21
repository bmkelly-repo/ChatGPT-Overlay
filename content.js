// Inject the Prompt Manager HTML
const overlayDiv = document.createElement('div');
overlayDiv.innerHTML = `
  <div id="prompt-manager-overlay">
      <div id="prompt-manager-header">
          <h2>Prompt Manager</h2>
          <input type="text" id="search-input" placeholder="Search prompts...">
      </div>
      <div id="prompt-results"></div>
      <div id="preset-prefixes">
          <label for="prefix-select">Select a prefix:</label>
          <select id="prefix-select">
              <option value="">None</option>
              <option value="Be concise and formal">Be concise and formal</option>
              <option value="Explain as a teacher">Explain as a teacher</option>
          </select>
      </div>
  </div>
`;
// Listen for messages from popup.html
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'openOverlay') {
        // Check if the overlay is already on the page, and if not, append it
        if (!document.getElementById('prompt-manager-overlay')) {
            document.body.appendChild(overlayDiv);
        }
        // Optionally, you can also focus on the overlay or make it visible again if hidden
        const overlay = document.getElementById('prompt-manager-overlay');

        // Scroll the overlay into view if it's not in focus
        overlay.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Optionally, set focus on the input field within the overlay
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus(); // Set focus on the input field
        }
    }
});


// Load previous prompts from local storage
const previousPrompts = JSON.parse(localStorage.getItem('previousPrompts')) || [];
const searchInput = document.getElementById('search-input');
const promptResults = document.getElementById('prompt-results');
const prefixSelect = document.getElementById('prefix-select');

// Function to display prompts based on search
function searchPrompts() {
    const query = searchInput.value.toLowerCase();
    promptResults.innerHTML = '';
    const filteredPrompts = previousPrompts.filter(prompt => prompt.toLowerCase().includes(query));
    filteredPrompts.forEach(prompt => {
        const promptDiv = document.createElement('div');
        promptDiv.textContent = prompt;
        promptResults.appendChild(promptDiv);
    });
}

// Event listener for search input
searchInput.addEventListener('input', searchPrompts);

// Save a new prompt to local storage
function savePrompt(newPrompt) {
    previousPrompts.push(newPrompt);
    localStorage.setItem('previousPrompts', JSON.stringify(previousPrompts));
}

// Function to add a preset prefix to the prompt
function applyPrefix(prompt) {
    const prefix = prefixSelect.value;
    return prefix ? `${prefix}: ${prompt}` : prompt;
}

