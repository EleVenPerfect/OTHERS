package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.service.Service;

public class RegLet extends HttpServlet {

	private static final long serialVersionUID = -4415294210787731608L;

	/**
	 * The doGet method of the Server let.
	 */

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		
		// 新建服务对象
		Service serv = new Service();
		
		// 接收注册信息
		String username = request.getParameter("r_name");
		username = new String(username.getBytes("ISO-8859-1"), "UTF-8");
		String password = request.getParameter("r_password");
		
		// 验证处理
		boolean reged = serv.register(username,password);
		if (reged) {
			System.out.print("Succss");
			request.getSession().setAttribute("username", username);
			//response.sendRedirect("welcome.jsp");
		} else {
			System.out.print("Failed");
		}


		// 返回信息
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.print("用户名：" + username);
		out.print("密码：" + password);
		out.flush();
		out.close();
	}

	/**
	 * The doPost method of the Server let.
	 */

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

//		测试为何手机端中文乱码，电脑正常
//		System.out.println("u1--"+username);
//		System.out.println("u2--"+username);

	}

}
