require("./check-versions")();

const ora = require("ora");
const rm = require("rimraf");
const path = require("path");
const chalk = require("chalk");
const webpack = require("webpack");
const config = require("../config");
const webpackConfig = require("./webpack.prod.config");

process.env.NODE_ENV = "production";

const spinner = ora("building for production...");
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), error =>
{
    if(error)
    {
        throw error;
    }

    webpack(webpackConfig, (error, stats) =>
    {
        spinner.stop();

        if(error)
        {
            throw error;
        }
        
        process.stdout.write(stats.toString
        ({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + "\n\n");
        
        if(stats.hasErrors())
        {
            console.log(chalk.red("  Build failed with errors.\n"));

            process.exit(1);
        }
        
        console.log(chalk.cyan("  Build complete.\n"));
    })
})
