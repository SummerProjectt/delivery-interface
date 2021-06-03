create database menu;
use menu;
create table items(
	id int not null auto_increment,
	name varchar(255) not null,
    image varchar(255),
    price varchar(255),
    primary key (id)
);

insert into items(name,image,price) 
values ('Chipotle nachos','https://i.insider.com/5a6cc5d27101ad7a0830cb94?width=800&format=jpeg&auto=webp','5:00'),
 ('Hotdogs','https://i.insider.com/5a6cc5d27101ad7a0830cb94?width=800&format=jpeg&auto=webp','2:00')
;

select * from items;

DELETE FROM `items` WHERE `id` = 2;

UPDATE items 
SET 
    image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/330px-Hotdog_-_Evan_Swigart.jpg"
WHERE
    id = 2;