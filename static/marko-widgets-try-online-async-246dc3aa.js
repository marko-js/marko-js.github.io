$rmod.def("/marko@3.0.2/taglibs/async/async-fragment-nested-tag-transformer",function(e,r,a,t,n){"use strict";a.exports=function(e,r){var a=e.parentNode;if("async-fragment"!==a.tagName)return void r.addError(e,"The <"+e.tagName+"> should be nested within an <async-fragment> tag.");var t;"async-fragment-error"===e.tagName?t="renderError":"async-fragment-timeout"===e.tagName?t="renderTimeout":"async-fragment-placeholder"===e.tagName&&(t="renderPlaceholder");var n=r.builder;a.setAttributeValue(t,n.renderBodyFunction(e.body)),e.detach()}});
$rmod.def("/marko@3.0.2/taglibs/async/async-fragment-tag-transformer", function(require, exports, module, __filename, __dirname) { 'use strict';

var isObjectEmpty = require('/$/marko/$/raptor-util/isObjectEmpty'/*'raptor-util/isObjectEmpty'*/);

module.exports = function transform(el, context) {
    var varName = el.getAttributeValue('var');
    if (varName) {
        if (varName.type !== 'Literal' || typeof varName.value !== 'string') {
            context.addError(el, 'The "var" attribute value should be a string');
            return;
        }

        varName = varName.value;

        if (!context.util.isValidJavaScriptIdentifier(varName)) {
            context.addError(el, 'The "var" attribute value should be a valid JavaScript identifier');
            return;
        }
    } else {
        context.addError(el, 'The "var" attribute is required');
        return;
    }

    var attrs = el.getAttributes().concat([]);
    var arg = {};
    var builder = context.builder;

    attrs.forEach((attr) => {
        var attrName = attr.name;
        if (attrName.startsWith('arg-')) {
            let argName = attrName.substring('arg-'.length);
            arg[argName] = attr.value;
            el.removeAttribute(attrName);
        }
    });

    var dataProviderAttr = el.getAttribute('data-provider');
    if (!dataProviderAttr) {
        context.addError(el, 'The "data-provider" attribute is required');
        return;
    }

    if (dataProviderAttr.value == null) {
        context.addError(el, 'A value is required for the "data-provider" attribute');
        return;
    }

    if (dataProviderAttr.value.type == 'Literal') {
        context.addError(el, 'The "data-provider" attribute value should not be a literal ' + (typeof dataProviderAttr.value.value));
        return;
    }

    var name = el.getAttributeValue('name');
    if (name == null) {
        el.setAttributeValue('_name', builder.literal(dataProviderAttr.rawValue));
    }

    if (el.hasAttribute('arg')) {
        if (isObjectEmpty(arg)) {
            arg = el.getAttributeValue('arg');
        } else {
            let mergeVar = context.addStaticVar('__merge', '__helpers.m');
            arg = builder.functionCall(mergeVar, [
                builder.literal(arg), // Input props from the attributes take precedence
                el.getAttributeValue('arg')
            ]);
        }
    } else {
        if (isObjectEmpty(arg)) {
            arg = null;
        } else {
            arg = builder.literal(arg);
        }
    }

    if (arg) {
        el.setAttributeValue('arg', arg);
    }

    var timeoutMessage = el.getAttributeValue('timeout-message');
    if (timeoutMessage) {
        el.removeAttribute('timeout-message');
        el.setAttributeValue('renderTimeout', builder.renderBodyFunction([
            builder.text(timeoutMessage)
        ]));
    }

    var errorMessage = el.getAttributeValue('error-message');
    if (errorMessage) {
        el.removeAttribute('error-message');
        el.setAttributeValue('renderError', builder.renderBodyFunction([
            builder.text(errorMessage)
        ]));
    }

    var placeholder = el.getAttributeValue('placeholder');
    if (placeholder) {
        el.removeAttribute('placeholder');
        el.setAttributeValue('renderPlaceholder', builder.renderBodyFunction([
            builder.text(placeholder)
        ]));
    }
};

});
$rmod.dep("/$/marko","raptor-logging","1.0.8");
$rmod.dep("/$/marko","raptor-polyfill","1.0.2");
$rmod.dep("/$/marko/$/raptor-logging","raptor-stacktraces","1.0.1");
$rmod.dep("/$/marko","raptor-async","1.1.2");
$rmod.remap("/marko@3.0.2/taglibs/async/client-reorder","client-reorder-browser");
$rmod.def("/marko@3.0.2/taglibs/async/client-reorder-browser",function(r,e,o,d,i){e.isSupported=!1});
$rmod.def("/marko@3.0.2/taglibs/async/async-fragment-tag",function(e,n,r,t,o){"use strict";function a(e){return e&&"function"==typeof e.then}function l(e,n,r){if(n){var t=e.then(function(e){n(null,e)});"function"==typeof e["catch"]?t=t["catch"](function(e){n(e)}):"function"==typeof e.fail&&(t=t.fail(function(e){n(e)})),t.done&&t.done()}return e}function i(e,n,r,t){if(a(e))return void l(e,r);if("function"==typeof e){var o=1===e.length?e.call(t,r):e.call(t,n,r);void 0!==o&&(a(o)?l(o,r):r(null,o))}else r(null,e)}var u=e("/$/marko/$/raptor-logging").logger(r),c=e("/$/marko/$/async-writer"),f=e("/$/marko/$/raptor-async/AsyncValue"),s=e("./client-reorder").isSupported;r.exports=function(e,n){function r(r,t,o){g&&(clearTimeout(g),g=null),d=!0;var i=a||n;l.emit("asyncFragmentBeforeRender",{clientReorder:m,out:i,name:y}),r?e.renderError?(console.error("Async fragment ("+y+") failed. Error:",r.stack||r),e.renderError(i)):i.error(r):o?o(a):e.renderBody&&e.renderBody(i,t),m||l.emit("asyncFragmentFinish",{clientReorder:!1,out:i}),a&&(a.end(),m||n.flush())}var t=e.dataProvider,o=e.arg||{};o.out=n;var a,l=n.global.events,m=s&&e.clientReorder===!0,d=!1,g=null,y=e.name||e._name,p=e.scope||this,v=e.method;if(v&&(t=t[v].bind(t)),i(t,o,r,p),!d){var h=e.timeout,b=e.renderTimeout;if(null==h?h=1e4:0>=h&&(h=null),null!=h&&(g=setTimeout(function(){var e="Async fragment ("+y+") timed out after "+h+"ms";b?(u.error(e),r(null,null,b)):r(new Error(e))},h)),m){var $=n.global.__asyncFragments||($=n.global.__asyncFragments={fragments:[],nextId:0}),F=e.name||$.nextId++;n.write('<span id="afph'+F+'">'+(e.placeholder||"")+"</span>");var k=new f;a=c.create(null,{global:n.global}),a.on("finish",function(){k.resolve(a.getOutput())}).on("error",function(e){k.reject(e)});var w={id:F,asyncValue:k,out:a,after:e.showAfter};$.fragments?$.fragments.push(w):l.emit("asyncFragmentBegin",w)}else n.flush(),a=n.beginAsync({timeout:0,name:y})}}});
$rmod.def("/marko@3.0.2/taglibs/async/async-fragments-tag",function(e,t,n,r,a){var i=e("./client-reorder");n.exports=function(e,t){var n=t.global,r=n.events;t.flush();var a=t.beginAsync({last:!0,timeout:-1});t.onLast(function(e){function s(s){s.asyncValue.done(function(f,d){if(!c){if(f)return c=!0,a.error(f);n._afRuntime||(a.write(i.getCode()),n._afRuntime=!0),a.write('<div id="af'+s.id+'" style="display:none">'+d+'</div><script type="text/javascript">$af('+("number"==typeof s.id?s.id:'"'+s.id+'"')+(s.after?',"'+s.after+'"':"")+")</script>"),s.out.writer=a.writer,r.emit("asyncFragmentFinish",{clientReorder:!0,out:s.out}),t.flush(),0===--o&&(c=!0,a.end(),e())}})}var f=n.__asyncFragments;if(!f||!f.fragments.length)return a.end(),void e();var o=f.fragments.length,c=!1;f.fragments.forEach(s),r.on("asyncFragmentBegin",function(e){o++,s(e)}),delete f.fragments})}});
$rmod.def("/marko@3.0.2/taglibs/async/client-reorder-runtime",function(r,e,n,i,o){});
$rmod.def("/marko@3.0.2/taglibs/async/client-reorder-runtime.min",function(n,r,e,i,m){});
$rmod.def("/marko@3.0.2/taglibs/core/assign-tag", function(require, exports, module, __filename, __dirname) { module.exports = function codeGenerator(elNode, generator) {
    var attributes = elNode.attributes;

    if (!attributes) {
        generator.addError('Invalid <assign> tag. Argument is missing. Example; <assign x=123 />');
        return elNode;
    }

    var builder = generator.builder;

    return attributes.map((attr) => {
        return builder.assignment(attr.name, attr.value);
    });
};
});
$rmod.def("/marko@3.0.2/compiler/util/removeComments", function(require, exports, module, __filename, __dirname) { 'use strict';
var tokenizer = require('./tokenizer').create([
    {
        name: 'stringDouble',
        pattern: /"(?:[^"]|\\")*"/,
    },
    {
        name: 'stringSingle',
        pattern: /'(?:[^']|\\')*'/
    },
    {
        name: 'singleLineComment',
        pattern: /\/\/.*/
    },
    {
        name: 'multiLineComment',
        pattern: /\/\*(?:[\s\S]*?)\*\//
    }
]);

/**
 * Parses a for loop string in the following forms:
 *
 * <varName> in <expression>
 * <varName> in <expression> | status-var=<varName> separator=<expression>
 * <varName> from <expression> to <expression>
 * <varName> from <expression> to <expression> step <expression>
 * <init>; <test>; <update>
 */
module.exports = function removeComments(str) {

    var comments = [];

    tokenizer.forEachToken(str, (token) => {
        switch(token.name) {
            case 'singleLineComment':
            case 'multiLineComment':
                comments.push(token);
                break;
        }
    });

    var len = comments.length;

    if (len) {
        for (var i=len-1; i>=0; i--) {
            var comment = comments[i];
            str = str.substring(0, comment.start) + str.substring(comment.end);
        }
    }

    return str;
};
});
$rmod.def("/marko@3.0.2/compiler/util/tokenizer", function(require, exports, module, __filename, __dirname) { 'use strict';

function create(tokens) {
    function getToken(matches) {
        for (var i=0; i<tokens.length; i++) {
            let tokenValue = matches[i + 1];
            if (tokenValue != null) {
                var tokenDef = tokens[i];
                return {
                    start: matches.index,
                    end: matches.index + matches[0].length,
                    name: tokenDef.name,
                    value: tokenValue
                };
            }
        }
    }

    var tokensRegExp = new RegExp(tokens
        .map((token) => {
            return '(' + token.pattern.source + ')';
        })
        .join('|'), 'g');

    return {
        forEachToken: function(value, callback, thisObj) {
            tokensRegExp.lastIndex = 0; // Start searching from the beginning again
            var matches;
            while ((matches = tokensRegExp.exec(value))) {
                let token = getToken(matches);
                callback.call(this, token);
            }
        }
    };
}

exports.create = create;
});
$rmod.def("/marko@3.0.2/taglibs/core/util/parseFor", function(require, exports, module, __filename, __dirname) { 'use strict';
var removeComments = require('../../../compiler/util/removeComments');
var compiler = require('../../../compiler');

var integerRegExp = /^-?\d+$/;
var numberRegExp = /^-?(?:\d+|\d+\.\d*|\d*\.\d+|\d+\.\d+)$/;

var tokenizer = require('../../../compiler/util/tokenizer').create([
    {
        name: 'stringDouble',
        pattern: /"(?:[^"]|\\")*"/,
    },
    {
        name: 'stringSingle',
        pattern: /'(?:[^']|\\')*'/
    },
    {
        name: 'in',
        pattern: /\s+in\s+/,
    },
    {
        name: 'from',
        pattern: /\s+from\s+/
    },
    {
        name: 'to',
        pattern: /\s+to\s+/,
    },
    {
        name: 'step',
        pattern: /\s+step\s+/,
    },
    {
        name: 'semicolon',
        pattern: /[;]/,
    },
    {
        name: 'separator',
        pattern: /separator=/
    },
    {
        name: 'status-var',
        pattern: /status\-var=/
    },
    {
        name: 'iterator',
        pattern: /iterator=/
    },
    {
        name: 'pipe',
        pattern: /\s+\|\s+/
    },
    {
        name: 'groupOpen',
        pattern: /[\{\(\[]/
    },
    {
        name: 'groupClose',
        pattern: /[\}\)\]]/
    }
]);

function throwError(message) {
    var error = new Error(message);
    error.code = 'INVALID_FOR';
    throw error;
}

function buildIdentifier(name, errorMessage) {
    try {
        return compiler.builder.identifier(name);
    } catch(e) {
        throwError(errorMessage + ': ' + e.message);
    }
}

function parseExpression(str, errorMessage) {
    try {
        return compiler.builder.parseExpression(str);
    } catch(e) {
        throwError(errorMessage + ': ' + e.message);
    }
}

function parseStatement(str, errorMessage) {
    try {
        return compiler.builder.parseStatement(str);
    } catch(e) {
        throwError(errorMessage + ': ' + e.message);
    }
}

function createNumberExpression(str, errorMessage) {
    if (str == null) {
        return null;
    }

    if (integerRegExp.test(str)) {
        return compiler.builder.literal(parseInt(str, 10));
    } else if (numberRegExp.test(str)) {
        return compiler.builder.literal(parseFloat(str));
    } else {
        return parseExpression(str, errorMessage);
    }
}

/**
 * Parses a for loop string in the following forms:
 *
 * <varName> in <expression>
 * <varName> in <expression> | status-var=<varName> separator=<expression>
 * <varName> from <expression> to <expression>
 * <varName> from <expression> to <expression> step <expression>
 * <init>; <test>; <update>
 */
