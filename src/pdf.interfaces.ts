import {
    Type,
    Abstract,
    DynamicModule,
    ForwardReference,
} from '@nestjs/common';
import { Options as JuiceOptions } from 'juice';
import { CreateOptions, FileInfo } from 'html-pdf';

export type engine =
    | 'arc-templates'
    | 'atpl'
    | 'bracket'
    | 'dot'
    | 'dust'
    | 'eco'
    | 'ejs'
    | 'ect'
    | 'haml'
    | 'haml-coffee'
    | 'hamlet'
    | 'handlebars'
    | 'hogan'
    | 'htmling'
    | 'jade'
    | 'jazz'
    | 'jqtpl'
    | 'just'
    | 'liquid'
    | 'liquor'
    | 'lodash'
    | 'marko'
    | 'mote'
    | 'mustache'
    | 'nunjucks'
    | 'plates'
    | 'pug'
    | 'qejs'
    | 'ractive'
    | 'razor'
    | 'react'
    | 'slm'
    | 'squirrelly'
    | 'swig'
    | 'teacup'
    | 'templayed'
    | 'toffee'
    | 'twig'
    | 'underscore'
    | 'vash'
    | 'velocityjs'
    | 'walrus'
    | 'whiskers';

type ViewEngineOptions = Record<string, any>;

export interface PDFModuleOptions {
    name?: string;
    view: ViewOptions;
    juice?: JuiceOptions;
}

export interface PDFOptionsFactory {
    createPdfOptions(): PDFModuleOptions;
}

export interface PDFModuleAsyncOptions {
    name?: string;
    useClass?: Type<PDFOptionsFactory>;
    useExisting?: Type<PDFOptionsFactory>;
    useFactory?: (...args: any[]) => PDFModuleOptions;
    inject?: Array<string | symbol | Function | Type<any> | Abstract<any>>;
    imports?: Array<
        Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference
    >;
}

export interface ViewOptions {
    root: string;
    engine: engine;
    extension?: string;
    engineOptions?: ViewEngineOptions;
}

export interface ViewPortSize {
    width?: number;
    height?: number;
}

export interface PdfOptions extends CreateOptions {
    filename?: string;
    template: string;
    viewportSize?: ViewPortSize;
    locals?: {
        [key: string]: any;
    };
}

export interface PDF {
    (options: PdfOptions): FileInfo;
}

export { ViewEngineOptions, JuiceOptions };
