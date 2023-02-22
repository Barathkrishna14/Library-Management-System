import java.io.IOException;
import java.sql.Connection;
import java.sql.Statement;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



public class OnReserve extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String title=req.getParameter("title");
		String quantity=req.getParameter("reserve");
		String mail=req.getParameter("mail");
        System.out.println(title);
	    Statement stmt = null;
		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
			String sql = "update public.books set reserve="+'\''+quantity+'\''+"where  title="+'\''+title+'\''+"";
			stmt.executeUpdate(sql) ;
			System.out.printf(sql);
			String sql1 = "insert into public.reserve (title,email)  values("+'\''+title+'\''+","+'\''+mail+'\''+")";
			System.out.printf(sql1);
			stmt.executeUpdate(sql1) ;
			stmt.close();
//	         con.commit();
	         con.close();
		}
		catch (Exception e){
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	         System.exit(0);
	         System.out.println("Record deleted successfully");

		}
	}}