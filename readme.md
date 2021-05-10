# localVSCodeDemo

Demonstrate a local dev environment for UI5 applications, using VS Code, dev containers, and a couple of UI5 tooling hacks to inject BTP CF functionality in the mix.

##  Tweak for using approuter and XSUAA.
Approuter serves proxy page, triggering sign in, and then autoloads the real index.html served by the UI5 tooling.

```JSON
{
...
    "start": "run-p start:ui5 start:browser",
    "start:ui5": "ui5 serve --config=uimodule/ui5.yaml",
    "start:browser": "wait-on tcp:5000 && sleep 2s && echo 'open http://localhost:5000/index1.html'",
...
}
```

## Credits

This project has been generated with 💙 and [easy-ui5](https://github.com/SAP)
