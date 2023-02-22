import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import org.json.JSONArray;
import org.json.JSONObject;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;



public class userSection extends HttpServlet {
	/**
	 * 
	 */
	
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		resp.addHeader("Access-Control-Allow-Origin","*");
		PrintWriter out=resp.getWriter();
		Boolean loggedin=false;
		Statement stmt=null;
		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
					String user_section="select * from public.user ";
					ResultSet sql2=stmt.executeQuery(user_section);
					System.out.print(sql2);
				    JSONArray json2 = new JSONArray();
				    JSONArray json = new JSONArray();
					while(sql2.next()) {
						JSONObject jo=new JSONObject();
						String sectionName=sql2.getString("name");
						String sectionCemail=sql2.getString("cemail");
						String sectionId=sql2.getString("_id");
						String sectionEmail=sql2.getString("email");
						String sectionRole=sql2.getString("role");
						String sectionPhone=sql2.getString("phone");
						jo.put("status","success");
						jo.put("sectionCemail",sectionCemail);
						jo.put("sectionName",sectionName);
						jo.put("sectionId",sectionId);
						jo.put("sectionEmail",sectionEmail);
						jo.put("sectionRole",sectionRole);
						jo.put("sectionPhone",sectionPhone);
	
					
						
						loggedin=true;

					      json.put(jo);

					
					}
					json2.put(json);	
					System.out.print(json2);

					out.print(json2.toString());
			if(loggedin==false) {
				JSONObject jo=new JSONObject();
				jo.put("status","failed");	
		}
		con.close();
		}
		catch (Exception e) {
			
			JSONObject jo=new JSONObject();
			e.printStackTrace();
			jo.put("status","failed");
			jo.put("Exception",e);
			out.print(jo.toString());
		
		}
		
		
		
		
		

}
	

	
}

