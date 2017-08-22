CREATE TABLE [User1]
(
	[user_id] int NOT NULL IDENTITY (1, 1),
	[user_full_name] varchar(100) NULL,
	[user_email] varchar(50) NULL,
	[user_account_name] varchar(20) NULL,
	[user_status] char(10) NULL,
	[created_at] datetime NULL,
	[updated_at] datetime NULL,
	[deleted_at] datetime NULL,
	[grade_id] int NULL,
	[devision_id] int NULL,
	[office_id] int NULL
)