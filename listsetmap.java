package test;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

public class main {

	public static void main(String[] args) throws IOException {
		
		System.out.println("List:");
		List<String> listExample = new ArrayList<String>();
		listExample.add("data #1");
		listExample.add("data #2");
		
		for(int i = 0;i<listExample.size();i++)
		{
			System.out.println(listExample.get(i));
		}
		
		System.out.println("Set:");
		
		int count[] = {1, 2,3,4,5,6};
	      Set<Integer> set = new HashSet<Integer>();
	      try {
	         for(int i = 0; i < 5; i++) {
	            set.add(count[i]);
	         }
	         System.out.println(set);

	         TreeSet sortedSet = new TreeSet<Integer>(set);
	         System.out.println("Sorted:");
	         System.out.println(sortedSet);

	         System.out.println("First: "+ (Integer)sortedSet.first());
	         System.out.println("Last: "+ (Integer)sortedSet.last());
	      }
	      catch(Exception e) {}
	      
	     System.out.println("Map: ");
	     
	     Map<String, Integer> mapExample = new HashMap();
	     mapExample.put("a", 1);
	     mapExample.put("b", 2);
	     mapExample.put("c", 3);
	     mapExample.put("d", 4);
	     mapExample.put("e", 5);
	     
	     for (Map.Entry<String, Integer> entry : mapExample.entrySet())
	     {
	         System.out.println(entry.getKey() + "/" + entry.getValue());
	     }
	     
	  
	             if(mapExample.containsKey("a"))
	                 System.out.println("Found total " + mapExample.get("a") + " a");


	}

}
