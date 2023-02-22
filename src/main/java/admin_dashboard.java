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



public class admin_dashboard extends HttpServlet {
	/**
	 * 
	 */
	
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String paramName=req.getParameter("paramName");
		resp.addHeader("Access-Control-Allow-Origin","*");
		PrintWriter out=resp.getWriter();
		Boolean loggedin=false;
		Statement stmt=null;
		System.out.print(paramName);

		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
					String sql="select * from public.user where email="+'\''+paramName+'\''+"";
					System.out.print(sql);
					ResultSet sql1=stmt.executeQuery(sql);
					while(sql1.next()) {
					String userName1=sql1.getString("cemail");
					String Name=sql1.getString("name");
					String _id=sql1.getString("_id");
					String email=sql1.getString("email") ;
					String role=sql1.getString("role");
					String phone=sql1.getString("phone");
					System.out.print(userName1);
					JSONObject jo=new JSONObject();
					jo.put("status","success");
					jo.put("cemail",Name);
					jo.put("sql",userName1);
					jo.put("_id",_id);
					jo.put("email",email);
					jo.put("role",role);
					jo.put("phone",phone);
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