// src/services/emailService.ts
import axios from 'axios';
import User from '../models/User';

export const sendBirthdayMessage = async (user: User) => {
    try {
        await axios.post('https://email-service.digitalenvision.com.au/send-email',
            {
                email: user.email,
                message: `Hey, ${user.firstName} ${user.lastName} it’s your birthday`
            }, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        console.log(`Birthday message sent to ${user.firstName} ${user.lastName}`);
    } catch (error) {
        console.error(`Failed to send birthday message to ${user.firstName} ${user.lastName}: ${error.message}`);
    }
};
