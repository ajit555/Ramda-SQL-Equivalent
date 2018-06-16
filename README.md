# Ramda-SQL-Equivalent
SQL equivalent operations using Ramda functions

Create JavaScript functions on Cities data to replicate the equivalent SQL operations on Cities RDBMS (SQLite DB) table.

---
### Get object a from list by property value (Completed)
```sql
select  * from cities where name = 'Chiang Mai'
```
Solution File: **./src/B1.js**

---
### Get a property projected list from a list  (Pending)

```sql
select country, name as city from cities order by 1,2
```

Solution File: **./src/B2.js**

--- 
### Filter a List Based on Multiple Predicates (Pending)
```sql
select  * from cities where cost < 1050 and humidity > 40 
```
Solution File: **./src/B3.js**

---
### Find top 10 cities based on a score and filtering criteria (Completed)
Solution File: **./src/CityScoring.js**