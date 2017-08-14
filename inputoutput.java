package test;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		File file = new File("C:/test/text.txt");
		file.createNewFile();
		DataOutputStream stream = new DataOutputStream(new FileOutputStream(file));
		stream.writeInt(123);
		stream.close();
		
		File file1 = new File("C:/test/text.txt");
		DataInputStream stream1 = new DataInputStream(new FileInputStream(file));
		int a = stream1.readInt();
		System.out.println(a);
	}

}
