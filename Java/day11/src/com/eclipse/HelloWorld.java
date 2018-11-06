package com.eclipse;

import java.util.Scanner;

import com.eclipse.bean.Student;

public class HelloWorld {

	public static void main(String[] args) {
		Student s = new Student("уехЩ",23);
		System.out.println(s.getName() + "..." + s.getAge());
	}

}
