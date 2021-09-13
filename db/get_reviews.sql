SELECT * FROM reviews 
JOIN users
ON reviews.user_id = users.user_id
WHERE property_id = ($1);