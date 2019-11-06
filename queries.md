# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

Select ProductName, CategoryName From Products Join Categories On Products.CategoryId = Categories.CategoryId

*It showed 77 records...

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

Select OrderID, ShipperName from Orders join Shippers on Orders.ShipperID = Shippers.ShipperID where OrderDate < "1997-01-09"

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

Select ProductName, Quantity from OrderDetails join Products on OrderDetails.ProductID = Products.ProductID where OrderId = '10251' Order By ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

Select OrderID, CustomerName, LastName from Orders as O
Join Customers as C on C.CustomerID = O.CustomerID
Join Employees as E on E.EmployeeID = O.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 