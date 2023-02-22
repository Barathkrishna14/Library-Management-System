import java.io.IOException;
import java.sql.Connection;

import java.sql.Statement;

import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;




public class EditUser extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String r_name=req.getParameter("name");
		String r_email=req.getParameter("email");
		String r_phone=req.getParameter("phone");
		String r_password=req.getParameter("password");
		String r_cpassword=req.getParameter("cpassword");
		String sectionEmail=req.getParameter("sectionEmail");
		Connection c = null;
	    Statement stmt = null;
		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
			String sql = "UPDATE public.user SET name="+'\''+r_name+'\''+", email="+'\''+r_email+'\''+", phone="+'\''+r_phone+'\''+", password="+'\''+r_password+'\''+", cpassword="+'\''+r_cpassword+'\''+" where email="+'\''+sectionEmail+'\''+"";
			System.out.printf(sql);
			stmt.executeUpdate(sql) ;
			String sql1 = "UPDATE public.user_mgmt 	SET username="+'\''+r_email+'\''+", password="+'\''+r_cpassword+'\''+" where email="+'\''+sectionEmail+'\''+"";
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