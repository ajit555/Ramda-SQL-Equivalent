# Ramda-SQL-Equivalent
SQL equivalent operations using Ramda functions

Create JavaScript functions on Cities data to replicate the equivalent SQL operations on Cities RDBMS (SQLite DB) table.

---
### Get object a from list by property value
```sql
select  * from cities where name = 'Chiang Mai'
```
Solution File: **B1.js**

--- 
### Filter a List Based on Multiple Predicates
```sql
select  * from cities where cost < 1050 and humidity > 40 
```
Solution File: **B2.js**

---
### Find top 10 cities based on a score and filtering criteria.
Solution File: **CityScoring.js**