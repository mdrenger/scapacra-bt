import { DataType, IBrowser } from 'scapacra';
import { BundestagListBrowser } from './BundestagListBrowser';

export = Documents_Browser;

namespace Documents_Browser {
    export class Xml extends DataType {
    }

    export class PlenarProtocolBrowser extends BundestagListBrowser<Xml>{
        public static readonly pageSize = 5;
        private static readonly ajaxRequestPath: string = "ajax/filterlist/de/service/opendata/-/543410";

        public getPageSize(): number {
            return PlenarProtocolBrowser.pageSize;
        }

        public getListAjaxRequestPath(): string {
            return PlenarProtocolBrowser.ajaxRequestPath;
        }

        protected createFromStream(readableStream: NodeJS.ReadableStream): Xml {
            return new Xml(readableStream);
        }
    }
}