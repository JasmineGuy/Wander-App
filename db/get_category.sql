SELECT * FROM properties 
JOIN pictures
ON properties.property_id = pictures.property_id
WHERE properties.category_id =($1);