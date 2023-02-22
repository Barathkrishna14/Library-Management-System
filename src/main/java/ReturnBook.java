import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import org.json.JSONObject;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class ReturnBook extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String title=req.getParameter("title");
		Connection c = null;
	    Statement stmt = null;
	   
		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
			String sql = "UPDATE public.issued_books SET deleted_at=now() WHERE title="+'\''+title+'\''+"";
			stmt.executeUpdate(sql) ;
			String sql1 = "SELECT quantity FROM public.books  WHERE title="+'\''+title+'\''+"";
			 ResultSet rs=stmt.executeQuery(sql1);
			 JSONObject jo=new JSONObject();
			 
			 while(rs.next()) {
				
				Integer quantity=rs.getInt("quantity");
				Integer quantity1=quantity+1;
				System.out.print(quantity);
				
				jo.put("quantity1",quantity1);
			}
			
			Integer var=jo.getInt("quantity1");
			String sql2 = "UPDATE public.books SET quantity="+'\''+var+'\''+" WHERE title="+'\''+title+'\''+"";
			stmt.executeUpdate(sql2) ;
			System.out.print(var);
			stmt.close();
	         con.close();
			
		}
		catch (Exception e){
			System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	         System.exit(0);
	         System.out.println("Record deleted successfully");

		}
		
	}}