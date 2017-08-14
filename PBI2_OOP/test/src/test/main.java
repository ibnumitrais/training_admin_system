package test;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;
import testPackage.test;

public class main {
    
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
		test x = new test();
	}

}
