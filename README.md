
# Nippon Manga

"Nippon Manga" is a user-friendly manga reading application that grants access to a diverse library of Japanese comics. It boasts an intuitive interface, customizable reading preferences, and employs AI technology to automatically identify and tag potentially sensitive or NSFW content. This feature promotes a safer and more tailored reading environment, catering to various user preferences and age groups.

## How it is built?


- **Django:** A Python web framework known for rapid development and scalability.
  
- **React(TypeScript):** A popular JavaScript library for building interactive user interfaces.
  
- **Redux(TypeScript):** A predictable state container for JavaScript apps, commonly used with React.

These technologies collectively power the "Nippon Manga" application, enabling efficient development, dynamic user interfaces, and streamlined state management for an engaging and seamless manga reading experience.

## Set Up Local enviorment 


`git clone git@github.com:utkarshdagoat/ServerSentinels.git && git clone https://github.com/TheHamkerCat/NSFW_Detection_API.git`
<br>
`cd frontend && yarn && yarn dev --port 5173` 
<br>
`cd backend && python -m venv venv && source venv/bin/activate && pip install -r requirements.txt && python manage.py runserver `

### Running the detection model 
Follow the instructions  <a href="https://github.com/TheHamkerCat/NSFW_Detection_API">Here </a>


## Application Flow 
