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



public class Searchadmin extends HttpServlet {
	/**
	 * 
	 */
	
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String searchId=req.getParameter("id");
		HttpSession session=req.getSession();
		resp.addHeader("Access-Control-Allow-Origin","*");
		PrintWriter out=resp.getWriter(); 
		Boolean loggedin=false;
		Statement stmt=null;
		try {
			Connection con=DB_Connector.getDbConnection();
			stmt=con.createStatement();
					String user_section="select * from public.books where title ilike "+'\''+"%"+searchId+"%"+'\''+" ";
					ResultSet sql2=stmt.executeQuery(user_section);
				    JSONArray json2 = new JSONArray();
				    JSONArray json = new JSONArray();
					while(sql2.next()) {
						JSONObject jo=new JSONObject();
						String title=sql2.getString("title");
						String author=sql2.getString("author");
						String id=sql2.getString("id");
						String reserve=sql2.getString("reserve");
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
						jo.put("reserve",reserve);
						loggedin=true;
					      json.put(jo);
					}
					System.out.print(json.length()==0);

if (json.length()==0) {

	String user="select * from public.books where publicationdate ilike "+'\''+"%"+searchId+"%"+'\''+" ";
	ResultSet sql3=stmt.executeQuery(user);
	while(sql3.next()) {
		JSONObject jo=new JSONObject();
		String title=sql3.getString("title");
		String author=sql3.getString("author");
		String id=sql3.getString("id");
		String reserve=sql3.getString("reserve");
		String publicationdate=sql3.getString("publicationdate");
		String subject=sql3.getString("subject");
		String quantity=sql3.getString("quantity");
		jo.put("status","success");
		jo.put("title",title);
		jo.put("author",author);
		jo.put("id",id);
		jo.put("publicationdate",publicationdate);
		jo.put("subject",subject);
		jo.put("quantity",quantity);
		jo.put("reserve",reserve);

		loggedin=true;

	      json.put(jo);
	}
}

if (json.length()==0) {

	String userss="select * from public.books where author ilike "+'\''+"%"+searchId+"%"+'\''+" ";
	ResultSet sql4=stmt.executeQuery(userss);
	while(sql4.next()) {
		JSONObject jo=new JSONObject();
		String title=sql4.getString("title");
		String author=sql4.getString("author");
		String id=sql4.getString("id");
		String reserve=sql4.getString("reserve");
		String publicationdate=sql4.getString("publicationdate");
		String subject=sql4.getString("subject");
		String quantity=sql4.getString("quantity");
		jo.put("status","success");
		jo.put("title",title);
		jo.put("author",author);
		jo.put("id",id);
		jo.put("publicationdate",publicationdate);
		jo.put("subject",subject);
		jo.put("quantity",quantity);
		jo.put("reserve",reserve);


		loggedin=true;

	      json.put(jo);
	}
}

json2.put(json);
System.out.print(json.length()==0);
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

