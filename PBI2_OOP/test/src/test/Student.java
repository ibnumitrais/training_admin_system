package test;

public class Student {
private int grade;

private String name;

public Student(int grade, String name)
{
	this.grade = grade;
	this.name = name;
}

public void setGrade(int grade)
{
	this.grade = grade;
}

public int getGrade()
{
	return grade;
}

public void setName(String name)
{
	this.name = name;
}

public String getName()
{
	return this.name;
}
}
