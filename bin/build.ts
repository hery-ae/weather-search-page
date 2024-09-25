#!/usr/bin/env node

import webpack from 'webpack'
import fs from 'node:fs'
import path from 'path'

const webpackConfig = require('../webpack.config.js')

webpack(
    webpackConfig,
    (err, stats) => {
        if (err) return console.error( err )

        const info = stats?.toJson()

        if (stats?.hasErrors()) console.error( info?.errors )

        if (stats?.hasWarnings()) console.warn( info?.warnings )

        console.info( ('Compiled in ').concat(info?.time?.toString() as string).concat('ms') )

        Object.keys(webpackConfig.entry).forEach(
            (value) => {
                const htmlLoc = (webpackConfig.output.path).concat('/').concat(value).concat('.html')

                fs.readFile(
                    htmlLoc,
                    (err, data) => {
                        if (err) throw err
        
                        fs.writeFile(
                            htmlLoc,
                            data.toString().replace( '<script', '<link href="./app.css" rel="stylesheet"><script' ),
                            (err) => {
                                if (err) throw err
        
                                fs.copyFile(
                                    path.resolve( __dirname, '../public/app.css' ),
                                    (webpackConfig.output.path).concat('/app.css'),
                                    (err) => {
                                        if (err) throw err

                                        console.info( ('The \"').concat(value).concat('\" was built.') )

                                    }
                                )
        
                            }
                        )
        
                    }
                )
            }
        )

    }
)
