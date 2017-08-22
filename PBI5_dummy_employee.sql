USE [TAS_Thor]
GO

INSERT INTO [dbo].[User]
           ([user_full_name]
           ,[user_email]
           ,[user_account_name]
           ,[user_status]
           ,[created_at]
           ,[updated_at]
           ,[deleted_at]
           ,[grade_id]
       ,[division_id]
       ,[office_id])
     VALUES
     ('Kuwat Iskandar Dharmawijaya', 'kuwatiskandar@gmail.com', 'mitrais/kuwatiskandar','active', GETDATE(), GETDATE(),'',2,1,1),
           ('Kuwat Iskandar Dharmawijaya', 'kuwatiskandar@gmail.com', 'mitrais/kuwatiskandar','active', GETDATE(), GETDATE(),'',2,1,1),
( 'Hendri Doddy Yuwono','hendridoodyyuwono@yahoo.com','mitrais/hendridoddy','not active' , GETDATE(), GETDATE(),'',2,1,1),
('Nurtanio Liu','nurtanioliu@gmail.com','mitrais/nurtanioliu','active' , GETDATE(), GETDATE(),'',2,1,1),
('Liu Susilo', 'liususilo@gmail.com','mitrais/liususilo','active' , GETDATE(), GETDATE(),'',2,1,1),
( 'Barteld Maruanaya', 'barteldmaruanaya@gmail.com','mitrais/barteldmaruanaya','active' , GETDATE(), GETDATE(),'',2,1,1),
( 'Thomas Purba','thomaspurba@gmail.com','mitrais/thomaspurba','not active' , GETDATE(), GETDATE(),'',2,1,1),
( 'Peter Hutabalian','peterhutabalian@gmail.com','mitrais/peterhutabalian','active' , GETDATE(), GETDATE(),'',2,1,1),
( 'Hushai Panjaitan','hushaipanjaitan@gmail.com','mitrais/hushaipanjaitan','not active' , GETDATE(), GETDATE(),'',2,1,1),
( 'Budi Astuti','budiastuti@gmail.com','mitrais/hushaipanjaitan','active', GETDATE(), GETDATE(),'',2,1,1),
( 'Dian Budianto','dianbudianto@gmail.com','mitrais/dianbudianto','active', GETDATE(), GETDATE(),'',2,1,1),
( 'Wibawa Ari Wibowo', 'wibawaariwibowo@gmail.com','mitrais/wibawaariwibowo','active', GETDATE(), GETDATE(),'',2,1,1),
('Agung Ari Setiawan','agungari@gmail.com','mitrais/agungari','active', GETDATE(), GETDATE(),'',2,1,1),
('Khosasih Ping','khosasih@gmail.com','mitrais/khosasih','active', GETDATE(), GETDATE(),'',2,1,1),
( 'Willy Sueh-yén','willysuehyen@gmail.com','mitrais/willysuehyen','active', GETDATE(), GETDATE(),'',2,1,1),
( 'Nathaniel van Houten','nathaniel@gmail.com','mitrais/nathaniel','active', GETDATE(), GETDATE(),'',2,1,1),
('Manasseh Malau','malau@gmail.com','mitrais/malau','active', GETDATE(), GETDATE(),'',2,1,1),
( 'Ezra Silaban','ezrasilaban@gmail.com','mitrais/silaban','active', GETDATE(), GETDATE(),'',2,1,1),
( 'Emmanuel Bako', 'emmanuel@gmail.com','mitrais/emmanuel','active', GETDATE(), GETDATE(),'',2,1,1),
('Susilo','susilo@gmail.com','mitrais/susilo','active', GETDATE(), GETDATE(),'',2,1,1),
('Suratman','suratman@gmail.com','mitrais/suratman','active', GETDATE(), GETDATE(),'',2,1,1),
( 'Darma Indra Kurniawan','darmaindra@gmail.com','mitrais/darmaindra','active', GETDATE(), GETDATE(),'',2,1,1),
( 'Krisna Kusuma Sudjarwadi', 'krisna@gmail.com','mitrais/krisna','active', GETDATE(), GETDATE(),'',2,1,1),
( 'Slamet','slamet@gmail.com','mitrais/slamet','active', GETDATE(), GETDATE(),'',2,1,1),
('Gunardi Shoushan','gunardi@gmail.com','mit','active', GETDATE(), GETDATE(),'',2,1,1)
GO


