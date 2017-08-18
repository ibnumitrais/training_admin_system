package asda1;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		File file = new File("C:/test/asda.txt");
		file.createNewFile();
		DataOutputStream stream = new DataOutputStream(new FileOutputStream(file));
		  byte[] b = {'a','b','c','d','e'};
			stream.write(b);
		
			File file1 = new File("C:/test/text.txt");
			DataInputStream stream1 = new DataInputStream(new FileInputStream(file));
			
			
			int i;
			 while((i = stream1.read())!=-1) {
		         
		            // converts integer to character
		            char c = (char)i;
		            
		            // prints character
		            System.out.print(c);
		         }
	}

}
