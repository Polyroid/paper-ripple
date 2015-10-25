Package.describe({
    name: 'polyroid:paper-ripple',
    version: '1.0.4',
    summary: 'Adds a material design ripple to any container',
    git: 'https://github.com/Polyroid/paper-ripple.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0',
        'polyroid:iron-a11y-keys-behavior@1.0.0'
    ], 'client');

    api.addAssets([
        'hero.svg',
        'paper-ripple.html'
    ], 'client');
});
