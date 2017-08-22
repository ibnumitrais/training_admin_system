CREATE TABLE [User_Role1]
(
	[user_role_id] int NOT NULL IDENTITY (1, 1),
	[user_role_status] varchar(50) NULL,
	[user_role_overdue] datetime NULL,
	[user_id] int NULL,
	[roles_id] int NULL
)