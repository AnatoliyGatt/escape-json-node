var assert = require("assert");
var escapeJSON = require("../lib/escape-json");

describe("escape-json", function() {
    describe("init", function() {
        it("should not modify JSON string which is not containing any apostrophes or double quotes", function() {
            var escapedJSONString = escapeJSON("{\"quoteText\": \"How far that little candle throws its beams! So shines a " +
            "good deed in a naughty world.\"}");
            var expectedEscapedJSONString = "{\"quoteText\": \"How far that little candle throws its beams! So shines a " +
                "good deed in a naughty world.\"}";
            assert.equal(escapedJSONString, expectedEscapedJSONString, "JSON string should not be modified");
        });

        it("should unescape apostrophe within JSON string", function() {
            var escapedJSONString = escapeJSON("{\"quoteText\": \"Interesting when rain falls " +
            "somewhere only to recognize that it isn\'t falling some place else.\"}");
            var expectedEscapedJSONString = "{\"quoteText\": \"Interesting when rain falls somewhere only to " +
                "recognize that it isn\'t falling some place else.\"}";
            assert.equal(escapedJSONString, expectedEscapedJSONString, "apostrophe should be unescaped within JSON string");
        });

        it("should unescape apostrophes withing JSON string", function() {
            var escapedJSONString = escapeJSON("{\"quoteText\": \"Don\'t turn away from possible futures before you\'re certain you " +
            "don\'t have anything to learn from them.\"}");
            var expectedEscapedJSONString = "{\"quoteText\": \"Don't turn away from possible futures before you're certain you " +
                "don't have anything to learn from them.\"}";
            assert.equal(escapedJSONString, expectedEscapedJSONString, "apostrophes should be unescaped within JSON string");
        });

        it("should escape nested double quotes within JSON string", function() {
            var escapedJSONString = escapeJSON("{\"quoteText\": \"If you have made mistakes, there is " +
            "always another chance for you. You may have a fresh start any moment you choose, for this thing we " +
            "call \"failure\" is not the falling down, but the staying down.\"}");
            var expectedEscapedJSONString = "{\"quoteText\": \"If you have made mistakes, there is " +
                "always another chance for you. You may have a fresh start any moment you choose, for this thing we " +
                "call \\\"failure\\\" is not the falling down, but the staying down.\"}";
            assert.equal(escapedJSONString, expectedEscapedJSONString, "nested double quotes should be escaped within JSON string");
        });

        it("should escape nested double quotes and unescape apostrophe within JSON string", function() {
            var escapedJSONString = escapeJSON("{\"quoteText\": \"'Acceptance says, \"True, this is " +
            "my situation at the moment. I\'ll look unblinkingly at the reality of it. But I will also open my " +
            "hands to accept willingly whatever a loving Father sends me.\"\"}");
            var expectedEscapedJSONString = "{\"quoteText\": \"'Acceptance says, \\\"True, this is " +
                "my situation at the moment. I'll look unblinkingly at the reality of it. But I will also open my " +
                "hands to accept willingly whatever a loving Father sends me.\\\"\"}";
            assert.equal(escapedJSONString, expectedEscapedJSONString, "nested double quotes should be escaped and apostrophe should be unescaped within JSON string");
        });

        it("should escape nested double quotes and unescape apostrophes within JSON string", function() {
            var escapedJSONString = escapeJSON("{\"quoteText\": \"'Acceptance says, \"True, this is " +
            "my situation at the moment. I\'ll look unblinkingly at the reality of it. But I\'ll also open my " +
            "hands to accept willingly whatever a loving Father sends me.\"\"}");
            var expectedEscapedJSONString = "{\"quoteText\": \"'Acceptance says, \\\"True, this is " +
                "my situation at the moment. I'll look unblinkingly at the reality of it. But I'll also open my " +
                "hands to accept willingly whatever a loving Father sends me.\\\"\"}";
            assert.equal(escapedJSONString, expectedEscapedJSONString, "nested double quotes should be escaped and apostrophes should be unescaped within JSON string");
        });

        it("should escape multiple nested double quotes and unescape apostrophes within JSON string", function() {
            var escapedJSONString = escapeJSON("{\"quoteText\": \"'Acceptance says, \"True, this is " +
            "my situation at the moment. I\'ll look \"unblinkingly\" at the reality of it. But I\'ll also open my " +
            "hands to accept willingly whatever a loving Father sends me.\"\"}");
            var expectedEscapedJSONString = "{\"quoteText\": \"'Acceptance says, \\\"True, this is " +
                "my situation at the moment. I'll look \\\"unblinkingly\\\" at the reality of it. But I'll also open my " +
                "hands to accept willingly whatever a loving Father sends me.\\\"\"}";
            assert.equal(escapedJSONString, expectedEscapedJSONString, "multiple nested double quotes should be escaped and apostrophes should be unescaped within JSON string");
        });
    });
});