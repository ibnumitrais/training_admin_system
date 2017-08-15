package test;


import java.io.IOException;

import testPackage.TestExample;

/* Version control specific information
*
* Main Class
*
* Copyright notice
*
* Team Thor 
* 
* 8-15-2017
*/

public class Main {
    
	public static void main(String[] args) throws IOException {
		
		Student[] mhs = new Student[5];
		String[] names = {"Adi","Ade","Red","Blue","Yellow"};
		int[] grades = {100,90,80,90,100};
		int n = 5;
		for(int i = 0;i<n;i++)
		{
			mhs[i] = new Student( grades[i], names[i]);
		}
		
		for(int i = 0;i<n;i++)
		{
			System.out.println("Nama: " + mhs[i].getName() + ", Grade: " + mhs[i].getGrade());
		}
		
		//inheritance
		Assistant a = new Assistant(100,"Jaka",12);
		System.out.println("Nama: " + a.getName() + ", Grade: " + a.getGrade() + ", Assistant Level: " + a.getAssistantLevel());
		
		//interface
		a.setCourse("Basis Data");
		System.out.println(a.getCourse());
		
		//package
		TestExample x = new TestExample();
	}

}
