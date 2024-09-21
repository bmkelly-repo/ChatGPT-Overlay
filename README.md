# ChatGPT Prompt Manager Chrome Extension

This Chrome extension adds a customizable overlay to any webpage, allowing users to easily manage, search, and apply prompt presets when interacting with ChatGPT or similar AI models. The extension is designed to enhance productivity by streamlining the prompt input process and offering features like prompt history search and style-based preset prefixes.

## Features:
- **Search Previous Prompts:** Quickly search through previously used prompts for easy reuse.
- **Preset Prefixes:** Apply preset prompt styles (e.g., "Be concise and formal", "Explain as a teacher") to adjust ChatGPT's response style.
- **Overlay Interface:** A non-intrusive floating window that can be accessed on any webpage where ChatGPT is active.
- **Local Storage:** Automatically saves your prompt history for fast retrieval.
- **Customizable Prefixes:** Easily add or modify preset prefixes to suit your needs.

## How to Use:
1. Install the extension by loading it into Chrome via Developer Mode.
2. Access the Prompt Manager by visiting any webpage where you interact with ChatGPT.
3. Use the search bar to find previous prompts or select a preset prefix to enhance the prompt style.
4. Prompts are stored locally in your browser's storage, ensuring quick access in future sessions.

## Installation:
1. Clone the repository or download the ZIP.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension is now ready to use.

## File Structure:
- `manifest.json`: Defines the extension's metadata and permissions.
- `content.js`: Injects the Prompt Manager overlay into the webpage and handles search/prefix logic.
- `styles.css`: Basic styling for the overlay.
- (Optional) `popup.html`: A browser action popup for additional functionality.
- `icons/`: Folder containing icons for the extension (if needed).

## Future Enhancements:
- Sync prompt history across devices using Chrome's `chrome.storage.sync`.
- Add more advanced customization for prompt prefixes.
- Provide integration with ChatGPT API for direct interaction through the overlay.
