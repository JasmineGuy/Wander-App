SELECT * FROM properties 
JOIN pictures
ON properties.property_id = pictures.property_id
JOIN users
ON properties.user_id = users.user_id
WHERE properties.property_id =($1);