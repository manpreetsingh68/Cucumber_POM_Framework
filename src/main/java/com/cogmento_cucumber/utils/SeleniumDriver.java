package com.cogmento_cucumber.utils;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumDriver {
	
	private static SeleniumDriver seleniumDriver;
	private static WebDriver driver;
	private static WebDriverWait wait;
	private static String browser;
	
	public final static int TIMEOUT = 30;
	public final static int PAGE_LOAD_TIMEOUT = 50;
	public static Logger log = Logger.getLogger("devpinoyLogger");
	
	private SeleniumDriver() {
		
		if(System.getenv("browser") != null) {
			browser = System.getenv("browser");
			if(browser.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\executables\\chromedriver.exe");
				driver = new ChromeDriver();
				log.debug("Chrome browser is launched!");
			} else if(browser.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\executables\\geckodriver.exe");
				driver = new FirefoxDriver();
				log.debug("Firefox browser is launched!");
			}
		// Default browser is set to Chrome
		}else {
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\executables\\chromedriver.exe");
			driver = new ChromeDriver();
			log.debug("Chrome browser is launched!");
		}
		
		driver.manage().window().maximize();
		
		wait = new WebDriverWait(driver, TIMEOUT);
		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
			
	}
	
	public static void openUrl(String url) {
		driver.get(url);
		log.debug("Navigated to URL: " + url);
	}
	
	public static WebDriver getDriver() {
		return driver;
	}
	
	public static void setDriver() {
		if(seleniumDriver == null) {
			seleniumDriver = new SeleniumDriver();
		}
	}
	
	public static void tearDown() {
		if(driver != null) {
			driver.quit();
		}
		
		seleniumDriver = null;
	}
}
