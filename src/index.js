/*jslint node */

"use strict";

module.exports = function makeEh(hyperscript) {
    return function eh(tagsAsString, ...params) {
        if (typeof tagsAsString !== "string") {
            return hyperscript(tagsAsString, ...params);
        }

        const tags = tagsAsString.split(" > ");
        const lastTag = tags.pop();

        return tags.reduceRight(
            (acc, tag) => hyperscript(tag, acc),
            hyperscript(lastTag, ...params)
        );
    };
};
