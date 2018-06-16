# Ramda-SQL-Equivalent
SQL equivalent operations using Ramda functions

Create JavaScript functions on Cities data to replicate the equivalent SQL operations on Cities RDBMS (SQLite DB) table.


---
### (Pending)
```sql
select count(*) from cities
```
Solution File: **./src/B1.js**

---
### Filter list by selecting 10 objects (Pending)
```sql
select * from cities limit 10; 
```
Solution File: **./src/B2.js**

---
### Filter list by selecting 3 objects starting from 3rd position (Pending)
```sql
select * from cities limit 3 offset 3;
```
Solution File: **./src/B3.js**

---
### Get projected properties list from a list  (Pending)

```sql
select country, name as city from cities 
```
Solution File: **./src/B4.js**

---
### (Pending)
```sql
select distinct region from cities
```
Solution File: **./src/B5.js**

---
### (Pending)
```sql
select distinct region, country from cities
```
Solution File: **./src/B6.js**

---
### Order list by property values in either ascending or descending order  (Pending)

```sql
select * from cities order by country ASC, internetSpeed DESC
```
Solution File: **./src/B7.js**


---
### Get object a from list by property value (Completed)
```sql
select  * from cities where name = 'Chiang Mai'
```
Solution File: **./src/B8.js**

---
### Filter list by list of property values (Pending)
```sql
select  * from cities where name in ('London', 'Chiang Mai')
```
Solution File: **./src/B9.js**


---
### Order list by property values in either ascending or descending order  (Pending)

```sql
select * from cities order by country ASC, internetSpeed DESC
```
Solution File: **./src/B10.js**


--- 
### Filter a List Based on Multiple Predicates joined by AND operator (Pending)
```sql
select  * from cities where cost < 1050 and humidity > 40 
```
Solution File: **./src/B11.js**

--- 
### Filter a List Based on Multiple Predicates joined by AND and OR operator (Pending)
```sql
select  * from cities where cost < 1050 and humidity > 40 or country = 'UK'
```
Solution File: **./src/B12.js**

--- 
### Filter a List Based on Regex Predicate (Pending)
```sql
select  * from cities where name LIKE 'be%'
```
Solution File: **./src/B13.js**

---
### Filter a list using between like operator (Pending)
```sql
select  * from cities where cost BETWEEN 1000 AND 1150
```
Solution File: **./src/B14.js**

---
### Subqueries (Pending)
```sql
select * from cities where name in  (
   select name from cities where cost > 4500 )
```
Solution File: **./src/B15.js**

---
### (Pending)
```sql
select * from cities where exists (
	select name from cities filteredCities where cost > 4500 and filteredCities.name = cities.name)
```
Solution File: **./src/B16.js**


---
### Group by (Pending)
```sql
select region, count(*) as totalCount from cities group by region
```
Solution File: **./src/B17.js**

---
### Group by multiple columns(Pending)
```sql
select region, country, avg(cost) as avgCost, avg(temperature) as avgTemperature, avg(humidity) as avgHumidity 
from cities group by 1,2
```
Solution File: **./src/B18.js**

---
### Joining tables (Pending)
- Cross join
- Inner join
- Left join
- Left Outer join

```sql
SELECT 
	regions.region,
	countries.country,
	avg(citiesWithID.cost) as avgCost,
	avg(citiesWithID.temperature) as avgTemperature,
	avg(citiesWithID.humidity) as avgHumidity,
	avg(citiesWithID.internetSpeed) as avgInternetSpeed
FROM citiesWithID 
LEFT JOIN regions on citiesWithID.regionID = regions.id
LEFT JOIN countries on citiesWithID.countryID = countries.id
group by 1,2
order by 1,2
```
Solution File: **./src/B19.js**


---
### having clause (Pending)
```sql
SELECT 
	regions.region,
	countries.country,
	avg(citiesWithID.cost) as avgCost,
	avg(citiesWithID.temperature) as avgTemperature,
	avg(citiesWithID.humidity) as avgHumidity,
	avg(citiesWithID.internetSpeed) as avgInternetSpeed
FROM citiesWithID 
LEFT JOIN regions on citiesWithID.regionID = regions.id
LEFT JOIN countries on citiesWithID.countryID = countries.id
group by 1,2
having avgCost > 4000
order by 1,2
```
Solution File: **./src/B20.js**


---
### Union clause / operator(Pending)
- Union
- Union All
```sql
SELECT column1 [, column2 ]
FROM table1 [, table2 ]
[WHERE condition]

UNION

SELECT column1 [, column2 ]
FROM table1 [, table2 ]
[WHERE condition]
```
Solution File: **./src/B21.js**




---
### (Pending)
```sql
select country, count(*) totalRegions from (
select distinct country, region from cities) a
group by 1
having totalRegions > 1
```
Solution File: **./src/B22.js**


---
### (Pending)
```sql
update citiesEditable
	set internetSpeed = 50
	where country = 'US'
```
Solution File: **./src/B23.js**


---
### Update constraints (Pending)
- Not Null
- Default
- Unique
- Check 
- Primary

```sql

```
Solution File: **./src/B24.js**


---
### (Pending)
```sql
delete from citiesEditable where country = 'NO'
```
Solution File: **./src/B25.js**

---
### Triggers (Pending)
```sql
-- event_name could be INSERT, DELETE, and UPDATE database operation
CREATE TRIGGER trigger_name [BEFORE|AFTER] event_name 
ON table_name
BEGIN
 -- Trigger logic goes here....
END;
```
Solution File: **./src/B26.js**

---
### Indexes (Pending)
- Single-Column Indexes
- Unique Indexes
- Composite Indexes
```sql

```
Solution File: **./src/B27.js**

---
### Views (Pending)
```sql

```
Solution File: **./src/B28.js**

---
### Transactions (Pending)
- BEGIN TRANSACTION
- COMMIT
- ROLLBACK
```sql

```
Solution File: **./src/B29.js**


---
### Date and time queries (Pending)
[Reference](https://www.tutorialspoint.com/sqlite/sqlite_date_time.htm)
```sql

```
Solution File: **./src/B30.js**



---
### Blank content template (Pending)
```sql

```
Solution File: **./src/<new>.js**

---
### Find top 10 cities based on a score and filtering criteria (Completed)
Solution File: **./src/CityScoring.js**