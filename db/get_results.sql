-- SELECT * FROM properties
-- WHERE city 


 select * from properties 
 where 
 LOWER(city)=LOWER($1) OR 
 LOWER(properties.state)=LOWER($1);