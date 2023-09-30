# Chiri Freelancer Management System

## Software Requirement Specification (SRS)

**Version:** 1.0.0  
**Date:** 09/September/2023

## Table of Contents

1. [Introduction](#1-introduction)
2. [System Description](#2-system-description)
3. [Functional Requirements](#3-functional-requirements)
4. [Non-Functional Requirements](#4-non-functional-requirements)
5. [User Interfaces](#5-user-interfaces)
6. [Data Management](#6-data-management)
7. [Integration](#7-integration)
8. [Security and Compliance](#8-security-and-compliance)
9. [Testing Requirements](#9-testing-requirements)
10. [Deployment Plan](#10-deployment-plan)
11. [Maintenance and Support](#11-maintenance-and-support)
12. [Appendix](#12-appendix)

## 1. Introduction

### 1.1 Purpose

The Chiri Freelancer Management System is designed to empower freelancers with efficient tools and resources, streamline freelance operations, foster collaboration, and provide personalized financial insights. This project aims to simplify freelancers' lives and enhance their success in the freelance economy.

### 1.2 Scope

The Chiri Freelancer Management System encompasses the development of a comprehensive software platform that facilitates freelancers' workflow management, client interactions, project handling, financial tracking, and community engagement. It serves freelancers, small businesses, agencies, and independent professionals seeking to optimize their freelance operations and thrive in the gig economy.

### 1.3 Definitions, Acronyms, and Abbreviations

- SRS: Software Requirement Specification
- API: Application Programming Interface

### 1.4 References

### 1.5 Overview

The Chiri Freelancer Management System is a feature-rich software platform tailored for freelancers and businesses. It offers tools for streamlined project management, client interactions, financial tracking, and collaboration. With AI-driven features and a supportive user community, Chiri aims to simplify freelancers' lives and empower them to succeed in the ever-evolving freelancing landscape.

## 2. System Description

### 2.1 System Overview

The Chiri Freelancer Management System is a multifaceted software platform designed to revolutionize freelance management. It serves as a central hub for freelancers to efficiently manage projects, clients, and financials. Key features include gig tracking, client relationship management, project bidding, financial insights, and collaborative tools. Chiri empowers freelancers to thrive in the gig economy by simplifying complex processes and enhancing their freelance experience.

### 2.2 System Architecture

The Chiri Freelancer Management System adopts a modern and scalable architecture to ensure robust performance and flexibility. It comprises three primary components:

1. **Client-Side Application:** The client-side application is built using modern web technologies, providing a responsive and user-friendly interface accessible from web browsers and mobile devices.

2. **Server-Side Application:** The server-side application is developed using Node.js and hosted on cloud infrastructure. It handles data processing, user authentication, and business logic.

3. **Third-Party Integrations:** Chiri seamlessly integrates with third-party services for payment processing, communication, and data analytics, ensuring a comprehensive and feature-rich ecosystem.

This architecture enables Chiri to provide a reliable, high-performance platform while allowing for future scalability and adaptability to changing requirements.

### 2.3 System Users

The Chiri Freelancer Management System caters to a diverse set of users, each with specific roles and permissions:

1. **Freelancers:** Independent professionals across various industries who utilize Chiri to streamline their freelance operations, manage projects, and interact with clients.

2. **Clients:** Businesses, organizations, and individuals seeking freelance services. They use Chiri to post projects, evaluate proposals, and communicate with freelancers.

3. **Administrators:** System administrators have elevated privileges to manage and oversee the Chiri platform. They can control user accounts, monitor system performance, and ensure platform integrity.

Chiri's user-centric design ensures that each user type enjoys a tailored experience, optimizing their interaction with the platform and fostering a collaborative freelance ecosystem.

## 3. Functional Requirements

### 3.1 User Management

Chiri's User Management module enables:

- User registration and profile creation.
- Secure authentication and login procedures.
- User role assignment (Freelancer, Client, Administrator).
- User profile updates, including personal and contact information.
- Password reset and recovery mechanisms for enhanced security.

This functionality ensures that users can easily join, access, and manage their profiles within the Chiri platform, fostering a seamless user experience.

### 3.2 Gig Tracking

Chiri's Gig Tracking feature allows freelancers to:

- Create and manage gigs or projects.
- Monitor project progress and milestones.
- Track project timelines and deadlines.
- Record gig-related expenses and income.
- Generate reports for individual gigs.

This functionality empowers freelancers to efficiently manage their projects, ensuring they stay organized and on top of their freelance work.

### 3.3 Client Management

Chiri's Client Management functionality offers the following features:

- Efficient client communication and interaction.
- Client profile creation and management.
- Client project history and interaction tracking.
- Integration with project management for seamless collaboration.

This functionality enables freelancers to build and maintain strong client relationships while keeping track of project-specific details and communication history.

### 3.4 Project Management

Chiri's Project Management module facilitates:

- Project creation, including descriptions and requirements.
- Task assignment and tracking within projects.
- Milestone setting and monitoring.
- Real-time project status updates.
- File and document sharing for project collaboration.

This functionality empowers freelancers to efficiently organize, collaborate on, and deliver projects to their clients.

### 3.5 Project Bidding

### 3.6 Seller Management

### 3.7 Support Ticket System

### 3.8 Project Reports

### 3.9 Buyer Reports

### 3.10 Target Reports

## 4. Non-Functional Requirements

Chiri is committed to meeting the following non-functional requirements:

- **Performance:** The system should maintain responsive performance even with a large user base and extensive data.
- **Security:** Robust security measures should protect user data, financial transactions, and system integrity.
- **Usability:** The user interface should be intuitive, ensuring a positive user experience.
- **Compatibility:** Chiri should be accessible across various devices and web browsers.
- **Scalability:** The system should easily scale to accommodate increasing user numbers and data loads.
- **Reliability:** Chiri should be highly available and reliable, minimizing downtime.

These non-functional requirements ensure that Chiri delivers a secure, user-friendly, and reliable platform for freelancers and clients.

## 5. User Interfaces

Chiri's user interfaces must adhere to the following non-functional requirements:

- **Responsiveness:** The interfaces should load quickly and adapt to different screen sizes and resolutions for a seamless user experience.
- **Accessibility:** The interfaces should comply with accessibility standards to ensure usability for all users, including those with disabilities.
- **Consistency:** The design elements, layout, and navigation should maintain consistency throughout the platform to enhance user familiarity and usability.
- **Intuitiveness:** User interfaces should be intuitive, requiring minimal user training and allowing users to perform tasks efficiently.
- **Performance:** Interfaces should be optimized for speed and responsiveness, ensuring smooth interaction even during peak usage periods.

These non-functional requirements contribute to user satisfaction and usability, making Chiri a user-friendly and accessible platform for freelancers and clients.

## 6. Data Management

Chiri's data management system must meet the following non-functional requirements:

- **Data Models:** Data should be structured efficiently to support quick retrieval and reporting.
- **Data Storage:** Reliable and scalable data storage solutions should be used to ensure data integrity and availability.
- **Data Backup and Recovery:** Regular data backups and a robust recovery mechanism should be in place to protect against data loss and ensure business continuity.

These non-functional requirements ensure that Chiri's data management system is secure, efficient, and resilient, guaranteeing the integrity and accessibility of user data.

## 7. Integration

Chiri's integrations with third-party services must meet the following non-functional requirements:

- **Seamless Integration:** Third-party services should integrate seamlessly with Chiri, providing a smooth user experience.
- **Reliability:** Integration points should be reliable, minimizing service disruptions and ensuring data consistency.
- **Security:** Integration mechanisms should adhere to strict security standards to protect sensitive data during data exchanges.
- **Scalability:** Integration solutions should be scalable to accommodate increasing data volumes and user traffic.

These non-functional requirements guarantee that Chiri's integrations are robust, secure, and capable of delivering a seamless experience for users.

## 8. Security and Compliance

Chiri's security and compliance measures must meet the following non-functional requirements:

- **Data Security:** Robust encryption, access controls, and secure authentication methods should safeguard user data and financial information.
- **Privacy:** Chiri should adhere to stringent privacy standards, including compliance with relevant data protection regulations like GDPR.
- **Regular Audits:** Periodic security audits and vulnerability assessments should be conducted to ensure ongoing system security.

These non-functional requirements ensure that Chiri provides a secure and compliant environment, protecting user data and privacy while meeting legal and regulatory standards.

## 9. Testing Requirements

Chiri's testing requirements must meet the following non-functional criteria:

- **Test Cases:** Comprehensive test cases should cover all system functionalities, including positive and negative scenarios, security testing, and performance testing.
- **Test Environment:** A dedicated test environment should replicate the production environment closely, ensuring accurate testing results and minimizing risks during deployment.

These non-functional requirements ensure rigorous testing, guaranteeing that Chiri is robust, secure, and reliable when used by freelancers, clients, and administrators.

### 10 Customer Support

For support, please contact [developer.sujon@gmail.com](mailto:developer.sujon@gmail.com).

### 11 API Documentation

API documentation for Chiri can be found at [API Swagger Documentation](https://app.swaggerhub.com/apis/developer-sujon/chiri/1.0.0).

---

## Running the Application Locally

Follow these steps to set up and run the Chiri Freelancer Management System application on your local machine:

### Prerequisites

Before you begin, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

### 1. Clone the Project

Clone the project repository from GitHub using the following command:

```bash
git clone https://github.com/developer-sujon/chiri-freelancer-management-system.git

```

### 2. Navigate to the Project Directory

Change your working directory to the project folder:

```
cd chiri-freelancer-management-system

```

### 3. Install Project Dependencies

Change your working directory to the project folder:

```bash
yarn install
```

## Set Up Environment Variables

Create an .env file in the root directory of the project and configure the necessary environment variables. Here's an example of the required variables:

```env
# MongoDB Configuration
DB_USERNAME=testuser
DB_PASSWORD=testpassword
DB_CONNECTION_URL=mongodb://<username>:<password>@localhost:27017
DB_URL_QUERY=retryWrites=true&w=majority
DB_NAME=my-test-api

# JWT Secret Key
ACCESS_TOKEN_SECRET=your-secret-key
```

## 5. Run the Database Seed Command

```bash
yarn start:seed
```

## 6. Start the Application

```bash
yarn start:start
```

## 7. Access the Application

Open a web browser and go to the following URL to access the locally running Chiri application health:

```
http://localhost:4000/api/v1/health

```

You can also explore the Swagger API documentation at:

```
http://localhost:4000/docs

```
