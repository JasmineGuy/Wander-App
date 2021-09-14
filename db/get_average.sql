SELECT AVG(rating)
FROM reviews
WHERE property_id = ($1);