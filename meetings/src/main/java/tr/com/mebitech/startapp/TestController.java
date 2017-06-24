package tr.com.mebitech.startapp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TestController {
	@RequestMapping(value = "/")
	 public String index() {
		System.out.println("hello");
	  return "index.html";
	 }
}
