import java.io.IOException;
import java.sql.Connection;

import java.sql.Statement;

import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;




public class AddBook extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out=resp.getWriter();
		String title=req.getParameter("title");
		String author=req.getParameter("author");
		String subject=req.getParameter("subject");
		String publicationdate=req.getParameter("publicationdate");
		Connection c = null;
	    Statement stmt = null;
		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
			String sql = "INSERT INTO public.books(title, author, subject, publicationdate)	VALUES ("+'\''+title+'\''+", "+'\''+author+'\''+", "+'\''+subject+'\''+","+'\''+publicationdate+'\''+")";
			System.out.printf(sql);
			stmt.executeUpdate(sql) ;
			stmt.close();
	         con.close();
		}
		catch (Exception e){
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	         System.exit(0);
			
		}
	}}