exports.config = {
    services: [
      [
        "appium",
        {
          command: "appium",
        },
      ],
    ],
    port: 4723,
    runner: "local",
    specs: ["./test/specs/**/*.ts"],
    capabilities: [
      {
        maxInstances: 1,
        appiumVersion: "1.18.0",
        platformName: "Android",
        platformVersion: "8.1",
        deviceName: "Pixel 3 API 27",
        app: "../android/app/build/outputs/apk/debug/app-debug.apk",
        automationName: "UiAutomator2",
        appWaitForLaunch: true
      },
    ],
    logLevel: "trace",
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: "mocha",
    reporters: ["spec"],
    mochaOpts: {
      ui: "bdd",
      timeout: 60000,
    },
  };