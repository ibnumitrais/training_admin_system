package com.mitrais.apps.trainingsystem;

import java.sql.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	String connectionString =  
            "jdbc:sqlserver://jptrainingsql:1433;"  
            + "database=TAS_Thor;"  
            + "user=thor;"  
            + "password=s4teliliT;";  

        // Declare the JDBC objects.  
        Connection connection = null;  

        try {  
            connection = DriverManager.getConnection(connectionString);  
            System.out.println(connection.toString());
        }  
        catch (Exception e) {  
            e.printStackTrace();  
        }  
        finally {  
            if (connection != null) try { connection.close(); } catch(Exception e) {}  
        }  
    }
}
