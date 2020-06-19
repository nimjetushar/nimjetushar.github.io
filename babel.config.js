module.exports = (api) => {
    api.cache(true);
    const presets = [
        '@babel/preset-env',
        '@babel/preset-react'
    ];
    const plugins = [
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-syntax-dynamic-import'
    ];

    return {
        plugins,
        presets
    };
};
