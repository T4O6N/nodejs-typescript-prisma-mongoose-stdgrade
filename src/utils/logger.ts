import chalk from "chalk";

export default class logger {
  // These lines define static methods (log, info, warn, error) on the Logging class.
  public static log = (args: any) => this.info(args);
  public static info = (args: any) =>
    console.log(
      chalk.blue(`[${new Date().toLocaleString()}] [INFO] `),
      typeof args === "string" ? chalk.blueBright(args) : args
    );
  public static warn = (args: any) =>
    console.log(
      chalk.yellow(`[${new Date().toLocaleString()}] [INFO] `),
      typeof args === "string" ? chalk.blueBright(args) : args
    );
  public static error = (args: any) =>
    console.log(
      chalk.red(`[${new Date().toLocaleString()}] [INFO] `),
      typeof args === "string" ? chalk.blueBright(args) : args
    );
}
