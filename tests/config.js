
exports.config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',
  
    //baseUrl: 'https://localhost:4200/',

    SELENIUM_PROMISE_MANAGER: false,
  
    capabilities: {
        browserName:'firefox'
    },
  
    framework: 'custom',  // set to "custom" instead of cucumber.
  
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  
    specs: [
      '../features/*.feature' //,
      //'../features/accountcreation.feature',
      //'../features/search-for-course.feature',  // Specs here are the cucumber feature files
      //'../features/ad-Material.feature'
    ],
  
    // cucumber command line options
    ignoreUncaughtExceptions: true,
    cucumberOpts: {
      require: ['stepdefinitions/**/*.js'],  // require step definition files before executing features
      tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
      //strict: true,                  // <boolean> fail if there are any undefined or pending steps
      format: ["json: results.json"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
      //'dry-run': false,              // <boolean> invoke formatters without executing steps
      compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },
  
   onPrepare: function () {
      browser.waitForAngularEnabled(false);
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
  };
  
  
