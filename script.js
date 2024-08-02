// script.js

// Array of questions for the IoT Proficiency Test
// Each question object contains:
// - question: The text of the question
// - options: An array of answer options, each with text and point value
// - correctAnswer: The index of the correct answer in the options array
// - tags: An array of tags associated with the question which describes the category of the question
const questions = [
    {question: "What is the primary goal of IoT?", options: [
        {text: "To replace the internet", points: 0},
        {text: "To connect devices and enable them to communicate", points: 1},
        {text: "To reduce the size of computers", points: 0},
        {text: "To make the internet more secure", points: 0}
    ], correctAnswer: 1, tags: ["intro_iot"]},
    {
        question: "Which protocol is commonly used for communication in IoT devices?",
        options: [
            { text: "FTP", points: 0 },
            { text: "SMP", points: 0 },
            { text: "MQTT", points: 1 },
            { text: "HTTP", points: 0 },
            { text: "I don't know the answer", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["intro_iot"]
    },
    {
        question: "Which of the following is a characteristic of an embedded system?",
        options: [
            { text: "High power consumption", points: 0 },
            { text: "General-purpose computing", points: 0 },
            { text: "Real-time operation", points: 1 },
            { text: "High data storage capacity", points: 0 },
            { text: "I don't know the answer", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["intro_iot"]
    },
    {
        question: "What does a sensor do in an IoT system?",
        options: [
            { text: "Processes data", points: 0 },
            { text: "Transmits data", points: 0 },
            { text: "Measures physical parameters", points: 1 },
            { text: "Stores data", points: 0 },
            { text: "I don't know the answer", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["intro_iot"]
    },
    {
        question: "Which cloud platform is specifically designed for IoT?",
        options: [
            { text: "AWS IoT", points: 1 },
            { text: "AWS S3 IoT", points: 0 },
            { text: "Microsoft Office 365 IoT", points: 0 },
            { text: "Google Drive IoT", points: 0 },
            { text: "I don't know the answer", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["intro_iot"]
    },
    {
        question: "What is edge computing?",
        options: [
            { text: "Storing data in the cloud", points: 0 },
            { text: "Processing data at the edge of the network", points: 1 },
            { text: "Transmitting data over long distances", points: 0 },
            { text: "Enhancing graphic performance", points: 0 },
            { text: "I don't know the answer", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["intro_iot"]
    },
    {
        question: "Which type of network topology is commonly used in IoT?",
        options: [
            { text: "Star Topology", points: 0 },
            { text: "Ring Topology", points: 0 },
            { text: "Bus Topology", points: 0 },
            { text: "Mesh Topology", points: 1 },
            { text: "I don't know the answer", points: 0 }
        ],
        correctAnswer: 3,
        tags: ["intro_iot"]
    },
    {
        question: "What is the primary function of actuators in an IoT system?",
        options: [
            { text: "Sensing environment data", points: 0 },
            { text: "Processing data", points: 0 },
            { text: "Performing physical actions", points: 1 },
            { text: "Storing data", points: 0 },
            { text: "I don't know the answer", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["intro_iot"]
    },
    {
        question: "Which security measure is crucial for IoT devices?",
        options: [
            { text: "Data encryption", points: 1 },
            { text: "High-resolution display", points: 0 },
            { text: "Fast processing speed", points: 0 },
            { text: "Large storage capacity", points: 0 },
            { text: "I don't know the answer", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["intro_iot"]
    },
    {
        question: "What is an example of an IoT application in healthcare?",
        options: [
            { text: "Smart thermostats", points: 0 },
            { text: "Wearable health monitors", points: 1 },
            { text: "Autonomous vehicles", points: 0 },
            { text: "Online gaming", points: 0 },
            { text: "I don't know the answer", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["intro_iot"]
    },
    {
        question: "What is the primary function of a sensor in an IoT system?",
        options: [
            { text: "To process data", points: 0 },
            { text: "To measure physical parameters and convert them into electrical signals", points: 1 },
            { text: "To store data", points: 0 },
            { text: "To secure data", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["sensors_actuators"]
    },
    {
        question: "Which of the following is a common type of temperature sensor used in IoT applications?",
        options: [
            { text: "LDR", points: 0 },
            { text: "DHT22", points: 1 },
            { text: "Accelerometer", points: 0 },
            { text: "Gyroscope", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["sensors_actuators"]
    },
    {
        question: "What does an actuator do in an IoT system?",
        options: [
            { text: "Measures data from the environment", points: 0 },
            { text: "Convert electrical signals into physical actions", points: 1 },
            { text: "Stores and processes data", points: 0 },
            { text: "Transmit data to the cloud", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["sensors_actuators"]
    },
    {
        question: "Which sensor is commonly used to detect motion?",
        options: [
            { text: "Thermistor", points: 0 },
            { text: "PIR sensor", points: 1 },
            { text: "Pressure sensor", points: 0 },
            { text: "Humidity sensor", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["sensors_actuators"]
    },
    {
        question: "Which of the following is an application of an ultrasonic sensor in IoT?",
        options: [
            { text: "Temperature measure", points: 0 },
            { text: "Distance measurement", points: 1 },
            { text: "Light intensity detection", points: 0 },
            { text: "Gas detection", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["sensors_actuators"]
    },
    {
        question: "Which type of actuator would be used to control a valve in a smart irrigation system?",
        options: [
            { text: "DC motor", points: 0 },
            { text: "Solenoid valve", points: 1 },
            { text: "Servo motor", points: 0 },
            { text: "Stepper motor", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["sensors_actuators"]
    },
    {
        question: "How does a capacitive touch sensor work?",
        options: [
            { text: "Measure changes in resistance", points: 0 },
            { text: "Detect changes in capacitance when touched", points: 1 },
            { text: "Uses infrared light to detect objects", points: 0 },
            { text: "Measure the intensity of light", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["sensors_actuators"]
    },
    {
        question: "Which sensor can be used to measure the tilt or orientation of a device?",
        options: [
            { text: "Proximity sensor", points: 0 },
            { text: "Accelerometer", points: 1 },
            { text: "Hygrometer", points: 0 },
            { text: "Thermocouple", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["sensors_actuators"]
    },
    {
        question: "Which type of sensor would you use to measure air quality?",
        options: [
            { text: "Barometer", points: 0 },
            { text: "MQ135", points: 1 },
            { text: "Ultrasonic sensor", points: 0 },
            { text: "LDR", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["sensors_actuators"]
    },
    {
        question: "Which of the following is an example of a piezoelectric application?",
        options: [
            { text: "Detecting light intensity", points: 0 },
            { text: "Measuring sound and vibrations", points: 1 },
            { text: "Monitoring temperature", points: 0 },
            { text: "Measuring humidity", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["sensors_actuators"]
    },
    {
        question: "What is a microcontroller?",
        options: [
            { text: "A high-performance computing unit", points: 0 },
            { text: "A compact integrated circuit designed to govern a specific operation in an embedded system", points: 1 },
            { text: "A type of memory used in computers", points: 0 },
            { text: "A network communication protocol", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["embedded_systems"]
    },
    {
        question: "What development board is specifically designed for easy use in embedded projects and prototyping?",
        options: [
            { text: "Arduino", points: 1 },
            { text: "Supercomputer", points: 0 },
            { text: "Mainframe", points: 0 },
            { text: "GPU", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["embedded_systems"]
    },
    {
        question: "What is the difference between a Microprocessor and a Microcontroller?",
        options: [
            { text: "Microprocessor contain integrated peripherals like timers and ADCs", points: 0 },
            { text: "Microcontrollers are used for general-purpose computing", points: 0 },
            { text: "Microcontrollers are designed for specific control applications", points: 0 },
            { text: "Microcontrollers include integrated peripherals and memory, while microprocessors do not", points: 1 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 3,
        tags: ["embedded_systems"]
    },
    {
        question: "Which programming language is commonly used to program Arduino boards?",
        options: [
            { text: "Python", points: 0 },
            { text: "C++", points: 1 },
            { text: "JavaScript", points: 0 },
            { text: "HTML", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["embedded_systems"]
    },
    {
        question: "What is the primary advantage of using Raspberry Pi in embedded systems?",
        options: [
            { text: "High power consumption", points: 0 },
            { text: "Large physical size", points: 0 },
            { text: "General-purpose computing capability with multiple I/O options", points: 1 },
            { text: "Lack of peripheral support", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["embedded_systems"]
    },
    {
        question: "Which microcontroller series is used in most Arduino boards?",
        options: [
            { text: "Intel i7", points: 0 },
            { text: "ATmega", points: 1 },
            { text: "ARM Cortex-A", points: 0 },
            { text: "AMD Ryzen", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["embedded_systems"]
    },
    {
        question: "What operating system is commonly used on Raspberry Pi?",
        options: [
            { text: "Windows 10", points: 0 },
            { text: "macOS", points: 0 },
            { text: "Raspbian (Raspberry Pi OS)", points: 1 },
            { text: "Android", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["embedded_systems"]
    },
    {
        question: "In an embedded system, what is the role of a bootloader?",
        options: [
            { text: "To manage network communications", points: 0 },
            { text: "To initialize the hardware and load the operating system", points: 1 },
            { text: "To store user data", points: 0 },
            { text: "To compile source code", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["embedded_systems"]
    },
    {
        question: "Which of the following is an example of a real-time operating system (RTOS) used in embedded systems?",
        options: [
            { text: "Windows 10", points: 0 },
            { text: "FreeRTOS", points: 1 },
            { text: "Ubuntu", points: 0 },
            { text: "FedoraTOS", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["embedded_systems"]
    },
    {
        question: "What is the main use of GPIO pins on a development board like Raspberry Pi?",
        options: [
            { text: "To connect to external storage", points: 0 },
            { text: "To provide graphical output", points: 0 },
            { text: "To interface with external sensors and actuators", points: 1 },
            { text: "To enhance network connectivity", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["embedded_systems"]
    },
    {
        question: "What is the first step in data processing?",
        options: [
            { text: "Data visualization", points: 0 },
            { text: "Data collection", points: 1 },
            { text: "Data analysis", points: 0 },
            { text: "Data cleaning", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["dataprocessing_analysis"]
    },
    {
        question: "Which of the following is a common data processing framework used for big data?",
        options: [
            { text: "Django", points: 0 },
            { text: "Angular", points: 0 },
            { text: "Hadoop", points: 1 },
            { text: "React", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["dataprocessing_analysis"]
    },
    {
        question: "What is the main purpose of data cleaning?",
        options: [
            { text: "To visualize data", points: 0 },
            { text: "To remove errors and inconsistencies from data", points: 1 },
            { text: "To collect data from various sources", points: 0 },
            { text: "To store data in databases", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["dataprocessing_analysis"]
    },
    {
        question: "Which type of data analytics focuses on understanding past data to identify trends and patterns?",
        options: [
            { text: "Predictive analytics", points: 0 },
            { text: "Descriptive analytics", points: 1 },
            { text: "Prescriptive analytics", points: 0 },
            { text: "Diagnostic analytics", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["dataprocessing_analysis"]
    },
    {
        question: "What does ETL stand for in data processing?",
        options: [
            { text: "Extract, Transform and Load", points: 1 },
            { text: "Execute, Transfer, Load", points: 0 },
            { text: "Extract, Transfer, Load", points: 0 },
            { text: "Execute, Transform, Learn", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["dataprocessing_analysis"]
    },
    {
        question: "Which tool is widely used for data visualization?",
        options: [
            { text: "TensorFlow", points: 0 },
            { text: "Tableau", points: 1 },
            { text: "MongoDB", points: 0 },
            { text: "Flask", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["dataprocessing_analysis"]
    },
    {
        question: "What is the primary function of a data warehouse?",
        options: [
            { text: "To process real-time data", points: 0 },
            { text: "To store large volumes of historical data for analysis", points: 1 },
            { text: "To clean and prepare data for processing", points: 0 },
            { text: "To visualize data", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["dataprocessing_analysis"]
    },
    {
        question: "In the context of data analytics, what is a \"data lake\"?",
        options: [
            { text: "A centralized repository for structured and unstructured data", points: 1 },
            { text: "A tool for real-time data analysis", points: 0 },
            { text: "A type of database optimized for read operations", points: 0 },
            { text: "A method for cleaning data", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["dataprocessing_analysis"]
    },
    {
        question: "Which algorithm is commonly used for clustering in data analytics?",
        options: [
            { text: "Linear regression", points: 0 },
            { text: "K-means", points: 1 },
            { text: "Decision tree", points: 0 },
            { text: "Naive Bayes", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["dataprocessing_analysis"]
    },
    {
        question: "What is the purpose of data normalization in processing?",
        options: [
            { text: "To enhance the visual appearance of data", points: 0 },
            { text: "To scale data to a common range without distorting differences in ranges of values", points: 1 },
            { text: "To collect data from multiple sources", points: 0 },
            { text: "To store data in different formats", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["dataprocessing_analysis"]
    },
    {
        question: "Which of the following is an example of AI application in IoT?",
        options: [
            { text: "Predictive maintenance", points: 1 },
            { text: "Video streaming", points: 0 },
            { text: "Email filtering", points: 0 },
            { text: "File compression", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["ai_and_iot"]
    },
    {
        question: "Which AI technology is commonly used for recognizing patterns and anomalies in IoT data?",
        options: [
            { text: "Neural networks", points: 1 },
            { text: "Linear regression", points: 0 },
            { text: "Decision trees", points: 0 },
            { text: "K-means clustering", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["ai_and_iot"]
    },
    {
        question: "What is the main benefit of using AI for predictive maintenance in IoT?",
        options: [
            { text: "It increases the size of IoT devices", points: 0 },
            { text: "It helps predict and prevent equipment failures before they occur", points: 1 },
            { text: "It reduces the need for data storage", points: 0 },
            { text: "It eliminates the need for sensors", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["ai_and_iot"]
    },
    {
        question: "Which of the following best describes a smart home system integrating AI and IoT?",
        options: [
            { text: "A home with high-speed internet", points: 0 },
            { text: "A home with automated control of appliances based on users habits and preferences", points: 1 },
            { text: "A home with multiple television sets", points: 0 },
            { text: "A home with a large number of rooms", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["ai_and_iot"]
    },
    {
        question: "What is a common use case of AI in IoT for healthcare?",
        options: [
            { text: "Automated vacuum cleaners", points: 0 },
            { text: "Remote patient monitoring and diagnostics", points: 1 },
            { text: "Autonomous driving", points: 0 },
            { text: "Online shopping recommendations", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["ai_and_iot"]
    },
    {
        question: "What does the combination of AI and IoT commonly refer to?",
        options: [
            { text: "Big data", points: 0 },
            { text: "Cybersecurity", points: 0 },
            { text: "Smart technology", points: 0 },
            { text: "AIoT (Artificial Intelligence of Things)", points: 1 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 3,
        tags: ["ai_and_iot"]
    },
    {
        question: "What is a common use case of AI and IoT in agriculture?",
        options: [
            { text: "Monitoring and optimizing crop growth conditions", points: 1 },
            { text: "Enhancing social media engagement", points: 0 },
            { text: "Automating financial transactions", points: 0 },
            { text: "Developing new video games", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["ai_and_iot"]
    },
    {
        question: "What is the primary purpose of encryption in IoT systems?",
        options: [
            { text: "To improve data transmission speed", points: 0 },
            { text: "To compress data", points: 0 },
            { text: "To protect data from unauthorized access", points: 1 },
            { text: "To increase storage capacity", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["encryption"]
    },
    {
        question: "Which of the following is a widely used encryption algorithm?",
        options: [
            { text: "RSA", points: 1 },
            { text: "HTML", points: 0 },
            { text: "FTP", points: 0 },
            { text: "HTTP", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["encryption"]
    },
    {
        question: "What is two-factor authentication (2FA)?",
        options: [
            { text: "A method of compressing data", points: 0 },
            { text: "A single-step authentication process", points: 0 },
            { text: "A security process that requires two different forms of identification", points: 1 },
            { text: "A data encryption technique", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["encryption"]
    },
    {
        question: "Which protocol is used to secure data transmitted over the internet?",
        options: [
            { text: "HTTP", points: 0 },
            { text: "SMTP", points: 0 },
            { text: "HTTPS", points: 1 },
            { text: "FTP", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["encryption"]
    },
    {
        question: "What does SSL stand for in secure communication protocols?",
        options: [
            { text: "Secure Sockets Layer", points: 1 },
            { text: "Simple Sockets Layer", points: 0 },
            { text: "Secure System Link", points: 0 },
            { text: "Simple System Link", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["encryption"]
    },
    {
        question: "Which of the following is an example of symmetric encryption?",
        options: [
            { text: "RSA", points: 0 },
            { text: "AES", points: 1 },
            { text: "DSA", points: 0 },
            { text: "ECC", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["encryption"]
    },
    {
        question: "What is the main function of a firewall in a network?",
        options: [
            { text: "To encrypt data", points: 0 },
            { text: "To authenticate users", points: 0 },
            { text: "To block unauthorized access while permitting outward communication", points: 1 },
            { text: "To increase data transmission speed", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["encryption"]
    },
    {
        question: "Which protocol provides end-to-end security in IoT communication?",
        options: [
            { text: "FTP", points: 0 },
            { text: "MQTT with TLS", points: 1 },
            { text: "HTTP without encryption", points: 0 },
            { text: "SMTP without encryption", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["encryption"]
    },
    {
        question: "What does the term \"man-in-the-middle\" attack refer to?",
        options: [
            { text: "A type of data compression", points: 0 },
            { text: "An attack where the attacker secretly intercepts and relays messages between two parties", points: 1 },
            { text: "A method of data encryption", points: 0 },
            { text: "A network protocol", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["encryption"]
    },
    {
        question: "Which of the following techniques can be used to ensure data integrity?",
        options: [
            { text: "Data compression", points: 0 },
            { text: "Hashing", points: 1 },
            { text: "Data duplication", points: 0 },
            { text: "Data mining", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["encryption"]
    },
    {
        question: "What is the main benefit of using cloud services for IoT data management?",
        options: [
            { text: "Improve local storage capacity", points: 0 },
            { text: "Enhanced data accessibility and scalability", points: 1 },
            { text: "Increased hardware costs", points: 0 },
            { text: "Reduce internet connectivity", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["cloud_integration"]
    },
    {
        question: "Which of the following is a popular cloud platform for IoT?",
        options: [
            { text: "AWS IoT Core", points: 1 },
            { text: "MySQL", points: 0 },
            { text: "Apache Hadoop", points: 0 },
            { text: "GitHub", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["cloud_integration"]
    },
    {
        question: "Which protocol is commonly used for sending IoT data to the cloud?",
        options: [
            { text: "FTP", points: 0 },
            { text: "HTTP", points: 0 },
            { text: "MQTT", points: 1 },
            { text: "SMTP", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["cloud_integration"]
    },
    {
        question: "What is the role of a cloud-based IoT platform?",
        options: [
            { text: "To control only the hardware components", points: 0 },
            { text: "To store, process and analyze data from IoT devices", points: 1 },
            { text: "To design IoT hardware", points: 0 },
            { text: "To provide local data storage", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["cloud_integration"]
    },
    {
        question: "What is the main advantage of using serverless computing for IoT applications in the cloud?",
        options: [
            { text: "Increase need for server maintenance", points: 0 },
            { text: "Enhance scalability and reduced operational overhead", points: 1 },
            { text: "Reduced data security", points: 0 },
            { text: "Increase complexity in deployment", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["cloud_integration"]
    },
    {
        question: "What does the term \"Device shadow\" refer to in AWS IoT?",
        options: [
            { text: "A backup copy of the device firmware", points: 0 },
            { text: "A virtual representation of the device's state", points: 1 },
            { text: "A hardware component for data processing", points: 0 },
            { text: "A cloud-based data storage solution", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["cloud_integration"]
    },
    {
        question: "What is the primary goal of edge computing?",
        options: [
            { text: "To increase data storage in the cloud", points: 0 },
            { text: "To process data closer to where it is generated", points: 1 },
            { text: "To reduce the number of IoT devices", points: 0 },
            { text: "To centralize data processing", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["edge_computing"]
    },
    {
        question: "Which of the following is a key advantage of edge computing?",
        options: [
            { text: "Increased latency", points: 0 },
            { text: "Reduced bandwidth usage", points: 1 },
            { text: "Higher cost", points: 0 },
            { text: "Increased dependence on central servers", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["edge_computing"]
    },
    {
        question: "Which device is commonly used for edge computing?",
        options: [
            { text: "Mainframe", points: 0 },
            { text: "Microcontroller", points: 0 },
            { text: "Edge gateway", points: 1 },
            { text: "Smartphone", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["edge_computing"]
    },
    {
        question: "How does edge computing improve data privacy?",
        options: [
            { text: "By storing all data in a central location", points: 0 },
            { text: "By processing sensitive data locally before sending it to the cloud", points: 1 },
            { text: "By using public networks", points: 0 },
            { text: "By eliminating the need for encryption", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["edge_computing"]
    },
    {
        question: "What is a use case for edge computing in smart cities?",
        options: [
            { text: "Streaming high-definition videos", points: 0 },
            { text: "Autonomous vehicle and traffic management", points: 1 },
            { text: "Online shopping", points: 0 },
            { text: "Email communication", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["edge_computing"]
    },
    {
        question: "Which of the following is not a benefit of edge computing?",
        options: [
            { text: "Lower latency", points: 0 },
            { text: "Enhanced real-time data processing", points: 0 },
            { text: "Reduced data transfer costs", points: 0 },
            { text: "Increased reliance on distant data centers", points: 1 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 3,
        tags: ["edge_computing"]
    },
    {
        question: "What does the term \"latency\" refer to in the context of edge computing?",
        options: [
            { text: "The speed at which data is stored", points: 0 },
            { text: "The delay between data generation and processing", points: 1 },
            { text: "The amount of data transferred", points: 0 },
            { text: "The cost of data processing", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["edge_computing"]
    },
    {
        question: "How does edge computing support IoT applications?",
        options: [
            { text: "By increasing the power consumption of devices", points: 0 },
            { text: "By processing and analyzing data locally, reducing the need for constant cloud connectivity", points: 1 },
            { text: "By reducing the number of connected devices", points: 0 },
            { text: "By eliminating the need for sensors", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["edge_computing"]
    },
    {
        question: "Which of the following best describes a \"fog node\"?",
        options: [
            { text: "A central data center in a cloud computing environment", points: 0 },
            { text: "An intermediate processing device between the cloud and IoT devices", points: 1 },
            { text: "A type of sensor used in edge computing", points: 0 },
            { text: "A protocol for secure data transmission", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["edge_computing"]
    },
    {
        question: "Which of the following is a common application of IoT in smart homes?",
        options: [
            { text: "Automated email filtering", points: 0 },
            { text: "Remote monitoring and control of home appliances", points: 1 },
            { text: "Developing new pharmaceuticals", points: 0 },
            { text: "High-speed gaming", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["iot_application"]
    },
    {
        question: "How does IoT improve patient care in healthcare?",
        options: [
            { text: "By replacing doctors with robots", points: 0 },
            { text: "By enabling remote monitoring and real-time health data analysis", points: 1 },
            { text: "By increasing hospital wait time", points: 0 },
            { text: "By elimination the need for medical records", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["iot_application"]
    },
    {
        question: "What is a key benefit of using IoT in agriculture?",
        options: [
            { text: "Higher gaming experience", points: 0 },
            { text: "Increase social media engagement", points: 0 },
            { text: "Precision farming and resource optimization", points: 1 },
            { text: "Enhanced video streaming", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["iot_application"]
    },
    {
        question: "Which IoT application is commonly used in retail?",
        options: [
            { text: "Inventory management and automated restocking", points: 1 },
            { text: "Autonomous driving", points: 0 },
            { text: "Virtual reality gaming", points: 0 },
            { text: "Online education", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["iot_application"]
    },
    {
        question: "Which type of sensors are commonly used in smart irrigation systems?",
        options: [
            { text: "Temperature sensors", points: 0 },
            { text: "Moisture sensors", points: 1 },
            { text: "Light sensors", points: 0 },
            { text: "Sound sensors", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["iot_application"]
    },
    {
        question: "Which IoT application helps in reducing energy consumption in buildings?",
        options: [
            { text: "Smart lighting and HVAC systems", points: 1 },
            { text: "High-resolution display systems", points: 0 },
            { text: "Advanced gaming consoles", points: 0 },
            { text: "High-speed internet routers", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["iot_application"]
    },
    {
        question: "How does IoT contribute to smart city initiatives?",
        options: [
            { text: "By providing free Wi-Fi to all citizens", points: 0 },
            { text: "By monitoring and managing city infrastructure in real-time", points: 1 },
            { text: "By offering discount on utilities", points: 0 },
            { text: "By increasing the number of cars on the road", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["iot_application"]
    },
    {
        question: "Which IoT application is used for environmental monitoring?",
        options: [
            { text: "Wearable fitness trackers", points: 0 },
            { text: "Air and water quality sensors", points: 1 },
            { text: "Smart thermostats", points: 0 },
            { text: "E-commerce websites", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 1,
        tags: ["iot_application"]
    },
    {
        question: "What is the advantage of using IoT in industrial automation?",
        options: [
            { text: "Increased manual labor", points: 0 },
            { text: "Reduced operational efficiency", points: 0 },
            { text: "Enhanced predictive maintenance and operational efficiency", points: 1 },
            { text: "Increased production cost", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 2,
        tags: ["iot_application"]
    },
    {
        question: "Which technology is often integrated with IoT for enhanced data analysis?",
        options: [
            { text: "AI", points: 1 },
            { text: "VR", points: 0 },
            { text: "AR", points: 0 },
            { text: "Blockchain", points: 0 },
            { text: "I don't know", points: 0 }
        ],
        correctAnswer: 0,
        tags: ["iot_application"]
    }

];

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to select two random questions from each tag
function selectQuestionsForQuiz() {
    const tags = ["intro_iot", "component_architecture", "Network_Communication", "sensors_actuators", "embedded_systems", "dataprocessing_analysis", "ai_and_iot", "encryption", "cloud_integration", "edge_computing", "iot_application"];
    let selectedQuestions = [];

    tags.forEach(tag => {
        const questionsWithTag = questions.filter(q => q.tags.includes(tag));
        shuffleArray(questionsWithTag);
        selectedQuestions = selectedQuestions.concat(questionsWithTag.slice(0, 2));
    });

    shuffleArray(selectedQuestions);
    return selectedQuestions;
}

// Variables to keep track of the current question and the questions for the quiz
let currentQuestionIndex = 0;
let quizQuestions;

// Function that runs when the window loads
window.onload = function() {
    console.log("Window loaded");
    questionsContainer = document.getElementById('questions-container');
    const submitButton = document.querySelector('button[onclick="submitQuiz()"]');
    const progressBar = document.getElementById('progress-bar');
    
    // Check if necessary elements are present
    if (!questionsContainer) {
        console.error("Questions container not found");
        return;
    }
    
    if (!submitButton) {
        console.error("Submit button not found");
    } else {
        submitButton.style.display = 'none'; // Hide submit button initially
    }
    
    if (!progressBar) {
        console.error("Progress bar not found");
    }
    
    console.log("Selecting questions for the quiz");
    quizQuestions = selectQuestionsForQuiz();
    console.log("Rendering first question");
    renderQuestion();
    console.log("Updating progress bar");
    updateProgressBar();
    updateSubmitButtonVisibility();
};

// Function to render the current question
function renderQuestion() {
    console.log("Rendering question", currentQuestionIndex);
    if (!questionsContainer) {
        console.error("Questions container is not available");
        return;
    }
    questionsContainer.innerHTML = ''; // Clear previous question
    
    if (currentQuestionIndex >= quizQuestions.length) {
        console.error("Current question index out of bounds");
        return;
    }
    
    const q = quizQuestions[currentQuestionIndex];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionTitle = document.createElement('h3');
    questionTitle.innerText = `Question ${currentQuestionIndex + 1}: ${q.question}`;
    questionDiv.appendChild(questionTitle);

    // Shuffle options
    const shuffledOptions = [...q.options];
    shuffleArray(shuffledOptions);

    // Create radio buttons for each option
    shuffledOptions.forEach((option, optionIndex) => {
        const label = document.createElement('label');
        label.innerText = option.text;
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question${currentQuestionIndex}`;
        input.value = optionIndex;
        input.addEventListener('change', handleOptionSelect); // Add event listener

        // Check if this option was previously selected
        if (q.userAnswer !== undefined && q.userAnswer === optionIndex) {
            input.checked = true;
        }

        label.prepend(input);
        questionDiv.appendChild(label);
        questionDiv.appendChild(document.createElement('br'));
    });

    questionsContainer.appendChild(questionDiv);

    // Update navigation buttons
    updateNavigationButtons();
}

// Function to handle option selection
function handleOptionSelect(event) {
    // Store the selected answer
    const selectedOption = parseInt(event.target.value);
    quizQuestions[currentQuestionIndex].userAnswer = selectedOption;
    
    // Update progress bar after answering
    updateProgressBar();
    
    // Check if all questions are answered and update submit button visibility
    updateSubmitButtonVisibility();
}

// Function to update navigation buttons
function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    if (prevButton) prevButton.onclick = prevQuestion;
    if (nextButton) nextButton.onclick = nextQuestion;

    if (prevButton) prevButton.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    if (nextButton) nextButton.style.display = currentQuestionIndex < quizQuestions.length - 1 ? 'inline-block' : 'none';

    // Update button styles based on whether the question is answered
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isAnswered = currentQuestion.userAnswer !== undefined;

    if (prevButton) prevButton.classList.toggle('answered', isAnswered);
    if (nextButton) nextButton.classList.toggle('answered', isAnswered);
}

// Function to update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const answeredQuestions = quizQuestions.filter(q => q.userAnswer !== undefined).length;
        const progress = (answeredQuestions / quizQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress);
        progressBar.textContent = `${Math.round(progress)}%`;
    }
}

// Function to update submit button visibility
function updateSubmitButtonVisibility() {
    const submitButton = document.querySelector('button[onclick="submitQuiz()"]');
    const allAnswered = quizQuestions.every(q => q.userAnswer !== undefined);
    
    if (submitButton) {
        submitButton.style.display = allAnswered ? 'inline-block' : 'none';
    }
}

// Function to go to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateProgressBar();
    }
}

// Function to go to the next question
function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        updateProgressBar();
    }
}

// Function to handle quiz submission
function submitQuiz() {
    let score = 0;

    quizQuestions.forEach((q, index) => {
        if (q.userAnswer !== undefined) {
            score += q.options[parseInt(q.userAnswer)].points;
        }
    });

    displayResult(score);
}

// Update the displayResult function to account for the new total number of questions
function displayResult(score) {
    const resultDiv = document.getElementById('result');
    const scoreSpan = document.getElementById('score');
    const levelP = document.getElementById('level');

    scoreSpan.innerText = `${score} / ${quizQuestions.length}`;

    if (score <= 7) {
        levelP.innerText = "You are a Beginner in IoT.";
    } else if (score <= 14) {
        levelP.innerText = "You are at an Intermediate level in IoT.";
    } else {
        levelP.innerText = "You are at an Advanced level in IoT.";
    }

    resultDiv.classList.remove('hidden');

    // Add restart option
    const restartDiv = document.createElement('div');
    restartDiv.innerHTML = `
        <p>Would you like to restart the test?</p>
        <button onclick="restartQuiz()">Restart</button>
        <button onclick="finishQuiz()">Finish</button>
    `;
    resultDiv.appendChild(restartDiv);

    // Hide the submit button
    document.querySelector('button[onclick="submitQuiz()"]').style.display = 'none';
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    const resultDiv = document.getElementById('result');
    resultDiv.classList.add('hidden');
    resultDiv.innerHTML = `
        <h2>Your Score: <span id="score"></span></h2>
        <p id="level"></p>
    `;

    quizQuestions = selectQuestionsForQuiz();
    renderQuestion();
    updateProgressBar();
    document.querySelector('button[onclick="submitQuiz()"]').style.display = 'none';
    document.getElementById('navigation').style.display = 'block';
}

// Function to finish the quiz
function finishQuiz() {
    questionsContainer.innerHTML = '<h2>Thank you for taking the IoT Proficiency Test!</h2>';
}
