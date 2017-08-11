CREATE TABLE dbo.grade
(
grade_id int not null identity(1, 1) primary key,
grade_name varchar(50),
grade_description varchar(255)
)