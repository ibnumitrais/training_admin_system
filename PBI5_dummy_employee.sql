USE [TAS_Thor]
GO

INSERT INTO [dbo].[User]
           ([full_name]
           ,[email]
           ,[account_name]
           ,[active]
           ,[created_at]
           ,[updated_at]
           ,[deleted_at]
           ,[grade_id])
     VALUES
     ('Kuwat Iskandar Dharmawijaya', 'kuwatiskandar@gmail.com', 'mitrais/kuwatiskandar','active', GETDATE(), GETDATE(),'',2),
           ('Kuwat Iskandar Dharmawijaya', 'kuwatiskandar@gmail.com', 'mitrais/kuwatiskandar','active', GETDATE(), GETDATE(),'',2),
( 'Hendri Doddy Yuwono','hendridoodyyuwono@yahoo.com','mitrais/hendridoddy','not active' , GETDATE(), GETDATE(),'',2),
('Nurtanio Liu','nurtanioliu@gmail.com','mitrais/nurtanioliu','active' , GETDATE(), GETDATE(),'',2),
('Liu Susilo', 'liususilo@gmail.com','mitrais/liususilo','active' , GETDATE(), GETDATE(),'',2),
( 'Barteld Maruanaya', 'barteldmaruanaya@gmail.com','mitrais/barteldmaruanaya','active' , GETDATE(), GETDATE(),'',2),
( 'Thomas Purba','thomaspurba@gmail.com','mitrais/thomaspurba','not active' , GETDATE(), GETDATE(),'',2),
( 'Peter Hutabalian','peterhutabalian@gmail.com','mitrais/peterhutabalian','active' , GETDATE(), GETDATE(),'',2),
( 'Hushai Panjaitan','hushaipanjaitan@gmail.com','mitrais/hushaipanjaitan','not active' , GETDATE(), GETDATE(),'',2),
( 'Budi Astuti','budiastuti@gmail.com','mitrais/hushaipanjaitan','active', GETDATE(), GETDATE(),'',2),
( 'Dian Budianto','dianbudianto@gmail.com','mitrais/dianbudianto','active', GETDATE(), GETDATE(),'',2),
( 'Wibawa Ari Wibowo', 'wibawaariwibowo@gmail.com','mitrais/wibawaariwibowo','active', GETDATE(), GETDATE(),'',2),
('Agung Ari Setiawan','agungari@gmail.com','mitrais/agungari','active', GETDATE(), GETDATE(),'',2),
('Khosasih Ping','khosasih@gmail.com','mitrais/khosasih','active', GETDATE(), GETDATE(),'',2),
( 'Willy Sueh-yén','willysuehyen@gmail.com','mitrais/willysuehyen','active', GETDATE(), GETDATE(),'',2),
( 'Nathaniel van Houten','nathaniel@gmail.com','mitrais/nathaniel','active', GETDATE(), GETDATE(),'',2),
('Manasseh Malau','malau@gmail.com','mitrais/malau','active', GETDATE(), GETDATE(),'',2),
( 'Ezra Silaban','ezrasilaban@gmail.com','mitrais/silaban','active', GETDATE(), GETDATE(),'',2),
( 'Emmanuel Bako', 'emmanuel@gmail.com','mitrais/emmanuel','active', GETDATE(), GETDATE(),'',2),
('Susilo','susilo@gmail.com','mitrais/susilo','active', GETDATE(), GETDATE(),'',2),
('Suratman','suratman@gmail.com','mitrais/suratman','active', GETDATE(), GETDATE(),'',2),
( 'Darma Indra Kurniawan','darmaindra@gmail.com','mitrais/darmaindra','active', GETDATE(), GETDATE(),'',2),
( 'Krisna Kusuma Sudjarwadi', 'krisna@gmail.com','mitrais/krisna','active', GETDATE(), GETDATE(),'',2),
( 'Slamet','slamet@gmail.com','mitrais/slamet','active', GETDATE(), GETDATE(),'',2),
('Gunardi Shoushan','gunardi@gmail.com','mit','active', GETDATE(), GETDATE(),'',2)
GO


