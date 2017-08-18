package thread;

public class main extends Thread {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		main t1 = new main();
		t1.start();
		main t2 = new main();
		t2.start();
	}
	
	public void run()
	{
		System.out.println("Thread is running...");
		for(int i=1;i<5;i++)
		{
			try{Thread.sleep(1000);}catch(InterruptedException e){System.out.println(e);}
			System.out.println(i);
		}
	}

}
