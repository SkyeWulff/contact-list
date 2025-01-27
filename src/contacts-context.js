import React from 'react';

export const initialContacts = [
    {
      "id": 1,
      "name": "Sean Lock",
      "image_url": "https://www.scotsman.com/webimg/b25lY21zOjk0ZmUzODAwLWM3MzEtNDk2MS05NGU2LWQ1M2JkZjcxZWZjMDpmNGJlNzE2ZC1jNDJmLTQ5NjktYjViMC1mOWFjYTkzYjE5ZWE=.jpg?width=2048&enable=upscale",
      "email": "seanlock@gmail.com",
      "phone_number": "1238675309"
    },
    {
      "id": 2,
      "name": "Jimmy Carr",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZhuOTC0xLt24atMAQKReE06DqMTMNzIFDg&usqp=CAU",
      "email": "jimmycarr@gmail.com",
      "phone_number": "1234567890"
    },
    {
      "id": 3,
      "name": "Jon Richardson",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAwfEYRNzqDeg7cIKP4qn8JVX7-Ft2b3z4Q&usqp=CAU",
      "email": "johnrichardson@gmail.com",
      "phone_number": "0987654321"
    }
  ]

export const ContactsContext = React.createContext();
