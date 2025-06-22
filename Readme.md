# 🔍 Role Retrieval Service - Shaggy Mission

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" />
  <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white" alt="MariaDB" />

</div>

<div align="center">
  <h3>🚀 Role Query Microservice for Pet Rescue Platform</h3>
  <p><em>Part of the Shaggy Mission ecosystem - Retrieving permissions for heroes saving street animals! 🐾</em></p>
</div>

---

## 🌟 Overview

The **Role Retrieval Service** is a specialized query microservice in the Shaggy Mission platform that provides role information lookup capabilities. This service enables other platform components to quickly retrieve user role data for authorization decisions, ensuring proper access control throughout the pet rescue ecosystem.

## 🎯 What This Service Does

- **User Role Lookup**: Retrieves specific role information for individual users
- **Relational Data Querying**: Performs complex joins between user-role and role tables
- **Permission Verification**: Enables other services to verify user permissions
- **Authorization Support**: Provides role data for authentication and authorization workflows
- **Database Optimization**: Efficient queries using Sequelize ORM with table joins

## 🛠️ Tech Stack

- **Runtime**: Node.js with Express.js framework
- **Database**: MariaDB with Sequelize ORM
- **Query Optimization**: Relational joins for efficient data retrieval
- **RESTful Design**: Clean API endpoints for role queries
- **Data Modeling**: Foreign key relationships between users and roles

## 📡 API Endpoints

### User Role Lookup Endpoint
**`GET /roles/user-role/:userId`**
- Retrieves the assigned role for a specific user
- Performs database join between UserRole and Role tables
- Returns user ID and corresponding role name
- Used by authentication services for permission verification

```json
{
  "userId": "abc123xyz789",
  "role": "Contributor"
}
```

## 🔧 Core Functionality

### Role Query Process
The service handles role retrieval by accepting user ID parameters, performing optimized database queries with table joins between UserRole and Role entities, retrieving the associated role name for the specified user, and returning structured role information for authorization decisions across the platform.

### Database Relations
The service manages relational data through a sophisticated database structure where the Role table contains unique role definitions, the UserRole junction table creates many-to-many relationships between users and roles, and foreign key constraints ensure referential integrity. The service uses Sequelize associations to perform efficient join operations.

### Query Optimization
Utilizes Sequelize's include functionality to perform single-query joins rather than multiple database calls, ensuring fast response times for role verification requests from other microservices in the platform.

## 🌐 Service Integration

This microservice serves as a critical data provider for the Shaggy Mission platform, specifically supporting the User Login Service and other components that require role verification. It enables efficient authorization workflows by providing quick access to user permission data without exposing the underlying role management complexity.

## 🔒 Data Integrity

- **Relational Constraints**: Foreign key relationships ensure data consistency
- **Error Handling**: Comprehensive error management for missing user roles
- **Efficient Queries**: Single-query joins for optimal performance
- **Role Validation**: Ensures only valid role assignments are returned

## 🗃️ Database Schema

The service accesses two main tables: the Roles table with auto-incrementing integer IDs and unique role names, and the UserRole junction table that maintains user-role relationships with proper foreign key constraints to ensure data integrity across the pet rescue platform.

---

<div align="center">
  <p><strong>Built with ❤️ for street dogs and cats everywhere 🐕🐱</strong></p>
  <p><em>Every role query helps maintain secure access to our rescue mission!</em></p>
</div>