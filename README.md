# WaziUp IoT Proficiency Test

## Project Overview

This project was developed during an internship at WaziUp in Dresden (2023). It's an interactive web-based assessment tool designed to evaluate knowledge and understanding of Internet of Things (IoT) concepts across various domains.

## Features

- **Dynamic Question Selection**: Automatically selects questions from multiple IoT domains
- **Progress Tracking**: Real-time progress monitoring during the test
- **Instant Feedback**: Immediate scoring and proficiency level assessment
- **Responsive Design**: Works across different devices and screen sizes
- **Accessibility**: Implements ARIA labels and keyboard navigation
- **Restart Capability**: Option to retake the test with new questions

## Technical Implementation

### Architecture

- **Frontend**: Pure JavaScript, HTML5, and CSS3
- **State Management**: Custom Quiz class for managing application state
- **Question Bank**: Structured collection of IoT-related questions
- **UI Components**: Dynamic rendering with accessibility support

### Question Categories

1. Introduction to IoT
2. Component Architecture
3. Network Communication
4. Sensors & Actuators
5. Embedded Systems
6. Data Processing & Analysis
7. AI and IoT Integration
8. Encryption & Security
9. Cloud Integration
10. Edge Computing
11. IoT Applications

### Scoring System

- Questions are weighted based on difficulty
- Proficiency levels:
  - Beginner (0-7 points)
  - Intermediate (8-14 points)
  - Advanced (15+ points)

## Setup and Usage

1. Clone the repository
2. Open `index.html` in a web browser
3. Start the quiz and answer questions
4. View results and proficiency level
5. Option to restart or finish

## Development

### File Structure

- `index.html`: Main entry point and UI structure
- `style.css`: Styling and responsive design
- `script.js`: Core functionality and quiz logic
- `questions.js`: Question bank and categories

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes following the existing code structure
4. Add appropriate comments
5. Submit a pull request

### Adding New Questions

Questions should follow this format:

```javascript
{
    question: "Question text",
    options: [
        { text: "Option 1", points: 0 },
        { text: "Option 2", points: 1 },
        // ...
    ],
    correctAnswer: 1,
    tags: ["category_tag"]
}
```

## About WaziUp

WaziUp is an organization focused on IoT innovation and education. This proficiency test was developed as part of their initiative to assess and improve IoT knowledge among practitioners and students.

## License

MIT License

Copyright (c) 2023 WaziUp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

## Contact

WaziUp Dresden
Email: info@waziup.org
Website: https://www.waziup.eu/

## Acknowledgments

- WaziUp Dresden team
- Internship supervisors Dr. Abdul Rahim and Johann Wagner
- Contributors to the question bank
