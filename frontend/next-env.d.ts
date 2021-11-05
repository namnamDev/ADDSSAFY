/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    projectCode?: number;
  }
}