module.exports = function(str) {
    str = removeComments(str);

    let depth = 0;
    var prevToken;
    var loopType;
    var pipeFound = false;

    var varName;
    var nameVarName;
    var valueVarName;
    var inExpression;
    var statusVarName;
    var separatorExpression;
    var fromExpression;
    var toExpression;
    var stepExpression;
    var iteratorExpression;

    var forInit;
    var forTest;
    var forUpdate;

    function finishVarName(end) {
        varName = str.substring(0, end).trim();
    }

    function finishPrevPart(end) {
        if (!prevToken) {
            return;
        }

        var start = prevToken.end;
        var part = str.substring(start, end).trim();

        switch(prevToken.name) {
            case 'from':
                fromExpression = part;
                break;
            case 'to':
                toExpression = part;
                break;
            case 'in':
                inExpression = part;
                break;
            case 'step':
                stepExpression = part;
                break;
            case 'status-var':
                statusVarName = part;
                break;
            case 'separator':
                separatorExpression = part;
                break;
            case 'iterator':
                iteratorExpression = part;
                break;
            case 'pipe':
                if (part.length !== 0) {
                    throwError('Unexpected input: ' + part);
                    return;
                }
                break;
        }
    }

    tokenizer.forEachToken(str, (token) => {
        switch(token.name) {
            case 'groupOpen':
                depth++;
                break;
            case 'groupClose':
                depth--;
                break;
            case 'in':
                if (depth === 0 && !loopType) {
                    loopType = 'ForEach';
                    finishVarName(token.start);
                    prevToken = token;
                }
                break;
            case 'from':
                if (depth === 0 && !loopType) {
                    loopType = 'ForRange';
                    finishVarName(token.start);
                    prevToken = token;
                }
                break;
            case 'to':
                if (depth === 0 && prevToken && prevToken.name === 'from') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'step':
                if (depth === 0 && prevToken && prevToken.name === 'to') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'semicolon':
                if (depth === 0) {
                    loopType = 'For';

                    if (forInit == null) {
                        forInit = str.substring(0, token.start);
                    } else if (forTest == null) {
                        forTest = str.substring(prevToken.end, token.start);
                        forUpdate = str.substring(token.end);
                    } else {
                        throwError('Invalid native for loop. Expected format: <init>; <test>; <update>');
                    }

                    prevToken = token;
                }
                break;
            case 'pipe':
                if (depth === 0) {
                    pipeFound = true;
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'status-var':
                if (depth === 0 && pipeFound && str.charAt(token.start-1) === ' ') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'separator':
                if (depth === 0 && pipeFound && str.charAt(token.start-1) === ' ') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'iterator':
                if (depth === 0 && pipeFound && str.charAt(token.start-1) === ' ') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
        }
    });

    finishPrevPart(str.length);

    if (loopType === 'ForEach') {
        var nameValue = varName.split(/\s*,\s*/);
        if (nameValue.length === 2) {
            nameVarName = buildIdentifier(nameValue[0], 'Invalid name variable');
            valueVarName = buildIdentifier(nameValue[1], 'Invalid value variable');
            varName = null;
            loopType = 'ForEachProp';
        }
    }

    if (inExpression) {
        inExpression = parseExpression(inExpression, 'Invalid "in" expression');
    }

    if (separatorExpression) {
        separatorExpression = parseExpression(separatorExpression, 'Invalid "separator" expression');
    }

    if (iteratorExpression) {
        iteratorExpression = parseExpression(iteratorExpression, 'Invalid "iterator" expression');
    }

    if (fromExpression) {
        fromExpression = createNumberExpression(fromExpression, 'Invalid "from" expression');
    }

    if (toExpression) {
        toExpression = createNumberExpression(toExpression, 'Invalid "to" expression');
    }

    if (stepExpression) {
        stepExpression = createNumberExpression(stepExpression, 'Invalid "step" expression');
    }

    if (varName != null) {
        varName = buildIdentifier(varName, 'Invalid variable name');
    }

    if (statusVarName) {
        statusVarName = parseExpression(statusVarName, 'Invalid status-var option');
        if (statusVarName.type === 'Literal') {
            statusVarName = compiler.builder.identifier(statusVarName.value);
        } else  if (statusVarName.type !== 'Identifier') {
            throwError('Invalid status-var option');
        }
    }

    if (forInit) {
        forInit = parseStatement(forInit, 'Invalid for loop init');
    }

    if (forTest) {
        forTest = parseExpression(forTest, 'Invalid for loop test');
    }

    if (forUpdate) {
        forUpdate = parseExpression(forUpdate, 'Invalid for loop update');
    }

    // No more tokens... now we need to sort out what happened
    if (loopType === 'ForEach') {
        return {
            'loopType': loopType,
            'varName': varName,
            'in': inExpression,
            'separator': separatorExpression,
            'statusVarName': statusVarName,
            'iterator': iteratorExpression
        };
    } else if (loopType === 'ForEachProp') {
        return {
            'loopType': loopType,
            'nameVarName': nameVarName,
            'valueVarName': valueVarName,
            'in': inExpression
        };
    } else if (loopType === 'ForRange') {
        return {
            'loopType': loopType,
            'varName': varName,
            'from': fromExpression,
            'to': toExpression,
            'step': stepExpression
        };
    } else if (loopType === 'For') {
        if (forTest == null) {
            throwError('Invalid native for loop. Expected format: <init>; <test>; <update>');
        }
        return {
            'loopType': loopType,
            'init': forInit,
            'test': forTest,
            'update': forUpdate
        };
    } else {
        throwError('Invalid for loop');
    }
};
});
$rmod.def("/marko@3.0.2/taglibs/core/util/createLoopNode",function(o,r,e,p,t){function a(o,r,e){var p=n(o);if(p.body=r,"ForEach"===p.loopType)return e.forEach(p);if("ForRange"===p.loopType)return e.forRange(p);if("ForEachProp"===p.loopType)return e.forEachProp(p);if("For"===p.loopType)return e.forStatement(p);throw new Error("Unsupported loop type: "+p.loopType)}var n=o("./parseFor");e.exports=a});
$rmod.def("/marko@3.0.2/taglibs/core/core-transformer", function(require, exports, module, __filename, __dirname) { 'use strict';

var createLoopNode = require('./util/createLoopNode');

var coreAttrHandlers = [
    [
        'while', function(attr, node) {
            var whileArgument = attr.argument;
            if (!whileArgument) {
                return false;
            }

            var whileNode = this.builder.whileStatement(whileArgument);
            node.wrapWith(whileNode);
        }
    ],
    [
        'for', function(attr, node) {
            var forArgument = attr.argument;
            if (!forArgument) {
                return false;
            }

            var loopNode;

            try {
                loopNode = createLoopNode(forArgument, null, this.builder);
            } catch(e) {
                if (e.code === 'INVALID_FOR') {
                    this.addError(e.message);
                    return;
                } else {
                    throw e;
                }
            }


            //Surround the existing node with the newly created loop node
            // NOTE: The loop node will be one of the following:
            //       ForEach, ForRange, ForEachProp or ForStatement
            node.wrapWith(loopNode);
        }
    ],
    [
        'if', function(attr, node) {
            var ifArgument = attr.argument;
            if (!ifArgument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(ifArgument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for if statement:\n' + e.message);
            }

            var ifNode = this.builder.ifStatement(test);
            //Surround the existing node with an "If" node
            node.wrapWith(ifNode);
        }
    ],
    [
        'unless', function(attr, node) {
            var ifArgument = attr.argument;
            if (!ifArgument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(ifArgument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for unless statement:\n' + e.message);
            }

            test = this.builder.negate(test);
            var ifNode = this.builder.ifStatement(test);
            //Surround the existing node with an "if" node
            node.wrapWith(ifNode);
        }
    ],
    [
        'else-if', function(attr, node) {
            var elseIfArgument = attr.argument;
            if (!elseIfArgument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(elseIfArgument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for else-if statement:\n' + e.message);
            }

            var elseIfNode = this.builder.elseIfStatement(test);
            //Surround the existing node with an "ElseIf" node
            node.wrapWith(elseIfNode);
        }
    ],
    [
        'else', function(attr, node) {
            var elseNode = this.builder.elseStatement();
            //Surround the existing node with an "Else" node
            node.wrapWith(elseNode);
        }
    ],
    [
        'body-only-if', function(attr, node, el) {
            var argument = attr.argument;
            if (!argument) {
                return false;
            }

            var test;
            try {
                test = this.builder.parseExpression(argument);
            } catch(e) {
                test = this.builder.literalFalse();
                this.addError('Invalid expression for body-only-if statement:\n' + e.message);
            }

            el.setBodyOnlyIf(test);
        }
    ],
    [
        'marko-preserve-whitespace', function(attr, node, el) {
            el.setPreserveWhitespace(true);
        }
    ],
    [
        'marko-init', function(attr, node, el) {
            if (el.tagName !== 'script') {
                this.addError('The "marko-init" attribute should only be used on the <script> tag');
                return;
            }
            var bodyText = el.bodyText;
            el.noOutput = true;
            this.context.addStaticCode(bodyText);
            el.detach();
            return null;
        }
    ]
];

class AttributeTransformer {
    constructor(context, el) {
        this.context = context;
        this.builder = context.builder;
        this.el = el;
    }

    addError(message) {
        this.context.addError({
            node: this.el,
            message: message
        });
    }
}

coreAttrHandlers.forEach(function(attrHandler) {
    var name = attrHandler[0];
    var func = attrHandler[1];
    AttributeTransformer.prototype[name] = func;
});

var attributeTransformers = AttributeTransformer.prototype;

module.exports = function transform(el, context) {
    el.removeAttribute('marko-body'); // This attribute is handled at parse time. We can just remove it now

    var attributeTransfomer;
    var node = el;

    el.forEachAttribute((attr) => {
        let attrName = attr.name;
        if (!attrName) {
            if (!node.addDynamicAttributes) {
                context.addError(el, 'Node does not support the "attrs" attribute');
            } else {
                node.addDynamicAttributes(attr.value);
            }
            return;
        }
        var attrTransformerFunc = attributeTransformers[attrName];
        if (attrTransformerFunc) {
            if (!attributeTransfomer) {
                attributeTransfomer = new AttributeTransformer(context, el);
            }
            var newNode = attributeTransfomer[attrName](attr, node, el);
            if (newNode !== false) {
                el.removeAttribute(attrName);
                if (newNode !== undefined) {
                    if (newNode) {
                        newNode.pos = node.pos;
                    }

                    node = newNode;
                }
            }
        }
    });
};
});
$rmod.def("/marko@3.0.2/taglibs/core/else-if-tag",function(e,r,t,a,i){t.exports=function(e,r){var t=e.argument,a=e.attributes;if(!t)return r.addError(e,"Invalid <else-if> tag. Argument is missing. Example; <if(foo === true)>"),e;if(a.length)return r.addError(e,"Invalid <else-if> tag. Attributes not allowed."),e;var i;try{i=r.builder.parseExpression(t)}catch(s){i=r.builder.literalFalse(),r.addError(e,"Invalid expression for else-if statement:\n"+s.message)}var n=r.builder.elseIfStatement(i);return n}});
$rmod.def("/marko@3.0.2/taglibs/core/else-tag", function(require, exports, module, __filename, __dirname) { 'use strict';

module.exports = function nodeFactory(el, context) {

    var elseStatement = context.builder.elseStatement();

    var argument = el.argument;
    if (argument) {
        context.addError(elseStatement, 'Invalid <else> tag. Argument is not allowed');
    }

    if (el.hasAttribute('if')) {
        let ifAttr = el.getAttribute('if');
        el.removeAttribute('if');

        if (el.attributes.length) {
            context.addError(elseStatement, 'Invalid <else if> tag. Only the "if" attribute is allowed.');
            return el;
        }

        var testExpression = ifAttr.argument;
        if (!testExpression) {
            context.addError(elseStatement, 'Invalid <else if> tag. Invalid "if" attribute. Expected: <else if(<test>)>');
            return el;
        }
        var elseIfStatement = context.builder.elseIfStatement(testExpression);
        return elseIfStatement;
    }

    if (el.attributes.length) {
        context.addError(elseStatement, 'Invalid <else> tag. Attributes not allowed.');
        return el;
    }

    return elseStatement;
};
});
$rmod.def("/marko@3.0.2/taglibs/core/for-tag",function(r,o,a,e,t){var i=r("./util/createLoopNode");a.exports=function(r,o){var a=r.argument;if(!a)return o.addError("Invalid <for> tag. Argument is missing. Example: <for(color in colors)>"),r;var e=o.builder;try{var t=i(a,r.body,e);return t}catch(d){if("INVALID_FOR"!==d.code)throw d;o.addError(d.message)}}});
$rmod.def("/marko@3.0.2/taglibs/core/if-tag",function(r,t,e,i,a){e.exports=function(r,t){var e=r.argument;if(!e)return t.addError(r,"Invalid <if> tag. Argument is missing. Example; <if(foo === true)>"),r;var i=r.attributes;if(i.length)return void t.addError(r,"Invalid <if> tag. Attributes not allowed.");var a;try{a=t.builder.parseExpression(e)}catch(n){a=t.builder.literalFalse(),t.addError(r,"Invalid expression for if statement:\n"+n.message)}return t.builder.ifStatement(a)}});
$rmod.def("/marko@3.0.2/taglibs/core/include-tag", function(require, exports, module, __filename, __dirname) { 'use strict';

module.exports = function codeGenerator(el, codegen) {
    let argument = el.argument;
    if (!argument) {
        return;
    }

    let builder = codegen.builder;
    let args = builder.parseJavaScriptArgs(argument);
    if (args.length === 0) {
        codegen.addError('Template path is required for the <include(templatePath[, templateData])> tag');
        return;
    } else if (args.length > 2) {
        codegen.addError('Wrong number of arguments passed to the <include> tag. Expected: <include(templatePath[, templateData])> tag');
        return;
    }

    let templatePath = args[0];
    let templateVar;

    if (templatePath.type === 'Literal') {
        templateVar = codegen.context.importTemplate(templatePath.value);
    } else {
        templateVar = templatePath;
    }

    let templateData = {};
    let attrs = el.getAttributes();
    attrs.forEach((attr) => {
        templateData[attr.name] = attr.value;
    });

    if (el.body && el.body.length) {
        templateData.renderBody = builder.renderBodyFunction(el.body);
    }

    if (args.length === 2) {
        if (Object.keys(templateData).length === 0) {
            templateData = args[1];
        } else {
            let mergeVar = codegen.addStaticVar('__merge', '__helpers.m');
            templateData = builder.functionCall(mergeVar, [
                builder.literal(templateData), // Input props from the attributes take precedence
                args[1] // The template data object is passed as the second argument: <include("./foo.marko", { ... })/>
            ]);
        }
    } else {
        templateData = builder.literal(templateData);
    }

    let renderMethod = builder.memberExpression(templateVar, builder.identifier('render'));
    let renderArgs = [ templateData, 'out' ];
    let renderFunctionCall = builder.functionCall(renderMethod, renderArgs);
    return renderFunctionCall;
};
});
$rmod.def("/marko@3.0.2/taglibs/core/include-text-tag-browser", function(require, exports, module, __filename, __dirname) { 'use strict';
module.exports = function codeGenerator(el, codegen) {
    let argument = el.argument;
    if (!argument) {
        return;
    }

    let builder = codegen.builder;
    let pathExpression = builder.parseExpression(argument);
    if (pathExpression.type !== 'Literal' || typeof pathExpression.value !== 'string') {
        codegen.addError('Argument to the <include-text> tag should be a string value: <include-text("./foo.txt")/>');
        return;
    }

    var path = pathExpression.value;
    return builder.text(builder.literal('<include-text> cannot be compiled in the browser (path="' + path + '")'));
};
});
$rmod.def("/marko@3.0.2/taglibs/core/invoke-tag",function(o,r,e,n,i){e.exports=function(o,r){var e=o.attributes[0];if(!e)return void r.addError('Invalid <invoke> tag. Missing function attribute. Expected: <invoke console.log("Hello World")');var n=e.argument;if(void 0===n)return void r.addError('Invalid <invoke> tag. Missing function arguments. Expected: <invoke console.log("Hello World")');var i=e.name,t=i+"("+n+")";return r.builder.parseExpression(t)}});
$rmod.def("/marko@3.0.2/taglibs/core/macro-body-tag",function(r,e,o,t,n){o.exports=function(r,e){var o=e.builder;return o.ifStatement(o.identifier("renderBody"),[o.functionCall("renderBody",["out"])])}});
$rmod.def("/marko@3.0.2/taglibs/core/macro-tag",function(r,a,t,e,n){t.exports=function(r,a){var t=r.attributes;if(t.length){var e=t[0];if(null!=e.argument){var n,o=r.body,i=e.name,u=e.argument;n=u?u.split(/\s*,\s*/):[];var m=a.builder;return m.macro(i,n,o)}}}});
$rmod.def("/marko@3.0.2/taglibs/core/unless-tag",function(e,r,t,a,n){t.exports=function(e,r){var t=e.argument;if(!t)return r.addError(e,"Invalid <unless> tag. Argument is missing. Example; <unless(foo === true)>"),e;var a=e.attributes;if(a.length)return void r.addError(e,"Invalid <unless> tag. Attributes not allowed.");var n,s=r.builder;try{n=s.parseExpression(t)}catch(i){n=s.literalFalse(),r.addError(e,"Invalid expression for unless statement:\n"+i.message)}return r.builder.ifStatement(s.negate(n))}});
$rmod.def("/marko@3.0.2/taglibs/core/var-tag", function(require, exports, module, __filename, __dirname) { var isValidJavaScriptVarName = require('../../compiler/util/isValidJavaScriptVarName');

module.exports = function nodeFactory(el, context) {
    var builder = context.builder;
    var hasError = false;

    var declarations = el.attributes.map((attr) => {
        var varName = attr.name;

        if (!isValidJavaScriptVarName(varName)) {
            context.addError(el, 'Invalid JavaScript variable name: ' + varName, 'INVALID_VAR_NAME');
            hasError = true;
            return;
        }

        var id = builder.identifier(varName);
        var init = attr.value;

        return {
            id: id,
            init
        };
    });

    if (hasError) {
        return el;
    }

    return context.builder.vars(declarations);
};
});
$rmod.def("/marko@3.0.2/taglibs/core/while-tag",function(r,e,i,t,a){i.exports=function(r,e){var i=r.argument;if(!i)return e.addError("Invalid <while> tag. Argument is missing. Example: <while(i < 4)>"),r;var t=e.builder;return t.whileStatement(t.parseExpression(i),r.body)}});
$rmod.def("/marko@3.0.2/taglibs/html/html-comment-tag",function(t,e,r,o,n){"use strict";r.exports=function(t,e){e.write("<!--"),t.renderBody&&t.renderBody(e),e.write("-->")}});
$rmod.def("/raptor-util@1.0.10/createError",function(r,n,t,e,a){t.exports=function(r,n){var t,e=arguments.length,a=Error;return 2==e?(t=r instanceof a?r:new a(r),t.stack?t.stack+="\nCaused by: "+(n.stack||n):t._cause=n):1==e&&(t=r instanceof a?r:new a(r)),t}});
$rmod.main("/htmljs-parser@1.5.5","index");
$rmod.dep("/$/marko","htmljs-parser","1.5.5");
$rmod.def("/htmljs-parser@1.5.5/BaseParser", function(require, exports, module, __filename, __dirname) { 'use strict';

var CODE_NEWLINE = 10;
var CODE_CARRIAGE_RETURN = 13;

class Parser {
    static createState(mixins) {
        return mixins;
    }

    constructor(options) {
        this.reset();
    }

    reset() {
        // current absolute character position
        this.pos = -1;

        // The maxPos property is the last absolute character position that is
        // readable based on the currently received chunks
        this.maxPos = -1;

        // the current parser state
        this.state = null;

        // The raw string that we are parsing
        this.data = null;
    }

    setInitialState(initialState) {
        this.initialState = initialState;
    }

    enterState(state) {
        if (this.state === state) {
            // Re-entering the same state can lead to unexpected behavior
            // so we should throw error to catch these types of mistakes
            throw new Error('Re-entering the current state is illegal - ' + state.name);
        }

        var oldState;
        if ((oldState = this.state) && oldState.leave) {
            // console.log('Leaving state ' + oldState.name);
            oldState.leave.call(this, state);
        }

        // console.log('Entering state ' + state.name);

        this.state = state;

        if (state.enter) {
            state.enter.call(this, oldState);
        }
    }

    /**
     * Look ahead to see if the given str matches the substring sequence
     * beyond
     */
    lookAheadFor(str, startPos) {
        // Have we read enough chunks to read the string that we need?
        if (startPos == null) {
            startPos = this.pos + 1;
        }
        var len = str.length;
        var endPos = startPos + len;

        if (endPos > this.maxPos + 1) {
            return undefined;
        }

        var found = this.data.substring(startPos, endPos);
        return (found === str) ? str : undefined;
    }

    /**
     * Look ahead to a character at a specific offset.
     * The callback will be invoked with the character
     * at the given position.
     */
    lookAtCharAhead(offset, startPos) {
        if (startPos == null) {
            startPos = this.pos;
        }
        return this.data.charAt(startPos + offset);
    }

    lookAtCharCodeAhead(offset, startPos) {
        if (startPos == null) {
            startPos = this.pos;
        }
        return this.data.charCodeAt(startPos + offset);
    }

    rewind(offset) {
        this.pos -= offset;
    }

    skip(offset) {
        // console.log('-- ' + JSON.stringify(this.data.substring(this.pos, this.pos + offset)) + ' --  ' + 'SKIPPED'.gray);
        this.pos += offset;
    }

    end() {
        this.pos = this.maxPos + 1;
    }

    substring(pos, endPos) {
        return this.data.substring(pos, endPos);
    }

    parse(data) {
        if (data == null) {
            return;
        }

        // call the constructor function again because we have a contract that
        // it will fully reset the parser
        this.reset();

        if (Array.isArray(data)) {
            data = data.join('');
        }

        this.data = data;
        this.maxPos = data.length - 1;

        // Enter initial state
        if (this.initialState) {
            this.enterState(this.initialState);
        }

        // Move to first position
        this.pos = 0;

        if (!this.state) {
            // Cannot resume when parser has no state
            return;
        }

        var pos;
        while ((pos = this.pos) <= this.maxPos) {
            let ch = data[pos];
            let code = ch.charCodeAt(0);
            let state = this.state;

            if (code === CODE_NEWLINE) {
                if (state.eol) {
                    state.eol.call(this, ch);
                }
                this.pos++;
                continue;
            } else if (code === CODE_CARRIAGE_RETURN) {
                let nextPos = pos + 1;
                if (nextPos < data.length && data.charCodeAt(nextPos) === CODE_NEWLINE) {
                    if (state.eol) {
                        state.eol.call(this, '\r\n');
                    }
                    this.pos+=2;
                    continue;
                }
            }

            // console.log('-- ' + JSON.stringify(ch) + ' --  ' + this.state.name.gray);

            // We assume that every state will have "char" function
            state.char.call(this, ch, code);

            // move to next position
            this.pos++;
        }

        let state = this.state;
        if (state && state.eof) {
            state.eof.call(this);
        }
    }
}

module.exports = Parser;

});
$rmod.def("/htmljs-parser@1.5.5/notify-util", function(require, exports, module, __filename, __dirname) { exports.createNotifiers = function(parser, listeners) {
    var hasError = false;

    return {
        notifyText(value) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onText;

            if (eventFunc && (value.length > 0)) {
                eventFunc.call(parser, {
                    type: 'text',
                    value: value
                }, parser);
            }
        },

        notifyCDATA(value, pos, endPos) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onCDATA;

            if (eventFunc && value) {
                eventFunc.call(parser, {
                    type: 'cdata',
                    value: value,
                    pos: pos,
                    endPos: endPos
                }, parser);
            }
        },

        notifyError(pos, errorCode, message) {
            if (hasError) {
                return;
            }

            hasError = true;

            var eventFunc = listeners.onError;

            if (eventFunc) {
                eventFunc.call(parser, {
                    type: 'error',
                    code: errorCode,
                    message: message,
                    pos: pos,
                    endPos: parser.pos
                }, parser);
            }
        },

        notifyOpenTag(tagInfo) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onOpenTag;

            if (eventFunc) {
                // set the literalValue property for attributes that are simple
                // string simple values or simple literal values

                var event = {
                    type: 'openTag',
                    tagName: tagInfo.tagName,
                    tagNameExpression: tagInfo.tagNameExpression,
                    argument: tagInfo.argument,
                    pos: tagInfo.pos,
                    endPos: tagInfo.endPos,
                    openTagOnly: tagInfo.openTagOnly,
                    selfClosed: tagInfo.selfClosed,
                    concise: tagInfo.concise
                };

                if (tagInfo.shorthandId) {
                    event.shorthandId = tagInfo.shorthandId;
                }

                if (tagInfo.shorthandClassNames) {
                    event.shorthandClassNames = tagInfo.shorthandClassNames;
                }

                event.attributes = tagInfo.attributes.map((attr) => {
                    var newAttr = {
                        name: attr.name,
                        value: attr.value,
                        pos: attr.pos,
                        endPos: attr.endPos,
                        argument: attr.argument
                    };

                    if (attr.hasOwnProperty('literalValue')) {
                        newAttr.literalValue = attr.literalValue;
                    }

                    return newAttr;
                });

                eventFunc.call(parser, event, parser);
            }
        },

        notifyCloseTag(tagName, pos, endPos) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onCloseTag;

            if (eventFunc) {
                var event = {
                    type: 'closeTag',
                    tagName: tagName,
                    pos: pos,
                    endPos: endPos
                };

                eventFunc.call(parser, event, parser);
            }
        },

        notifyDocumentType(documentType) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onDocumentType;

            if (eventFunc) {
                eventFunc.call(this, {
                    type: 'documentType',
                    value: documentType.value,
                    pos: documentType.pos,
                    endPos: documentType.endPos
                }, parser);
            }
        },

        notifyDeclaration(declaration) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onDeclaration;

            if (eventFunc) {
                eventFunc.call(parser, {
                    type: 'declaration',
                    value: declaration.value,
                    pos: declaration.pos,
                    endPos: declaration.endPos
                }, parser);
            }
        },

        notifyComment(comment) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onComment;

            if (eventFunc && comment.value) {
                eventFunc.call(parser, {
                    type: 'comment',
                    value: comment.value,
                    pos: comment.pos,
                    endPos: comment.endPos
                }, parser);
            }
        },

        notifyScriptlet(scriptlet) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onScriptlet;

            if (eventFunc && scriptlet.value) {
                eventFunc.call(parser, {
                    type: 'scriptlet',
                    value: scriptlet.value,
                    pos: scriptlet.pos,
                    endPos: scriptlet.endPos
                }, parser);
            }
        },

        notifyPlaceholder(placeholder) {
            if (hasError) {
                return;
            }

            var eventFunc = listeners.onPlaceholder;
            if (eventFunc) {
                var placeholderEvent = {
                    type: 'placeholder',
                    value: placeholder.value,
                    pos: placeholder.pos,
                    endPos: placeholder.endPos,
                    escape: placeholder.escape !== false,
                    withinBody: placeholder.withinBody === true,
                    withinAttribute: placeholder.withinAttribute === true,
                    withinString: placeholder.withinString === true,
                    withinOpenTag: placeholder.withinOpenTag === true,
                    withinTagName: placeholder.withinTagName === true
                };

                eventFunc.call(parser, placeholderEvent, parser);
                return placeholderEvent.value;
            }

            return placeholder.value;
        },

        notifyFinish() {
            if (listeners.onfinish) {
                listeners.onfinish.call(parser, {}, parser);
            }
        }
    };
};
});
$rmod.def("/htmljs-parser@1.5.5/html-tags",function(r,n,e,a,t){var o={};["base","br","col","hr","embed","img","input","keygen","link","meta","param","source","track","wbr"].forEach(function(r){o[r]=!0}),n.isOpenTagOnly=function(r){return o.hasOwnProperty(r)}});
$rmod.def("/htmljs-parser@1.5.5/Parser", function(require, exports, module, __filename, __dirname) { 'use strict';
var BaseParser = require('./BaseParser');

var notifyUtil = require('./notify-util');

function isWhitespaceCode(code) {
    // For all practical purposes, the space character (32) and all the
    // control characters below it are whitespace. We simplify this
    // condition for performance reasons.
    // NOTE: This might be slightly non-conforming.
    return (code <= 32);
}

var NUMBER_REGEX = /^[\-\+]?\d*(?:\.\d+)?(?:e[\-\+]?\d+)?$/;

/**
 * Takes a string expression such as `"foo"` or `'foo "bar"'`
 * and returns the literal String value.
 */
function evaluateStringExpression(expression) {
    // We could just use eval(expression) to get the literal String value,
    // but there is a small chance we could be introducing a security threat
    // by accidently running malicous code. Instead, we will use
    // JSON.parse(expression). JSON.parse() only allows strings
    // that use double quotes so we have to do extra processing if
    // we detect that the String uses single quotes

    if (expression.charAt(0) === "'") {
        expression = expression.substring(1, expression.length - 1);

        // Make sure there are no unescaped double quotes in the string expression...
        expression = expression.replace(/\\\\|\\["]|["]/g, function(match) {
            if (match === '"'){
                // Return an escaped double quote if we encounter an
                // unescaped double quote
                return '\\"';
            } else {
                // Return the escape sequence
                return match;
            }
        });

        expression = '"' + expression + '"';
    }

    return JSON.parse(expression);
}


function peek(array) {
    var len = array.length;
    if (!len) {
        return undefined;
    }
    return array[len - 1];
}

const MODE_HTML = 1;
const MODE_CONCISE = 2;

const CODE_NEWLINE = 10;
const CODE_CARRIAGE_RETURN = 13;
const CODE_BACK_SLASH = 92;
const CODE_FORWARD_SLASH = 47;
const CODE_OPEN_ANGLE_BRACKET = 60;
const CODE_CLOSE_ANGLE_BRACKET = 62;
const CODE_EXCLAMATION = 33;
const CODE_QUESTION = 63;
const CODE_OPEN_SQUARE_BRACKET = 91;
const CODE_CLOSE_SQUARE_BRACKET = 93;
const CODE_EQUAL = 61;
const CODE_SINGLE_QUOTE = 39;
const CODE_DOUBLE_QUOTE = 34;
const CODE_BACKTICK = 96;
const CODE_OPEN_PAREN = 40;
const CODE_CLOSE_PAREN = 41;
const CODE_OPEN_CURLY_BRACE = 123;
const CODE_CLOSE_CURLY_BRACE = 125;
const CODE_ASTERISK = 42;
const CODE_HYPHEN = 45;
const CODE_HTML_BLOCK_DELIMITER = CODE_HYPHEN;
const CODE_DOLLAR = 36;
const CODE_SPACE = 32;
const CODE_PERCENT = 37;
const CODE_PERIOD = 46;
const CODE_NUMBER_SIGN = 35;

const BODY_PARSED_TEXT = 1; // Body of a tag is treated as text, but placeholders will be parsed
const BODY_STATIC_TEXT = 2;// Body of a tag is treated as text and placeholders will *not* be parsed

const EMPTY_ATTRIBUTES = [];
const htmlTags = require('./html-tags');

class Parser extends BaseParser {
    constructor(listeners, options) {
        super(options);

        var parser = this;

        var notifiers = notifyUtil.createNotifiers(parser, listeners);
        this.notifiers = notifiers;

        var defaultMode = options && options.concise === false ? MODE_HTML : MODE_CONCISE;
        var userIsOpenTagOnly = options && options.isOpenTagOnly;
        var ignorePlaceholders = options && options.ignorePlaceholders;

        var currentOpenTag; // Used to reference the current open tag that is being parsed
        var currentAttribute; // Used to reference the current attribute that is being parsed
        var closeTagName; // Used to keep track of the current close tag name as it is being parsed
        var closeTagPos; // Used to keep track of the position of the current closing tag
        var expectedCloseTagName; // Used to figure out when a text block has been ended (HTML tags are ignored)
        var text; // Used to buffer text that is found within the body of a tag
        var withinOpenTag;// Set to true if the parser is within the open tag
        var blockStack; // Used to keep track of HTML tags and HTML blocks
        var partStack; // Used to keep track of parts such as CDATA, expressions, declarations, etc.
        var currentPart; // The current part at the top of the part stack
        var indent; // Used to build the indent for the current concise line
        var isConcise; // Set to true if parser is currently in concise mode
        var isWithinSingleLineHtmlBlock; // Set to true if the current block is for a single line HTML block
        var htmlBlockDelimiter; // Current delimiter for multiline HTML blocks nested within a concise tag. e.g. "--"
        var htmlBlockIndent; // Used to hold the indentation for a delimited, multiline HTML block
        var beginMixedMode; // Used as a flag to mark that the next HTML block should enter the parser into HTML mode
        var endingMixedModeAtEOL; // Used as a flag to record that the next EOL to exit HTML mode and go back to concise
        var placeholderDepth; // Used as an easy way to know if an exptression is within a placeholder

        this.reset = function() {
            BaseParser.prototype.reset.call(this);
            text = '';
            currentOpenTag = undefined;
            currentAttribute = undefined;
            closeTagName = undefined;
            closeTagPos = undefined;
            expectedCloseTagName = undefined;
            withinOpenTag = false;
            blockStack = [];
            partStack = [];
            currentPart = undefined;
            indent = '';
            isConcise = defaultMode === MODE_CONCISE;
            isWithinSingleLineHtmlBlock = false;
            htmlBlockDelimiter = null;
            htmlBlockIndent = null;
            beginMixedMode = false;
            endingMixedModeAtEOL = false;
            placeholderDepth = 0;
        };

        this.reset();

        /**
         * This function is called to determine if a tag is an "open only tag". Open only tags such as <img>
         * are immediately closed.
         * @param  {String}  tagName The name of the tag (e.g. "img")
         */
        function isOpenTagOnly(tagName) {
            tagName = tagName.toLowerCase();

            var openTagOnly = userIsOpenTagOnly && userIsOpenTagOnly(tagName);
            if (openTagOnly == null) {
                openTagOnly = htmlTags.isOpenTagOnly(tagName);
            }

            return openTagOnly;
        }

        /**
         * Clear out any buffered body text and notify any listeners
         */
        function endText(txt) {
            if (arguments.length === 0) {
                txt = text;
            }

            notifiers.notifyText(txt);

            // always clear text buffer...
            text =  '';
        }


        function openTagEOL() {
            if (isConcise && !currentOpenTag.withinAttrGroup) {
                // In concise mode we always end the open tag
                finishOpenTag();
            }
        }

        /**
         * This function is used to enter into "HTML" parsing mode instead
         * of concise HTML. We push a block on to the stack so that we know when
         * return back to the previous parsing mode and to ensure that all
         * tags within a block are properly closed.
         */
        function beginHtmlBlock(delimiter) {
            htmlBlockIndent = indent;
            htmlBlockDelimiter = delimiter;

            var parent = peek(blockStack);
            blockStack.push({
                type: 'html',
                delimiter: delimiter,
                indent: indent
            });

            if (parent && parent.body) {
                if (parent.body === BODY_PARSED_TEXT) {
                    parser.enterState(STATE_PARSED_TEXT_CONTENT);
                } else if (parent.body === BODY_STATIC_TEXT) {
                    parser.enterState(STATE_STATIC_TEXT_CONTENT);
                } else {
                    throw new Error('Illegal value for parent.body: ' + parent.body);
                }
            } else {
                return parser.enterState(STATE_HTML_CONTENT);
            }
        }

        /**
         * This method gets called when we are in non-concise mode
         * and we are exiting out of non-concise mode.
         */
        function endHtmlBlock() {
            // End any text
            endText();

            // Make sure all tags in this HTML block are closed
            for (let i=blockStack.length-1; i>=0; i--) {
                var curBlock = blockStack[i];
                if (curBlock.type === 'html') {
                    // Remove the HTML block from the stack since it has ended
                    blockStack.pop();
                    // We have reached the point where the HTML block started
                    // so we can stop
                    break;
                } else {
                    // The current block is for an HTML tag and it still open. When a tag is tag is closed
                    // it is removed from the stack
                    notifyError(curBlock.pos,
                        'MISSING_END_TAG',
                        'Missing ending "' + curBlock.tagName + '" tag');
                    return;
                }
            }

            // Resert variables associated with parsing an HTML block
            htmlBlockIndent = null;
            htmlBlockDelimiter = null;
            isWithinSingleLineHtmlBlock = false;

            if (parser.state !== STATE_CONCISE_HTML_CONTENT) {
                parser.enterState(STATE_CONCISE_HTML_CONTENT);
            }
        }

        /**
         * This function gets called when we reach EOF outside of a tag.
         */
        function htmlEOF() {
            endText();

            while(blockStack.length) {
                var curBlock = peek(blockStack);
                if (curBlock.type === 'tag') {
                    if (curBlock.concise) {
                        closeTag(curBlock.expectedCloseTagName);
                    } else {
                        // We found an unclosed tag on the stack that is not for a concise tag. That means
                        // there is a problem with the template because all open tags should have a closing
                        // tag
                        //
                        // NOTE: We have already closed tags that are open tag only or self-closed
                        notifyError(curBlock.pos,
                            'MISSING_END_TAG',
                            'Missing ending "' + curBlock.tagName + '" tag');
                        return;
                    }
                } else if (curBlock.type === 'html') {
                    if (curBlock.delimiter) {
                        // We reached the end of the file and there is still a delimited HTML block on the stack.
                        // That means we never found the ending delimiter and should emit a parse error
                        notifyError(curBlock.pos,
                            'MISSING_END_DELIMITER',
                            'End of file reached before finding the ending "' + curBlock.delimiter + '" delimiter');
                        return;
                    } else {
                        // We reached the end of file while still within a single line HTML block. That's okay
                        // though since we know the line is completely. We'll continue ending all open concise tags.
                        blockStack.pop();
                    }
                } else {
                    // There is a bug in our parser...
                    throw new Error('Illegal state. There should not be any non-concise tags on the stack when in concise mode');
                }
            }
        }

        function openTagEOF() {
            if (isConcise) {
                if (currentOpenTag.withinAttrGroup) {
                    notifyError(currentOpenTag.pos,
                        'MALFORMED_OPEN_TAG',
                        'EOF reached while within an attribute group (e.g. "[ ... ]").');
                    return;
                }

                // If we reach EOF inside an open tag when in concise-mode
                // then we just end the tag and all other open tags on the stack
                finishOpenTag();
                htmlEOF();
            } else {
                // Otherwise, in non-concise mode we consider this malformed input
                // since the end '>' was not found.
                notifyError(currentOpenTag.pos,
                    'MALFORMED_OPEN_TAG',
                    'EOF reached while parsing open tag');
            }
        }

        var notifyCDATA = notifiers.notifyCDATA;
        var notifyComment = notifiers.notifyComment;
        var notifyOpenTag = notifiers.notifyOpenTag;
        var notifyCloseTag = notifiers.notifyCloseTag;
        var notifyDocumentType = notifiers.notifyDocumentType;
        var notifyDeclaration = notifiers.notifyDeclaration;
        var notifyPlaceholder = notifiers.notifyPlaceholder;
        var notifyScriptlet = notifiers.notifyScriptlet;

        function notifyError(pos, errorCode, message) {
            parser.end();
            notifiers.notifyError(pos, errorCode, message);
        }

        function beginAttribute() {
            currentAttribute = {};
            if (currentOpenTag.attributes === EMPTY_ATTRIBUTES) {
                currentOpenTag.attributes = [currentAttribute];
            } else {
                currentOpenTag.attributes.push(currentAttribute);
            }
            parser.enterState(STATE_ATTRIBUTE_NAME);
            return currentAttribute;
        }

        function endAttribute() {
            currentAttribute = null;
            if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                parser.enterState(STATE_WITHIN_OPEN_TAG);
            }
        }

        function beginOpenTag() {
            endText();

            var tagInfo = {
                type: 'tag',
                tagName: '',
                tagNameParts: null,
                attributes: [],
                argument: undefined,
                pos: parser.pos,
                indent: indent,
                nestedIndent: null, // This will get set when we know what hte nested indent is
                concise: isConcise
            };

            withinOpenTag = true;

            if (beginMixedMode) {
                tagInfo.beginMixedMode = true;
                beginMixedMode = false;
            }

            blockStack.push(tagInfo);

            currentOpenTag = tagInfo;

            parser.enterState(STATE_TAG_NAME);

            return currentOpenTag;
        }

        function finishOpenTag(selfClosed) {
            var tagName = currentOpenTag.tagName;

            currentOpenTag.expectedCloseTagName = expectedCloseTagName =
                parser.substring(currentOpenTag.tagNameStart, currentOpenTag.tagNameEnd);

            var openTagOnly = currentOpenTag.openTagOnly = isOpenTagOnly(tagName);
            var endPos = parser.pos;

            if (!isConcise) {
                if (selfClosed) {
                    endPos += 2; // Skip past '/>'
                } else {
                    endPos += 1;
                }
            }

            if (currentOpenTag.tagNameParts) {
                currentOpenTag.tagNameExpression = currentOpenTag.tagNameParts.join('+');
            }

            currentOpenTag.endPos = endPos;
            currentOpenTag.selfClosed = selfClosed === true;

            if (!currentOpenTag.tagName) {
                tagName = currentOpenTag.tagName = 'div';
            }

            var origState = parser.state;
            notifyOpenTag(currentOpenTag);

            var shouldClose = false;

            if (selfClosed) {
                shouldClose = true;
            } else if (openTagOnly) {
                if (!isConcise) {
                    // Only close the tag if we are not in concise mode. In concise mode
                    // we want to keep the tag on the stack to make sure nothing is nested below it
                    shouldClose = true;
                }
            }

            if (shouldClose) {
                closeTag(expectedCloseTagName);
            }

            withinOpenTag = false;

            // Did the parser stay in the same state after
            // notifying listeners about openTag?
            if (parser.state === origState) {
                // The listener didn't transition the parser to a new state
                // so we use some simple rules to find the appropriate state.
                if (tagName === 'script') {
                    parser.enterJsContentState();
                } else if (tagName === 'style') {
                    parser.enterCssContentState();
                } else {
                    if (isConcise) {
                        parser.enterConciseHtmlContentState();
                    } else {
                        parser.enterHtmlContentState();
                    }

                }
            }

            // We need to record the "expected close tag name" if we transition into
            // either STATE_STATIC_TEXT_CONTENT or STATE_PARSED_TEXT_CONTENT
            currentOpenTag = undefined;
        }

        function closeTag(tagName, pos, endPos) {
            if (!tagName) {
                throw new Error('Illegal state. Invalid tag name');
            }
            var lastTag = blockStack.length ? blockStack.pop() : undefined;

            if (pos == null && closeTagPos != null) {
                pos = closeTagPos;
                endPos = parser.pos + 1;
            }

            if (!lastTag || lastTag.type !== 'tag') {
                return notifyError(pos,
                    'EXTRA_CLOSING_TAG',
                    'The closing "' + tagName + '" tag was not expected');
            }

            if (!lastTag || (lastTag.expectedCloseTagName !== tagName && lastTag.tagName !== tagName)) {
                return notifyError(pos,
                    'MISMATCHED_CLOSING_TAG',
                    'The closing "' + tagName + '" tag does not match the corresponding opening "' + lastTag.expectedCloseTagName + '" tag');
            }

            tagName = lastTag.tagName;

            notifyCloseTag(tagName, pos, endPos);

            if (lastTag.beginMixedMode) {
                endingMixedModeAtEOL = true;
            }

            closeTagName = null;
            closeTagPos = null;

            lastTag = peek(blockStack);
            expectedCloseTagName = lastTag && lastTag.expectedCloseTagName;
        }

        function beginPart() {
            currentPart = {
                pos: parser.pos,
                parentState: parser.state
            };

            partStack.push(currentPart);

            return currentPart;
        }

        function endPart() {
            var last = partStack.pop();
            parser.endPos = parser.pos;
            parser.enterState(last.parentState);
            currentPart = partStack.length ? peek(partStack) : undefined;
            return last;
        }

        // Expression

        function beginExpression(endAfterGroup) {
            var expression = beginPart();
            expression.value = '';
            expression.groupStack = [];
            expression.endAfterGroup = endAfterGroup === true;
            expression.isStringLiteral = null;
            parser.enterState(STATE_EXPRESSION);
            return expression;
        }

        function endExpression() {
            var expression = endPart();
            expression.parentState.expression(expression);
        }

        // --------------------------

        // String

        function beginString(quoteChar, quoteCharCode) {
            var string = beginPart();
            string.stringParts = [];
            string.currentText = '';
            string.quoteChar = quoteChar;
            string.quoteCharCode = quoteCharCode;
            string.isStringLiteral = true;
            parser.enterState(STATE_STRING);
            return string;
        }

        function endString() {
            var string = endPart();
            string.parentState.string(string);
        }

        // --------------------------

        // Template String

        function beginTemplateString() {
            var templateString = beginPart();
            templateString.value = '`';
            parser.enterState(STATE_TEMPLATE_STRING);
            return templateString;
        }

        function endTemplateString() {
            var templateString = endPart();
            templateString.parentState.templateString(templateString);
        }

        // --------------------------


        // Scriptlet

        function beginScriptlet() {
            endText();

            var scriptlet = beginPart();
            scriptlet.value = '';
            scriptlet.quoteCharCode = null;
            parser.enterState(STATE_SCRIPTLET);
            return scriptlet;
        }

        function endScriptlet(endPos) {
            var scriptlet = endPart();
            scriptlet.endPos = endPos;
            notifyScriptlet(scriptlet);
        }

        // --------------------------


        // DTD

        function beginDocumentType() {
            endText();

            var documentType = beginPart();
            documentType.value = '';

            parser.enterState(STATE_DTD);
            return documentType;
        }

        function endDocumentType() {
            var documentType = endPart();
            notifyDocumentType(documentType);
        }

        // --------------------------

        // Declaration
        function beginDeclaration() {
            endText();

            var declaration = beginPart();
            declaration.value = '';
            parser.enterState(STATE_DECLARATION);
            return declaration;
        }

        function endDeclaration() {
            var declaration = endPart();
            notifyDeclaration(declaration);
        }

        // --------------------------

        // CDATA

        function beginCDATA() {
            endText();

            var cdata = beginPart();
            cdata.value = '';
            parser.enterState(STATE_CDATA);
            return cdata;
        }

        function endCDATA() {
            var cdata = endPart();
            notifyCDATA(cdata.value, cdata.pos, parser.pos + 3);
        }

        // --------------------------

        // JavaScript Comments
        function beginLineComment() {
            var comment = beginPart();
            comment.value = '';
            comment.type = 'line';
            parser.enterState(STATE_JS_COMMENT_LINE);
            return comment;
        }

        function beginBlockComment() {
            var comment = beginPart();
            comment.value = '';
            comment.type = 'block';
            parser.enterState(STATE_JS_COMMENT_BLOCK);
            return comment;
        }

        function endJavaScriptComment() {
            var comment = endPart();
            comment.rawValue = comment.type === 'line' ?
                '//' + comment.value :
                '/*' + comment.value + '*/';
            comment.parentState.comment(comment);
        }
        // --------------------------

        // HTML Comment

        function beginHtmlComment() {
            endText();
            var comment = beginPart();
            comment.value = '';
            parser.enterState(STATE_HTML_COMMENT);
            return comment;
        }

        function endHtmlComment() {
            var comment = endPart();
            comment.endPos = parser.pos + 3;
            notifyComment(comment);
        }

        // --------------------------

        // Trailing whitespace

        function beginCheckTrailingWhitespace(handler) {
            var part = beginPart();
            part.handler = handler;
            if (typeof handler !== 'function') {
                throw new Error('Invalid handler');
            }
            parser.enterState(STATE_CHECK_TRAILING_WHITESPACE);
        }

        function endCheckTrailingWhitespace(err, eof) {
            var part = endPart();
            part.handler(err, eof);
        }

        function handleTrailingWhitespaceJavaScriptComment(err) {
            if (err) {
                // This is a non-whitespace! We don't allow non-whitespace
                // after matching two or more hyphens. This is user error...
                notifyError(parser.pos,
                    'INVALID_CHARACTER',
                    'A non-whitespace of "' + err.ch + '" was found after a JavaScript block comment.');
            }

            return;
        }

        function handleTrailingWhitespaceMultilineHtmlBlcok(err, eof) {
            if (err) {
                // This is a non-whitespace! We don't allow non-whitespace
                // after matching two or more hyphens. This is user error...
                notifyError(parser.pos,
                    'INVALID_CHARACTER',
                    'A non-whitespace of "' + err.ch + '" was found on the same line as the ending delimiter ("' + htmlBlockDelimiter + '") for a multiline HTML block');
                return;
            }

            endHtmlBlock();

            if (eof) {
                htmlEOF();
            }

            return;
        }

        // --------------------------

        // Placeholder

        function beginPlaceholder(escape, withinTagName) {
            var placeholder = beginPart();
            placeholder.value = '';
            placeholder.escape = escape !== false;
            placeholder.type = 'placeholder';
            placeholder.withinBody = withinOpenTag !== true;
            placeholder.withinAttribute = currentAttribute != null;
            placeholder.withinString = placeholder.parentState === STATE_STRING;
            placeholder.withinOpenTag = withinOpenTag === true && currentAttribute == null;
            placeholder.withinTagName = withinTagName;
            placeholderDepth++;
            parser.enterState(STATE_PLACEHOLDER);
            return placeholder;
        }

        function endPlaceholder() {
            var placeholder = endPart();
            placeholderDepth--;

            var newExpression = notifyPlaceholder(placeholder);
            placeholder.value = newExpression;
            placeholder.parentState.placeholder(placeholder);
        }

        // --------------------------

        // Placeholder

        function beginTagNameShorthand(escape, withinTagName) {
            var shorthand = beginPart();
            shorthand.currentPart = null;
            shorthand.hasId = false;
            shorthand.beginPart = function(type) {
                shorthand.currentPart = {
                    type: type,
                    stringParts: [],
                    text: '',
                    _endText() {
                        if (this.text) {
                            this.stringParts.push(JSON.stringify(this.text));
                        }
                        this.text = '';
                    },
                    addPlaceholder(placeholder) {
                        this._endText();
                        this.stringParts.push('(' + placeholder.value + ')');
                    },
                    end() {
                        this._endText();

                        var expression = this.stringParts.join('+');

                        if (type === 'id') {
                            currentOpenTag.shorthandId = {
                                value: expression
                            };
                        } else if (type === 'class') {
                            if (!currentOpenTag.shorthandClassNames) {
                                currentOpenTag.shorthandClassNames = [];
                            }

                            currentOpenTag.shorthandClassNames.push({
                                value: expression
                            });


                        }
                    }
                };
            };
            parser.enterState(STATE_TAG_NAME_SHORTHAND);
            return shorthand;
        }

        function endTagNameShorthand() {
            var shorthand = endPart();
            if (shorthand.currentPart) {
                shorthand.currentPart.end();
            }
            parser.enterState(STATE_WITHIN_OPEN_TAG);
        }

        // --------------------------

        function getAndRemoveArgument(expression) {
            let start = expression.lastLeftParenPos;
            if (start != null) {
                // The tag has an argument that we need to slice off
                let end = expression.lastRightParenPos;
                if (end === expression.value.length - 1) {
                    var argument = {
                        value: expression.value.substring(start+1, end),
                        pos: expression.pos + start,
                        endPos: expression.pos + end + 1
                    };

                    // Chop off the argument from the expression
                    expression.value = expression.value.substring(0, start);
                    // Fix the end position for the expression
                    expression.endPos = expression.pos + expression.value.length;

                    return argument;
                }
            }

            return undefined;
        }

        // --------------------------

        function checkForPlaceholder(ch, code) {
            if (code === CODE_DOLLAR) {
                var nextCode = parser.lookAtCharCodeAhead(1);
                if (nextCode === CODE_OPEN_CURLY_BRACE) {
                    // We expect to start a placeholder at the first curly brace (the next character)
                    beginPlaceholder(true);
                    return true;
                } else if (nextCode === CODE_EXCLAMATION) {
                    var afterExclamationCode = parser.lookAtCharCodeAhead(2);
                    if (afterExclamationCode === CODE_OPEN_CURLY_BRACE) {
                        // We expect to start a placeholder at the first curly brace so skip
                        // past the exclamation point
                        beginPlaceholder(false);
                        parser.skip(1);
                        return true;
                    }
                }
            }

            return false;
        }

        function checkForEscapedPlaceholder(ch, code) {
            // Look for \${ and \$!{
            if (code === CODE_BACK_SLASH) {
                if (parser.lookAtCharCodeAhead(1) === CODE_DOLLAR) {
                    if (parser.lookAtCharCodeAhead(2) === CODE_OPEN_CURLY_BRACE) {
                        return true;
                    } else if (parser.lookAtCharCodeAhead(2) === CODE_EXCLAMATION) {
                        if (parser.lookAtCharCodeAhead(3) === CODE_OPEN_CURLY_BRACE) {
                            return true;
                        }
                    }
                }
            }

            return false;
        }

        function checkForEscapedEscapedPlaceholder(ch, code) {
            // Look for \\${ and \\$!{
            if (code === CODE_BACK_SLASH) {
                if (parser.lookAtCharCodeAhead(1) === CODE_BACK_SLASH) {
                    if (parser.lookAtCharCodeAhead(2) === CODE_DOLLAR) {
                        if (parser.lookAtCharCodeAhead(3) === CODE_OPEN_CURLY_BRACE) {
                            return true;
                        } else if (parser.lookAtCharCodeAhead(3) === CODE_EXCLAMATION) {
                            if (parser.lookAtCharCodeAhead(4) === CODE_OPEN_CURLY_BRACE) {
                                return true;
                            }
                        }
                    }
                }
            }

            return false;
        }

        function checkForClosingTag() {
            // Look ahead to see if we found the closing tag that will
            // take us out of the EXPRESSION state...
            var lookAhead = '/' + expectedCloseTagName + '>';
            var match = parser.lookAheadFor(lookAhead);
            if (match) {
                endText();
                closeTag(expectedCloseTagName, parser.pos, parser.pos + 1 + lookAhead.length);
                parser.skip(match.length);
                parser.enterState(STATE_HTML_CONTENT);
                return true;
            }

            return false;
        }

        function checkForCDATA() {
            if (parser.lookAheadFor('![CDATA[')) {
                beginCDATA();
                parser.skip(8);
                return true;
            }

            return false;
        }

        function handleDelimitedBlockEOL(newLine) {
            // If we are within a delimited HTML block then we want to check if the next line is the end
            // delimiter. Since we are currently positioned at the start of the new line character our lookahead
            // will need to include the new line character, followed by the expected indentation, followed by
            // the delimiter.
            let endHtmlBlockLookahead = htmlBlockIndent + htmlBlockDelimiter;

            if (parser.lookAheadFor(endHtmlBlockLookahead, parser.pos + newLine.length)) {
                parser.skip(htmlBlockIndent.length);
                parser.skip(htmlBlockDelimiter.length);

                parser.enterState(STATE_CONCISE_HTML_CONTENT);

                beginCheckTrailingWhitespace(handleTrailingWhitespaceMultilineHtmlBlcok);
                return;
            } else if (parser.lookAheadFor(htmlBlockIndent, parser.pos + newLine.length)) {
                // We know the next line does not end the multiline HTML block, but we need to check if there
                // is any indentation that we need to skip over as we continue parsing the HTML in this
                // multiline HTML block

                parser.skip(htmlBlockIndent.length);
                // We stay in the same state since we are still parsing a multiline, delimited HTML block
            }
        }

        // In STATE_HTML_CONTENT we are looking for tags and placeholders but
        // everything in between is treated as text.
        var STATE_HTML_CONTENT = Parser.createState({
            name: 'STATE_HTML_CONTENT',

            placeholder(placeholder) {
                // We found a placeholder while parsing the HTML content. This function is called
                // from endPlaceholder(). We have already notified the listener of the placeholder so there is
                // nothing to do here
            },

            eol(newLine) {
                text += newLine;

                if (beginMixedMode) {
                    beginMixedMode = false;
                    endHtmlBlock();
                } else if (endingMixedModeAtEOL) {
                    endingMixedModeAtEOL = false;
                    endHtmlBlock();
                } else if (isWithinSingleLineHtmlBlock) {
                    // We are parsing "HTML" and we reached the end of the line. If we are within a single
                    // line HTML block then we should return back to the state to parse concise HTML.
                    // A single line HTML block can be at the end of the tag or on its own line:
                    //
                    // span class="hello" - This is an HTML block at the end of a tag
                    //     - This is an HTML block on its own line
                    //
                    endHtmlBlock();
                } else if (htmlBlockDelimiter) {
                    handleDelimitedBlockEOL(newLine);
                }
            },

            eof: htmlEOF,

            enter() {
                isConcise = false; // Back into non-concise HTML parsing
            },

            char(ch, code) {
                if (code === CODE_OPEN_ANGLE_BRACKET) {
                    if (checkForCDATA()) {
                        return;
                    }

                    var nextCode = parser.lookAtCharCodeAhead(1);

                    if (nextCode === CODE_PERCENT) {
                        beginScriptlet();
                        parser.skip(1);
                    } else if (parser.lookAheadFor('!--')) {
                        beginHtmlComment();
                        parser.skip(3);
                    } else if (nextCode === CODE_EXCLAMATION) {
                        // something like:
                        // <!DOCTYPE html>
                        // NOTE: We already checked for CDATA earlier and <!--
                        beginDocumentType();
                        parser.skip(1);
                    } else if (nextCode === CODE_QUESTION) {
                        // something like:
                        // <?xml version="1.0"?>
                        beginDeclaration();
                        parser.skip(1);
                    } else if (nextCode === CODE_FORWARD_SLASH) {
                        closeTagPos = parser.pos;
                        closeTagName = null;

                        parser.skip(1);
                        // something like:
                        // </html>
                        endText();

                        parser.enterState(STATE_CLOSE_TAG);
                    } else if (nextCode === CODE_CLOSE_ANGLE_BRACKET ||
                               nextCode === CODE_OPEN_ANGLE_BRACKET ||
                               isWhitespaceCode(nextCode)) {
                        // something like:
                        // "<>"
                        // "<<"
                        // "< "
                        // We'll treat this left angle brakect as text
                        text += '<';
                    } else {
                        beginOpenTag();
                        currentOpenTag.tagNameStart = parser.pos+1;
                    }
                } else if (!ignorePlaceholders && checkForEscapedEscapedPlaceholder(ch, code)) {
                    text += '\\';
                    parser.skip(1);
                }  else if (!ignorePlaceholders && checkForEscapedPlaceholder(ch, code)) {
                    text += '$';
                    parser.skip(1);
                } else if (!ignorePlaceholders && checkForPlaceholder(ch, code)) {
                    // We went into placeholder state...
                    endText();
                } else {
                    text += ch;
                }
            }
        });

        // In STATE_CONCISE_HTML_CONTENT we are looking for concise tags and text blocks based on indent
        var STATE_CONCISE_HTML_CONTENT = Parser.createState({
            name: 'STATE_CONCISE_HTML_CONTENT',

            eof: htmlEOF,

            enter() {
                isConcise = true;
                indent = '';
            },

            comment(comment) {
                var value = comment.value;

                value = value.trim();

                notifyComment({
                    value: value,
                    pos: comment.pos,
                    endPos: comment.endPos
                });

                if (comment.type === 'block') {
                    // Make sure there is only whitespace on the line
                    // after the ending "*/" sequence
                    beginCheckTrailingWhitespace(handleTrailingWhitespaceJavaScriptComment);
                }
            },

            endTrailingWhitespace(eof) {
                endHtmlBlock();

                if (eof) {
                    htmlEOF();
                }
            },

            char(ch, code) {
                if (isWhitespaceCode(code)) {
                    indent += ch;
                } else  {
                    while(true) {
                        let len = blockStack.length;
                        if (len) {
                            let curBlock = blockStack[len - 1];
                            if (curBlock.indent.length >= indent.length) {
                                closeTag(curBlock.expectedCloseTagName);
                            } else {
                                // Indentation is greater than the last tag so we are starting a
                                // nested tag and there are no more tags to end
                                break;
                            }
                        } else {
                            if (indent) {
                                notifyError(parser.pos,
                                    'BAD_INDENTATION',
                                    'Line has extra indentation at the beginning');
                                return;
                            }
                            break;
                        }
                    }

                    var parent = blockStack.length && blockStack[blockStack.length - 1];
                    var body;

                    if (parent) {
                        body = parent.body;
                        if (parent.openTagOnly) {
                            notifyError(parser.pos,
                                'INVALID_BODY',
                                'The "' + parent.tagName + '" tag does not allow nested body content');
                            return;
                        }

                        if (parent.nestedIndent) {
                            if (parent.nestedIndent.length !== indent.length) {
                                notifyError(parser.pos,
                                    'BAD_INDENTATION',
                                    'Line indentation does match indentation of previous line');
                                return;
                            }
                        } else {
                            parent.nestedIndent = indent;
                        }
                    }

                    if (body && code !== CODE_HTML_BLOCK_DELIMITER) {
                        notifyError(parser.pos,
                            'ILLEGAL_LINE_START',
                            'A line within a tag that only allows text content must begin with a "-" character');
                        return;
                    }

                    if (code === CODE_OPEN_ANGLE_BRACKET || code === CODE_DOLLAR) {
                        beginMixedMode = true;
                        parser.rewind(1);
                        beginHtmlBlock();
                        return;
                    }

                    if (code === CODE_HTML_BLOCK_DELIMITER) {
                        if (parser.lookAtCharCodeAhead(1) === CODE_HTML_BLOCK_DELIMITER) {
                            // Two or more HTML block delimiters means we are starting a multiline, delimited HTML block
                            htmlBlockDelimiter = ch;
                            // We enter the following state to read in the full delimiter
                            return parser.enterState(STATE_BEGIN_DELIMITED_HTML_BLOCK);
                        } else {

                            if (parser.lookAtCharCodeAhead(1) === CODE_SPACE) {
                                // We skip over the first space
                                parser.skip(1);
                            }
                            isWithinSingleLineHtmlBlock = true;
                            beginHtmlBlock();
                        }
                    } else if (code === CODE_FORWARD_SLASH) {
                        // Check next character to see if we are in a comment
                        var nextCode = parser.lookAtCharCodeAhead(1);
                        if (nextCode === CODE_FORWARD_SLASH) {
                            beginLineComment();
                            parser.skip(1);
                            return;
                        } else if (nextCode === CODE_ASTERISK) {
                            beginBlockComment();
                            parser.skip(1);
                            return;
                        } else {
                            notifyError(parser.pos,
                                'ILLEGAL_LINE_START',
                                'A line in concise mode cannot start with "/" unless it starts a "//" or "/*" comment');
                            return;
                        }
                    } else {
                        beginOpenTag();
                        currentOpenTag.tagNameStart = parser.pos;
                        parser.rewind(1); // START_TAG_NAME expects to start at the first character
                    }
                }
            }
        });

        // In STATE_BEGIN_DELIMITED_HTML_BLOCK we have already found two consecutive hyphens. We expect
        // to reach the end of the line with only whitespace characters
        var STATE_BEGIN_DELIMITED_HTML_BLOCK = Parser.createState({
            name: 'STATE_BEGIN_DELIMITED_HTML_BLOCK',

            eol: function(newLine) {
                // We have reached the end of the first delimiter... we need to skip over any indentation on the next
                // line and we might also find that the multi-line, delimited block is immediately ended
                beginHtmlBlock(htmlBlockDelimiter);
                handleDelimitedBlockEOL(newLine);
            },

            eof: htmlEOF,

            char(ch, code) {
                if (code === CODE_HTML_BLOCK_DELIMITER) {
                    htmlBlockDelimiter += ch;
                } else if (isWhitespaceCode(code)) {
                    // Just whitespace... we are still good
                } else {
                    // This is a non-whitespace! We don't allow non-whitespace
                    // after matching two or more hyphens. This is user error...
                    notifyError(parser.pos,
                        'MALFORMED_MULTILINE_HTML_BLOCK',
                        'A non-whitespace of "' + ch + '" was found on the same line as a multiline HTML block delimiter ("' + htmlBlockDelimiter + '")');
                }
            }
        });

        var STATE_CHECK_TRAILING_WHITESPACE = Parser.createState({
            name: 'STATE_CHECK_TRAILING_WHITESPACE',

            eol: function() {
                endCheckTrailingWhitespace(null /* no error */, false /* not EOF */);
            },

            eof: function() {
                endCheckTrailingWhitespace(null /* no error */, true /* EOF */);
            },

            char(ch, code) {
                if (isWhitespaceCode(code)) {
                    // Just whitespace... we are still good
                } else {
                    endCheckTrailingWhitespace({
                        ch: ch
                    });
                }
            }
        });

        // We enter STATE_STATIC_TEXT_CONTENT when a listener manually chooses
        // to enter this state after seeing an openTag event for a tag
        // whose content should not be parsed at all (except for the purpose
        // of looking for the end tag).
        var STATE_STATIC_TEXT_CONTENT = Parser.createState({
            name: 'STATE_STATIC_TEXT_CONTENT',

            eol(newLine) {
                text += newLine;

                if (isWithinSingleLineHtmlBlock) {
                    // We are parsing "HTML" and we reached the end of the line. If we are within a single
                    // line HTML block then we should return back to the state to parse concise HTML.
                    // A single line HTML block can be at the end of the tag or on its own line:
                    //
                    // span class="hello" - This is an HTML block at the end of a tag
                    //     - This is an HTML block on its own line
                    //
                    endHtmlBlock();
                } else if (htmlBlockDelimiter) {
                    handleDelimitedBlockEOL(newLine);
                }
            },

            eof: htmlEOF,

            char(ch, code) {
                // See if we need to see if we reached the closing tag...
                if (!isConcise && code === CODE_OPEN_ANGLE_BRACKET) {
                    if (checkForClosingTag()) {
                        return;
                    }
                }

                text += ch;
            }
        });

        // We enter STATE_PARSED_TEXT_CONTENT when we are parsing
        // the body of a tag does not contain HTML tags but may contains
        // placeholders
        var STATE_PARSED_TEXT_CONTENT = Parser.createState({
            name: 'STATE_PARSED_TEXT_CONTENT',

            placeholder: STATE_HTML_CONTENT.placeholder,

            eol(newLine) {
                text += newLine;

                if (isWithinSingleLineHtmlBlock) {
                    // We are parsing "HTML" and we reached the end of the line. If we are within a single
                    // line HTML block then we should return back to the state to parse concise HTML.
                    // A single line HTML block can be at the end of the tag or on its own line:
                    //
                    // span class="hello" - This is an HTML block at the end of a tag
                    //     - This is an HTML block on its own line
                    //
                    endHtmlBlock();
                } else if (htmlBlockDelimiter) {
                    handleDelimitedBlockEOL(newLine);
                }
            },

            eof: htmlEOF,

            char(ch, code) {
                if (!isConcise && code === CODE_OPEN_ANGLE_BRACKET) {
                    // First, see if we need to see if we reached the closing tag
                    // and then check if we encountered CDATA
                    if (checkForClosingTag()) {
                        return;
                    } else if (checkForCDATA()) {
                        return;
                    } else if (parser.lookAtCharCodeAhead(1) === CODE_PERCENT) {
                        beginScriptlet();
                        parser.skip(1);
                        return;
                    }
                } else if (!ignorePlaceholders && checkForEscapedEscapedPlaceholder(ch, code)) {
                    text += '\\';
                    parser.skip(1);
                }  else if (!ignorePlaceholders && checkForEscapedPlaceholder(ch, code)) {
                    text += '$';
                    parser.skip(1);
                } else if (!ignorePlaceholders && checkForPlaceholder(ch, code)) {
                    // We went into placeholder state...
                    endText();
                    return;
                }

                text += ch;
            }
        });

        // We enter STATE_TAG_NAME after we encounter a "<"
        // followed by a non-special character
        var STATE_TAG_NAME = Parser.createState({
            name: 'STATE_TAG_NAME',

            eol: openTagEOL,

            eof: openTagEOF,

            expression(expression) {
                var argument = getAndRemoveArgument(expression);

                if (argument) {
                    // The tag has an argument that we need to slice off

                    if (currentOpenTag.argument != null) {
                        notifyError(expression.endPos,
                            'ILLEGAL_TAG_ARGUMENT',
                            'A tag can only have one argument');
                    }

                    currentOpenTag.argument = argument;
                    currentOpenTag.tagNameEnd = expression.pos + expression.lastLeftParenPos + 1;
                } else {
                    currentOpenTag.tagNameEnd = expression.endPos;
                }


                if (expression.value) {
                    currentOpenTag.tagName += expression.value;

                    if (currentOpenTag.tagNameParts) {
                        currentOpenTag.tagNameParts.push(JSON.stringify(expression.value));
                    }
                }
            },

            placeholder(placeholder) {
                if (!currentOpenTag.tagNameParts) {
                    currentOpenTag.tagNameParts = [];

                    if (currentOpenTag.tagName) {
                        currentOpenTag.tagNameParts.push(JSON.stringify(currentOpenTag.tagName));
                    }
                }

                currentOpenTag.tagName += parser.substring(placeholder.pos, placeholder.endPos);
                currentOpenTag.tagNameParts.push('(' + placeholder.value + ')');
                currentOpenTag.tagNameEnd = placeholder.endPos;
            },

            enter(oldState) {
                if (oldState !== STATE_EXPRESSION) {
                    beginExpression();
                }
            },

            char(ch, code) {
                throw new Error('Illegal state');
            }
        });



        // We enter STATE_CDATA after we see "<![CDATA["
        var STATE_CDATA = Parser.createState({
            name: 'STATE_CDATA',

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_CDATA',
                    'EOF reached while parsing CDATA');
            },

            char(ch, code) {
                if (code === CODE_CLOSE_SQUARE_BRACKET) {
                    var match = parser.lookAheadFor(']>');
                    if (match) {
                        endCDATA();
                        parser.skip(match.length);
                        return;
                    }
                }

                currentPart.value += ch;
            }
        });

        // We enter STATE_CLOSE_TAG after we see "</"
        var STATE_CLOSE_TAG = Parser.createState({
            name: 'STATE_CLOSE_TAG',
            eof() {
                notifyError(closeTag.pos,
                    'MALFORMED_CLOSE_TAG',
                    'EOF reached while parsing closing tag');
            },

            enter() {
                closeTagName = '';
            },

            char(ch, code) {
                if (code === CODE_CLOSE_ANGLE_BRACKET) {
                    if (closeTagName.length > 0) {
                        closeTag(closeTagName, closeTagPos, parser.pos + 1);
                    } else {
                        closeTag(expectedCloseTagName, closeTagPos, parser.pos + 1);
                    }

                    parser.enterState(STATE_HTML_CONTENT);
                } else {
                    closeTagName += ch;
                }
            }
        });

        // We enter STATE_WITHIN_OPEN_TAG after we have fully
        // read in the tag name and encountered a whitespace character
        var STATE_WITHIN_OPEN_TAG = Parser.createState({
            name: 'STATE_WITHIN_OPEN_TAG',

            eol: openTagEOL,

            eof: openTagEOF,

            expression(expression) {
                var argument = getAndRemoveArgument(expression);

                if (argument) {
                    // We found an argument... the argument could be for an attribute or the tag
                    if (currentOpenTag.attributes.length === 0) {
                        if (currentOpenTag.argument != null) {
                            notifyError(expression.endPos,
                                'ILLEGAL_TAG_ARGUMENT',
                                'A tag can only have one argument');
                            return;
                        }
                        currentOpenTag.argument = argument;
                    } else {
                        let targetAttribute = currentAttribute || peek(currentOpenTag.attributes);

                        if (targetAttribute.argument != null) {
                            notifyError(expression.endPos,
                                'ILLEGAL_ATTRIBUTE_ARGUMENT',
                                'An attribute can only have one argument');
                            return;
                        }
                        targetAttribute.argument = argument;
                    }
                }
            },

            placeholder(placeholder) {
                var attr = beginAttribute();
                attr.value = placeholder.value;
                endAttribute();

                parser.enterState(STATE_AFTER_PLACEHOLDER_WITHIN_TAG);
            },

            comment(comment) {
                /* Ignore comments within an open tag */
            },

            char(ch, code) {

                if (isConcise) {
                    if (code === CODE_HTML_BLOCK_DELIMITER) {
                        if (currentOpenTag.withinAttrGroup) {
                            notifyError(currentOpenTag.pos,
                                'MALFORMED_OPEN_TAG',
                                'Attribute group was not properly ended');
                            return;
                        }

                        // The open tag is complete
                        finishOpenTag();

                        let nextCode = parser.lookAtCharCodeAhead(1);
                        if (nextCode !== CODE_NEWLINE && nextCode !== CODE_CARRIAGE_RETURN &&
                            isWhitespaceCode(nextCode)) {
                            // We want to remove the first whitespace character after the `-` symbol
                            parser.skip(1);
                        }

                        isWithinSingleLineHtmlBlock = true;
                        beginHtmlBlock();
                        return;
                    } else if (code === CODE_OPEN_SQUARE_BRACKET) {
                        if (currentOpenTag.withinAttrGroup) {
                            notifyError(parser.pos,
                                'MALFORMED_OPEN_TAG',
                                'Unexpected "[" character within open tag.');
                            return;
                        }

                        currentOpenTag.withinAttrGroup = true;
                        return;
                    } else if (code === CODE_CLOSE_SQUARE_BRACKET) {
                        if (!currentOpenTag.withinAttrGroup) {
                            notifyError(parser.pos,
                                'MALFORMED_OPEN_TAG',
                                'Unexpected "]" character within open tag.');
                            return;
                        }

                        currentOpenTag.withinAttrGroup = false;
                        return;
                    }
                } else {
                    if (code === CODE_CLOSE_ANGLE_BRACKET) {
                        finishOpenTag();
                        return;
                    } else if (code === CODE_FORWARD_SLASH) {
                        let nextCode = parser.lookAtCharCodeAhead(1);
                        if (nextCode === CODE_CLOSE_ANGLE_BRACKET) {
                            finishOpenTag(true /* self closed */);
                            parser.skip(1);
                            return;
                        }
                    }
                }

                if (checkForEscapedEscapedPlaceholder(ch, code)) {
                    let attr = beginAttribute();
                    attr.name = '\\';
                    parser.skip(1);
                    return;
                }  else if (checkForEscapedPlaceholder(ch, code)) {
                    let attr = beginAttribute();
                    attr.name = '$';
                    parser.skip(1);
                    return;
                } else if (checkForPlaceholder(ch, code)) {
                    return;
                }

                if (code === CODE_OPEN_ANGLE_BRACKET) {
                    return notifyError(parser.pos,
                        'ILLEGAL_ATTRIBUTE_NAME',
                        'Invalid attribute name. Attribute name cannot begin with the "<" character.');
                }

                if (code === CODE_FORWARD_SLASH && parser.lookAtCharCodeAhead(1) === CODE_ASTERISK) {
                    // Skip over code inside a JavaScript block comment
                    beginBlockComment();
                    parser.skip(1);
                    return;
                }

                if (isWhitespaceCode(code)) {
                    // ignore whitespace within element...
                } else if (code === CODE_OPEN_PAREN) {
                    parser.rewind(1);
                    beginExpression();
                    // encountered something like:
                    // <for (var i = 0; i < len; i++)>
                } else {
                    parser.rewind(1);
                    // attribute name is initially the first non-whitespace
                    // character that we found
                    beginAttribute();
                }
            }
        });

        // We enter STATE_ATTRIBUTE_NAME when we see a non-whitespace
        // character after reading the tag name
        var STATE_ATTRIBUTE_NAME = Parser.createState({
            name: 'STATE_ATTRIBUTE_NAME',

            eol: openTagEOL,

            eof: openTagEOF,

            expression(expression) {
                var argument = getAndRemoveArgument(expression);
                if (argument) {
                    // The tag has an argument that we need to slice off
                    currentAttribute.argument = argument;
                }

                currentAttribute.name = currentAttribute.name ? currentAttribute.name + expression.value : expression.value;
                currentAttribute.pos = expression.pos;
                currentAttribute.endPos = expression.endPos;
            },

            enter(oldState) {
                if (oldState !== STATE_EXPRESSION) {
                    beginExpression();
                }
            },

            char(ch, code) {
                throw new Error('Illegal state');
            }
        });

        // We enter STATE_ATTRIBUTE_VALUE when we see a "=" while in
        // the ATTRIBUTE_NAME state.
        var STATE_ATTRIBUTE_VALUE = Parser.createState({
            name: 'STATE_ATTRIBUTE_VALUE',

            expression(expression) {
                var value = expression.value;

                if (value === '') {

                    return notifyError(expression.pos,
                        'ILLEGAL_ATTRIBUTE_VALUE',
                        'No attribute value found after "="');
                }
                currentAttribute.value = value;
                currentAttribute.pos = expression.pos;
                currentAttribute.endPos = expression.endPos;

                // If the expression evaluates to a literal value then add the
                // `literalValue` property to the attribute
                if (expression.isStringLiteral) {
                    currentAttribute.literalValue = evaluateStringExpression(value);
                } else if (value === 'true') {
                    currentAttribute.literalValue = true;
                } else if (value === 'false') {
                    currentAttribute.literalValue = false;
                } else if (value === 'null') {
                    currentAttribute.literalValue = null;
                } else if (value === 'undefined') {
                    currentAttribute.literalValue = undefined;
                } else if (NUMBER_REGEX.test(value)) {
                    currentAttribute.literalValue = Number(value);
                }

                // We encountered a whitespace character while parsing the attribute name. That
                // means the attribute name has ended and we should continue parsing within the
                // open tag
                endAttribute();
            },

            eol: openTagEOL,

            eof: openTagEOF,

            enter(oldState) {
                if (oldState !== STATE_EXPRESSION) {
                    beginExpression();
                }
            },

            char(ch, code) {
                throw new Error('Illegal state');
            }
        });

        var STATE_EXPRESSION = Parser.createState({
            name: 'STATE_EXPRESSION',

            eol(str) {
                let depth = currentPart.groupStack.length;

                if (depth === 0) {
                    if (currentPart.parentState === STATE_ATTRIBUTE_NAME || currentPart.parentState === STATE_ATTRIBUTE_VALUE) {
                        currentPart.endPos = parser.pos;
                        endExpression();
                        // We encountered a whitespace character while parsing the attribute name. That
                        // means the attribute name has ended and we should continue parsing within the
                        // open tag
                        endAttribute();

                        if (isConcise) {
                            openTagEOL();
                        }
                        return;
                    } else if (currentPart.parentState === STATE_TAG_NAME) {
                        currentPart.endPos = parser.pos;
                        endExpression();

                        // We encountered a whitespace character while parsing the attribute name. That
                        // means the attribute name has ended and we should continue parsing within the
                        // open tag
                        if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                            // Make sure we transition into parsing within the open tag
                            parser.enterState(STATE_WITHIN_OPEN_TAG);
                        }

                        if (isConcise) {
                            openTagEOL();
                        }

                        return;
                    }
                }

                currentPart.value += str;
            },

            eof() {
                if (isConcise && currentPart.groupStack.length === 0) {
                    currentPart.endPos = parser.pos;
                    endExpression();
                    openTagEOF();
                } else {
                    let parentState = currentPart.parentState;

                    if (parentState === STATE_ATTRIBUTE_NAME) {
                        return notifyError(currentPart.pos,
                            'MALFORMED_OPEN_TAG',
                            'EOF reached while parsing attribute name for the "' + currentOpenTag.tagName + '" tag');
                    } else if (parentState === STATE_ATTRIBUTE_VALUE) {
                        return notifyError(currentPart.pos,
                            'MALFORMED_OPEN_TAG',
                            'EOF reached while parsing attribute value for the "' + currentAttribute.name + '" attribute');
                    } else if (parentState === STATE_TAG_NAME) {
                        return notifyError(currentPart.pos,
                            'MALFORMED_OPEN_TAG',
                            'EOF reached while parsing tag name');
                    } else if (parentState === STATE_PLACEHOLDER) {
                        return notifyError(currentPart.pos,
                            'MALFORMED_PLACEHOLDER',
                            'EOF reached while parsing placeholder');
                    }

                    return notifyError(currentPart.pos,
                        'INVALID_EXPRESSION',
                        'EOF reached will parsing expression');
                }
            },

            string(string) {
                if (currentPart.value === '') {
                    currentPart.isStringLiteral = string.isStringLiteral === true;
                } else {
                    // More than one strings means it is for sure not a string literal...
                    currentPart.isStringLiteral = false;
                }

                currentPart.value += string.value;
            },

            comment(comment) {
                currentPart.isStringLiteral = false;
                currentPart.value += comment.rawValue;
            },

            templateString(templateString) {
                currentPart.isStringLiteral = false;
                currentPart.value += templateString.value;
            },

            char(ch, code) {
                let depth = currentPart.groupStack.length;
                let parentState = currentPart.parentState;

                if (code === CODE_SINGLE_QUOTE) {
                    return beginString("'", CODE_SINGLE_QUOTE);
                } else if (code === CODE_DOUBLE_QUOTE) {
                    return beginString('"', CODE_DOUBLE_QUOTE);
                } else if (code === CODE_BACKTICK) {
                    return beginTemplateString();
                } else if (code === CODE_FORWARD_SLASH) {
                    // Check next character to see if we are in a comment
                    var nextCode = parser.lookAtCharCodeAhead(1);
                    if (nextCode === CODE_FORWARD_SLASH) {
                        beginLineComment();
                        parser.skip(1);
                        return;
                    } else if (nextCode === CODE_ASTERISK) {

                        beginBlockComment();
                        parser.skip(1);
                        return;
                    } else if (depth === 0 && !isConcise && nextCode === CODE_CLOSE_ANGLE_BRACKET) {
                        // Let the STATE_WITHIN_OPEN_TAG state deal with the ending tag sequence
                        currentPart.endPos = parser.pos;
                        endExpression();
                        parser.rewind(1);

                        if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                            // Make sure we transition into parsing within the open tag
                            parser.enterState(STATE_WITHIN_OPEN_TAG);
                        }
                        return;
                    }
                } else if (code === CODE_OPEN_PAREN ||
                           code === CODE_OPEN_SQUARE_BRACKET ||
                           code === CODE_OPEN_CURLY_BRACE) {

                    if (depth === 0 && code === CODE_OPEN_PAREN) {
                        currentPart.lastLeftParenPos = currentPart.value.length;
                    }

                    currentPart.groupStack.push(code);
                    currentPart.isStringLiteral = false;
                    currentPart.value += ch;
                    return;
                } else if (code === CODE_CLOSE_PAREN ||
                           code === CODE_CLOSE_SQUARE_BRACKET ||
                           code === CODE_CLOSE_CURLY_BRACE) {

                    if (depth === 0) {
                        if (code === CODE_CLOSE_SQUARE_BRACKET) {
                            // We are ending the attribute group so end this expression and let the
                            // STATE_WITHIN_OPEN_TAG state deal with the ending attribute group
                            if (currentOpenTag.withinAttrGroup) {
                                currentPart.endPos = parser.pos + 1;
                                endExpression();
                                // Let the STATE_WITHIN_OPEN_TAG state deal with the ending tag sequence
                                parser.rewind(1);
                                if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                                    // Make sure we transition into parsing within the open tag
                                    parser.enterState(STATE_WITHIN_OPEN_TAG);
                                }
                                return;
                            }
                        } else {
                            return notifyError(currentPart.pos,
                                'INVALID_EXPRESSION',
                                'Mismatched group. A closing "' + ch + '" character was found but it is not matched with a corresponding opening character.');
                        }
                    }


                    let matchingGroupCharCode = currentPart.groupStack.pop();

                    if ((code === CODE_CLOSE_PAREN && matchingGroupCharCode !== CODE_OPEN_PAREN) ||
                        (code === CODE_CLOSE_SQUARE_BRACKET && matchingGroupCharCode !== CODE_OPEN_SQUARE_BRACKET) ||
                        (code === CODE_CLOSE_CURLY_BRACE && matchingGroupCharCode !== CODE_OPEN_CURLY_BRACE)) {
                            return notifyError(currentPart.pos,
                                'INVALID_EXPRESSION',
                                'Mismatched group. A "' + ch + '" character was found when "' + String.fromCharCode(matchingGroupCharCode) + '" was expected.');
                    }

                    currentPart.value += ch;

                    if (currentPart.groupStack.length === 0) {
                        if (code === CODE_CLOSE_PAREN) {
                            currentPart.lastRightParenPos = currentPart.value.length - 1;
                        } else if (code === CODE_CLOSE_CURLY_BRACE && parentState === STATE_PLACEHOLDER) {
                            currentPart.endPos = parser.pos + 1;
                            endExpression();
                            return;
                        }
                    }

                    return;
                } else if (depth === 0) {
                    if (!isConcise) {
                        if (code === CODE_CLOSE_ANGLE_BRACKET &&
                            (parentState === STATE_TAG_NAME ||
                             parentState === STATE_ATTRIBUTE_NAME ||
                             parentState === STATE_ATTRIBUTE_VALUE ||
                             parentState === STATE_WITHIN_OPEN_TAG)) {
                            currentPart.endPos = parser.pos;
                            endExpression();
                            endAttribute();
                            // Let the STATE_WITHIN_OPEN_TAG state deal with the ending tag sequence
                            parser.rewind(1);
                            if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                                // Make sure we transition into parsing within the open tag
                                parser.enterState(STATE_WITHIN_OPEN_TAG);
                            }
                            return;
                        }
                    }

                    if (isWhitespaceCode(code)) {
                        currentPart.endPos = parser.pos;
                        endExpression();
                        endAttribute();
                        if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                            // Make sure we transition into parsing within the open tag
                            parser.enterState(STATE_WITHIN_OPEN_TAG);
                        }
                        return;
                    } else if (code === CODE_EQUAL && parentState === STATE_ATTRIBUTE_NAME) {
                        currentPart.endPos = parser.pos;
                        endExpression();
                        // We encountered "=" which means we need to start reading
                        // the attribute value.
                        parser.enterState(STATE_ATTRIBUTE_VALUE);
                        return;
                    }

                    if (currentPart.parentState === STATE_TAG_NAME) {
                        if (checkForEscapedEscapedPlaceholder(ch, code)) {
                            currentPart.value += '\\';
                            parser.skip(1);
                            return;
                        }  else if (checkForEscapedPlaceholder(ch, code)) {
                            currentPart.value += '$';
                            parser.skip(1);
                            return;
                        } else if (code === CODE_DOLLAR && parser.lookAtCharCodeAhead(1) === CODE_OPEN_CURLY_BRACE) {
                            currentPart.endPos = parser.pos;
                            endExpression();
                            // We expect to start a placeholder at the first curly brace (the next character)
                            beginPlaceholder(true, true /* tag name */);
                            return;
                        } else if (code === CODE_PERIOD || code === CODE_NUMBER_SIGN) {
                            endExpression();
                            parser.rewind(1);
                            beginTagNameShorthand();
                            return;
                        }
                    }
                }

                currentPart.value += ch;
            }
        });

        var STATE_TAG_NAME_SHORTHAND = Parser.createState({
            name: 'STATE_TAG_NAME_SHORTHAND',

            placeholder(placeholder) {
                var shorthand = currentPart;
                shorthand.currentPart.addPlaceholder(placeholder);
            },

            eol(str) {
                currentOpenTag.tagNameEnd = parser.pos;
                endTagNameShorthand();

                if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                    // Make sure we transition into parsing within the open tag
                    parser.enterState(STATE_WITHIN_OPEN_TAG);
                }

                if (isConcise) {
                    openTagEOL();
                }
            },

            eof() {
                endTagNameShorthand();

                if (isConcise) {
                    openTagEOF();
                } else {
                    return notifyError(currentPart.pos,
                        'INVALID_TAG_SHORTHAND',
                        'EOF reached will parsing id/class shorthand in tag name');
                }
            },

            char(ch, code) {
                var shorthand = currentPart;
                if (!isConcise) {
                    if (code === CODE_CLOSE_ANGLE_BRACKET) {
                        currentOpenTag.tagNameEnd = parser.pos;
                        endTagNameShorthand();
                        parser.rewind(1);
                        return;
                    }
                }

                if (isWhitespaceCode(code)) {
                    endTagNameShorthand();
                    currentOpenTag.tagNameEnd = parser.pos;
                    if (parser.state !== STATE_WITHIN_OPEN_TAG) {
                        parser.enterState(STATE_WITHIN_OPEN_TAG);
                    }
                    return;
                }

                if (code === CODE_PERIOD) {
                    if (shorthand.currentPart) {
                        shorthand.currentPart.end();
                    }

                    shorthand.beginPart('class');
                } else if (code === CODE_NUMBER_SIGN) {
                    if (shorthand.hasId) {
                        return notifyError(currentPart.pos,
                            'INVALID_TAG_SHORTHAND',
                            'Multiple shorthand ID parts are not allowed on the same tag');
                    }

                    shorthand.hasId = true;

                    if (shorthand.currentPart) {
                        shorthand.currentPart.end();
                    }

                    shorthand.beginPart('id');
                }

                else if (!ignorePlaceholders && checkForEscapedEscapedPlaceholder(ch, code)) {
                    shorthand.currentPart.text += '\\';
                    parser.skip(1);
                }  else if (!ignorePlaceholders && checkForEscapedPlaceholder(ch, code)) {
                    shorthand.currentPart.text += '$';
                    parser.skip(1);
                } else if (!ignorePlaceholders && checkForPlaceholder(ch, code)) {
                    // We went into placeholder state...
                } else {
                    shorthand.currentPart.text += ch;
                }
            }
        });

        // We enter STATE_WITHIN_OPEN_TAG after we have fully
        // read in the tag name and encountered a whitespace character
        var STATE_AFTER_PLACEHOLDER_WITHIN_TAG = Parser.createState({
            name: 'STATE_AFTER_PLACEHOLDER_WITHIN_TAG',

            eol: openTagEOL,

            eof: openTagEOF,

            char(ch, code) {

                if (!isConcise) {
                    if (code === CODE_CLOSE_ANGLE_BRACKET) {
                        finishOpenTag();
                        return;
                    } else if (code === CODE_FORWARD_SLASH) {
                        let nextCode = parser.lookAtCharCodeAhead(1);
                        if (nextCode === CODE_CLOSE_ANGLE_BRACKET) {
                            finishOpenTag(true /* self closed */);
                            parser.skip(1);
                            return;
                        }
                    }
                }

                if (isWhitespaceCode(code)) {
                    parser.enterState(STATE_WITHIN_OPEN_TAG);
                } else {
                    notifyError(parser.pos,
                        'UNEXPECTED_TEXT_AFTER_PLACEHOLDER_IN_TAG',
                        `An unexpected "${ch}" character was found after a placeoholder within the open tag.`);
                    return;
                }
            }
        });

        var STATE_PLACEHOLDER = Parser.createState({
            name: 'STATE_PLACEHOLDER',

            expression(expression) {
                currentPart.value = expression.value.slice(1, -1); // Chop off the curly braces
                currentPart.endPos = expression.endPos;
                endPlaceholder();
            },

            eol(str) {
                throw new Error('Illegal state. EOL not expected');
            },

            eof() {
                throw new Error('Illegal state. EOF not expected');
            },

            enter(oldState) {
                if (oldState !== STATE_EXPRESSION) {
                    beginExpression();
                }
            }
        });

        var STATE_STRING = Parser.createState({
            name: 'STATE_STRING',

            placeholder(placeholder) {
                if (currentPart.currentText) {
                    currentPart.stringParts.push(currentPart.currentText);
                    currentPart.currentText = '';
                }
                currentPart.isStringLiteral = false;
                currentPart.stringParts.push(placeholder);
            },

            eol(str) {
                // New line characters are not allowed in JavaScript string expressions. We need to use
                // a different character sequence, but we don't want to through off positions so we need
                // to use a replacement sequence with the same number of characters.
                if (str.length === 2) {
                    currentPart.currentText += '\\r\\n';
                } else {
                    currentPart.currentText += '\\n';
                }

            },

            eof() {
                if (placeholderDepth > 0) {
                    notifyError(parser.pos,
                        'INVALID_STRING',
                        'EOF reached while parsing string expression found inside placeholder');
                    return;
                }
                notifyError(parser.pos,
                    'INVALID_STRING',
                    'EOF reached while parsing string expression');
            },

            char(ch, code) {
                var stringParts = currentPart.stringParts;

                var nextCh;
                var quoteCharCode = currentPart.quoteCharCode;

                if (code === CODE_BACK_SLASH) {
                    if (!ignorePlaceholders && checkForEscapedEscapedPlaceholder(ch, code)) {
                        currentPart.currentText += '\\';
                    }  else if (!ignorePlaceholders && checkForEscapedPlaceholder(ch, code)) {
                        currentPart.currentText += '$';
                    } else {
                        // Handle string escape sequence
                        nextCh = parser.lookAtCharAhead(1);
                        currentPart.currentText += ch + nextCh;
                    }

                    parser.skip(1);
                } else if (code === quoteCharCode) {
                    // We encountered the end delimiter
                    if (currentPart.currentText) {
                        stringParts.push(currentPart.currentText);
                    }

                    let stringExpr = '';
                    let quoteChar =  currentPart.quoteChar;

                    if (stringParts.length) {
                        for (let i=0; i<stringParts.length; i++) {
                            let part = stringParts[i];
                            if (i !== 0) {
                                stringExpr += '+';
                            }

                            if (typeof part === 'string') {
                                stringExpr += quoteChar + part + quoteChar;
                            } else {
                                stringExpr += '(' + part.value + ')';
                            }
                        }
                    } else {
                        // Just an empty string...
                        stringExpr = quoteChar + quoteChar;
                    }

                    if (stringParts.length > 1) {
                        stringExpr = '(' + stringExpr + ')';
                    }

                    currentPart.value = stringExpr;
                    endString();
                } else if (!ignorePlaceholders && checkForPlaceholder(ch, code)) {
                    if (currentPart.currentText) {
                        stringParts.push(currentPart.currentText);
                    }

                    currentPart.currentText = '';
                    // We encountered nested placeholder...
                    currentPart.isStringLiteral = false;
                } else {
                    currentPart.currentText += ch;
                }
            }
        });

        var STATE_TEMPLATE_STRING = Parser.createState({
            name: 'STATE_TEMPLATE_STRING',

            placeholder: function(placeholder) {
                if (currentPart.currentText) {
                    currentPart.stringParts.push(currentPart.currentText);
                    currentPart.currentText = '';
                }
                currentPart.isStringLiteral = false;
                currentPart.stringParts.push(placeholder);
            },

            eol(str) {
                // Convert the EOL sequence ot the equivalent string escape sequences... Not necessary
                // for template strings but it is equivalent.
                if (str.length === 2) {
                    currentPart.value += '\\r\\n';
                } else {
                    currentPart.value += '\\n';
                }
            },

            eof() {
                notifyError(parser.pos,
                    'INVALID_TEMPLATE_STRING',
                    'EOF reached while parsing template string expression');
            },

            char(ch, code) {
                var nextCh;
                currentPart.value += ch;
                if (code === CODE_BACK_SLASH) {
                    // Handle string escape sequence
                    nextCh = parser.lookAtCharAhead(1);
                    parser.skip(1);

                    currentPart.value += nextCh;
                } else if (code === CODE_BACKTICK) {
                    endTemplateString();
                }
            }
        });

        // We enter STATE_JS_COMMENT_BLOCK after we encounter a "/*" sequence
        // while in STATE_ATTRIBUTE_VALUE or STATE_DELIMITED_EXPRESSION.
        // We leave STATE_JS_COMMENT_BLOCK when we see a "*/" sequence.
        var STATE_JS_COMMENT_BLOCK = Parser.createState({
            name: 'STATE_JS_COMMENT_BLOCK',

            eol(str) {
                currentPart.value += str;
            },

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_COMMENT',
                    'EOF reached while parsing multi-line JavaScript comment');
            },

            char(ch, code) {


                if (code === CODE_ASTERISK) {
                    var nextCode = parser.lookAtCharCodeAhead(1);
                    if (nextCode === CODE_FORWARD_SLASH) {
                        currentPart.endPos = parser.pos + 2;
                        endJavaScriptComment();
                        parser.skip(1);
                        return;
                    }
                }

                currentPart.value += ch;
            }
        });

        // We enter STATE_JS_COMMENT_LINE after we encounter a "//" sequence
        // when parsing JavaScript code.
        // We leave STATE_JS_COMMENT_LINE when we see a newline character.
        var STATE_JS_COMMENT_LINE = Parser.createState({
            name: 'STATE_JS_COMMENT_LINE',

            eol(str) {
                currentPart.value += str;
                currentPart.endPos = parser.pos;
                endJavaScriptComment();
            },

            eof() {
                currentPart.endPos = parser.pos;
                endJavaScriptComment();
            },

            char(ch, code) {
                currentPart.value += ch;
            }
        });

        // We enter STATE_DTD after we encounter a "<!" while in the STATE_HTML_CONTENT.
        // We leave STATE_DTD if we see a ">".
        var STATE_DTD = Parser.createState({
            name: 'STATE_DTD',

            eol(str) {
                currentPart.value += str;
            },

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_DOCUMENT_TYPE',
                    'EOF reached while parsing document type');
            },

            char(ch, code) {
                if (code === CODE_CLOSE_ANGLE_BRACKET) {
                    currentPart.endPos = parser.pos + 1;
                    endDocumentType();
                } else {
                    currentPart.value += ch;
                }
            }
        });

        // We enter STATE_DECLARATION after we encounter a "<?"
        // while in the STATE_HTML_CONTENT.
        // We leave STATE_DECLARATION if we see a "?>" or ">".
        var STATE_DECLARATION = Parser.createState({
            name: 'STATE_DECLARATION',

            eol(str) {
                currentPart.value += str;
            },

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_DECLARATION',
                    'EOF reached while parsing declaration');
            },

            char(ch, code) {
                if (code === CODE_QUESTION) {
                    var nextCode = parser.lookAtCharCodeAhead(1);
                    if (nextCode === CODE_CLOSE_ANGLE_BRACKET) {
                        currentPart.endPos = parser.pos + 2;
                        endDeclaration();
                        parser.skip(1);
                    }
                } else if (code === CODE_CLOSE_ANGLE_BRACKET) {
                    currentPart.endPos = parser.pos + 1;
                    endDeclaration();
                } else {
                    currentPart.value += ch;
                }
            }
        });

        // We enter STATE_HTML_COMMENT after we encounter a "<--"
        // while in the STATE_HTML_CONTENT.
        // We leave STATE_HTML_COMMENT when we see a "-->".
        var STATE_HTML_COMMENT = Parser.createState({
            name: 'STATE_HTML_COMMENT',

            eol(newLineChars) {
                currentPart.value += newLineChars;
            },

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_COMMENT',
                    'EOF reached while parsing comment');
            },

            char(ch, code) {
                if (code === CODE_HYPHEN) {
                    var match = parser.lookAheadFor('->');
                    if (match) {
                        currentPart.endPos = parser.pos + 3;
                        endHtmlComment();
                        parser.skip(match.length);
                    } else {
                        currentPart.value += ch;
                    }
                } else {
                    currentPart.value += ch;
                }
            }
        });

        // We enter STATE_SCRIPTLET after we encounter a "<%" while in STATE_HTML_CONTENT.
        // We leave STATE_SCRIPTLET if we see a "%>".
        var STATE_SCRIPTLET = Parser.createState({
            name: 'STATE_SCRIPTLET',

            eol(str) {
                currentPart.value += str;
            },

            eof() {
                notifyError(currentPart.pos,
                    'MALFORMED_SCRIPTLET',
                    'EOF reached while parsing scriptlet');
            },

            comment(comment) {
                currentPart.value += comment.rawValue;
            },

            char(ch, code) {
                if (currentPart.quoteCharCode) {
                    currentPart.value += ch;

                    // We are within a string... only look for ending string code
                    if (code === CODE_BACK_SLASH) {
                        // Handle string escape sequence
                        currentPart.value += parser.lookAtCharAhead(1);
                        parser.skip(1);
                    } else if (code === currentPart.quoteCharCode) {
                        currentPart.quoteCharCode = null;
                    }
                    return;
                } else if (code === CODE_FORWARD_SLASH) {
                    if (parser.lookAtCharCodeAhead(1) === CODE_ASTERISK) {
                        // Skip over code inside a JavaScript block comment
                        beginBlockComment();
                        parser.skip(1);
                        return;
                    }
                } else if (code === CODE_SINGLE_QUOTE || code === CODE_DOUBLE_QUOTE) {
                    currentPart.quoteCharCode = code;
                } else if (code === CODE_PERCENT) {
                    if (parser.lookAtCharCodeAhead(1) === CODE_CLOSE_ANGLE_BRACKET) {
                        endScriptlet(parser.pos + 2 /* end pos */);
                        parser.skip(1); // Skip over the closing right angle bracket
                        return;
                    }
                }

                currentPart.value += ch;
            }
        });

        parser.enterHtmlContentState = function() {
            parser.enterState(STATE_HTML_CONTENT);
        };

        parser.enterConciseHtmlContentState = function() {
            parser.enterState(STATE_CONCISE_HTML_CONTENT);
        };

        parser.enterParsedTextContentState = function() {
            var last = blockStack.length && blockStack[blockStack.length - 1];

            if (!last || !last.tagName) {
                throw new Error('The "parsed text content" parser state is only allowed within a tag');
            }

            if (isConcise) {
                // We will transition into the STATE_PARSED_TEXT_CONTENT state
                // for each of the nested HTML blocks
                last.body = BODY_PARSED_TEXT;
                parser.enterState(STATE_CONCISE_HTML_CONTENT);
            } else {
                parser.enterState(STATE_PARSED_TEXT_CONTENT);
            }
        };

        parser.enterJsContentState = parser.enterParsedTextContentState;
        parser.enterCssContentState = parser.enterParsedTextContentState;

        parser.enterStaticTextContentState = function() {
            var last = blockStack.length && blockStack[blockStack.length - 1];

            if (!last || !last.tagName) {
                throw new Error('The "static text content" parser state is only allowed within a tag');
            }

            if (isConcise) {
                // We will transition into the STATE_STATIC_TEXT_CONTENT state
                // for each of the nested HTML blocks
                last.body = BODY_STATIC_TEXT;
                parser.enterState(STATE_CONCISE_HTML_CONTENT);
            } else {
                parser.enterState(STATE_STATIC_TEXT_CONTENT);
            }
        };


        if (defaultMode === MODE_CONCISE) {
            parser.setInitialState(STATE_CONCISE_HTML_CONTENT);
            parser.enterDefaultState = function() {
                parser.enterState(STATE_CONCISE_HTML_CONTENT);
            };
        } else {
            parser.setInitialState(STATE_HTML_CONTENT);
            parser.enterDefaultState = function() {
                parser.enterState(STATE_HTML_CONTENT);
            };
        }
    }

    parse(data) {
        super.parse(data);
        this.notifiers.notifyFinish();
    }
}

