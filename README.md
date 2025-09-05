# Serverless EventNotifier

A serverless cloud application for scheduling and managing event/task reminders with automated email notifications via AWS SES.

---

## Features

- *AWS S3*: Static website hosting for the user interface  
- *AWS Lambda*: Serverless backend to process reminder logic  
- *API Gateway*: REST API for the frontend to submit events  
- *DynamoDB*: Stores scheduled events and user data  
- *EventBridge*: Triggers Lambda every 5 minutes for timely notifications  
- *Amazon SES*: Sends opt-in email reminders to users  

---

## Architecture

The app is designed using fully managed AWS services for scalability, security, and zero server maintenance.

- Users submit reminders via a simple UI
- API Gateway receives form data and invokes Lambda
- Lambda stores details in DynamoDB and handles notification scheduling
- EventBridge periodically triggers Lambda to check and send due reminders
- Amazon SES delivers email notifications

---

## How to Deploy

1. *Frontend:*  
   - Upload HTML, CSS, JS files to an S3 bucket  
   - Enable S3 static website hosting

2. *Backend & Reminders:*  
   - Deploy Lambda functions via AWS Console or CLI  
   - Create REST API in API Gateway, connect it to Lambda  
   - Enable CORS for the API

3. *Database:*  
   - Set up a DynamoDB table for storing events

4. *Automated Reminders:*  
   - Create an EventBridge rule with schedule expression (e.g., rate(5 minutes))
   - Target: Reminder Lambda Function

5. *Email Delivery:*  
   - Set up SES, verify sender email/domain  
   - Update Lambda to use SES for sending emails

6. *Custom Domain (Optional):*  
   - Map S3 static site to a custom domain using Route 53 or external DNS
   - Attach ACM SSL certificate for HTTPS via CloudFront if needed

---

## Usage

- Visit the hosted S3 website
- Fill the form to schedule an event reminder
- Receive an automated email at the scheduled time

---

## Screenshots

## Architecture
![Architecture](images/architecture.jpg)

##Project-UI
![Project-UI](images/Project-UI.png)

##Sample Reminder Mail
![sample-reminder-mail](images/sample-reminder-mail.jpg)
---

## License

Open source for learning and demonstration purposes.
