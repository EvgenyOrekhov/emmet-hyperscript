/*jslint node, maxlen: 80 */
/*eslint func-names: "off" */

"use strict";

const {describe, it} = require("mocha");
const {expect} = require("chai");

const hyperscript = require("hyperscript");

const makeEh = require("../src");

const eh = makeEh(hyperscript);

describe("eh", function () {
    it(
        "should produce the same result as hyperscript",
        function () {
            expect(
                eh(
                    "div#page",
                    eh(
                        "div#header",
                        eh(
                            "h1.classy",
                            "h",
                            {style: {"background-color": "#22f"}}
                        )
                    ),
                    eh(
                        "div#menu",
                        {style: {"background-color": "#2f2"}},
                        eh(
                            "ul",
                            eh("li", "one"),
                            eh("li", "two"),
                            eh("li", "three")
                        )
                    ),
                    eh(
                        "h2",
                        "content title",
                        {style: {"background-color": "#f22"}}
                    ),
                    eh(
                        "p",
                        "so it's just like a templating engine,\n",
                        "but easy to use inline with javascript\n"
                    ),
                    eh(
                        "p",
                        "the intention is for this to be used to create\n",
                        "reusable, interactive html widgets. "
                    )
                ).outerHTML
            ).to.eql(
                hyperscript(
                    "div#page",
                    hyperscript(
                        "div#header",
                        hyperscript(
                            "h1.classy",
                            "h",
                            {style: {"background-color": "#22f"}}
                        )
                    ),
                    hyperscript(
                        "div#menu",
                        {style: {"background-color": "#2f2"}},
                        hyperscript(
                            "ul",
                            hyperscript("li", "one"),
                            hyperscript("li", "two"),
                            hyperscript("li", "three")
                        )
                    ),
                    hyperscript(
                        "h2",
                        "content title",
                        {style: {"background-color": "#f22"}}
                    ),
                    hyperscript(
                        "p",
                        "so it's just like a templating engine,\n",
                        "but easy to use inline with javascript\n"
                    ),
                    hyperscript(
                        "p",
                        "the intention is for this to be used to create\n",
                        "reusable, interactive html widgets. "
                    )
                ).outerHTML
            );

            expect(
                eh()
            ).to.eql(
                hyperscript()
            );

            expect(
                eh("foo").outerHTML
            ).to.eql(
                hyperscript("foo").outerHTML
            );
        }
    );

    it(
        "should support the \" > \" operator",
        function () {
            expect(
                eh(
                    "div#page > div#header > h1.classy",
                    "h",
                    {style: {"background-color": "#22f"}}
                ).outerHTML
            ).to.eql(
                hyperscript(
                    "div#page",
                    hyperscript(
                        "div#header",
                        hyperscript(
                            "h1.classy",
                            "h",
                            {style: {"background-color": "#22f"}}
                        )
                    )
                ).outerHTML
            );
        }
    );
});
