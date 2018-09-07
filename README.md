# How to setup a flow project in vscode

1 Don't install flow-typed locally, you must install it globally. If you install it locally and save it to package.json, then flow cannot run and will hang.

`npm i flow-typed -g`

2 `flow-typed install` will look at package.json and add all of 3rd party library type to the flow-typed folder. This will allow flow to run without errors because of missing types.

`flow-typed install`
