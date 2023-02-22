
import java.io.IOException;
import java.sql.Connection;

import java.sql.Statement;

import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;




public class BorrowBook extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out=resp.getWriter();
		String title=req.getParameter("title");
		String quantity=req.getParameter("quantity");
		String author=req.getParameter("author");
		String publicationdate=req.getParameter("publicationdate");
		String subject=req.getParameter("subject");
		String date=req.getParameter("date");
		Connection c = null;
        System.out.println(title);
	    Statement stmt = null;
		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
			String sql = "update public.books set quantity="+'\''+quantity+'\''+"where  title="+'\''+title+'\''+"";
			stmt.executeUpdate(sql) ;
			String sql1="insert into public.issued_books(title,author,publicationdate,subject) values ("+'\''+title+'\''+","+ '\''+author+'\''+","+'\''+publicationdate+'\''+","+'\''+subject+'\''+")";                         
			System.out.printf(sql1);
			stmt.executeUpdate(sql1) ;
			stmt.close();
	         con.close();
		}
		catch (Exception e){
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	         System.exit(0);
	         System.out.println("Record deleted successfully");

		}
	}}