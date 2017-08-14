package test;

public class Assistant extends Student implements Specialization{
		int assistantLevel;	
		String course;
		
		public Assistant(int grade,String name,int assistantLevel)
		{
			super(grade, name);
			
			this.assistantLevel = assistantLevel;
		}
		
		public void setAssistantLevel(int x)
		{
			this.assistantLevel = x;
		}
		
		public int getAssistantLevel()
		{
			return assistantLevel;
		}

		@Override
		public String getCourse() {
			// TODO Auto-generated method stub
			return course;
		}


		@Override
		public void setCourse(String x) {
			// TODO Auto-generated method stub
			course = x;
		}
		
		
}
