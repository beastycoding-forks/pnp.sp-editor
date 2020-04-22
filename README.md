
# SP Editor for Microsoft Edge
This is total re-write of SP Editor Extension using React, Office UI Fabric and Ionic. This Extension is installable to Microsoft Edge from [Microsoft Edge Addons](https://microsoftedge.microsoft.com/addons/detail/affnnhcbfmcbbdlcadgkdbfafigmjdkk). Not all features has been ported yet, but I think feature parity will be set during H1. When that happens, Chrome SP Editor will be updated to the same code base.

![SP Editor](repo-images/edgespeditor.png)

If you want to chip in by porting features or even creating new ones, here is a quide how to get started contributing.

### running locally with watch mode
```powershell
git clone https://github.com/pnp/sp-editor.git # clone the project
cd sp-editor # go to the folder
npm i # install dependencies
npm run watch # build and start watch mode
code . # open vscode
```
Open Microsoft Edge and select Extensions from the menu

![](repo-images/edgemenu.png)

Enable Developer Mode

![](repo-images/edgedevelopermode.png)

Load Unpacked Extension, select the **build** folder of the project

![](repo-images/edgeloadunpacked.png)

If all good, the local build extension will show up

![](repo-images/edgeextensionloaded.png)

Now you can open a SharePoint site, open devtools and select SharePoint tab. Press the reload button to reload extension after making code changes.

![](repo-images/edgewatchrefresh.png)

To inspect the Extension, you can open the extension devtool by right clicking and selecting **Inspect** and you can see the dom/console/sources/etc of the extension.

![](repo-images/edgeinspect.png)
