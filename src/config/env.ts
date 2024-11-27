/**
 * Enum representing the possible application environments.
 * These correspond to different modes the application can run in.
 */
export enum Environment {
  /** Development environment */
  development = "development",
  /** Pre-production or staging environment */
  pre = "pre",
  /** Production environment */
  production = "production",
  /** Mock environment for testing or simulation */
  mock = "mock",
}

/**
 * Current application environment, derived from the Vite `MODE`.
 *
 * @constant {Environment} APP_ENVIRONMENT - The active environment mode.
 */
export const APP_ENVIRONMENT = import.meta.env.MODE as Environment;

/**
 * Validates that the current application environment is one of the allowed environments.
 *
 * @throws {Error} If the `APP_ENVIRONMENT` is not a valid value from the `Environment` enum.
 */
export function validateEnvironment(): void {
  const validEnvs: Environment[] = Object.values(Environment);
  if (!validEnvs.includes(APP_ENVIRONMENT)) {
    throw new Error(
      `Invalid vite mode (aka APP_ENVIRONMENT): ${APP_ENVIRONMENT}, valid values are: ${validEnvs.join(
        ", "
      )}`
    );
  }
}
