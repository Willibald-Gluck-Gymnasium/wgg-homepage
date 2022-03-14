const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            '@components': path.resolve('resources/js/Components'),
            '@layouts': path.resolve('resources/js/Layouts'),
            '@img': path.resolve('resources/img'),
            '@resources': path.resolve('resources')
        },
    },
    resolveLoader: {
        modules: ['node_modules'],
    },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve('bootstrap/cache/webpack')
    }
};
