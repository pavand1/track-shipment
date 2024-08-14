const mockData = {
    heading: 'Welcome to Our Service',
    subHeading: 'We offer the best solutions for your business.',
    buttonText: 'Get Started',
    form: {
      fields: [
        {
          id: 'name',
          label: 'Name',
          type: 'text',
          placeholder: 'Enter your name'
        },
        {
          id: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email'
        },
        {
          id: 'phone',
          label: 'Phone Number',
          type: 'tel',
          placeholder: 'Enter your phone number'
        },
        {
          id: 'message',
          label: 'Message',
          type: 'textarea',
          placeholder: 'Enter your message'
        }
      ],
      submitButtonText: 'Submit'
    }
  };
  
  export default mockData;
  