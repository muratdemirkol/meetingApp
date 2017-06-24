package tr.com.mebitech.startapp;

import java.io.IOException;
import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
/**
 * Projeyi aya�a kald�ran spring boot s�n�f�
 *
 */
@SpringBootApplication(scanBasePackages= {"tr.com.mebitech"})
public class MeetingAppStarter {
	public static void main(String[] args) {
		SpringApplication.run(MeetingAppStarter.class, args);
	}

	@Bean
	public DataSource dataSource()
	{
		System.out.println("init data source");
		return new EmbeddedDatabaseBuilder()
				.setType(EmbeddedDatabaseType.HSQL)
				.addScript("insertdata/create_sql.sql")
				.addScript("insertdata/insert_sql.sql")
				//.addScript("insertdata/xxx.sql")
				.build();
	}

	@Bean
	public SessionFactory sessionFactory()
	{
		LocalSessionFactoryBean ss= new LocalSessionFactoryBean();
		ss.setDataSource(dataSource());
		ss.setPackagesToScan("tr.com.mebitech.entity");
		Properties properties = new Properties();
		properties.put("hibernate.dialect", "org.hibernate.dialect.HSQLDialect");
		properties.put("hibernate.show_sql", "true");
		//properties.put("hibernate.hbm2ddl.auto", "create");
		ss.setHibernateProperties(properties);
		try {
			ss.afterPropertiesSet();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ss.getObject();

	}
}
