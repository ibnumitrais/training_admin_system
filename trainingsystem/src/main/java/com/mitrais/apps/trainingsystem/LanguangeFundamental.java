package com.mitrais.apps.trainingsystem;

import java.util.*;

public class LanguangeFundamental {
	
	// Data Type and Private variable
	static boolean dataBoolean;
	static byte dataByte;
	static char dataChar;
	static short dataShort;
	static int dataInt;
	static long dataLong;
	static float dataFloat;
	static double dataDouble;
	
	// Array of int
	static String[] anArray = new String[5];
	
	// Collection
	static List<String> aList = new ArrayList<String>();
	
	public static void main(String[] args) {
		//Initialize value of Data Type
		dataBoolean 	= true;  	//1bit
		dataByte 		= 6;		//8bits
		dataChar		= 'q';		//16bits
		dataShort 		= 6;		//16bits
		dataInt 		= 6; 		//32bits
		dataLong 		= 6; 		//64bits
		dataFloat 		= 6; 		//32bits
		dataDouble 		= 6; 		//64bits
		
		//Initialize value of Array Integer
		anArray[0] = "Array value 1";
        anArray[1] = "Array value 2";
        anArray[2] = "Array value 3";
        anArray[3] = "Array value 4";
        anArray[4] = "Array value 5";
        
        //Initialize value of List Array
        aList.add("value 1");
        aList.add("value 2");
        aList.add("value 3");
        aList.add("value 4");
        aList.add("value 5");
        
        //Loop
        System.out.println("Array value:");
        for(int i = 0; i < 5; i++) {
        	System.out.print(anArray[i]);
        	//Condition
        	if(i < 4)
        		System.out.print(",");
        }
        
        System.out.print("\n\n");
        
        System.out.println("List value ("+aList.size()+"): ");
        
        //Loop
        Iterator<String> iterator = aList.iterator();
        while(iterator.hasNext()) {
            String next = (String) iterator.next();
            System.out.print(next);
            
            //Condition
            if(iterator.hasNext())
            	System.out.print(',');
        }
        
        System.out.print("\n\nError Handling \n");
        //Exception Handling
        try {
        	System.out.println("Access element three :" + anArray[6]);
        } catch(ArrayIndexOutOfBoundsException e) {
        	System.out.println("Exception thrown  :" + e);
        } finally {
        	System.out.println("Last index is " + anArray.length);
        	System.out.println("The finally statement is executed");
	    }
	}

}
