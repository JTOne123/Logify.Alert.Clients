'use strict';
import rawHtmlTagCollectorBase from "./rawHtmlTagCollectorBase";

export default class scriptsCollector extends rawHtmlTagCollectorBase {
    constructor(_owner) {
        super(_owner, "script");
    }
}
