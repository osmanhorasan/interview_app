# Interview Web Application

## Proje and Purpose 
This project is a micro frontend project. This project uses simple bit auth0 and APIs. **React** is used in this project.

## Installation

### Requirements
- **npm** 10.8.3 veya üzeri

### Kurulum Adımları

1. Clone the project:
    ```bash
    git clone https://github.com/osmanhorasan/interview_app.git
    cd interview_app
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    packages/auth -> npm install
    packages/account ->  npm install
    packages/dashboard ->  npm install
    packages/host ->  npm install   
    ```

3. Configure the `.env` file

4. build application:
    ```bash
    packages/auth -> npm build
    packages/account ->  npm build
    packages/dashboard ->  npm build
    packages/host ->  npm build 
    ```

5. start application:
    ```bash
    packages/auth -> npm start
    packages/account ->  npm start
    packages/dashboard ->  npm start
    packages/host ->  npm start 
    ```

6. localhost:3000

## Usage

### Environmental Variables
The following environment variables must be configured in the `.env` file:

- `REACT_APP_AUTH0_DOMAIN`: your-auth0-domain
- `REACT_APP_AUTH0_CLIENT_ID`: your-client-id



## Logs

Non-ASCII characters (İ,ş,ç,ö,ğ etc.) should be avoided in log files.

## License
[MIT](LICENSE)
