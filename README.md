#View MindBridge
You can access the MindBridge website via https://mindbridge.study, simply login with your email and enjoy the project!

# MindBridge

MindBridge is an innovative communication aid designed for non-verbal autistic children, empowering them to express their needs and emotions. Our application utilizes intuitive design, advanced machine learning for text-to-speech capabilities, and real-time messaging to create a supportive environment for children, caregivers, and parents.

## Features

- **User-Friendly Interface**: Large buttons and customizable, soothing color schemes tailored to the sensory preferences of autistic children.
- **Real-Time Communication**: Implemented using Twilio's API, allowing for instant updates and messaging between children and their caregivers.
- **AI-Driven Speech**: A machine learning text-to-speech system that provides a natural and comforting voice for the children's expressed needs.
- **Data Security**: User data is securely stored with MongoDB, with plans to integrate Auth0 for robust authentication.
- **Accessible Anywhere**: Hosted with a custom GoDaddy domain to ensure global accessibility.

## Installation
Clone the repository to your local machine:

```bash
git clone https://github.com/elsieyli/mindbridge.git

cd mindbridge
```


prod
```bash
docker compose build
docker compose up
```

dev

```bash
docker compose -f docker-compose.dev.yaml build
docker compose -f docler-compose.dev.yaml up
```

## Acknowledgements
Children and families who provided invaluable feedback.
Twilio for communication APIs.
MongoDB for database services.
GoDaddy for hosting and domain services.
Thank you for supporting MindBridge on our journey to enhance communication for autistic children globally.



