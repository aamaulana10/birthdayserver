import cron from 'node-cron';
import moment from 'moment-timezone';
import User from '../models/User';
import { sendBirthdayMessage } from './emailService';

export const scheduleBirthdayMessage = (user: User) => {
    const birthday = moment(user.birthday).tz(moment.tz.guess()).startOf('day');
    const now = moment.tz(moment.tz.guess()); // THIS ONE IS TO GET LOCAL TIMEZONE USER BY 
    console.log('birthday ', birthday);

    if (birthday.isSame(now, 'day')) {
        sendBirthdayMessage(user);
    } else {

        cron.schedule('0 9 * * *', () => {
            sendBirthdayMessage(user);
        }, {
            scheduled: true,
            timezone: moment.tz.guess()
        });
    }
};

export const rescheduleMissedMessages = async () => {
    const users = await User.findAll();

    users.forEach(user => {
        scheduleBirthdayMessage(user);
    });
};
