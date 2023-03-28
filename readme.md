# InStock - Inventory Management System
InStock is a modern and scalable inventory management system, built with a React front-end and an Express back-end.

## BACK END REPOSITORY
This is the back end code

# Links
[Front End Repository](https://github.com/alis-SWE/instock-venus-team/ "FRONT END")

[JIRA Board](https://brainstationeducation.atlassian.net/jira/software/c/projects/J23VS/boards/393 "JIRA")

[FIGMA](https://www.figma.com/file/qLdwhUjqq5bKxoNYZ6v5Ze/U---InStock-Mockups "FIGMA")

# Table of Contents
1. [Getting Started](#start)
2. [Site Map](#map)
3. [Outline](#outline)
4. [Future Improvements](#future)
5. [API Reference](#api)

# Developer Guide
## Getting Started <a name="start"></a>
You will need node installed on your system.
Clone the repo and open it.
Set up your .env using the .env.sample

### On front end run:

`npm install`

`npm start`

### On back end,
Make sure your mysql is setup,
then
run:

`npm install`

`npm run db:migrate`

`npm run db:seed`

`npm run dev`

If above doesnt work try:
`node index.js`

## Site Map <a name="map"></a>
```mermaid
graph TB
  Header --> Warehouses
  Header --> Inventory

  Warehouses --> Warehouse_Page
  Warehouse_Page --> Create_Warehouse_Page
  Warehouse_Page --> Individual_Warehouse

  Inventory --> Inventory_Page
  Inventory_Page --> Create_Inventory_Item_Page
  Inventory_Page --> Individual_Inventory_Item

  Individual_Warehouse --> Edit_Warehouse_Page
  Individual_Warehouse --> Delete_Warehouse

  Individual_Inventory_Item --> Edit_Inventory_Item_Page
  Individual_Inventory_Item --> Delete_Inventory_Item
```

## Outline <a name="outline"></a>
The project is to build an Inventory Management System for a Fortune 500 client.
The system will be built by a team of developers using React, Node, Express, and mysql. The team will follow Agile methodology and use JIRA to manage the workflow.
A design tool called Figma will be used to create the mockups and style guide.
The team will also use Git/GitHub to collaborate and manage version control.
The project must adhere to functional and visual design requirements as specified in JIRA tickets.
The site must use multiple routes and proper folder structure and naming conventions for a full stack web application.
Third-party libraries can be used.

## Future Improvements <a name="future"></a>
In the future, we plan to expand the capabilities of the InStock Inventory Management System by incorporating the following features:

### Basic CRM (Customer Relationship Management)
A CRM integration will allow our users to manage their customer data, track interactions, and facilitate better communication between the inventory management team and their clients. This feature will include:
- Customer profiles with contact information and activity history
- Task management and reminders for follow-ups
- Integration with email and other communication channels
- Customizable reporting and analytics

### Price History
Tracking price history is essential for businesses to understand market trends and make informed decisions on pricing strategies. The price history feature will provide:
- Historical data on product pricing
- Visualizations of price trends over time
- Alerts for significant price changes
- Integration with inventory data for better analysis

### System Administration
System administration features will be added to ensure smooth operation and management of the Inventory Management System. This will include:
- User management: Add, modify, and delete users with different access levels and permissions
- Audit logs: Track user activity and system changes for security and compliance purposes
- Data backup and recovery: Schedule automatic backups and restore functionality in case of data loss
- System performance monitoring: Tools to monitor and optimize system performance for a seamless user experience

These additional features will further enhance the capabilities of the InStock Inventory Management System, making it an even more comprehensive and powerful tool for businesses to manage their inventory efficiently

# API Reference <a name="api"></a>
Welcome to the InStock inventory management system API reference. The API provides various endpoints to interact with the inventory data. Here's a quick guide to help you get started with the InStock API:

## Base URL

The base URL for the InStock inventory management system API is: `http://localhost:8080`
Please note this can be changed in the .env file, but will default to port 8080 if no .env file is found

## Endpoints

### GET all inventorys

`GET /inventory` 

This endpoint retrieves all inventory items from the database.

### GET a specific inventory by id

`GET /inventory/:id` 

This endpoint retrieves a specific inventory item from the database by its ID.

### POST a new inventory

`POST /inventory` 

This endpoint creates a new inventory item in the database. The following parameters should be included in the request body:

`{

  "itemWarehouseId": "string",
  
  "itemName": "string",
  
  "itemDescription": "string",
  
  "itemCategory": "string",
  
  "itemStatus": "string",
  
  "itemQuantity": "integer"
  
}` 

### PUT/update a inventory by id

`PUT /inventory/:id` 

This endpoint updates an existing inventory item in the database by its ID. The following parameters should be included in the request body:

`{

  "item_name": "string",
  
  "description": "string",
  
  "category": "string",
  
  "status": "string",
  
  "quantity": "integer",
  
  "warehouse_id": "string"
  
}` 

### DELETE a inventory by id

`DELETE /inventory/:id` 

This endpoint deletes an existing inventory item from the database by its ID.

### GET all warehouses

`GET /warehouse` 

This endpoint retrieves all warehouses from the database.

### GET a specific warehouse by id

`GET /warehouse/:id` 

This endpoint retrieves a specific warehouse from the database by its ID.

### POST a new warehouse

`POST /warehouse` 

This endpoint creates a new warehouse in the database. The following parameters should be included in the request body:

`{

  "warehouse_name": "string",
  
  "address": "string",
  
  "city": "string",
  
  "country": "string",
  
  "contact_name": "string",
  
  "contact_position": "string",
  
  "contact_phone": "string",
  
  "contact_email": "string",
  
}` 

### PUT/update a warehouse by id

`PUT /warehouse/:id` 

This endpoint updates an existing warehouse in the database by its ID. The following parameters should be included in the request body:

`{

  "warehouse_name": "string",
  
  "address": "string",
  
  "city": "string",
  
  "country": "string",
  
  "contact_name": "string",
  
  "contact_position": "string",
  
  "contact_phone": "string",
  
  "contact_email": "string",
  
}` 

### DELETE a warehouse by id

`DELETE /warehouse/:id` 

This endpoint deletes an existing warehouse from the database by its ID.

## Testing the API

You can use tools like Postman or curl to test the API endpoints. Here's an example request to create a new inventory item:

`POST /inventory
Content-Type: application/json

{
  "itemWarehouseId": "2922c286-16cd-4d43-ab98-c79f698aeab0",
  
  "itemName": "Laptop",
  
  "itemDescription": "Dell XPS 13",
  
  "itemCategory": "Electronics",
  
  "itemStatus": "In Stock",
  
  "itemQuantity": 10
  
}` 

Here's an example request to retrieve a specific inventory item:

`GET /inventory/bdc6bb69-e09c-498d-8abd-be2792504d00` 

## Conclusion

That's it! You're now ready to test the InStock inventory management system API. If you have any questions please contact the developers.
