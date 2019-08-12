// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('ProvisionalApplication', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('ProvisionalApplication', async function() {
    await driver.get("https://verticdev-cleanenergycouncil.cs58.force.com/ProvisionalApplication?skip-files")
    vars["href"] = await driver.executeScript("return window.location.href")
    await driver.findElement(By.css(".col-sm-6:nth-child(1) > .ng-pristine .ng-pristine")).click()
    await driver.findElement(By.xpath("//group-input/input")).sendKeys("Selenium")
    await driver.findElement(By.xpath("//div[2]/form-group/div/div/div/group-input/input")).sendKeys("Test")
    await driver.findElement(By.id("gender")).click()
    {
      const dropdown = await driver.findElement(By.id("gender"))
      await dropdown.findElement(By.xpath("//option[. = 'Male']")).click()
    }
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("ddd@gmail.com")
    await driver.findElement(By.css(".c-google-address-autocomplete > #address")).sendKeys("ggd")
    await driver.findElement(By.id("streetAddress")).click()
    await driver.findElement(By.id("streetAddress")).sendKeys("ggd")
    await driver.findElement(By.id("townSuburb")).sendKeys("mel")
    await driver.findElement(By.id("state")).sendKeys("NT")
    await driver.findElement(By.id("postcode")).sendKeys("123355677899")
    await driver.findElement(By.id("country")).click()
    {
      const dropdown = await driver.findElement(By.id("country"))
      await dropdown.findElement(By.xpath("//option[. = 'Australia']")).click()
    }
    await driver.findElement(By.id("accreditationType")).click()
    {
      const dropdown = await driver.findElement(By.id("accreditationType"))
      await dropdown.findElement(By.xpath("//option[. = 'Grid-connect']")).click()
    }
    await driver.findElement(By.css(".ng-empty #accreditationType")).click()
    {
      const dropdown = await driver.findElement(By.css(".col-sm-6:nth-child(2) #accreditationType"))
      await dropdown.findElement(By.xpath("//option[. = 'Design only']")).click()
    }
    await driver.findElement(By.css(".checkboxes:nth-child(12) .checkbox-text")).click()
    await driver.findElement(By.css(".checkboxes:nth-child(13) .checkbox-text")).click()
    await driver.findElement(By.css(".ng-empty .checkbox-text")).click()
    await driver.findElement(By.css(".btn")).click()
    await driver.sleep(12000)
    vars["new_href"] = await driver.executeScript("return window.location.href")
    if (!!await driver.executeScript("return (arguments[0] == arguments[1])", vars["href"],vars["new_href"])) {
      await driver.close()
    }
  })
})
