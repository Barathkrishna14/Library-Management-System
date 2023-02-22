import java.io.IOException;
import java.sql.Connection;

import java.sql.Statement;

import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



public class user extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out=resp.getWriter();
		String r_name=req.getParameter("name");
		String r_cemail=req.getParameter("cemail");
		String r_email=req.getParameter("email");
		String r_phone=req.getParameter("phone");
		String r_password=req.getParameter("password");
		String r_cpassword=req.getParameter("cpassword");
		Connection c = null;
	    Statement stmt = null;
		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
			String sql = "INSERT INTO public.user(cemail,name, email, phone, password, cpassword)	VALUES ("+'\''+r_name+'\''+","+'\''+r_cemail+'\''+", "+'\''+r_email+'\''+", "+'\''+r_phone+'\''+","+'\''+r_password+'\''+"  , "+'\''+r_cpassword+'\''+")";
			System.out.printf(sql);
			stmt.executeUpdate(sql) ;
			String sql1 = "INSERT INTO public.user_mgmt 	(username, password)	VALUES ("+'\''+r_email+'\''+", "+'\''+r_password+'\''+" );";
			System.out.printf(sql1);
			stmt.executeUpdate(sql1) ;
			stmt.close();
	         con.close();
		}
		catch (Exception e){
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	         System.exit(0);
			System.out.printf(r_cpassword);
			System.out.printf(r_cpassword);
		}
	}}