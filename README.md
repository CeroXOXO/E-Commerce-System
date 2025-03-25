Machine Problem: E-Commerce System (React + Laravel)
Objective: Create a full-stack eCommerce system using React for the frontend and Laravel for the backend. The
system will include product management, checkout monitoring system, and a customer-facing storefront.
Requirements
1. Backend (Laravel)
 Product Management API
o Create, Read, Update, Delete (CRUD) operations for products
o Fields: name, description, price, stock, image
o Validation rules that item cannot be deleted once already in ordered list
 Employee Checkout Monitoring API
o List of all checkout transactions
o View details of a checkout
o Filter checkouts by date
 Customer Orders API
o Add items to cart
o Checkout process (store order details)
o Search for products
o Validations rule that item cannot be added to cart if stock is empty.
 Authentication
o Employees: Access product management and checkout monitoring
o Customers: Access the store and purchase products

2. Frontend (React)
 Admin Panel (Employee)
o Manage products (CRUD)
o View and monitor checkout transactions
 Customer Storefront
o View product catalog
o Search for products
o Add items to cart
o Checkout process
o View order summary
o User Registration.
o Validations rule that customers cannot add items to cart or check out if not registered.
 UI/UX Considerations
o Use Bootstrap for styling
o Implement animation transitions where necessary (e.g., modal pop-ups)
o Responsive design
