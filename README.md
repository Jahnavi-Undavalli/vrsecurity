                               # Role-Based Access Control (RBAC) UI
This project implements a dynamic and user-friendly Role-Based Access Control (RBAC) system. The application provides an admin dashboard for managing users, roles, and permissions, offering intuitive features like inline editing, role management, and dynamic dashboard updates.

**Features**
#### Dashboard:
Displays total users, active users, and inactive users.
Dynamically updates statistics as users are added, updated, or removed.

#### User Management:
Add, edit (inline editing), or delete users.
Assign roles and statuses (Active/Inactive) to users.
CRUD operations with state management.

#### Role Management:
Add, delete, and manage roles.
Assign or toggle permissions (Read, Write, Delete) dynamically.

#### Responsive Design:
Optimized for desktop and mobile devices.

**Technologies Used**
Frontend: React.js (Hooks and Functional Components)
State Management: React useState
Routing: React Router
Styling: CSS
Mock API Simulation: Local state as mock API

**Installation and Setup**
Follow these steps to set up and run the project locally:

Clone the Repository:

`git clone https://github.com/your-username/rbac-ui.git
cd rbac-ui`

Install Dependencies:

`npm install`

Run the Application:

`npm start`

Access the Application: Open your browser and navigate to http://localhost:3000

**Project Structure**

rbac-ui/
├── src/
│   ├── components/
│   │   ├── Button.js        // Reusable Button component
│   ├── Dashboard.js         // Dashboard for user statistics
│   ├── UserManagement.js    // User Management UI
│   ├── RoleManagement.js    // Role Management UI
│   ├── App.js               // Main entry point
│   ├── styles/
│   │   ├── Dashboard.css
│   │   ├── UserManagement.css
│   │   ├── RoleManagement.css
│   ├── index.js             // React DOM rendering
├── package.json
├── README.md

**How to Use**

###### Navigate to Dashboard:
View user statistics and access links to manage users and roles.

###### Manage Users:
Add a new user by entering the name, selecting a role, and status.
Inline edit user details like name, role, and status.
Delete users with a single click.

###### Manage Roles:
Add and delete roles.
Toggle permissions (Read, Write, Delete) for roles dynamically.

###### Dynamic Updates:
Changes in user or role management reflect automatically in the dashboard.


**Core Functionalities**
1. User Management
Add User: Fill out the form with name, role, and status.
Inline Edit: Directly edit user details from the table.
Delete User: Remove a user with one click.
2. Role Management
Assign Permissions: Toggle individual permissions for each role.
Delete Role: Remove a role entirely from the system.
3. Dashboard
Provides an overview of users (total, active, and inactive).
Updates dynamically based on user activity.

Author
Name: Jahnavi Undavalli
phone number : 9014752378
email: undavallijahnavi354@gmail.com
