-- UPDATE reviews
-- SET text = ($1),
-- rating = ($2)
-- WHERE review_id = ($3);

UPDATE reviews
SET text = ($1),
rating = ($2)
WHERE review_id = ($3);

SELECT * from reviews where property_id = ($4);