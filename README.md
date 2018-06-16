# Ramda-SQL-Equivalent
SQL equivalent operations using Ramda functions

Create JavaScript functions on Cities data to replicate the equivalent SQL operations on Cities RDBMS (SQLite DB) table.


---
### Filter list by selecting 10 objects (Pending)
```sql
select * from cities limit 10; 
```
Solution File: **./src/<new>.js**

---
### Filter list by selecting 3 objects starting from 3rd position (Pending)
```sql
select * from cities limit 3 offset 3;
```
Solution File: **./src/<new>.js**

---
### Get projected properties list from a list  (Pending)

```sql
select country, name as city from cities 
```
Solution File: **./src/<new>.js**

---
### (Pending)
```sql
select distinct(region) from cities
```
Solution File: **./src/<new>.js**


---
### Order list by property values in either ascending or descending order  (Pending)

```sql
select * from cities order by country ASC, internetSpeed DESC
```
Solution File: **./src/<new>.js**


---
### Get object a from list by property value (Completed)
```sql
select  * from cities where name = 'Chiang Mai'
```
Solution File: **./src/B1.js**

---
### Filter list by list of property values (Pending)
```sql
select  * from cities where name in ('London', 'Chiang Mai')
```
Solution File: **./src/B5.js**


---
### Order list by property values in either ascending or descending order  (Pending)

```sql
select * from cities order by country ASC, internetSpeed DESC
```
Solution File: **./src/<new>.js**


--- 
### Filter a List Based on Multiple Predicates joined by AND operator (Pending)
```sql
select  * from cities where cost < 1050 and humidity > 40 
```
Solution File: **./src/B3.js**

--- 
### Filter a List Based on Multiple Predicates joined by AND and OR operator (Pending)
```sql
select  * from cities where cost < 1050 and humidity > 40 or country = 'UK'
```
Solution File: **./src/B4.js**

--- 
### Filter a List Based on Regex Predicate (Pending)
```sql
select  * from cities where name LIKE 'be%'
```
Solution File: **./src/B5.js**

---
### Filter a list using between like operator (Pending)
```sql
select  * from cities where cost BETWEEN 1000 AND 1150
```
Solution File: **./src/<new>.js**

---
### (Pending)
```sql
select * from cities where name in  (
   select name from cities where cost > 4500 )
```
Solution File: **./src/<new>.js**

---
### (Pending)
```sql
select * from cities where exists (
	select name from cities filteredCities where cost > 4500 and filteredCities.name = cities.name)
```
Solution File: **./src/<new>.js**

---
### (Pending)
```sql

```
Solution File: **./src/<new>.js**

---
### (Pending)
```sql

```
Solution File: **./src/<new>.js**

---
### Find top 10 cities based on a score and filtering criteria (Completed)
Solution File: **./src/CityScoring.js**