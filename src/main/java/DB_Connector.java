import java.sql.Connection;
import java.sql.DriverManager;


public class DB_Connector {
	public static Connection getDbConnection() {
		Connection con=null;
		String url="jdbc:postgresql://localhost:5432/library";
		String user="postgres";
		String pass="Barath2116";
		try {
			Class.forName("org.postgresql.Driver");
			con=DriverManager.getConnection(url,user,pass);
		}
		catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return con;
	}

}