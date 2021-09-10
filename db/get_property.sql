SELECT * FROM properties 
JOIN pictures
ON properties.property_id = pictures.property_id
JOIN reviews
ON properties.property_id = reviews.property_id
WHERE properties.property_id =($1);