// 01
function manageBrowser(browser, actions) {
    for (const action of actions) {
        const parts = action.split(' ');
        const command = parts[0];
        const target = parts.slice(1).join(' ');

        switch (command) {
            case 'Open':
                if (!browser['Open Tabs'].includes(target)) {
                    browser['Open Tabs'].push(target);
                    browser['Browser Logs'].push(action);
                }
                break;
            case 'Close':
                if (browser['Open Tabs'].includes(target)) {
                    const index = browser['Open Tabs'].indexOf(target);
                    browser['Open Tabs'].splice(index, 1);
                    browser['Recently Closed'].push(target);
                    browser['Browser Logs'].push(action);
                }
                break;
            case 'Clear':
                if (target === 'History and Cache') {
                    browser['Open Tabs'] = [];
                    browser['Recently Closed'] = [];
                    browser['Browser logs'] = [];
                }
                break;
            default:
                break;
        }
    }

    const result = `${browser['Browser Name']}\nOpen Tabs: ${browser['Open Tabs'].join(', ')}\nRecently Closed: ${browser['Recently Closed'].join(', ')}\nBrowser Logs: ${browser['Browser Logs'].join(', ')}`;
    console.log(result);
}

// 02
function manageBrowser(browser, actions) {
    actions.forEach(action => {
        const [command, ...args] = action.split(' ');

        switch (command) {
            case 'Open':
                const siteToOpen = args.join(' ');
                if (!browser['Open Tabs'].includes(siteToOpen)) {
                    browser['Open Tabs'].push(siteToOpen);
                    browser['Browser Logs'].push(action);
                }
                break;
            case 'Close':
                const siteToClose = args.join(' ');
                if (browser['Open Tabs'].includes(siteToClose)) {
                    browser['Open Tabs'] = browser['Open Tabs'].filter(tab => tab !== siteToClose);
                    browser['Recently Closed'].push(siteToClose);
                    browser['Browser Logs'].push(action);
                }
                break;
            case 'Clear':
                if (args.join(' ') === 'History and Cache') {
                    browser['Open Tabs'] = [];
                    browser['Recently Closed'] = [];
                    browser['Browser Logs'] = [];
                }
                break;
            default:
                break;
        }
    });

    const { 'Browser Name': browserName, 'Open Tabs': openTabs, 'Recently Closed': recentlyClosed, 'Browser Logs': browserLogs } = browser;
    const result = `${browserName}\nOpen Tabs: ${openTabs.join(', ')}\nRecently Closed: ${recentlyClosed.join(', ')}\nBrowser Logs: ${browserLogs.join(', ')}`;
    console.log(result);
}

/* manageBrowser(
    {"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);

manageBrowser(
    {"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

); */