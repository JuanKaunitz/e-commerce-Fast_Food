import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


const config={
  botName: 'Food Bot',
  width:'400px',
  backgroundColor: 'blue',
  height: '500px',
  floating: true
}

export function ComponentSession() {
	const history = useHistory();
	function handleClick() {
		history.push('/login');
	}
	return (
		<button type='button' onClick={handleClick}>
			Go to Log In
		</button>
	);
}

export function ComponentRegister() {
	const history = useHistory();
	function handleClick() {
		history.push('/register');
	}
	return (
		<button type='button' onClick={handleClick}>
			 Go to Sign up
		</button>
	);
}


export function ComponentAbout() {
	const history = useHistory();
	function handleClick() {
		history.push('/aboutUs');
	}
	return (
		<button type='button' onClick={handleClick}>
			Go to section About
		</button>
	);
}

export function ComponentCategories() {
	const history = useHistory();
	function handleClick() {
		history.push('/categories');
	}
	return (
		<button type='button' onClick={handleClick}>
			Go to section Categories
		</button>
	);
}
const theme = {
	fontFamily: 'Roboto',
	headerBgColor: '#FF3C4A',
	headerFontColor: '#fff',
	headerFontSize: '15px',
	botBubbleColor: '#FF3C4A',
	botFontColor: '#fff',
	userBubbleColor: '#f0f8ff',
	userFontColor: '#4a4a4a',
  background: 'white'
  
};

export default function Chatbot() {


  return (
    <ThemeProvider theme={theme}>
    <ChatBot 
  steps={[
    {
      id: '1',
      message: `Welcome to FastFood App! I'm Food bot, I'm here to answer your questions!.  Here some options to get us going`,
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Covid Policy', trigger: '3' },
        { value: 2, label: 'Food Safety', trigger: '4' },
        { value: 3, label: 'Branch Policy', trigger: '5' },
        { value: 4, label: 'Purchases', trigger: '6' },
        { value: 5, label: 'Contact Info', trigger: '7' },
        { value: 6, label: 'About us', trigger: '8' },
      ],
    },
    {
      id: '3',
      message: 'Clean your hands often 1)Wash your hands often with soap and water for at least 20 seconds especially after. 2)you have been in a public place, or after blowing your nose, coughing, or sneezing. 3)If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. 4) Cover all surfaces of your hands and rub them together until they feel dry. 5)Avoid touching your eyes, nose, and mouth with unwashed hands.',
      trigger: '2'
    },
    {
      id:'4',
      message: 'Our standard of certification is the ISO 22000. Our Food safety refers to routines in the preparation, handling and storage of food meant to prevent foodborne illness and injury. From farm to factory to fork, food products may encounter any number of health hazards during their journey through the supply chain. Safe food handling practices and procedures are thus implemented by us at every stage of the food production life cycle in order to curb these risks and prevent harm to our consumers.',
      trigger: '2'
    },
    {
      id:'5',
      message: '1)Cover your mouth and nose with a mask when around others. 2)You could spread COVID-19 to others even if you do not feel sick..3)Everyone should wear a mask in public settings and when around people not living in their household, especially when social distancing is difficult to maintain.4)Masks should not be placed on young children under age 2, anyone who has trouble breathing, or is unconscious, incapacitated or otherwise unable to remove the mask without assistance.5)A mask helps prevent a person who is sick from spreading the virus to others,and offers some protection to the wearer as well.',
      trigger: '2'
    },
    {
      id: '6',
      options: [
        { value: 1, label: 'Accepted payments methods', trigger: '20' },
        { value: 2, label: 'Discounts', trigger: '21' },
        { value: 3, label: 'Shipping costs', trigger: '22' },
        { value: 4, label: 'Shipping areas', trigger: '23' },
      ]
    },
    {
      id:'20',
      message: 'As we charge you through MercadoPago, you can use any credit or debit card aveilable at your MercadoPago account',
      trigger: '6'
    },
    {
      id: '21',
      message: `We don't have discount right now, but we will soon`,
      trigger: '6'
    },
    {
      id: '22',
      message: `We're so happy that you chose us that all shipping cost are on us! Enjoy shopping` ,
      trigger: '6'
    },
    
    {
      id: '23',
      message: `We are doing shippings to Capital Federal and Rosario.` ,
      trigger: '6'
    },
    {
      id:'7',
      options: [
        { value: 1, label: 'Location', trigger: '77' },
        { value: 2, label: 'Business Hours', trigger: '88' },
        { value: 2, label: 'Email', trigger: '90' },
      ]
    },
    {
      id: '77',
      message: 'You must register to buy and then check the nearest store at the Google Maps App.',
      trigger: '7'
    },
    {
      id: '88',
      message:'Monday to Friday: from 8am to 9pm.Saturday and Sunday: from 10am to 9pm. ',
      trigger: '7'
      
    },
    {
      id: '90',
      message:'Sure! Our E-mail is ecommercefastfood@gmail.com. ',
      trigger: '7'
    },
    {id:'8',
						options: [
							{ value: 1, label: 'Browse the About us', trigger: '44' },
							{ value: 2, label: 'Back to menu', trigger: '2' },
							
						]
   },
   {
    id:'44',
    message: 'Thanks for your visit!!',
    trigger: '333'
  },
  {
    id: '333',
    component: <ComponentAbout />,
    end: true
  },




  ]}
  {...config}
/>
</ThemeProvider>
  
  )}
