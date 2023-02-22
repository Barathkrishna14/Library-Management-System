import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;



public class DisplayBooks extends HttpServlet {
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
					String user_section="select * from public.books  ";
					ResultSet sql2=stmt.executeQuery(user_section);
					System.out.print(sql2);

				    JSONArray json2 = new JSONArray();
				    JSONArray json = new JSONArray();
					while(sql2.next()) {
						JSONObject jo=new JSONObject();
						String title=sql2.getString("title");
						String author=sql2.getString("author");
						String id=sql2.getString("id");
						String publicationdate=sql2.getString("publicationdate");
						String subject=sql2.getString("subject");
						String quantity=sql2.getString("quantity");

						jo.put("status","success");
						jo.put("title",title);
						jo.put("author",author);
						jo.put("id",id);
						jo.put("publicationdate",publicationdate);
						jo.put("subject",subject);
						jo.put("quantity",quantity);

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

