declare module "firebug.config" {
  export interface FirebugConfig {
    button?: {
      customMods?: readonly string[];
    };
  }

  export const firebugConfig: FirebugConfig;
}
