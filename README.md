# Real-Time Text Analysis and String Replacement

## Project Overview
This project is a React application that provides real-time text analysis and string replacement functionality. Users can input text into a large textarea, and the app dynamically displays the following statistics and features:
- **Unique Word Count**: The number of unique words in the input (case-insensitive).
- **Character Count (Excluding Spaces and Punctuation)**: The total number of characters excluding spaces and punctuation.
- **String Replacement**: Users can replace specific strings within the text.

## Features
1. **Unique Word Count**:
   - Counts the number of unique words in the textarea.
   - Case-insensitive comparison (e.g., "Hello" and "hello" are considered the same word).

2. **Character Count (Excluding Spaces and Punctuation)**:
   - Displays the number of characters excluding spaces and punctuation (only letters and numbers are counted).

3. **String Replacement**:
   - Two input fields for string replacement:
     1. Search string.
     2. Replacement string.
   - A "Replace All" button that replaces all occurrences of the search string with the replacement string. This feature is case-sensitive.

4. **Bonus Feature** (Optional):
   - Highlights the replaced words in the textarea.

## Technical Requirements
- Built using React with functional components and hooks.
- Clean and responsive UI to ensure optimal user experience across different devices.

