SELECT * FROM properties
JOIN pictures
ON properties.property_id = pictures.property_id
WHERE 
LOWER(city)=LOWER($1) OR 
LOWER(properties.state)=LOWER($1);
