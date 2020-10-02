import { Route } from 'react-static';
import { DocPage, DocsPageNavItem } from '@riboseinc/aperis-doc-pages/types';


export interface PluginConfig {
  sourcePath: string
  urlPrefix: string
  template?: string
  headerBanner: string
  footerBanner: string
  title: string
}


export interface ReactStaticState {
  routes: {
    path: string
    data: any
    [key: string]: any
  }[]
}


export interface DocsRoute extends Route {
  _isIndexFile: boolean
}


export interface DocsPageRouteData {
  urlPrefix: string
  docPage: DocPage
  docsNav: DocsPageNavItem[]
  title: string
  footerBanner: string
  headerBanner: string
}


export type DocPageData = DocPage["data"]

export type SourceDocPageData = DocPageData & {
  media: string[]
  redirectFrom: string[]
  importance?: number
}
