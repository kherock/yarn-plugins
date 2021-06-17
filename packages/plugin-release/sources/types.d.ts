declare module "calver" {
  namespace calver {
    function init(format: string): string;
    function inc(format: string, ver: string, level: string): string;
    function pretty(format: string, ver: string, locale?: string): string;
    function getTagType(input: string): string;
    function valid(format: string, ver: string): true | never;
  }

  export = calver;
}

declare module "multistream" {
  interface MultiStream extends NodeJS.ReadableStream {}
  class MultiStream {
    constructor(streams: MultiStream.Streams);
  }

  interface FactoryStreamCallback {
    (err: Error | null, stream: null): any;
    (err: null, stream: NodeJS.ReadableStream): any;
  }

  namespace MultiStream {
     type LazyStream = () => import("stream").Stream;
     type FactoryStream = (cb: FactoryStreamCallback) => void;
     type Streams = Array<LazyStream | NodeJS.ReadableStream> | FactoryStream;
     function obj(streams: Streams): NodeJS.ReadableStream;
  }
  export = MultiStream;
}
