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



public class Login extends HttpServlet {
	/**
	 * 
	 */
	
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String r_username=req.getParameter("username");
		String r_password=req.getParameter("password");
		HttpSession session=req.getSession();
		resp.addHeader("Access-Control-Allow-Origin","*");
		PrintWriter out=resp.getWriter();
		Boolean loggedin=false;
		Statement stmt=null;

		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
			String sql3="select * from user_mgmt where username="+'\''+r_username+'\''+" and password ="+'\''+r_password+'\''+" ";
			System.out.print(sql3);
			ResultSet rs=stmt.executeQuery(sql3);
			while(rs.next()) {
				String username=rs.getString("username");
				String password=rs.getString("password");
				String admin=rs.getString("admin");

				if(r_username.equals(username)&&r_password.equals(password)) {
					session.setAttribute("username",username);
					System.out.print(password);
					session.setAttribute("password",rs.getString("password"));
					String sql="select * from public.user where email="+'\''+username+'\''+"";
					ResultSet sql1=stmt.executeQuery(sql);
					System.out.print(sql);

					while(sql1.next()) {
					String userName1=sql1.getString("name");
					
					JSONObject jo=new JSONObject();
					jo.put("status","success");
					jo.put("username",r_username);
					jo.put("sql",userName1);
					jo.put("admin",admin);
					out.print(jo.toString());}
					loggedin=true;
					break;}
		
					break;
					
			}
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