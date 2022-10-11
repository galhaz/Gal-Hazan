create table parents(
email varchar(40) not null primary key,
password int not null,
firstName char(20),
lastName char(20),
birthday date,
city char(20) not null
)
drop table babysitters
create table babysitters(
email varchar(20) not null primary key,
password int not null,
firstName char(20),
lastName char(20),
gender char(1),
birthday date,
city char(20) not null,
salary varchar(20)
)
insert into babysitters(email,password,firstName,
lastName,gender,birthday,city,salary)
values
('gal@walla.com',12345678,'Gal','Hazan','M','1996-03-01','Beer Sheva','30₪-40₪'),
('mor@gmail.com',11111111,'Mor','Badnani','F','1997-08-01','Eilat','30₪-40₪'),
('Liron@gmail.com',1122334455,'Liron','Paretz','M','1997-08-01','Rehovot','40₪-50₪'),
('shir@gmail.com',1122334455,'Shir','Dahan','F','1997-08-20','Tel Aviv','50₪-60₪'),
('gil@gmail.com',1122334455,'Gil','Dahan','M','1997-08-20','Tel Aviv','above 60');

drop table parents
insert into parents(email,password,firstName,
lastName,birthday,city)
values
('yoram@walla.com',12345678,'Yoram','Gaon','1968-03-01','Beer Sheva'),
('ravit@gmail.com',11111111,'Ravit','Assaf','1970-08-01','Eilat'),
('smadar@gmail.com',1122334455,'Smadar','Paretz','1964-08-01','Rehovot'),
('lital@gmail.com',1122334455,'Lital','Dahan','1970-08-20','Tel Aviv'),
('ori@gmail.com',1122334455,'Ori','Dahan','1982-08-20','Tel Aviv');
select * from parents
