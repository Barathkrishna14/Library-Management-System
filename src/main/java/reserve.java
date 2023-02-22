import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import org.json.JSONObject;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;



public class reserve extends HttpServlet {
	/**
	 * 
	 */
	
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String title=req.getParameter("title");

		resp.addHeader("Access-Control-Allow-Origin","*");
		PrintWriter out=resp.getWriter();
		Boolean loggedin=false;
		Statement stmt=null;
		System.out.print(title);

		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
					String sql="select * from public.reserve where title="+'\''+title+'\''+"";
					System.out.print(sql);
					ResultSet sql1=stmt.executeQuery(sql);
					while(sql1.next()) {
					String email=sql1.getString("email") ;
					System.out.print(email);

					String user_section="select * from public.books where title= "+'\''+title+'\''+"";
					
					ResultSet sql2=stmt.executeQuery(user_section);
					String quantity=sql2.getString("quantity") ;

					JSONObject jo=new JSONObject();
					jo.put("status","success");
					jo.put("email",email);
					jo.put("quantity",quantity);

					out.print(jo.toString());
					System.out.print(jo);
					loggedin=true;
					con.close();
					break;}
			if(loggedin==false) {
				JSONObject jo=new JSONObject();
				jo.put("status","failed");
				out.print(jo.toString());
				
		}
		
		}
		catch (Exception e) {
			JSONObject jo=new JSONObject();
			jo.put("status","failed");
			jo.put("Exception",e);
			out.print(jo.toString());
		
		}
		
		

}

	
}