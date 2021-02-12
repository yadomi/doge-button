import { uglify } from "rollup-plugin-uglify";
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export default [
    {
        input: 'src/dogebutton.js',
        output: {
            file: 'dist/dogebutton.min.js'
        },
        plugins: [
            uglify()
        ]
    },
    ...[
        ['src/dogebutton.css', 'src/dogebutton.min.css'],
        ['src/dogebutton_fr-FR.css', 'dist/dogebutton_fr-FR.min.css']
    ].reduce((config, [input, output]) => config.concat({
        input,
        output: {
            file: output
        },
        plugins: [
            postcss({
                minimize: true,
                extract: true,
                plugins: [
                    autoprefixer()
                ]
            }),
        ]
    }), [])
];