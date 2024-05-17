# Birthday Server

This application sends a happy birthday message to users on their birthday at exactly 9 am in their local time. 

## Tech Stack

- TypeScript
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Moment
- node-cron
- axios
- supertest
- jest

## Features

- Create and delete users with first name, last name, birthday date, and location.
- Send a birthday message via an external email service API at 9 am on the user's local time.
- Retry sending messages in case of API failure or timeout.
- Update user details and ensure the birthday message is delivered on the correct day.

## Installation

### Prerequisites

- Node.js and npm installed
- PostgreSQL installed and configured

### Clone the Repository

```bash
git clone https://github.com/yourusername/birthday-app.git
cd birthday-app
```

### Install Dependencies

```bash
npm install
```

### Configure the Database

Create a PostgreSQL database and update the configuration in `src/models/index.ts`:

```typescript
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'your_db_username',
  password: 'your_db_password',
  database: 'birthday_app',
});

export default sequelize;
```

### Running in Development Mode

To run the application in development mode with hot reloading, use:

```bash
npm run dev
```

To test the application, use:

```bash
npm run test
```

## API Endpoints

### Create User

- **URL**: `/user`
- **Method**: `POST`
- **Body**: 
  ```json
  {
    "firstName": "Aa",
    "lastName": "Maulana",
    "birthday": "1993-10-24",
    "email": "aamaulanabola10@gmail.com"
  }
  ```
- **Response**: 
  ```json
  {
    "id": 1,
     "firstName": "Aa",
    "lastName": "Maulana",
    "email": "aamaulanabola10@gmail.com",
    "birthday": "1993-10-23T17:00:00.000Z",
    "updatedAt": "2024-05-17T17:35:56.528Z",
    "createdAt": "2024-05-17T17:35:56.528Z"
  }
  ```

### Delete User

- **URL**: `/user/:id`
- **Method**: `DELETE`
- **Response**: `204 No Content`

### Update User

- **URL**: `/user/:id`
- **Method**: `PUT`
- **Body**: 
  ```json
  {
    "firstName": "Aa",
    "lastName": "Maulana",
    "birthday": "1993-10-23",
    "email": "aamaulanabola101@gmail.com"
  }
  ```
- **Response**: 
  ```json
  {
    "id": 1,
    "firstName": "Aa",
    "lastName": "Maulana",
    "birthday": "1993-10-23",
    "email": "aamaulanabola101@gmail.com",
     "updatedAt": "2024-05-17T17:35:56.528Z",
    "createdAt": "2024-05-17T17:35:56.528Z"
  }
  ```

## How It Works

1. **Scheduling Messages**: When a user is created or updated, a birthday message is scheduled to be sent at 9 am in the user's local time.
2. **Sending Messages**: At the scheduled time, a request is made to the external email service API to send the birthday message.

## Additional Notes

- **Time Zone Handling**: The `moment-timezone` library is used to handle different time zones.
- **Cron Jobs**: The `node-cron` library is used to schedule tasks.
- **Database**: Sequelize ORM is used to interact with a PostgreSQL database.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.