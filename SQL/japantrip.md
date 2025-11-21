<!-- -- create table japanTrip (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(50) NOT NULL,
--     age INT CHECK (age BETWEEN 0 AND 80) NOT NULL,
--     purpose enum('tourism', 'business', 'other') NOT NULL,
--     departure enum('incheon', 'gimpo', 'busan', 'jeju') NOT null,
--     destination enum('tokyo', 'osaka', 'fukuoka', 'sapporo'),
-- 	periodOfStay int check (periodOfStay between 1 and 90) NOT NULL
-- );

-- SELECT * FROM japantrip
-- WHERE departure = "incheon"
--   AND destination = "tokyo";
--
-- SELECT * FROM japantrip
-- WHERE periodOfStay >= 30
--   AND destination = 'osaka';
--
-- SELECT * FROM japantrip
-- WHERE purpose = 'business'
--   AND destination = 'sapporo';

-- select departure, count(*) from japantrip
-- where name Like '김%' and destination = 'tokyo' and age between 20 and 39
-- group by departure;

-- order by age desc;

-- select purpose, count(*) from japantrip group by purpose -->
