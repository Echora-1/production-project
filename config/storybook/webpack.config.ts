import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths:BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    // eslint-disable-next-line no-undef,no-param-reassign
    config.module.rules = config.module.rules.map((rule) => {
        // @ts-ignore
        if (/svg/.test(rule.test)) {
            // @ts-ignore
            return { ...rule, exclude: /\.svg/i };
        }
        return rule;
    });
    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildCssLoader(true));
    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
    }));
    return config;
};