module.exports = Parser;
});
$rmod.def("/htmljs-parser@1.5.5/index",function(r,e,n,a,t){var s=r("./Parser");e.createParser=function(r,e){var n=new s(r,e);return n}});
$rmod.main("/esprima@2.7.2","esprima");
$rmod.dep("/$/marko","esprima","2.7.2");
$rmod.def("/esprima@2.7.2/esprima",function(e,u,t,n,i){!function(e,t){"use strict";"function"==typeof define&&define.amd?define(["exports"],t):t("undefined"!=typeof u?u:e.esprima={})}(this,function(e){"use strict";function u(e,u){if(!e)throw new Error("ASSERT: "+u)}function t(e){return e>=48&&57>=e}function n(e){return"0123456789abcdefABCDEF".indexOf(e)>=0}function i(e){return"01234567".indexOf(e)>=0}function r(e){var u="0"!==e,t="01234567".indexOf(e);return Et>st&&i(rt[st])&&(u=!0,t=8*t+"01234567".indexOf(rt[st++]),"0123".indexOf(e)>=0&&Et>st&&i(rt[st])&&(t=8*t+"01234567".indexOf(rt[st++]))),{code:t,octal:u}}function a(e){return 32===e||9===e||11===e||12===e||160===e||e>=5760&&[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(e)>=0}function s(e){return 10===e||13===e||8232===e||8233===e}function o(e){return 65536>e?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10))+String.fromCharCode(56320+(e-65536&1023))}function l(e){return 36===e||95===e||e>=65&&90>=e||e>=97&&122>=e||92===e||e>=128&&it.NonAsciiIdentifierStart.test(o(e))}function D(e){return 36===e||95===e||e>=65&&90>=e||e>=97&&122>=e||e>=48&&57>=e||92===e||e>=128&&it.NonAsciiIdentifierPart.test(o(e))}function c(e){switch(e){case"enum":case"export":case"import":case"super":return!0;default:return!1}}function f(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"yield":case"let":return!0;default:return!1}}function h(e){return"eval"===e||"arguments"===e}function p(e){switch(e.length){case 2:return"if"===e||"in"===e||"do"===e;case 3:return"var"===e||"for"===e||"new"===e||"try"===e||"let"===e;case 4:return"this"===e||"else"===e||"case"===e||"void"===e||"with"===e||"enum"===e;case 5:return"while"===e||"break"===e||"catch"===e||"throw"===e||"const"===e||"yield"===e||"class"===e||"super"===e;case 6:return"return"===e||"typeof"===e||"delete"===e||"switch"===e||"export"===e||"import"===e;case 7:return"default"===e||"finally"===e||"extends"===e;case 8:return"function"===e||"continue"===e||"debugger"===e;case 10:return"instanceof"===e;default:return!1}}function C(e,t,n,i,r){var a;u("number"==typeof n,"Comment must have valid position"),mt.lastCommentStart=n,a={type:e,value:t},Bt.range&&(a.range=[n,i]),Bt.loc&&(a.loc=r),Bt.comments.push(a),Bt.attachComment&&(Bt.leadingComments.push(a),Bt.trailingComments.push(a)),Bt.tokenize&&(a.type=a.type+"Comment",Bt.delegate&&(a=Bt.delegate(a)),Bt.tokens.push(a))}function F(e){var u,t,n,i;for(u=st-e,t={start:{line:ot,column:st-lt-e}};Et>st;)if(n=rt.charCodeAt(st),++st,s(n))return Dt=!0,Bt.comments&&(i=rt.slice(u+e,st-1),t.end={line:ot,column:st-lt-1},C("Line",i,u,st-1,t)),13===n&&10===rt.charCodeAt(st)&&++st,++ot,void(lt=st);Bt.comments&&(i=rt.slice(u+e,st),t.end={line:ot,column:st-lt},C("Line",i,u,st,t))}function A(){var e,u,t,n;for(Bt.comments&&(e=st-2,u={start:{line:ot,column:st-lt-2}});Et>st;)if(t=rt.charCodeAt(st),s(t))13===t&&10===rt.charCodeAt(st+1)&&++st,Dt=!0,++ot,++st,lt=st;else if(42===t){if(47===rt.charCodeAt(st+1))return++st,++st,void(Bt.comments&&(n=rt.slice(e+2,st-2),u.end={line:ot,column:st-lt},C("Block",n,e,st,u)));++st}else++st;Bt.comments&&(u.end={line:ot,column:st-lt},n=rt.slice(e+2,st),C("Block",n,e,st,u)),te()}function E(){var e,u;for(Dt=!1,u=0===st;Et>st;)if(e=rt.charCodeAt(st),a(e))++st;else if(s(e))Dt=!0,++st,13===e&&10===rt.charCodeAt(st)&&++st,++ot,lt=st,u=!0;else if(47===e)if(e=rt.charCodeAt(st+1),47===e)++st,++st,F(2),u=!0;else{if(42!==e)break;++st,++st,A()}else if(u&&45===e){if(45!==rt.charCodeAt(st+1)||62!==rt.charCodeAt(st+2))break;st+=3,F(3)}else{if(60!==e)break;if("!--"!==rt.slice(st+1,st+4))break;++st,++st,++st,++st,F(4)}}function d(e){var u,t,i,r=0;for(t="u"===e?4:2,u=0;t>u;++u){if(!(Et>st&&n(rt[st])))return"";i=rt[st++],r=16*r+"0123456789abcdef".indexOf(i.toLowerCase())}return String.fromCharCode(r)}function m(){var e,u;for(e=rt[st],u=0,"}"===e&&ue();Et>st&&(e=rt[st++],n(e));)u=16*u+"0123456789abcdef".indexOf(e.toLowerCase());return(u>1114111||"}"!==e)&&ue(),o(u)}function B(e){var u,t,n;return u=rt.charCodeAt(e),u>=55296&&56319>=u&&(n=rt.charCodeAt(e+1),n>=56320&&57343>=n&&(t=u,u=1024*(t-55296)+n-56320+65536)),u}function y(){var e,u,t;for(e=B(st),t=o(e),st+=t.length,92===e&&(117!==rt.charCodeAt(st)&&ue(),++st,"{"===rt[st]?(++st,u=m()):(u=d("u"),e=u.charCodeAt(0),u&&"\\"!==u&&l(e)||ue()),t=u);Et>st&&(e=B(st),D(e));)u=o(e),t+=u,st+=u.length,92===e&&(t=t.substr(0,t.length-1),117!==rt.charCodeAt(st)&&ue(),++st,"{"===rt[st]?(++st,u=m()):(u=d("u"),e=u.charCodeAt(0),u&&"\\"!==u&&D(e)||ue()),t+=u);return t}function g(){var e,u;for(e=st++;Et>st;){if(u=rt.charCodeAt(st),92===u)return st=e,y();if(u>=55296&&57343>u)return st=e,y();if(!D(u))break;++st}return rt.slice(e,st)}function S(){var e,u,t;return e=st,u=92===rt.charCodeAt(st)?y():g(),t=1===u.length?Qu.Identifier:p(u)?Qu.Keyword:"null"===u?Qu.NullLiteral:"true"===u||"false"===u?Qu.BooleanLiteral:Qu.Identifier,{type:t,value:u,lineNumber:ot,lineStart:lt,start:e,end:st}}function v(){var e,u;switch(e={type:Qu.Punctuator,value:"",lineNumber:ot,lineStart:lt,start:st,end:st},u=rt[st]){case"(":Bt.tokenize&&(Bt.openParenToken=Bt.tokenValues.length),++st;break;case"{":Bt.tokenize&&(Bt.openCurlyToken=Bt.tokenValues.length),mt.curlyStack.push("{"),++st;break;case".":++st,"."===rt[st]&&"."===rt[st+1]&&(st+=2,u="...");break;case"}":++st,mt.curlyStack.pop();break;case")":case";":case",":case"[":case"]":case":":case"?":case"~":++st;break;default:u=rt.substr(st,4),">>>="===u?st+=4:(u=u.substr(0,3),"==="===u||"!=="===u||">>>"===u||"<<="===u||">>="===u?st+=3:(u=u.substr(0,2),"&&"===u||"||"===u||"=="===u||"!="===u||"+="===u||"-="===u||"*="===u||"/="===u||"++"===u||"--"===u||"<<"===u||">>"===u||"&="===u||"|="===u||"^="===u||"%="===u||"<="===u||">="===u||"=>"===u?st+=2:(u=rt[st],"<>=!+-*%&|^/".indexOf(u)>=0&&++st)))}return st===e.start&&ue(),e.end=st,e.value=u,e}function w(e){for(var u="";Et>st&&n(rt[st]);)u+=rt[st++];return 0===u.length&&ue(),l(rt.charCodeAt(st))&&ue(),{type:Qu.NumericLiteral,value:parseInt("0x"+u,16),lineNumber:ot,lineStart:lt,start:e,end:st}}function x(e){var u,n;for(n="";Et>st&&(u=rt[st],"0"===u||"1"===u);)n+=rt[st++];return 0===n.length&&ue(),Et>st&&(u=rt.charCodeAt(st),(l(u)||t(u))&&ue()),{type:Qu.NumericLiteral,value:parseInt(n,2),lineNumber:ot,lineStart:lt,start:e,end:st}}function b(e,u){var n,r;for(i(e)?(r=!0,n="0"+rt[st++]):(r=!1,++st,n="");Et>st&&i(rt[st]);)n+=rt[st++];return r||0!==n.length||ue(),(l(rt.charCodeAt(st))||t(rt.charCodeAt(st)))&&ue(),{type:Qu.NumericLiteral,value:parseInt(n,8),octal:r,lineNumber:ot,lineStart:lt,start:u,end:st}}function k(){var e,u;for(e=st+1;Et>e;++e){if(u=rt[e],"8"===u||"9"===u)return!1;if(!i(u))return!0}return!0}function I(){var e,n,r;if(r=rt[st],u(t(r.charCodeAt(0))||"."===r,"Numeric literal must start with a decimal digit or a decimal point"),n=st,e="","."!==r){if(e=rt[st++],r=rt[st],"0"===e){if("x"===r||"X"===r)return++st,w(n);if("b"===r||"B"===r)return++st,x(n);if("o"===r||"O"===r)return b(r,n);if(i(r)&&k())return b(r,n)}for(;t(rt.charCodeAt(st));)e+=rt[st++];r=rt[st]}if("."===r){for(e+=rt[st++];t(rt.charCodeAt(st));)e+=rt[st++];r=rt[st]}if("e"===r||"E"===r)if(e+=rt[st++],r=rt[st],("+"===r||"-"===r)&&(e+=rt[st++]),t(rt.charCodeAt(st)))for(;t(rt.charCodeAt(st));)e+=rt[st++];else ue();return l(rt.charCodeAt(st))&&ue(),{type:Qu.NumericLiteral,value:parseFloat(e),lineNumber:ot,lineStart:lt,start:n,end:st}}function P(){var e,t,n,a,o,l="",D=!1;for(e=rt[st],u("'"===e||'"'===e,"String literal must starts with a quote"),t=st,++st;Et>st;){if(n=rt[st++],n===e){e="";break}if("\\"===n)if(n=rt[st++],n&&s(n.charCodeAt(0)))++ot,"\r"===n&&"\n"===rt[st]&&++st,lt=st;else switch(n){case"u":case"x":if("{"===rt[st])++st,l+=m();else{if(a=d(n),!a)throw ue();l+=a}break;case"n":l+="\n";break;case"r":l+="\r";break;case"t":l+="	";break;case"b":l+="\b";break;case"f":l+="\f";break;case"v":l+="";break;case"8":case"9":l+=n,te();break;default:i(n)?(o=r(n),D=o.octal||D,l+=String.fromCharCode(o.code)):l+=n}else{if(s(n.charCodeAt(0)))break;l+=n}}return""!==e&&(st=t,ue()),{type:Qu.StringLiteral,value:l,octal:D,lineNumber:Ct,lineStart:Ft,start:t,end:st}}function L(){var e,u,n,r,a,o,l,D,c="";for(r=!1,o=!1,u=st,a="`"===rt[st],n=2,++st;Et>st;){if(e=rt[st++],"`"===e){n=1,o=!0,r=!0;break}if("$"===e){if("{"===rt[st]){mt.curlyStack.push("${"),++st,r=!0;break}c+=e}else if("\\"===e)if(e=rt[st++],s(e.charCodeAt(0)))++ot,"\r"===e&&"\n"===rt[st]&&++st,lt=st;else switch(e){case"n":c+="\n";break;case"r":c+="\r";break;case"t":c+="	";break;case"u":case"x":"{"===rt[st]?(++st,c+=m()):(l=st,D=d(e),D?c+=D:(st=l,c+=e));break;case"b":c+="\b";break;case"f":c+="\f";break;case"v":c+="";break;default:"0"===e?(t(rt.charCodeAt(st))&&Q(nt.TemplateOctalLiteral),c+="\x00"):i(e)?Q(nt.TemplateOctalLiteral):c+=e}else s(e.charCodeAt(0))?(++ot,"\r"===e&&"\n"===rt[st]&&++st,lt=st,c+="\n"):c+=e}return r||ue(),a||mt.curlyStack.pop(),{type:Qu.Template,value:{cooked:c,raw:rt.slice(u+1,st-n)},head:a,tail:o,lineNumber:ot,lineStart:lt,start:u,end:st}}function T(e,u){var t="￿",n=e;u.indexOf("u")>=0&&(n=n.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,function(e,u,n){var i=parseInt(u||n,16);return i>1114111&&ue(null,nt.InvalidRegExp),65535>=i?String.fromCharCode(i):t}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,t));try{RegExp(n)}catch(i){ue(null,nt.InvalidRegExp)}try{return new RegExp(e,u)}catch(r){return null}}function N(){var e,t,n,i,r;for(e=rt[st],u("/"===e,"Regular expression literal must start with a slash"),t=rt[st++],n=!1,i=!1;Et>st;)if(e=rt[st++],t+=e,"\\"===e)e=rt[st++],s(e.charCodeAt(0))&&ue(null,nt.UnterminatedRegExp),t+=e;else if(s(e.charCodeAt(0)))ue(null,nt.UnterminatedRegExp);else if(n)"]"===e&&(n=!1);else{if("/"===e){i=!0;break}"["===e&&(n=!0)}return i||ue(null,nt.UnterminatedRegExp),r=t.substr(1,t.length-2),{value:r,literal:t}}function O(){var e,u,t,n;for(u="",t="";Et>st&&(e=rt[st],D(e.charCodeAt(0)));)if(++st,"\\"===e&&Et>st)if(e=rt[st],"u"===e){if(++st,n=st,e=d("u"))for(t+=e,u+="\\u";st>n;++n)u+=rt[n];else st=n,t+="u",u+="\\u";te()}else u+="\\",te();else t+=e,u+=e;return{value:t,literal:u}}function R(){var e,u,t,n;return At=!0,dt=null,E(),e=st,u=N(),t=O(),n=T(u.value,t.value),At=!1,Bt.tokenize?{type:Qu.RegularExpression,value:n,regex:{pattern:u.value,flags:t.value},lineNumber:ot,lineStart:lt,start:e,end:st}:{literal:u.literal+t.literal,value:n,regex:{pattern:u.value,flags:t.value},start:e,end:st}}function U(){var e,u,t,n;return E(),e=st,u={start:{line:ot,column:st-lt}},t=R(),u.end={line:ot,column:st-lt},Bt.tokenize||(Bt.tokens.length>0&&(n=Bt.tokens[Bt.tokens.length-1],n.range[0]===e&&"Punctuator"===n.type&&("/"===n.value||"/="===n.value)&&Bt.tokens.pop()),Bt.tokens.push({type:"RegularExpression",value:t.literal,regex:t.regex,range:[e,st],loc:u})),t}function Y(e){return e.type===Qu.Identifier||e.type===Qu.Keyword||e.type===Qu.BooleanLiteral||e.type===Qu.NullLiteral}function M(){function e(e){return e&&e.length>1&&e[0]>="a"&&e[0]<="z"}var u,t,n;switch(t=Bt.tokenValues[Bt.tokens.length-1],u=null!==t,t){case"this":case"]":u=!1;break;case")":n=Bt.tokenValues[Bt.openParenToken-1],u="if"===n||"while"===n||"for"===n||"with"===n;break;case"}":u=!1,e(Bt.tokenValues[Bt.openCurlyToken-3])?(n=Bt.tokenValues[Bt.openCurlyToken-4],u=n?et.indexOf(n)<0:!1):e(Bt.tokenValues[Bt.openCurlyToken-4])&&(n=Bt.tokenValues[Bt.openCurlyToken-5],u=n?et.indexOf(n)<0:!0)}return u?U():v()}function j(){var e,u;return st>=Et?{type:Qu.EOF,lineNumber:ot,lineStart:lt,start:st,end:st}:(e=rt.charCodeAt(st),l(e)?(u=S(),at&&f(u.value)&&(u.type=Qu.Keyword),u):40===e||41===e||59===e?v():39===e||34===e?P():46===e?t(rt.charCodeAt(st+1))?I():v():t(e)?I():Bt.tokenize&&47===e?M():96===e||125===e&&"${"===mt.curlyStack[mt.curlyStack.length-1]?L():e>=55296&&57343>e&&(e=B(st),l(e))?S():v())}function V(){var e,u,t,n;return e={start:{line:ot,column:st-lt}},u=j(),e.end={line:ot,column:st-lt},u.type!==Qu.EOF&&(t=rt.slice(u.start,u.end),n={type:Zu[u.type],value:t,range:[u.start,u.end],loc:e},u.regex&&(n.regex={pattern:u.regex.pattern,flags:u.regex.flags}),Bt.tokenValues&&Bt.tokenValues.push("Punctuator"===n.type||"Keyword"===n.type?n.value:null),Bt.tokenize&&(Bt.range||delete n.range,Bt.loc||delete n.loc,Bt.delegate&&(n=Bt.delegate(n))),Bt.tokens.push(n)),u}function W(){var e;return At=!0,ct=st,ft=ot,ht=lt,E(),e=dt,pt=st,Ct=ot,Ft=lt,dt="undefined"!=typeof Bt.tokens?V():j(),At=!1,e}function H(){At=!0,E(),ct=st,ft=ot,ht=lt,pt=st,Ct=ot,Ft=lt,dt="undefined"!=typeof Bt.tokens?V():j(),At=!1}function K(){this.line=Ct,this.column=pt-Ft}function q(){this.start=new K,this.end=null}function z(e){this.start={line:e.lineNumber,column:e.start-e.lineStart},this.end=null}function _(){Bt.range&&(this.range=[pt,0]),Bt.loc&&(this.loc=new q)}function $(e){Bt.range&&(this.range=[e.start,0]),Bt.loc&&(this.loc=new z(e))}function G(e){var u,t;for(u=0;u<Bt.errors.length;u++)if(t=Bt.errors[u],t.index===e.index&&t.message===e.message)return;Bt.errors.push(e)}function X(e,u){var t=new Error(e);try{throw t}catch(n){Object.create&&Object.defineProperty&&(t=Object.create(n),Object.defineProperty(t,"column",{value:u}))}finally{return t}}function J(e,u,t){var n,i,r;return n="Line "+e+": "+t,i=u-(At?lt:ht)+1,r=X(n,i),r.lineNumber=e,r.description=t,r.index=u,r}function Q(e){var t,n;throw t=Array.prototype.slice.call(arguments,1),n=e.replace(/%(\d)/g,function(e,n){return u(n<t.length,"Message reference must be in range"),t[n]}),J(ft,ct,n)}function Z(e){var t,n,i;if(t=Array.prototype.slice.call(arguments,1),n=e.replace(/%(\d)/g,function(e,n){return u(n<t.length,"Message reference must be in range"),t[n]}),i=J(ot,ct,n),!Bt.errors)throw i;G(i)}function ee(e,u){var t,n=u||nt.UnexpectedToken;return e?(u||(n=e.type===Qu.EOF?nt.UnexpectedEOS:e.type===Qu.Identifier?nt.UnexpectedIdentifier:e.type===Qu.NumericLiteral?nt.UnexpectedNumber:e.type===Qu.StringLiteral?nt.UnexpectedString:e.type===Qu.Template?nt.UnexpectedTemplate:nt.UnexpectedToken,e.type===Qu.Keyword&&(c(e.value)?n=nt.UnexpectedReserved:at&&f(e.value)&&(n=nt.StrictReservedWord))),t=e.type===Qu.Template?e.value.raw:e.value):t="ILLEGAL",n=n.replace("%0",t),e&&"number"==typeof e.lineNumber?J(e.lineNumber,e.start,n):J(At?ot:ft,At?st:ct,n)}function ue(e,u){throw ee(e,u)}function te(e,u){var t=ee(e,u);if(!Bt.errors)throw t;G(t)}function ne(e){var u=W();(u.type!==Qu.Punctuator||u.value!==e)&&ue(u)}function ie(){var e;Bt.errors?(e=dt,e.type===Qu.Punctuator&&","===e.value?W():e.type===Qu.Punctuator&&";"===e.value?(W(),te(e)):te(e,nt.UnexpectedToken)):ne(",")}function re(e){var u=W();(u.type!==Qu.Keyword||u.value!==e)&&ue(u)}function ae(e){return dt.type===Qu.Punctuator&&dt.value===e}function se(e){return dt.type===Qu.Keyword&&dt.value===e}function oe(e){return dt.type===Qu.Identifier&&dt.value===e}function le(){var e;return dt.type!==Qu.Punctuator?!1:(e=dt.value,"="===e||"*="===e||"/="===e||"%="===e||"+="===e||"-="===e||"<<="===e||">>="===e||">>>="===e||"&="===e||"^="===e||"|="===e)}function De(){return 59===rt.charCodeAt(pt)||ae(";")?void W():void(Dt||(ct=pt,ft=Ct,ht=Ft,dt.type===Qu.EOF||ae("}")||ue(dt)))}function ce(e){var u,t=yt,n=gt,i=St;return yt=!0,gt=!0,St=null,u=e(),null!==St&&ue(St),yt=t,gt=n,St=i,u}function fe(e){var u,t=yt,n=gt,i=St;return yt=!0,gt=!0,St=null,u=e(),yt=yt&&t,gt=gt&&n,St=i||St,u}function he(e,u){var t,n,i=new _,r=[];for(ne("[");!ae("]");)if(ae(","))W(),r.push(null);else{if(ae("...")){n=new _,W(),e.push(dt),t=Ze(u),r.push(n.finishRestElement(t));break}r.push(Ae(e,u)),ae("]")||ne(",")}return ne("]"),i.finishArrayPattern(r)}function pe(e,u){var t,n,i,r=new _,a=ae("[");if(dt.type===Qu.Identifier){if(n=dt,t=Ze(),ae("="))return e.push(n),W(),i=$e(),r.finishProperty("init",t,!1,new $(n).finishAssignmentPattern(t,i),!1,!0);if(!ae(":"))return e.push(n),r.finishProperty("init",t,!1,t,!1,!0)}else t=Be();return ne(":"),i=Ae(e,u),r.finishProperty("init",t,a,i,!1,!1)}function Ce(e,u){var t=new _,n=[];for(ne("{");!ae("}");)n.push(pe(e,u)),ae("}")||ne(",");return W(),t.finishObjectPattern(n)}function Fe(e,u){return ae("[")?he(e,u):ae("{")?Ce(e,u):(se("let")&&("const"===u||"let"===u)&&te(dt,nt.UnexpectedToken),e.push(dt),Ze(u))}function Ae(e,u){var t,n,i,r=dt;return t=Fe(e,u),ae("=")&&(W(),n=mt.allowYield,mt.allowYield=!0,i=ce($e),mt.allowYield=n,t=new $(r).finishAssignmentPattern(t,i)),t}function Ee(){var e,u=[],t=new _;for(ne("[");!ae("]");)ae(",")?(W(),u.push(null)):ae("...")?(e=new _,W(),e.finishSpreadElement(fe($e)),ae("]")||(gt=yt=!1,ne(",")),u.push(e)):(u.push(fe($e)),ae("]")||ne(","));return W(),t.finishArrayExpression(u)}function de(e,u,t){var n,i;return gt=yt=!1,n=at,i=ce(xu),at&&u.firstRestricted&&te(u.firstRestricted,u.message),at&&u.stricted&&te(u.stricted,u.message),at=n,e.finishFunctionExpression(null,u.params,u.defaults,i,t)}function me(){var e,u,t=new _,n=mt.allowYield;return mt.allowYield=!1,e=Iu(),mt.allowYield=n,mt.allowYield=!1,u=de(t,e,!1),mt.allowYield=n,u}function Be(){var e,u,t=new _;switch(e=W(),e.type){case Qu.StringLiteral:case Qu.NumericLiteral:return at&&e.octal&&te(e,nt.StrictOctalLiteral),t.finishLiteral(e);case Qu.Identifier:case Qu.BooleanLiteral:case Qu.NullLiteral:case Qu.Keyword:return t.finishIdentifier(e.value);case Qu.Punctuator:if("["===e.value)return u=ce($e),ne("]"),u}ue(e)}function ye(){switch(dt.type){case Qu.Identifier:case Qu.StringLiteral:case Qu.BooleanLiteral:case Qu.NullLiteral:case Qu.NumericLiteral:case Qu.Keyword:return!0;case Qu.Punctuator:return"["===dt.value}return!1}function ge(e,u,t,n){var i,r,a,s,o=mt.allowYield;if(e.type===Qu.Identifier){if("get"===e.value&&ye())return t=ae("["),u=Be(),a=new _,ne("("),ne(")"),mt.allowYield=!1,i=de(a,{params:[],defaults:[],stricted:null,firstRestricted:null,message:null},!1),mt.allowYield=o,n.finishProperty("get",u,t,i,!1,!1);if("set"===e.value&&ye())return t=ae("["),u=Be(),a=new _,ne("("),r={params:[],defaultCount:0,defaults:[],firstRestricted:null,paramSet:{}},ae(")")?te(dt):(mt.allowYield=!1,ku(r),mt.allowYield=o,0===r.defaultCount&&(r.defaults=[])),ne(")"),mt.allowYield=!1,i=de(a,r,!1),mt.allowYield=o,n.finishProperty("set",u,t,i,!1,!1)}else if(e.type===Qu.Punctuator&&"*"===e.value&&ye())return t=ae("["),u=Be(),a=new _,mt.allowYield=!0,s=Iu(),mt.allowYield=o,mt.allowYield=!1,i=de(a,s,!0),mt.allowYield=o,n.finishProperty("init",u,t,i,!0,!1);return u&&ae("(")?(i=me(),n.finishProperty("init",u,t,i,!0,!1)):null}function Se(e){var u,t,n,i,r,a=dt,s=new _;return u=ae("["),ae("*")?W():t=Be(),(n=ge(a,t,u,s))?n:(t||ue(dt),u||(i=t.type===ut.Identifier&&"__proto__"===t.name||t.type===ut.Literal&&"__proto__"===t.value,e.value&&i&&Z(nt.DuplicateProtoProperty),e.value|=i),ae(":")?(W(),r=fe($e),s.finishProperty("init",t,u,r,!1,!1)):a.type===Qu.Identifier?ae("=")?(St=dt,W(),r=ce($e),s.finishProperty("init",t,u,new $(a).finishAssignmentPattern(t,r),!1,!0)):s.finishProperty("init",t,u,t,!1,!0):void ue(dt))}function ve(){var e=[],u={value:!1},t=new _;for(ne("{");!ae("}");)e.push(Se(u)),ae("}")||ie();return ne("}"),t.finishObjectExpression(e)}function we(e){var u;switch(e.type){case ut.Identifier:case ut.MemberExpression:case ut.RestElement:case ut.AssignmentPattern:break;case ut.SpreadElement:e.type=ut.RestElement,we(e.argument);break;case ut.ArrayExpression:for(e.type=ut.ArrayPattern,u=0;u<e.elements.length;u++)null!==e.elements[u]&&we(e.elements[u]);break;case ut.ObjectExpression:for(e.type=ut.ObjectPattern,u=0;u<e.properties.length;u++)we(e.properties[u].value);break;case ut.AssignmentExpression:e.type=ut.AssignmentPattern,we(e.left)}}function xe(e){var u,t;return(dt.type!==Qu.Template||e.head&&!dt.head)&&ue(),u=new _,t=W(),u.finishTemplateElement({raw:t.value.raw,cooked:t.value.cooked},t.tail)}function be(){var e,u,t,n=new _;for(e=xe({head:!0}),u=[e],t=[];!e.tail;)t.push(Ge()),e=xe({head:!1}),u.push(e);return n.finishTemplateLiteral(u,t)}function ke(){var e,u,t,n,i=[];if(ne("("),ae(")"))return W(),ae("=>")||ne("=>"),{type:tt.ArrowParameterPlaceHolder,params:[],rawParams:[]};if(t=dt,ae("..."))return e=lu(i),ne(")"),ae("=>")||ne("=>"),{type:tt.ArrowParameterPlaceHolder,params:[e]};if(yt=!0,e=fe($e),ae(",")){for(gt=!1,u=[e];Et>pt&&ae(",");){if(W(),ae("...")){for(yt||ue(dt),u.push(lu(i)),ne(")"),ae("=>")||ne("=>"),yt=!1,n=0;n<u.length;n++)we(u[n]);return{type:tt.ArrowParameterPlaceHolder,params:u}}u.push(fe($e))}e=new $(t).finishSequenceExpression(u)}if(ne(")"),ae("=>")){if(e.type===ut.Identifier&&"yield"===e.name)return{type:tt.ArrowParameterPlaceHolder,params:[e]};if(yt||ue(dt),e.type===ut.SequenceExpression)for(n=0;n<e.expressions.length;n++)we(e.expressions[n]);else we(e);e={type:tt.ArrowParameterPlaceHolder,params:e.type===ut.SequenceExpression?e.expressions:[e]}}return yt=!1,e}function Ie(){var e,u,t,n;if(ae("("))return yt=!1,fe(ke);if(ae("["))return fe(Ee);if(ae("{"))return fe(ve);if(e=dt.type,n=new _,e===Qu.Identifier)"module"===mt.sourceType&&"await"===dt.value&&te(dt),t=n.finishIdentifier(W().value);else if(e===Qu.StringLiteral||e===Qu.NumericLiteral)gt=yt=!1,at&&dt.octal&&te(dt,nt.StrictOctalLiteral),t=n.finishLiteral(W());else if(e===Qu.Keyword){if(!at&&mt.allowYield&&se("yield"))return Le();if(!at&&se("let"))return n.finishIdentifier(W().value);if(gt=yt=!1,se("function"))return Lu();if(se("this"))return W(),n.finishThisExpression();if(se("class"))return Ou();ue(W())}else e===Qu.BooleanLiteral?(gt=yt=!1,u=W(),u.value="true"===u.value,t=n.finishLiteral(u)):e===Qu.NullLiteral?(gt=yt=!1,u=W(),u.value=null,t=n.finishLiteral(u)):ae("/")||ae("/=")?(gt=yt=!1,st=pt,u="undefined"!=typeof Bt.tokens?U():R(),W(),t=n.finishLiteral(u)):e===Qu.Template?t=be():ue(W());return t}function Pe(){var e,u=[];if(ne("("),!ae(")"))for(;Et>pt&&(ae("...")?(e=new _,W(),e.finishSpreadElement(ce($e))):e=ce($e),u.push(e),!ae(")"));)ie();return ne(")"),u}function Le(){var e,u=new _;return e=W(),Y(e)||ue(e),u.finishIdentifier(e.value)}function Te(){return ne("."),Le()}function Ne(){var e;return ne("["),e=ce(Ge),ne("]"),e}function Oe(){var e,u,t=new _;if(re("new"),ae(".")){if(W(),dt.type===Qu.Identifier&&"target"===dt.value&&mt.inFunctionBody)return W(),t.finishMetaProperty("new","target");ue(dt)}return e=ce(Ue),u=ae("(")?Pe():[],gt=yt=!1,t.finishNewExpression(e,u)}function Re(){var e,u,t,n,i,r=mt.allowIn;for(i=dt,mt.allowIn=!0,se("super")&&mt.inFunctionBody?(u=new _,W(),u=u.finishSuper(),ae("(")||ae(".")||ae("[")||ue(dt)):u=fe(se("new")?Oe:Ie);;)if(ae("."))yt=!1,gt=!0,n=Te(),u=new $(i).finishMemberExpression(".",u,n);else if(ae("("))yt=!1,gt=!1,t=Pe(),u=new $(i).finishCallExpression(u,t);else if(ae("["))yt=!1,gt=!0,n=Ne(),u=new $(i).finishMemberExpression("[",u,n);else{if(dt.type!==Qu.Template||!dt.head)break;e=be(),u=new $(i).finishTaggedTemplateExpression(u,e)}return mt.allowIn=r,u}function Ue(){var e,t,n,i;for(u(mt.allowIn,"callee of new expression always allow in keyword."),i=dt,se("super")&&mt.inFunctionBody?(t=new _,W(),t=t.finishSuper(),ae("[")||ae(".")||ue(dt)):t=fe(se("new")?Oe:Ie);;)if(ae("["))yt=!1,gt=!0,n=Ne(),t=new $(i).finishMemberExpression("[",t,n);else if(ae("."))yt=!1,gt=!0,n=Te(),t=new $(i).finishMemberExpression(".",t,n);else{if(dt.type!==Qu.Template||!dt.head)break;e=be(),t=new $(i).finishTaggedTemplateExpression(t,e)}return t}function Ye(){var e,u,t=dt;return e=fe(Re),Dt||dt.type!==Qu.Punctuator||(ae("++")||ae("--"))&&(at&&e.type===ut.Identifier&&h(e.name)&&Z(nt.StrictLHSPostfix),gt||Z(nt.InvalidLHSInAssignment),gt=yt=!1,u=W(),e=new $(t).finishPostfixExpression(u.value,e)),e}function Me(){var e,u,t;return dt.type!==Qu.Punctuator&&dt.type!==Qu.Keyword?u=Ye():ae("++")||ae("--")?(t=dt,e=W(),u=fe(Me),at&&u.type===ut.Identifier&&h(u.name)&&Z(nt.StrictLHSPrefix),gt||Z(nt.InvalidLHSInAssignment),u=new $(t).finishUnaryExpression(e.value,u),gt=yt=!1):ae("+")||ae("-")||ae("~")||ae("!")?(t=dt,e=W(),u=fe(Me),u=new $(t).finishUnaryExpression(e.value,u),gt=yt=!1):se("delete")||se("void")||se("typeof")?(t=dt,e=W(),u=fe(Me),u=new $(t).finishUnaryExpression(e.value,u),at&&"delete"===u.operator&&u.argument.type===ut.Identifier&&Z(nt.StrictDelete),gt=yt=!1):u=Ye(),u}function je(e,u){var t=0;if(e.type!==Qu.Punctuator&&e.type!==Qu.Keyword)return 0;switch(e.value){case"||":t=1;break;case"&&":t=2;break;case"|":t=3;break;case"^":t=4;break;case"&":t=5;break;case"==":case"!=":case"===":case"!==":t=6;break;case"<":case">":case"<=":case">=":case"instanceof":t=7;break;case"in":t=u?7:0;break;case"<<":case">>":case">>>":t=8;break;case"+":case"-":t=9;break;case"*":case"/":case"%":t=11}return t}function Ve(){var e,u,t,n,i,r,a,s,o,l;if(e=dt,o=fe(Me),n=dt,i=je(n,mt.allowIn),0===i)return o;for(gt=yt=!1,n.prec=i,W(),u=[e,dt],a=ce(Me),r=[o,n,a];(i=je(dt,mt.allowIn))>0;){for(;r.length>2&&i<=r[r.length-2].prec;)a=r.pop(),s=r.pop().value,o=r.pop(),u.pop(),t=new $(u[u.length-1]).finishBinaryExpression(s,o,a),r.push(t);n=W(),n.prec=i,r.push(n),u.push(dt),t=ce(Me),r.push(t)}for(l=r.length-1,t=r[l],u.pop();l>1;)t=new $(u.pop()).finishBinaryExpression(r[l-1].value,r[l-2],t),l-=2;return t}function We(){var e,u,t,n,i;return i=dt,e=fe(Ve),ae("?")&&(W(),u=mt.allowIn,mt.allowIn=!0,t=ce($e),mt.allowIn=u,ne(":"),n=ce($e),e=new $(i).finishConditionalExpression(e,t,n),gt=yt=!1),e}function He(){return ae("{")?xu():ce($e)}function Ke(e,t){var n;switch(t.type){case ut.Identifier:bu(e,t,t.name);break;case ut.RestElement:Ke(e,t.argument);break;case ut.AssignmentPattern:Ke(e,t.left);break;case ut.ArrayPattern:for(n=0;n<t.elements.length;n++)null!==t.elements[n]&&Ke(e,t.elements[n]);break;case ut.YieldExpression:break;default:for(u(t.type===ut.ObjectPattern,"Invalid type"),n=0;n<t.properties.length;n++)Ke(e,t.properties[n].value)}}function qe(e){var u,t,n,i,r,a,s,o;switch(r=[],a=0,i=[e],e.type){case ut.Identifier:break;case tt.ArrowParameterPlaceHolder:i=e.params;break;default:return null}for(s={paramSet:{}},u=0,t=i.length;t>u;u+=1)switch(n=i[u],n.type){case ut.AssignmentPattern:i[u]=n.left,n.right.type===ut.YieldExpression&&(n.right.argument&&ue(dt),n.right.type=ut.Identifier,n.right.name="yield",delete n.right.argument,delete n.right.delegate),r.push(n.right),++a,Ke(s,n.left);break;default:Ke(s,n),i[u]=n,r.push(null)}if(at||!mt.allowYield)for(u=0,t=i.length;t>u;u+=1)n=i[u],n.type===ut.YieldExpression&&ue(dt);return s.message===nt.StrictParamDupe&&(o=at?s.stricted:s.firstRestricted,ue(o,s.message)),0===a&&(r=[]),{params:i,defaults:r,stricted:s.stricted,firstRestricted:s.firstRestricted,message:s.message}}function ze(e,u){var t,n,i;return Dt&&te(dt),ne("=>"),t=at,n=mt.allowYield,mt.allowYield=!0,i=He(),at&&e.firstRestricted&&ue(e.firstRestricted,e.message),at&&e.stricted&&te(e.stricted,e.message),at=t,mt.allowYield=n,u.finishArrowFunctionExpression(e.params,e.defaults,i,i.type!==ut.BlockStatement)}function _e(){var e,u,t,n;return e=null,u=new _,t=!1,re("yield"),Dt||(n=mt.allowYield,mt.allowYield=!1,t=ae("*"),t?(W(),e=$e()):ae(";")||ae("}")||ae(")")||dt.type===Qu.EOF||(e=$e()),mt.allowYield=n),u.finishYieldExpression(e,t)}function $e(){var e,u,t,n,i;return i=dt,e=dt,!mt.allowYield&&se("yield")?_e():(u=We(),u.type===tt.ArrowParameterPlaceHolder||ae("=>")?(gt=yt=!1,n=qe(u),n?(St=null,ze(n,new $(i))):u):(le()&&(gt||Z(nt.InvalidLHSInAssignment),at&&u.type===ut.Identifier&&(h(u.name)&&te(e,nt.StrictLHSAssignment),f(u.name)&&te(e,nt.StrictReservedWord)),ae("=")?we(u):gt=yt=!1,e=W(),t=ce($e),u=new $(i).finishAssignmentExpression(e.value,u,t),St=null),u))}function Ge(){var e,u,t=dt;if(e=ce($e),ae(",")){for(u=[e];Et>pt&&ae(",");)W(),u.push(ce($e));e=new $(t).finishSequenceExpression(u)}return e}function Xe(){if(dt.type===Qu.Keyword)switch(dt.value){case"export":return"module"!==mt.sourceType&&te(dt,nt.IllegalExportDeclaration),Vu();case"import":return"module"!==mt.sourceType&&te(dt,nt.IllegalImportDeclaration),zu();case"const":return ou({inFor:!1});case"function":return Pu(new _);case"class":return Nu()}return se("let")&&su()?ou({inFor:!1}):wu()}function Je(){for(var e=[];Et>pt&&!ae("}");)e.push(Xe());return e}function Qe(){var e,u=new _;return ne("{"),e=Je(),ne("}"),u.finishBlockStatement(e)}function Ze(e){var u,t=new _;return u=W(),u.type===Qu.Keyword&&"yield"===u.value?(at&&te(u,nt.StrictReservedWord),mt.allowYield||ue(u)):u.type!==Qu.Identifier?at&&u.type===Qu.Keyword&&f(u.value)?te(u,nt.StrictReservedWord):(at||"let"!==u.value||"var"!==e)&&ue(u):"module"===mt.sourceType&&u.type===Qu.Identifier&&"await"===u.value&&te(u),t.finishIdentifier(u.value)}function eu(e){var u,t=null,n=new _,i=[];return u=Fe(i,"var"),at&&h(u.name)&&Z(nt.StrictVarName),ae("=")?(W(),t=ce($e)):u.type===ut.Identifier||e.inFor||ne("="),n.finishVariableDeclarator(u,t)}function uu(e){var u,t;for(u={inFor:e.inFor},t=[eu(u)];ae(",");)W(),t.push(eu(u));return t}function tu(e){var u;return re("var"),u=uu({inFor:!1}),De(),e.finishVariableDeclaration(u)}function nu(e,u){var t,n=null,i=new _,r=[];return t=Fe(r,e),at&&t.type===ut.Identifier&&h(t.name)&&Z(nt.StrictVarName),"const"===e?se("in")||oe("of")||(ne("="),n=ce($e)):(!u.inFor&&t.type!==ut.Identifier||ae("="))&&(ne("="),n=ce($e)),i.finishVariableDeclarator(t,n)}function iu(e,u){for(var t=[nu(e,u)];ae(",");)W(),t.push(nu(e,u));return t}function ru(){return{index:st,lineNumber:ot,lineStart:lt,hasLineTerminator:Dt,lastIndex:ct,lastLineNumber:ft,lastLineStart:ht,startIndex:pt,startLineNumber:Ct,startLineStart:Ft,lookahead:dt,tokenCount:Bt.tokens?Bt.tokens.length:0}}function au(e){st=e.index,ot=e.lineNumber,lt=e.lineStart,Dt=e.hasLineTerminator,ct=e.lastIndex,ft=e.lastLineNumber,ht=e.lastLineStart,pt=e.startIndex,Ct=e.startLineNumber,Ft=e.startLineStart,dt=e.lookahead,Bt.tokens&&Bt.tokens.splice(e.tokenCount,Bt.tokens.length)}function su(){var e,u;return u=ru(),W(),e=dt.type===Qu.Identifier||ae("[")||ae("{")||se("let")||se("yield"),au(u),e}function ou(e){var t,n,i=new _;return t=W().value,u("let"===t||"const"===t,"Lexical declaration must be either let or const"),n=iu(t,e),De(),i.finishLexicalDeclaration(n,t)}function lu(e){var u,t=new _;return W(),ae("{")&&Q(nt.ObjectPatternAsRestParameter),e.push(dt),u=Ze(),ae("=")&&Q(nt.DefaultRestParameter),ae(")")||Q(nt.ParameterAfterRestParameter),t.finishRestElement(u)}function Du(e){return ne(";"),e.finishEmptyStatement()}function cu(e){var u=Ge();return De(),e.finishExpressionStatement(u)}function fu(e){var u,t,n;return re("if"),ne("("),u=Ge(),ne(")"),t=wu(),se("else")?(W(),n=wu()):n=null,e.finishIfStatement(u,t,n)}function hu(e){var u,t,n;return re("do"),n=mt.inIteration,mt.inIteration=!0,u=wu(),mt.inIteration=n,re("while"),ne("("),t=Ge(),ne(")"),ae(";")&&W(),e.finishDoWhileStatement(u,t)}function pu(e){var u,t,n;return re("while"),ne("("),u=Ge(),ne(")"),n=mt.inIteration,mt.inIteration=!0,t=wu(),mt.inIteration=n,e.finishWhileStatement(u,t)}function Cu(e){var u,t,n,i,r,a,s,o,l,D,c,f,h=mt.allowIn;if(u=r=a=null,t=!0,re("for"),ne("("),ae(";"))W();else if(se("var"))u=new _,W(),mt.allowIn=!1,D=uu({inFor:!0}),mt.allowIn=h,1===D.length&&se("in")?(u=u.finishVariableDeclaration(D),W(),s=u,o=Ge(),u=null):1===D.length&&null===D[0].init&&oe("of")?(u=u.finishVariableDeclaration(D),W(),s=u,o=$e(),u=null,t=!1):(u=u.finishVariableDeclaration(D),ne(";"));else if(se("const")||se("let"))u=new _,l=W().value,at||"in"!==dt.value?(mt.allowIn=!1,D=iu(l,{inFor:!0}),mt.allowIn=h,1===D.length&&null===D[0].init&&se("in")?(u=u.finishLexicalDeclaration(D,l),W(),s=u,o=Ge(),u=null):1===D.length&&null===D[0].init&&oe("of")?(u=u.finishLexicalDeclaration(D,l),W(),s=u,o=$e(),u=null,t=!1):(De(),u=u.finishLexicalDeclaration(D,l))):(u=u.finishIdentifier(l),W(),s=u,o=Ge(),u=null);else if(i=dt,mt.allowIn=!1,u=fe($e),mt.allowIn=h,se("in"))gt||Z(nt.InvalidLHSInForIn),W(),we(u),s=u,o=Ge(),u=null;else if(oe("of"))gt||Z(nt.InvalidLHSInForLoop),W(),we(u),s=u,o=$e(),u=null,t=!1;else{if(ae(",")){for(n=[u];ae(",");)W(),n.push(ce($e));u=new $(i).finishSequenceExpression(n)}ne(";")}return"undefined"==typeof s&&(ae(";")||(r=Ge()),ne(";"),ae(")")||(a=Ge())),ne(")"),f=mt.inIteration,mt.inIteration=!0,c=ce(wu),mt.inIteration=f,"undefined"==typeof s?e.finishForStatement(u,r,a,c):t?e.finishForInStatement(s,o,c):e.finishForOfStatement(s,o,c)}function Fu(e){
var u,t=null;return re("continue"),59===rt.charCodeAt(pt)?(W(),mt.inIteration||Q(nt.IllegalContinue),e.finishContinueStatement(null)):Dt?(mt.inIteration||Q(nt.IllegalContinue),e.finishContinueStatement(null)):(dt.type===Qu.Identifier&&(t=Ze(),u="$"+t.name,Object.prototype.hasOwnProperty.call(mt.labelSet,u)||Q(nt.UnknownLabel,t.name)),De(),null!==t||mt.inIteration||Q(nt.IllegalContinue),e.finishContinueStatement(t))}function Au(e){var u,t=null;return re("break"),59===rt.charCodeAt(ct)?(W(),mt.inIteration||mt.inSwitch||Q(nt.IllegalBreak),e.finishBreakStatement(null)):(Dt?mt.inIteration||mt.inSwitch||Q(nt.IllegalBreak):dt.type===Qu.Identifier&&(t=Ze(),u="$"+t.name,Object.prototype.hasOwnProperty.call(mt.labelSet,u)||Q(nt.UnknownLabel,t.name)),De(),null!==t||mt.inIteration||mt.inSwitch||Q(nt.IllegalBreak),e.finishBreakStatement(t))}function Eu(e){var u=null;return re("return"),mt.inFunctionBody||Z(nt.IllegalReturn),32===rt.charCodeAt(ct)&&l(rt.charCodeAt(ct+1))?(u=Ge(),De(),e.finishReturnStatement(u)):Dt?e.finishReturnStatement(null):(ae(";")||ae("}")||dt.type===Qu.EOF||(u=Ge()),De(),e.finishReturnStatement(u))}function du(e){var u,t;return at&&Z(nt.StrictModeWith),re("with"),ne("("),u=Ge(),ne(")"),t=wu(),e.finishWithStatement(u,t)}function mu(){var e,u,t=[],n=new _;for(se("default")?(W(),e=null):(re("case"),e=Ge()),ne(":");Et>pt&&!(ae("}")||se("default")||se("case"));)u=Xe(),t.push(u);return n.finishSwitchCase(e,t)}function Bu(e){var u,t,n,i,r;if(re("switch"),ne("("),u=Ge(),ne(")"),ne("{"),t=[],ae("}"))return W(),e.finishSwitchStatement(u,t);for(i=mt.inSwitch,mt.inSwitch=!0,r=!1;Et>pt&&!ae("}");)n=mu(),null===n.test&&(r&&Q(nt.MultipleDefaultsInSwitch),r=!0),t.push(n);return mt.inSwitch=i,ne("}"),e.finishSwitchStatement(u,t)}function yu(e){var u;return re("throw"),Dt&&Q(nt.NewlineAfterThrow),u=Ge(),De(),e.finishThrowStatement(u)}function gu(){var e,u,t,n,i=[],r={},a=new _;for(re("catch"),ne("("),ae(")")&&ue(dt),e=Fe(i),t=0;t<i.length;t++)u="$"+i[t].value,Object.prototype.hasOwnProperty.call(r,u)&&Z(nt.DuplicateBinding,i[t].value),r[u]=!0;return at&&h(e.name)&&Z(nt.StrictCatchVariable),ne(")"),n=Qe(),a.finishCatchClause(e,n)}function Su(e){var u,t=null,n=null;return re("try"),u=Qe(),se("catch")&&(t=gu()),se("finally")&&(W(),n=Qe()),t||n||Q(nt.NoCatchOrFinally),e.finishTryStatement(u,t,n)}function vu(e){return re("debugger"),De(),e.finishDebuggerStatement()}function wu(){var e,u,t,n,i=dt.type;if(i===Qu.EOF&&ue(dt),i===Qu.Punctuator&&"{"===dt.value)return Qe();if(gt=yt=!0,n=new _,i===Qu.Punctuator)switch(dt.value){case";":return Du(n);case"(":return cu(n)}else if(i===Qu.Keyword)switch(dt.value){case"break":return Au(n);case"continue":return Fu(n);case"debugger":return vu(n);case"do":return hu(n);case"for":return Cu(n);case"function":return Pu(n);case"if":return fu(n);case"return":return Eu(n);case"switch":return Bu(n);case"throw":return yu(n);case"try":return Su(n);case"var":return tu(n);case"while":return pu(n);case"with":return du(n)}return e=Ge(),e.type===ut.Identifier&&ae(":")?(W(),t="$"+e.name,Object.prototype.hasOwnProperty.call(mt.labelSet,t)&&Q(nt.Redeclaration,"Label",e.name),mt.labelSet[t]=!0,u=wu(),delete mt.labelSet[t],n.finishLabeledStatement(e,u)):(De(),n.finishExpressionStatement(e))}function xu(){var e,u,t,n,i,r,a,s,o=[],l=new _;for(ne("{");Et>pt&&dt.type===Qu.StringLiteral&&(u=dt,e=Xe(),o.push(e),e.expression.type===ut.Literal);)t=rt.slice(u.start+1,u.end-1),"use strict"===t?(at=!0,n&&te(n,nt.StrictOctalLiteral)):!n&&u.octal&&(n=u);for(i=mt.labelSet,r=mt.inIteration,a=mt.inSwitch,s=mt.inFunctionBody,mt.labelSet={},mt.inIteration=!1,mt.inSwitch=!1,mt.inFunctionBody=!0;Et>pt&&!ae("}");)o.push(Xe());return ne("}"),mt.labelSet=i,mt.inIteration=r,mt.inSwitch=a,mt.inFunctionBody=s,l.finishBlockStatement(o)}function bu(e,u,t){var n="$"+t;at?(h(t)&&(e.stricted=u,e.message=nt.StrictParamName),Object.prototype.hasOwnProperty.call(e.paramSet,n)&&(e.stricted=u,e.message=nt.StrictParamDupe)):e.firstRestricted||(h(t)?(e.firstRestricted=u,e.message=nt.StrictParamName):f(t)?(e.firstRestricted=u,e.message=nt.StrictReservedWord):Object.prototype.hasOwnProperty.call(e.paramSet,n)&&(e.stricted=u,e.message=nt.StrictParamDupe)),e.paramSet[n]=!0}function ku(e){var u,t,n,i,r=[];if(u=dt,"..."===u.value)return t=lu(r),bu(e,t.argument,t.argument.name),e.params.push(t),e.defaults.push(null),!1;for(t=Ae(r),n=0;n<r.length;n++)bu(e,r[n],r[n].value);return t.type===ut.AssignmentPattern&&(i=t.right,t=t.left,++e.defaultCount),e.params.push(t),e.defaults.push(i),!ae(")")}function Iu(e){var u;if(u={params:[],defaultCount:0,defaults:[],firstRestricted:e},ne("("),!ae(")"))for(u.paramSet={};Et>pt&&ku(u);)ne(",");return ne(")"),0===u.defaultCount&&(u.defaults=[]),{params:u.params,defaults:u.defaults,stricted:u.stricted,firstRestricted:u.firstRestricted,message:u.message}}function Pu(e,u){var t,n,i,r,a,s,o,l,D,c=null,p=[],C=[];return D=mt.allowYield,re("function"),l=ae("*"),l&&W(),u&&ae("(")||(n=dt,c=Ze(),at?h(n.value)&&te(n,nt.StrictFunctionName):h(n.value)?(a=n,s=nt.StrictFunctionName):f(n.value)&&(a=n,s=nt.StrictReservedWord)),mt.allowYield=!l,r=Iu(a),p=r.params,C=r.defaults,i=r.stricted,a=r.firstRestricted,r.message&&(s=r.message),o=at,t=xu(),at&&a&&ue(a,s),at&&i&&te(i,s),at=o,mt.allowYield=D,e.finishFunctionDeclaration(c,p,C,t,l)}function Lu(){var e,u,t,n,i,r,a,s,o,l=null,D=[],c=[],p=new _;return o=mt.allowYield,re("function"),s=ae("*"),s&&W(),mt.allowYield=!s,ae("(")||(e=dt,l=at||s||!se("yield")?Ze():Le(),at?h(e.value)&&te(e,nt.StrictFunctionName):h(e.value)?(t=e,n=nt.StrictFunctionName):f(e.value)&&(t=e,n=nt.StrictReservedWord)),i=Iu(t),D=i.params,c=i.defaults,u=i.stricted,t=i.firstRestricted,i.message&&(n=i.message),a=at,r=xu(),at&&t&&ue(t,n),at&&u&&te(u,n),at=a,mt.allowYield=o,p.finishFunctionExpression(l,D,c,r,s)}function Tu(){var e,u,t,n,i,r,a,s=!1;for(e=new _,ne("{"),n=[];!ae("}");)ae(";")?W():(i=new _,u=dt,t=!1,r=ae("["),ae("*")?W():(a=Be(),"static"===a.name&&(ye()||ae("*"))&&(u=dt,t=!0,r=ae("["),ae("*")?W():a=Be())),i=ge(u,a,r,i),i?(i["static"]=t,"init"===i.kind&&(i.kind="method"),t?i.computed||"prototype"!==(i.key.name||i.key.value.toString())||ue(u,nt.StaticPrototype):i.computed||"constructor"!==(i.key.name||i.key.value.toString())||(("method"!==i.kind||!i.method||i.value.generator)&&ue(u,nt.ConstructorSpecialMethod),s?ue(u,nt.DuplicateConstructor):s=!0,i.kind="constructor"),i.type=ut.MethodDefinition,delete i.method,delete i.shorthand,n.push(i)):ue(dt));return W(),e.finishClassBody(n)}function Nu(e){var u,t=null,n=null,i=new _,r=at;return at=!0,re("class"),e&&dt.type!==Qu.Identifier||(t=Ze()),se("extends")&&(W(),n=ce(Re)),u=Tu(),at=r,i.finishClassDeclaration(t,n,u)}function Ou(){var e,u=null,t=null,n=new _,i=at;return at=!0,re("class"),dt.type===Qu.Identifier&&(u=Ze()),se("extends")&&(W(),t=ce(Re)),e=Tu(),at=i,n.finishClassExpression(u,t,e)}function Ru(){var e=new _;return dt.type!==Qu.StringLiteral&&Q(nt.InvalidModuleSpecifier),e.finishLiteral(W())}function Uu(){var e,u,t,n=new _;return se("default")?(t=new _,W(),u=t.finishIdentifier("default")):u=Ze(),oe("as")&&(W(),e=Le()),n.finishExportSpecifier(u,e)}function Yu(e){var u,t=null,n=null,i=[];if(dt.type===Qu.Keyword)switch(dt.value){case"let":case"const":return t=ou({inFor:!1}),e.finishExportNamedDeclaration(t,i,null);case"var":case"class":case"function":return t=Xe(),e.finishExportNamedDeclaration(t,i,null)}for(ne("{");!ae("}")&&(u=u||se("default"),i.push(Uu()),ae("}")||(ne(","),!ae("}"))););return ne("}"),oe("from")?(W(),n=Ru(),De()):u?Q(dt.value?nt.UnexpectedToken:nt.MissingFromClause,dt.value):De(),e.finishExportNamedDeclaration(t,i,n)}function Mu(e){var u=null,t=null;return re("default"),se("function")?(u=Pu(new _,!0),e.finishExportDefaultDeclaration(u)):se("class")?(u=Nu(!0),e.finishExportDefaultDeclaration(u)):(oe("from")&&Q(nt.UnexpectedToken,dt.value),t=ae("{")?ve():ae("[")?Ee():$e(),De(),e.finishExportDefaultDeclaration(t))}function ju(e){var u;return ne("*"),oe("from")||Q(dt.value?nt.UnexpectedToken:nt.MissingFromClause,dt.value),W(),u=Ru(),De(),e.finishExportAllDeclaration(u)}function Vu(){var e=new _;return mt.inFunctionBody&&Q(nt.IllegalExportDeclaration),re("export"),se("default")?Mu(e):ae("*")?ju(e):Yu(e)}function Wu(){var e,u,t=new _;return u=Le(),oe("as")&&(W(),e=Ze()),t.finishImportSpecifier(e,u)}function Hu(){var e=[];for(ne("{");!ae("}")&&(e.push(Wu()),ae("}")||(ne(","),!ae("}"))););return ne("}"),e}function Ku(){var e,u=new _;return e=Le(),u.finishImportDefaultSpecifier(e)}function qu(){var e,u=new _;return ne("*"),oe("as")||Q(nt.NoAsAfterImportNamespace),W(),e=Le(),u.finishImportNamespaceSpecifier(e)}function zu(){var e,u=[],t=new _;return mt.inFunctionBody&&Q(nt.IllegalImportDeclaration),re("import"),dt.type===Qu.StringLiteral?e=Ru():(ae("{")?u=u.concat(Hu()):ae("*")?u.push(qu()):Y(dt)&&!se("default")?(u.push(Ku()),ae(",")&&(W(),ae("*")?u.push(qu()):ae("{")?u=u.concat(Hu()):ue(dt))):ue(W()),oe("from")||Q(dt.value?nt.UnexpectedToken:nt.MissingFromClause,dt.value),W(),e=Ru()),De(),t.finishImportDeclaration(u,e)}function _u(){for(var e,u,t,n,i=[];Et>pt&&(u=dt,u.type===Qu.StringLiteral)&&(e=Xe(),i.push(e),e.expression.type===ut.Literal);)t=rt.slice(u.start+1,u.end-1),"use strict"===t?(at=!0,n&&te(n,nt.StrictOctalLiteral)):!n&&u.octal&&(n=u);for(;Et>pt&&(e=Xe(),"undefined"!=typeof e);)i.push(e);return i}function $u(){var e,u;return H(),u=new _,e=_u(),u.finishProgram(e,mt.sourceType)}function Gu(){var e,u,t,n=[];for(e=0;e<Bt.tokens.length;++e)u=Bt.tokens[e],t={type:u.type,value:u.value},u.regex&&(t.regex={pattern:u.regex.pattern,flags:u.regex.flags}),Bt.range&&(t.range=u.range),Bt.loc&&(t.loc=u.loc),n.push(t);Bt.tokens=n}function Xu(e,u,t){var n,i;n=String,"string"==typeof e||e instanceof String||(e=n(e)),rt=e,st=0,ot=rt.length>0?1:0,lt=0,pt=st,Ct=ot,Ft=lt,Et=rt.length,dt=null,mt={allowIn:!0,allowYield:!0,labelSet:{},inFunctionBody:!1,inIteration:!1,inSwitch:!1,lastCommentStart:-1,curlyStack:[]},Bt={},u=u||{},u.tokens=!0,Bt.tokens=[],Bt.tokenValues=[],Bt.tokenize=!0,Bt.delegate=t,Bt.openParenToken=-1,Bt.openCurlyToken=-1,Bt.range="boolean"==typeof u.range&&u.range,Bt.loc="boolean"==typeof u.loc&&u.loc,"boolean"==typeof u.comment&&u.comment&&(Bt.comments=[]),"boolean"==typeof u.tolerant&&u.tolerant&&(Bt.errors=[]);try{if(H(),dt.type===Qu.EOF)return Bt.tokens;for(W();dt.type!==Qu.EOF;)try{W()}catch(r){if(Bt.errors){G(r);break}throw r}i=Bt.tokens,"undefined"!=typeof Bt.errors&&(i.errors=Bt.errors)}catch(a){throw a}finally{Bt={}}return i}function Ju(e,u){var t,n;n=String,"string"==typeof e||e instanceof String||(e=n(e)),rt=e,st=0,ot=rt.length>0?1:0,lt=0,pt=st,Ct=ot,Ft=lt,Et=rt.length,dt=null,mt={allowIn:!0,allowYield:!0,labelSet:{},inFunctionBody:!1,inIteration:!1,inSwitch:!1,lastCommentStart:-1,curlyStack:[],sourceType:"script"},at=!1,Bt={},"undefined"!=typeof u&&(Bt.range="boolean"==typeof u.range&&u.range,Bt.loc="boolean"==typeof u.loc&&u.loc,Bt.attachComment="boolean"==typeof u.attachComment&&u.attachComment,Bt.loc&&null!==u.source&&void 0!==u.source&&(Bt.source=n(u.source)),"boolean"==typeof u.tokens&&u.tokens&&(Bt.tokens=[]),"boolean"==typeof u.comment&&u.comment&&(Bt.comments=[]),"boolean"==typeof u.tolerant&&u.tolerant&&(Bt.errors=[]),Bt.attachComment&&(Bt.range=!0,Bt.comments=[],Bt.bottomRightStack=[],Bt.trailingComments=[],Bt.leadingComments=[]),"module"===u.sourceType&&(mt.sourceType=u.sourceType,at=!0));try{t=$u(),"undefined"!=typeof Bt.comments&&(t.comments=Bt.comments),"undefined"!=typeof Bt.tokens&&(Gu(),t.tokens=Bt.tokens),"undefined"!=typeof Bt.errors&&(t.errors=Bt.errors)}catch(i){throw i}finally{Bt={}}return t}var Qu,Zu,et,ut,tt,nt,it,rt,at,st,ot,lt,Dt,ct,ft,ht,pt,Ct,Ft,At,Et,dt,mt,Bt,yt,gt,St;Qu={BooleanLiteral:1,EOF:2,Identifier:3,Keyword:4,NullLiteral:5,NumericLiteral:6,Punctuator:7,StringLiteral:8,RegularExpression:9,Template:10},Zu={},Zu[Qu.BooleanLiteral]="Boolean",Zu[Qu.EOF]="<end>",Zu[Qu.Identifier]="Identifier",Zu[Qu.Keyword]="Keyword",Zu[Qu.NullLiteral]="Null",Zu[Qu.NumericLiteral]="Numeric",Zu[Qu.Punctuator]="Punctuator",Zu[Qu.StringLiteral]="String",Zu[Qu.RegularExpression]="RegularExpression",Zu[Qu.Template]="Template",et=["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="],ut={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForOfStatement:"ForOfStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchCase:"SwitchCase",SwitchStatement:"SwitchStatement",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},tt={ArrowParameterPlaceHolder:"ArrowParameterPlaceHolder"},nt={UnexpectedToken:"Unexpected token %0",UnexpectedNumber:"Unexpected number",UnexpectedString:"Unexpected string",UnexpectedIdentifier:"Unexpected identifier",UnexpectedReserved:"Unexpected reserved word",UnexpectedTemplate:"Unexpected quasi %0",UnexpectedEOS:"Unexpected end of input",NewlineAfterThrow:"Illegal newline after throw",InvalidRegExp:"Invalid regular expression",UnterminatedRegExp:"Invalid regular expression: missing /",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",InvalidLHSInForLoop:"Invalid left-hand side in for-loop",MultipleDefaultsInSwitch:"More than one default clause in switch statement",NoCatchOrFinally:"Missing catch or finally after try",UnknownLabel:"Undefined label '%0'",Redeclaration:"%0 '%1' has already been declared",IllegalContinue:"Illegal continue statement",IllegalBreak:"Illegal break statement",IllegalReturn:"Illegal return statement",StrictModeWith:"Strict mode code may not include a with statement",StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",StrictVarName:"Variable name may not be eval or arguments in strict mode",StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",StrictParamDupe:"Strict mode function may not have duplicate parameter names",StrictFunctionName:"Function name may not be eval or arguments in strict mode",StrictOctalLiteral:"Octal literals are not allowed in strict mode.",StrictDelete:"Delete of an unqualified identifier in strict mode.",StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",StrictReservedWord:"Use of future reserved word in strict mode",TemplateOctalLiteral:"Octal literals are not allowed in template strings.",ParameterAfterRestParameter:"Rest parameter must be last formal parameter",DefaultRestParameter:"Unexpected token =",ObjectPatternAsRestParameter:"Unexpected token {",DuplicateProtoProperty:"Duplicate __proto__ fields are not allowed in object literals",ConstructorSpecialMethod:"Class constructor may not be an accessor",DuplicateConstructor:"A class may only have one constructor",StaticPrototype:"Classes may not have static property named prototype",MissingFromClause:"Unexpected token",NoAsAfterImportNamespace:"Unexpected token",InvalidModuleSpecifier:"Unexpected token",IllegalImportDeclaration:"Unexpected token",IllegalExportDeclaration:"Unexpected token",DuplicateBinding:"Duplicate binding %0"},it={NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},$.prototype=_.prototype={processComment:function(){var e,u,t,n,i,r,a=Bt.bottomRightStack,s=a[a.length-1];if(!(this.type===ut.Program&&this.body.length>0)){if(this.type===ut.BlockStatement&&0===this.body.length){for(u=[],i=Bt.leadingComments.length-1;i>=0;--i)r=Bt.leadingComments[i],this.range[1]>=r.range[1]&&(u.unshift(r),Bt.leadingComments.splice(i,1),Bt.trailingComments.splice(i,1));if(u.length)return void(this.innerComments=u)}if(Bt.trailingComments.length>0){for(n=[],i=Bt.trailingComments.length-1;i>=0;--i)r=Bt.trailingComments[i],
r.range[0]>=this.range[1]&&(n.unshift(r),Bt.trailingComments.splice(i,1));Bt.trailingComments=[]}else s&&s.trailingComments&&s.trailingComments[0].range[0]>=this.range[1]&&(n=s.trailingComments,delete s.trailingComments);for(;s&&s.range[0]>=this.range[0];)e=a.pop(),s=a[a.length-1];if(e){if(e.leadingComments){for(t=[],i=e.leadingComments.length-1;i>=0;--i)r=e.leadingComments[i],r.range[1]<=this.range[0]&&(t.unshift(r),e.leadingComments.splice(i,1));e.leadingComments.length||(e.leadingComments=void 0)}}else if(Bt.leadingComments.length>0)for(t=[],i=Bt.leadingComments.length-1;i>=0;--i)r=Bt.leadingComments[i],r.range[1]<=this.range[0]&&(t.unshift(r),Bt.leadingComments.splice(i,1));t&&t.length>0&&(this.leadingComments=t),n&&n.length>0&&(this.trailingComments=n),a.push(this)}},finish:function(){Bt.range&&(this.range[1]=ct),Bt.loc&&(this.loc.end={line:ft,column:ct-ht},Bt.source&&(this.loc.source=Bt.source)),Bt.attachComment&&this.processComment()},finishArrayExpression:function(e){return this.type=ut.ArrayExpression,this.elements=e,this.finish(),this},finishArrayPattern:function(e){return this.type=ut.ArrayPattern,this.elements=e,this.finish(),this},finishArrowFunctionExpression:function(e,u,t,n){return this.type=ut.ArrowFunctionExpression,this.id=null,this.params=e,this.defaults=u,this.body=t,this.generator=!1,this.expression=n,this.finish(),this},finishAssignmentExpression:function(e,u,t){return this.type=ut.AssignmentExpression,this.operator=e,this.left=u,this.right=t,this.finish(),this},finishAssignmentPattern:function(e,u){return this.type=ut.AssignmentPattern,this.left=e,this.right=u,this.finish(),this},finishBinaryExpression:function(e,u,t){return this.type="||"===e||"&&"===e?ut.LogicalExpression:ut.BinaryExpression,this.operator=e,this.left=u,this.right=t,this.finish(),this},finishBlockStatement:function(e){return this.type=ut.BlockStatement,this.body=e,this.finish(),this},finishBreakStatement:function(e){return this.type=ut.BreakStatement,this.label=e,this.finish(),this},finishCallExpression:function(e,u){return this.type=ut.CallExpression,this.callee=e,this.arguments=u,this.finish(),this},finishCatchClause:function(e,u){return this.type=ut.CatchClause,this.param=e,this.body=u,this.finish(),this},finishClassBody:function(e){return this.type=ut.ClassBody,this.body=e,this.finish(),this},finishClassDeclaration:function(e,u,t){return this.type=ut.ClassDeclaration,this.id=e,this.superClass=u,this.body=t,this.finish(),this},finishClassExpression:function(e,u,t){return this.type=ut.ClassExpression,this.id=e,this.superClass=u,this.body=t,this.finish(),this},finishConditionalExpression:function(e,u,t){return this.type=ut.ConditionalExpression,this.test=e,this.consequent=u,this.alternate=t,this.finish(),this},finishContinueStatement:function(e){return this.type=ut.ContinueStatement,this.label=e,this.finish(),this},finishDebuggerStatement:function(){return this.type=ut.DebuggerStatement,this.finish(),this},finishDoWhileStatement:function(e,u){return this.type=ut.DoWhileStatement,this.body=e,this.test=u,this.finish(),this},finishEmptyStatement:function(){return this.type=ut.EmptyStatement,this.finish(),this},finishExpressionStatement:function(e){return this.type=ut.ExpressionStatement,this.expression=e,this.finish(),this},finishForStatement:function(e,u,t,n){return this.type=ut.ForStatement,this.init=e,this.test=u,this.update=t,this.body=n,this.finish(),this},finishForOfStatement:function(e,u,t){return this.type=ut.ForOfStatement,this.left=e,this.right=u,this.body=t,this.finish(),this},finishForInStatement:function(e,u,t){return this.type=ut.ForInStatement,this.left=e,this.right=u,this.body=t,this.each=!1,this.finish(),this},finishFunctionDeclaration:function(e,u,t,n,i){return this.type=ut.FunctionDeclaration,this.id=e,this.params=u,this.defaults=t,this.body=n,this.generator=i,this.expression=!1,this.finish(),this},finishFunctionExpression:function(e,u,t,n,i){return this.type=ut.FunctionExpression,this.id=e,this.params=u,this.defaults=t,this.body=n,this.generator=i,this.expression=!1,this.finish(),this},finishIdentifier:function(e){return this.type=ut.Identifier,this.name=e,this.finish(),this},finishIfStatement:function(e,u,t){return this.type=ut.IfStatement,this.test=e,this.consequent=u,this.alternate=t,this.finish(),this},finishLabeledStatement:function(e,u){return this.type=ut.LabeledStatement,this.label=e,this.body=u,this.finish(),this},finishLiteral:function(e){return this.type=ut.Literal,this.value=e.value,this.raw=rt.slice(e.start,e.end),e.regex&&(this.regex=e.regex),this.finish(),this},finishMemberExpression:function(e,u,t){return this.type=ut.MemberExpression,this.computed="["===e,this.object=u,this.property=t,this.finish(),this},finishMetaProperty:function(e,u){return this.type=ut.MetaProperty,this.meta=e,this.property=u,this.finish(),this},finishNewExpression:function(e,u){return this.type=ut.NewExpression,this.callee=e,this.arguments=u,this.finish(),this},finishObjectExpression:function(e){return this.type=ut.ObjectExpression,this.properties=e,this.finish(),this},finishObjectPattern:function(e){return this.type=ut.ObjectPattern,this.properties=e,this.finish(),this},finishPostfixExpression:function(e,u){return this.type=ut.UpdateExpression,this.operator=e,this.argument=u,this.prefix=!1,this.finish(),this},finishProgram:function(e,u){return this.type=ut.Program,this.body=e,this.sourceType=u,this.finish(),this},finishProperty:function(e,u,t,n,i,r){return this.type=ut.Property,this.key=u,this.computed=t,this.value=n,this.kind=e,this.method=i,this.shorthand=r,this.finish(),this},finishRestElement:function(e){return this.type=ut.RestElement,this.argument=e,this.finish(),this},finishReturnStatement:function(e){return this.type=ut.ReturnStatement,this.argument=e,this.finish(),this},finishSequenceExpression:function(e){return this.type=ut.SequenceExpression,this.expressions=e,this.finish(),this},finishSpreadElement:function(e){return this.type=ut.SpreadElement,this.argument=e,this.finish(),this},finishSwitchCase:function(e,u){return this.type=ut.SwitchCase,this.test=e,this.consequent=u,this.finish(),this},finishSuper:function(){return this.type=ut.Super,this.finish(),this},finishSwitchStatement:function(e,u){return this.type=ut.SwitchStatement,this.discriminant=e,this.cases=u,this.finish(),this},finishTaggedTemplateExpression:function(e,u){return this.type=ut.TaggedTemplateExpression,this.tag=e,this.quasi=u,this.finish(),this},finishTemplateElement:function(e,u){return this.type=ut.TemplateElement,this.value=e,this.tail=u,this.finish(),this},finishTemplateLiteral:function(e,u){return this.type=ut.TemplateLiteral,this.quasis=e,this.expressions=u,this.finish(),this},finishThisExpression:function(){return this.type=ut.ThisExpression,this.finish(),this},finishThrowStatement:function(e){return this.type=ut.ThrowStatement,this.argument=e,this.finish(),this},finishTryStatement:function(e,u,t){return this.type=ut.TryStatement,this.block=e,this.guardedHandlers=[],this.handlers=u?[u]:[],this.handler=u,this.finalizer=t,this.finish(),this},finishUnaryExpression:function(e,u){return this.type="++"===e||"--"===e?ut.UpdateExpression:ut.UnaryExpression,this.operator=e,this.argument=u,this.prefix=!0,this.finish(),this},finishVariableDeclaration:function(e){return this.type=ut.VariableDeclaration,this.declarations=e,this.kind="var",this.finish(),this},finishLexicalDeclaration:function(e,u){return this.type=ut.VariableDeclaration,this.declarations=e,this.kind=u,this.finish(),this},finishVariableDeclarator:function(e,u){return this.type=ut.VariableDeclarator,this.id=e,this.init=u,this.finish(),this},finishWhileStatement:function(e,u){return this.type=ut.WhileStatement,this.test=e,this.body=u,this.finish(),this},finishWithStatement:function(e,u){return this.type=ut.WithStatement,this.object=e,this.body=u,this.finish(),this},finishExportSpecifier:function(e,u){return this.type=ut.ExportSpecifier,this.exported=u||e,this.local=e,this.finish(),this},finishImportDefaultSpecifier:function(e){return this.type=ut.ImportDefaultSpecifier,this.local=e,this.finish(),this},finishImportNamespaceSpecifier:function(e){return this.type=ut.ImportNamespaceSpecifier,this.local=e,this.finish(),this},finishExportNamedDeclaration:function(e,u,t){return this.type=ut.ExportNamedDeclaration,this.declaration=e,this.specifiers=u,this.source=t,this.finish(),this},finishExportDefaultDeclaration:function(e){return this.type=ut.ExportDefaultDeclaration,this.declaration=e,this.finish(),this},finishExportAllDeclaration:function(e){return this.type=ut.ExportAllDeclaration,this.source=e,this.finish(),this},finishImportSpecifier:function(e,u){return this.type=ut.ImportSpecifier,this.local=e||u,this.imported=u,this.finish(),this},finishImportDeclaration:function(e,u){return this.type=ut.ImportDeclaration,this.specifiers=e,this.source=u,this.finish(),this},finishYieldExpression:function(e,u){return this.type=ut.YieldExpression,this.argument=e,this.delegate=u,this.finish(),this}},e.version="2.7.2",e.tokenize=Xu,e.parse=Ju,e.Syntax=function(){var e,u={};"function"==typeof Object.create&&(u=Object.create(null));for(e in ut)ut.hasOwnProperty(e)&&(u[e]=ut[e]);return"function"==typeof Object.freeze&&Object.freeze(u),u}()})});
$rmod.main("/char-props@0.1.5","lib/charProps");
$rmod.dep("/$/marko","char-props","0.1.5");
$rmod.def("/char-props@0.1.5/lib/charProps",function(n,t,r,i,e){function o(n){this.input=n;for(var t,r,i=n.split("\n"),e=0,o=i.length,u=0,a={length:o};o>e;e++)t=i[e],r=u+t.length+1,a[e]={start:u,end:r},u=r;this.lineMap=a}function u(n){var t=new o(n);return t}o.prototype={lineAt:function(n,t){t=t||{};for(var r,i=this.lineMap,e=t.minLine||0,o=i.length;o>e&&(r=i[e],!(n<r.end));e++);return e},columnAt:function(n){var t,r=this.input,i=n-1;if(0>n)return 0;for(;i>=0&&(t=r.charAt(i),"\n"!==t);i--);var e=n-i-1;return e},indexAt:function(n){var t=n.line,r=n.column,i=this.lineMap,e=i[t],o=e.start,u=o+r;return u},charAt:function(n){var t=this.indexAt(n),r=this.input,i=r.charAt(t);return i}},u.Indexer=o,r.exports=u});
$rmod.def("/raptor-util@1.0.10/forEachEntry",function(r,o,n,t,a){n.exports=function(r,o,n){for(var t in r)r.hasOwnProperty(t)&&o.call(n,t,r[t])}});
$rmod.main("/property-handlers@1.0.1","lib/index");
$rmod.dep("/$/marko","property-handlers","1.0.1");
$rmod.def("/property-handlers@1.0.1/lib/index",function(r,e,o,n,t){function i(r){return r.replace(/-([a-z])/g,function(r,e){return e.toUpperCase()})}o.exports=function(r,e,o){function n(r,e){if(e){if(e.__propertyHandlers)throw e;r+=". Cause: "+(e.stack||e)}t&&(r="Error while handling properties for "+t+": "+r);var o=new Error(r);throw o.__propertyHandlers=!0,o}var t;null!=o&&(t="string"==typeof o?o:o.path),r||n('"config" argument is required'),"object"!=typeof r&&n("object expected");for(var p in r)if(r.hasOwnProperty(p)){var a=r[p],l=i(p),c=e[l],f=!1;c||(c=e["*"],f=!0),c||n('Invalid option of "'+l+'". Allowed: '+Object.keys(e).join(", "));try{f?c.call(e,p,a)===!1&&n("Invalid option: "+p):c.call(e,a)}catch(d){n('Error while applying option of "'+p+'"',d)}}if(e._end)try{e._end()}catch(d){n("Error after applying properties",d)}}});
$rmod.dep("/$/marko","try-require","1.2.1");
$rmod.main("/raptor-util@1.0.10","raptor-util");
$rmod.def("/raptor-util@1.0.10/tryRequire",function(r,t,e,o,i){e.exports=function(r,t){var e;try{e=t.resolve(r)}catch(o){}return e?t(e):void 0}});
$rmod.def("/raptor-util@1.0.10/makeClass",function(t,e,r,o,n){var i=t("./inherit");r.exports=function(t){var e;if("function"==typeof t)e=t.$super;else{var r=t;t=r.$init||function(){},e=r.$super,delete r.$super,delete r.$init,t.prototype=r}e&&i(t,e);var o=t.prototype;return o.constructor=t,t}});
$rmod.def("/raptor-util@1.0.10/makeEnum",function(n,t,r,o,e){var a=n("./makeClass"),i=n("./extend"),u=n("./forEachEntry");r.exports=function(n,t){function r(n,r){var o=c++;return i(t[n]=new r,{ordinal:o,compareTo:function(n){return o-n.ordinal},name:n})}function o(){}t=t?a(t):function(){};var e=t.prototype,c=0;return Array.isArray(n)?n.forEach(function(n){r(n,t)}):n&&(o.prototype=e,u(n,function(n,e){t.apply(r(n,o),e||[])})),t.valueOf=function(n){return t[n]},e.toString==Object.prototype.toString&&(e.toString=function(){return this.name}),t}});
$rmod.def("/raptor-util@1.0.10/forEach",function(o,r,f,c,n){f.exports=function(o,r,f){null!=o&&(o.forEach?o:[o]).forEach(r,f)}});
$rmod.def("/raptor-util@1.0.10/attrs",function(r,t,a,n,o){var e=r("./attr");a.exports=function(r){var t="";for(var a in r)r.hasOwnProperty(a)&&(t+=e(a,r[a]));return t}});
$rmod.def("/raptor-util@1.0.10/toArray",function(r,t,l,n,i){var o=[].slice;l.exports=function(r){return null==r||Array.isArray(r)?r:"string"==typeof r?r.split(""):r.length?o.call(r,0):[r]}});
$rmod.def("/raptor-util@1.0.10/raptor-util",function(r,t,e,a,m){e.exports={tryRequire:r("./tryRequire"),inherit:r("./inherit"),makeClass:r("./makeClass"),makeEnum:r("./makeEnum"),extend:r("./extend"),forEachEntry:r("./forEachEntry"),forEach:r("./forEach"),createError:r("./createError"),arrayFromArguments:r("./arrayFromArguments"),escapeXml:r("./escapeXml"),escapeXmlAttr:r("./escapeXml").attr,attr:r("./attr"),attrs:r("./attrs"),isObjectEmpty:r("./isObjectEmpty"),toArray:r("./toArray")}});
$rmod.main("/raptor-regexp@1.0.1","lib/raptor-regexp");
$rmod.dep("/$/marko","raptor-regexp","1.0.1");
$rmod.def("/raptor-regexp@1.0.1/lib/raptor-regexp",function(e,r,n,p,t){var a={"*":".*?","?":".?"};n.exports={escape:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},simple:function(e){var r=this;return new RegExp("^"+e.replace(/[\*\?]|[^\*\?]*/g,function(e){return a[e]||r.escape(e)})+"$")}}});
$rmod.def("/marko@3.0.2/taglibs/core/marko",{"<assign>":{"code-generator":"./assign-tag"},"<else>":{"node-factory":"./else-tag"},"<else-if>":{"node-factory":"./else-if-tag"},"<for>":{"code-generator":"./for-tag"},"<if>":{"node-factory":"./if-tag"},"<include>":{"code-generator":"./include-tag"},"<include-text>":{"code-generator":"./include-text-tag"},"<invoke>":{"code-generator":"./invoke-tag"},"<macro>":{"code-generator":"./macro-tag"},"<macro-body>":{"code-generator":"./macro-body-tag"},"<pre>":{"preserve-whitespace":!0},"<script>":{"preserve-whitespace":!0,"@marko-init":"boolean","@*":{ignore:!0}},"<style>":{"preserve-whitespace":!0},"<textarea>":{"preserve-whitespace":!0},"<unless>":{"node-factory":"./unless-tag"},"<var>":{"node-factory":"./var-tag"},"<while>":{"code-generator":"./while-tag"},"<*>":{"@if":"argument","@else-if":"argument","@else":"argument","@for":"argument","@while":"argument",transformer:{path:"./core-transformer",priority:0}}});
$rmod.def("/marko@3.0.2/taglibs/layout/marko",{"<layout-use>":{"@__template":"template","@__data":"template","@*":{"remove-dashes":!0,type:"string"},renderer:"./use-tag","body-function":"getContent(__layoutHelper)",transformer:"./use-tag-transformer.js"},"<layout-put>":{"@into":"string","@value":"string",renderer:"./put-tag","import-var":{layout:"__layoutHelper"}},"<layout-placeholder>":{"@name":"string",renderer:"./placeholder-tag","import-var":{content:"data.layoutContent"}}});
$rmod.def("/marko@3.0.2/taglibs/html/marko",{"taglib-id":"marko-html","<html-comment>":{renderer:"./html-comment-tag.js"}});
$rmod.def("/marko@3.0.2/taglibs/async/marko",{"<async-fragment>":{renderer:"./async-fragment-tag","@data-provider":"expression","@arg":{type:"expression","preserve-name":!0},"@arg-*":{pattern:!0,type:"string","preserve-name":!0},"@var":"identifier","@method":"string","@timeout":"integer","@timeout-message":"string","@error-message":"string","@placeholder":"string","@renderTimeout":"function","@renderError":"function","@renderPlaceholder":"function","@name":{type:"string",description:"Name of async fragment"},"@_name":"string","@client-reorder":{type:"boolean",description:"Use JavaScript on client to move async fragment into the proper place."},"@scope":{type:"expression",description:"The value of 'this' when invoking the data provider function (N/A with promises)"},"@show-after":{type:"string"},vars:[{"name-from-attribute":"var"}],transformer:"./async-fragment-tag-transformer"},"<async-fragments>":{renderer:"./async-fragments-tag"},"<async-fragment-placeholder>":{transformer:"./async-fragment-nested-tag-transformer"},"<async-fragment-timeout>":{transformer:"./async-fragment-nested-tag-transformer"},"<async-fragment-error>":{transformer:"./async-fragment-nested-tag-transformer"}});
$rmod.def("/marko@3.0.2/taglibs/cache/default-cache-manager",function(n,r,e,t,u){function a(){var n={};return{get:function(r,e,t){var u=n[r];if(void 0!==u)return t(null,u);var a=e.builder;a(function(e,u){return e?t(e):(void 0===u&&(u=null),n[r]=u,void t(null,u))})}}}var i={},o={getCache:function(n){return i[n]||(i[n]=a())}};e.exports=o});
$rmod.def("/marko@3.0.2/taglibs/cache/cached-fragment-tag-transformer",function(a,e,t,r,c){var n=a.resolve("./default-cache-manager");t.exports=function(a,e){if(!a.hasAttribute("cache-manager")){var t=e.getRequirePath(n),r=e.importModule("__defaultCacheManager",t);a.setAttributeValue("cache-manager",r)}}});
$rmod.def("/marko@3.0.2/taglibs/cache/cached-fragment-tag",function(e,r,c,n,a){"use strict";c.exports={render:function(e,r){var c=e.cacheKey;if(!c)throw new Error("cache-key is required for <cached-fragment>");var n=e.cacheManager,a=n.getCache(e.cacheName||"marko/cached-fragment"),t=r.beginAsync();a.get(c,{builder:function(c){var n=r.captureString(function(){e.renderBody&&e.renderBody(r)});c(null,n)}},function(e,r){return e?t.error(e):void t.end(r)})}}});
$rmod.def("/marko@3.0.2/taglibs/cache/marko",{"<cached-fragment>":{renderer:"./cached-fragment-tag","@cache-key":"string","@cache-name":"string","@cache-manager":"string",transformer:"./cached-fragment-tag-transformer.js"}});
$rmod.def("/marko-widgets@6.0.0/marko",{"<*>":{"@w-bind":{type:"custom","preserve-name":!0},"@w-scope":{type:"expression","preserve-name":!0},"@w-extend":{type:"custom","preserve-name":!0},"@w-config":{type:"expression","preserve-name":!0},"@w-for":{type:"custom","preserve-name":!0},"@w-id":{type:"string","preserve-name":!0},"@w-on*":{pattern:!0,type:"string","allow-expressions":!0,"preserve-name":!0,"set-flag":"hasWidgetEvents"},"@w-body":{type:"custom","preserve-name":!0},"@w-preserve":{type:"custom","preserve-name":!0},"@w-preserve-body":{type:"custom","preserve-name":!0},"@w-preserve-if":{type:"expression","preserve-name":!0},"@w-preserve-body-if":{type:"expression","preserve-name":!0},"@w-preserve-attrs":{type:"string","preserve-name":!0},transformer:"./taglib/widgets-transformer.js"},"<w-widget>":{renderer:"./taglib/widget-tag.js","@type":"object","@config":"object","@id":"string","@hasDomEvents":"number","@body":"string","var":"widget","import-var":{_cfg:"data.widgetConfig",_state:"data.widgetState",_props:"data.widgetProps",_body:"data.widgetBody"}},"<init-widgets>":{renderer:"./taglib/init-widgets-tag.js","@function-name":"string","@include-script-tag":"boolean","@immediate":"boolean"},"<w-preserve>":{renderer:"./taglib/preserve-tag.js","@id":"string","@if":"expression","@body-only":"expression"},"<widget-types>":{"code-generator":"./taglib/widget-types-tag.js","@*":"string"}});