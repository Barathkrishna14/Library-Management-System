import java.io.IOException;
import java.sql.Connection;

import java.sql.Statement;

import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;




public class deleteUser extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out=resp.getWriter();
		String r_name=req.getParameter("name");
		Connection c = null;
        System.out.println(r_name);
	    Statement stmt = null;
		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
			String sql = "DELETE FROM public.user WHERE name="+'\''+r_name+'\''+"";
			System.out.printf(sql);
			stmt.executeUpdate(sql) ;
			stmt.close();
	         con.close();
		}
		catch (Exception e){
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	         System.exit(0);
	         System.out.println("Record deleted successfully");

		}
	}}