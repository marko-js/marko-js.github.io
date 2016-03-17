$rmod.main("/marko@3.0.2/compiler","index");
$rmod.def("/marko@3.0.0/compiler/ast/ArrayContainer", function(require, exports, module, __filename, __dirname) { 'use strict';

var ok = require('assert'/*'assert'*/).ok;
var isArray = Array.isArray;
var Container = require('./Container');

class ArrayContainer extends Container {
    constructor(node, array) {
        super(node);
        this.items = array;
    }

    forEach(callback, thisObj) {
        var array = this.array.concat([]);
        for (var i=0; i<array.length; i++) {
            var item = array[i];
            if (item.container === this) {
                callback.call(thisObj, item, i);
            }
        }
    }

    replaceChild(newChild, oldChild) {
        ok(newChild, '"newChild" is required"');

        var array = this.array;
        var len = array.length;
        for (var i=0; i<len; i++) {
            var curChild = array[i];
            if (curChild === oldChild) {
                array[i] = newChild;
                oldChild.detach();
                newChild.container = this;
                return true;
            }
        }

        return false;
    }

    removeChild(child) {
        var childIndex = this.array.indexOf(child);
        if (childIndex !== -1) {
            this.array.splice(childIndex, 1);
            child.detach();
            return true;
        } else {
            return false;
        }
    }

    prependChild(newChild) {
        ok(newChild, '"newChild" is required"');
        this.array.unshift(newChild);
        newChild.container = this;
    }

    appendChild(newChild) {
        ok(newChild, '"newChild" is required"');
        newChild.detach();
        this.array.push(newChild);
        newChild.container = this;
    }

    insertChildBefore(newChild, referenceNode) {
        ok(newChild, '"newChild" is required"');
        ok(referenceNode, 'Invalid reference child');

        var array = this.array;
        var len = array.length;
        for (var i=0; i<len; i++) {
            var curChild = array[i];
            if (curChild === referenceNode) {
                array.splice(i, 0, newChild);
                newChild.container = this;
                return;
            }
        }

        throw new Error('Reference node not found');
    }

    insertChildAfter(newChild, referenceNode) {
        ok(newChild, '"newChild" is required"');
        ok(referenceNode, 'Invalid reference child');

        var array = this.array;
        var len = array.length;
        for (var i=0; i<len; i++) {
            var curChild = array[i];
            if (curChild === referenceNode) {
                array.splice(i+1, 0, newChild);
                newChild.container = this;
                return;
            }
        }

        throw new Error('Reference node not found');
    }

    moveChildrenTo(target) {
        ok(target.appendChild, 'Node does not support appendChild(node): ' + target);

        var array = this.array;
        var len = array.length;
        for (var i=0; i<len; i++) {
            var curChild = array[i];
            curChild.container = null; // Detach the child from this container
            target.appendChild(curChild);
        }

        this.array.length = 0; // Clear out this container
    }

    getPreviousSibling(node) {
        if (node.container !== this) {
            throw new Error('Node does not belong to container: ' + node);
        }
        var array = this.array;

        for (var i=0; i<array.length; i++) {
            var curNode = array[i];
            if (curNode.container !== this) {
                continue;
            }

            if (curNode === node) {
                return i-1 >= 0 ? array[i+1] : undefined;
            }
        }
    }

    getNextSibling(node) {
        if (node.container !== this) {
            throw new Error('Node does not belong to container: ' + node);
        }
        var array = this.array;

        for (var i=0; i<array.length; i++) {
            var curNode = array[i];
            if (curNode.container !== this) {
                continue;
            }

            if (curNode === node) {
                return i+1 < array.length ? array[i+1] : undefined;
            }
        }
    }

    forEachNextSibling(node, callback, thisObj) {
        if (node.container !== this) {
            throw new Error('Node does not belong to container: ' + node);
        }
        var array = this.array.concat([]);
        var found = false;

        for (var i=0; i<array.length; i++) {
            var curNode = array[i];
            if (curNode.container !== this) {
                continue;
            }
            if (found) {
                if (curNode.container === this) {
                    var keepGoing = callback.call(thisObj, curNode) !== false;
                    if (!keepGoing) {
                        return;
                    }
                }
            } else if (curNode === node) {
                found = true;
                continue;
            }
        }
    }

    get length() {
        return this.array.length;
    }

    get items() {
        return this.array;
    }

    set items(newItems) {
        if (newItems) {
            ok(isArray(newItems), 'Invalid array');

            for (let i=0; i<newItems.length; i++) {
                newItems[i].container = this;
            }
        }
        this.array = newItems || [];
    }
}

module.exports = ArrayContainer;
});
$rmod.def("/marko@3.0.0/compiler/ast/Node", function(require, exports, module, __filename, __dirname) { 'use strict';
var Container = require('./Container');
var ArrayContainer = require('./ArrayContainer');
var ok = require('assert'/*'assert'*/).ok;
var extend = require('/$/marko/$/raptor-util/extend'/*'raptor-util/extend'*/);
var inspect = require('util'/*'util'*/).inspect;
var EventEmitter = require('/$/marko/$/events'/*'events'*/).EventEmitter;

class Node {
    constructor(type) {
        this.type = type;
        this.statement = false;
        this.container = null;
        this.pos = null; // The character index of the node in the original source file
        this.tagDef = null; // The tag definition associated with this Node
        this._codeGeneratorFuncs = null;
        this._flags = {};
        this._transformersApplied = {};
        this._preserveWhitespace = null;
        this._events = null;
        this.data = {};
    }

    on(event, listener) {
        if (!this._events) {
            this._events = new EventEmitter();
        }

        this._events.on(event, listener);
    }

    emit(event, args) {
        if (this._events) {
            this._events.emit.apply(this._events, arguments);
        }
    }

    listenerCount(event) {
        if (this._events) {
            return this._events.listenerCount(event);
        } else {
            return 0;
        }
    }

    onBeforeGenerateCode(listener) {
        this.on('beforeGenerateCode', listener);
    }

    onAfterGenerateCode(listener) {
        this.on('afterGenerateCode', listener);
    }

    wrapWith(wrapperNode) {
        ok(this.container, 'Node does not belong to a container: ' + this);
        var replaced = this.container.replaceChild(wrapperNode, this);
        ok(replaced, 'Invalid state. Child does not belong to the container');
        wrapperNode.appendChild(this);
    }

    replaceWith(newNode) {
        ok(this.container, 'Node does not belong to a container: ' + this);
        var replaced = this.container.replaceChild(newNode, this);
        ok(replaced, 'Invalid state. Child does not belong to the container');
    }

    insertSiblingBefore(newNode) {
        ok(this.container, 'Node does not belong to a container: ' + this);
        this.container.insertChildBefore(newNode, this);
    }

    insertSiblingAfter(newNode) {
        ok(this.container, 'Node does not belong to a container: ' + this);
        this.container.insertChildAfter(newNode, this);
    }

    /**
     * Converts the provided `array` into a `ArrayContainer`. If the provided `array` is already an instance of a `Container` then it is simply returned.
     * @param  {[type]} array [description]
     * @return {[type]}       [description]
     */
    makeContainer(array) {
        if (array instanceof Container) {
            return array;
        }

        return new ArrayContainer(this, array);
    }

    prependChild(node) {
        ok(this.body, 'Node does not support child nodes: ' + this);
        this.body.prependChild(node);
    }

    appendChild(node) {
        ok(this.body, 'Node does not support child nodes: ' + this);
        this.body.appendChild(node);
    }

    insertBefore(newNode, referenceNode) {
        ok(this.body, 'Node does not support child nodes: ' + this);
        this.body.insertBefore(newNode, referenceNode);
    }

    forEachChild(callback, thisObj) {
        if (this.body) {
            this.body.forEach(callback, thisObj);
        }
    }

    moveChildrenTo(targetNode) {
        ok(this.body, 'Node does not support child nodes: ' + this);
        ok(this !== targetNode, 'Target node cannot be the same as the source node');

        this.body.moveChildrenTo(targetNode);
    }

    forEachNextSibling(callback, thisObj) {
        var container = this.container;

        if (container) {
            container.forEachNextSibling(this, callback, thisObj);
        }
    }

    get previousSibling() {
        var container = this.container;

        if (container) {
            container.getPreviousSibling(this);
        }
    }

    get nextSibling() {
        var container = this.container;

        if (container) {
            container.getNextSibling(this);
        }
    }

    isTransformerApplied(transformer) {
        return this._transformersApplied[transformer.id] === true;
    }

    setTransformerApplied(transformer) {
        this._transformersApplied[transformer.id] = true;
    }

    toString() {
        return inspect(this);
    }

    toJSON() {
        let result = extend({}, this);
        delete result.container;
        delete result.statement;
        delete result.pos;
        delete result._transformersApplied;
        delete result._codeGeneratorFuncs;
        delete result._flags;
        delete result.data;
        delete result.tagDef;
        delete result._preserveWhitespace;
        delete result._events;
        return result;
    }

    detach() {
        if (this.container) {
            this.container.removeChild(this);
            this.container = null;
        }
    }

    /**
     * Returns true if the current node represents a compound expression (e.g. )
     * @return {Boolean} [description]
     */
    isCompoundExpression() {
        return false;
    }

    isDetached() {
        return this.container == null;
    }

    /**
     * Used by the Node.js require('util').inspect function.
     * We default to inspecting on the simplified version
     * of this node that is the same version we use when
     * serializing to JSON.
     */
    inspect(depth, opts) {
        // We inspect in the simplified version of this object t
        return this.toJSON();
    }

    setType(newType) {
        this.type = newType;
    }

    setCodeGenerator(mode, codeGeneratorFunc) {
        if (arguments.length === 1) {
            codeGeneratorFunc = arguments[0];
            mode = null;
        }

        if (!this._codeGeneratorFuncs) {
            this._codeGeneratorFuncs = {};
        }
        this._codeGeneratorFuncs[mode || 'DEFAULT'] = codeGeneratorFunc;
    }

    getCodeGenerator(mode) {
        if (this._codeGeneratorFuncs) {
            return this._codeGeneratorFuncs[mode] || this._codeGeneratorFuncs.DEFAULT;
        } else {
            return undefined;
        }
    }

    setFlag(name) {
        this._flags[name] = true;
    }

    clearFlag(name) {
        delete this._flags[name];
    }

    isFlagSet(name) {
        return this._flags.hasOwnProperty(name);
    }

    get bodyText() {
        var bodyText = '';

        this.forEachChild((child) => {
            if (child.type === 'Text') {
                var childText = child.argument;
                if (childText && childText.type === 'Literal') {
                    bodyText += childText.value;
                }
            }
        });

        return bodyText;
    }

    get parentNode() {
        return this.container && this.container.node;
    }

    setPreserveWhitespace(isPreserved) {
        this._preserveWhitespace = isPreserved;
    }

    isPreserveWhitespace() {
        var preserveWhitespace = this._preserveWhitespace;
        if (preserveWhitespace == null) {
            preserveWhitespace = this.tagDef && this.tagDef.preserveWhitespace;
        }

        return preserveWhitespace === true;
    }
}

module.exports = Node;
});
$rmod.def("/marko@3.0.0/compiler/ast/Literal", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var isArray = Array.isArray;
const isValidJavaScriptVarName = require('../util/isValidJavaScriptVarName');

class Literal extends Node {
    constructor(def) {
        super('Literal');
        this.value = def.value;
    }

    generateCode(codegen) {
        var value = this.value;
        codegen.writeLiteral(value);
    }

    toString() {
        var value = this.value;
        if (value === null) {
            return 'null';
        } else if (value === undefined) {
            return 'undefined';
        } else if (typeof value === 'string') {
            return JSON.stringify(value);
        } else if (value === true) {
            return 'true';
        } else if (value === false) {
            return 'false';
        }  else if (isArray(value)) {
            return '[' + value.join(', ') + ']';
        } else if (typeof value === 'number') {
            return value.toString();
        } else if (typeof value === 'object') {
            let keys = Object.keys(value);
            if (keys.length === 0) {
                return '{}';
            }

            var result = '{ ';

            for (let i=0; i<keys.length; i++) {
                let k = keys[i];
                let v = value[k];

                if (i !== 0) {
                    result += ', ';
                }

                if (isValidJavaScriptVarName(k)) {
                    result += k + ': ';
                } else {
                    result += JSON.stringify(k) + ': ';
                }

                result += v;
            }

            return result + ' }';
        }
    }
}

module.exports = Literal;
});
$rmod.def("/marko@3.0.0/compiler/ast/Identifier", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class Identifier extends Node {
    constructor(def) {
        super('Identifier');
        this.name = def.name;
    }

    generateCode(codegen) {
        var name = this.name;
        codegen.write(name);
    }

    toString() {
        return this.name;
    }
}

module.exports = Identifier;
});
$rmod.def("/marko@3.0.0/compiler/ast/Container", function(require, exports, module, __filename, __dirname) { 'use strict';

class Container {
    constructor(node) {
        this.node = node;
    }

    toJSON() {
        return this.items;
    }
}

module.exports = Container;
});
$rmod.def("/marko@3.0.0/compiler/util/javaScriptReservedWords",function(e,t,o,r,a){o.exports={"abstract":!0,arguments:!0,"boolean":!0,"break":!0,"byte":!0,"case":!0,"catch":!0,"char":!0,"class":!0,"const":!0,"continue":!0,"debugger":!0,"default":!0,"delete":!0,"do":!0,"double":!0,"else":!0,"enum*":!0,eval:!0,"export":!0,"extends":!0,"false":!0,"final":!0,"finally":!0,"float":!0,"for":!0,"function":!0,"goto":!0,"if":!0,"implements":!0,"import":!0,"in":!0,"instanceof":!0,"int":!0,"interface":!0,let:!0,"long":!0,"native":!0,"new":!0,"null":!0,"package":!0,"private":!0,"protected":!0,"public":!0,"return":!0,"short":!0,"static":!0,"super":!0,"switch":!0,"synchronized":!0,"this":!0,"throw":!0,"throws":!0,"transient":!0,"true":!0,"try":!0,"typeof":!0,"var":!0,"void":!0,"volatile":!0,"while":!0,"with":!0,"yield":!0}});
$rmod.def("/marko@3.0.0/compiler/util/isValidJavaScriptVarName",function(r,a,e,i,t){var o=r("./javaScriptReservedWords"),c=/^[$A-Z_][0-9A-Z_$]*$/i;e.exports=function(r){return o[r]?!1:c.test(r)}});
$rmod.def("/marko@3.0.0/compiler/CodeGenerator", function(require, exports, module, __filename, __dirname) { 'use strict';

const isArray = Array.isArray;
const Node = require('./ast/Node');
const Literal = require('./ast/Literal');
const Identifier = require('./ast/Identifier');
const ok = require('assert'/*'assert'*/).ok;
const Container = require('./ast/Container');
const util = require('util'/*'util'*/);
const isValidJavaScriptVarName = require('./util/isValidJavaScriptVarName');

class GeneratorEvent {
    constructor(node, codegen) {
        this.node = node;
        this.codegen = codegen;

        this.isBefore = true;
        this.builder = codegen.builder;
        this.context = codegen.context;
    }

    insertCode(newCode) {
        this.codegen.generateStatements(newCode);

        if (this.isBefore) {
            if (!this.codegen._code.endsWith(this.codegen.currentIndent)) {
                this.codegen.writeLineIndent();
            }
        }
    }
}

class Slot {
    constructor(codegen, slotNode) {
        this._content = null;

        this._start = codegen._code.length;
        codegen.write('/* slot */');

        if (slotNode.statement) {
            codegen.write('\n');
        }
        this._end = codegen._code.length;

        this.currentIndent = codegen.currentIndent;
        this._inFunction = codegen.inFunction;
        this._statement = slotNode.statement;
    }

    setContent(content) {
        this._content = content;
    }

    generateCode(codegen) {
        let content = this._content;
        let slotCode;

        if (content) {
            let isStatement = this._statement;

            codegen.currentIndent = this.currentIndent;
            codegen.inFunction = this._inFunction;

            let capture = codegen._beginCaptureCode();

            if (isStatement) {
                codegen.generateStatements(content);
            } else {
                codegen.generateCode(content);
            }

            slotCode = capture.end();

            if (isStatement && slotCode.startsWith(codegen.currentIndent)) {
                slotCode = slotCode.substring(codegen.currentIndent.length);
            }
        }



        let oldCode = codegen._code;
        let beforeCode = oldCode.substring(0, this._start);
        let afterCode = oldCode.substring(this._end);

        if (slotCode) {
            codegen._code = beforeCode + slotCode + afterCode;
        } else {
            let beforeWhitespaceMatches = beforeCode.match(/[\n]\s*$/);
            if (beforeWhitespaceMatches != null) {
                let beforeWhitespace = beforeWhitespaceMatches[0];

                if (afterCode.startsWith(beforeWhitespace)) {
                    afterCode = afterCode.substring(beforeWhitespace.length);
                }
            }
            codegen._code = beforeCode + afterCode;
        }
    }
}

class Generator {
    constructor(context, options) {
        options = options || {};
        this.root = null;
        this._indentStr = options.indent != null ? options.indent : '  ';
        this._indentSize = this._indentStr.length;

        this._code = '';
        this.currentIndent = '';
        this.inFunction = false;

        this._doneListeners = [];

        this._bufferedWrites = null;
        this.builder = context.builder;
        this.outputType = options.output || 'html';
        this.context = context;

        ok(this.builder, '"this.builder" is required');

        this._codegenCodeMethodName = 'generate' +
            this.outputType.charAt(0).toUpperCase() +
            this.outputType.substring(1) +
            'Code';

        this._slots = [];
    }

    beginSlot(slotNode) {
        var addSeparator = slotNode.statement;
        this._flushBufferedWrites(addSeparator);
        let slot = new Slot(this, slotNode);
        this._slots.push(slot);
        return slot;
    }

    addVar(name, value) {
        return this.context.addVar(name, value);
    }

    addStaticVar(name, value) {
        return this.context.addStaticVar(name, value);
    }

    addStaticCode(code) {
        this.context.addStaticCode(code);
    }

    getEscapeXmlAttrVar() {
        return this.context.getEscapeXmlAttrVar();
    }

    importModule(varName, path) {
        return this.context.importModule(varName, path);
    }

    generateCode(node) {
        ok(node != null, '"node" is required');

        if (typeof node === 'string' ||
            typeof node === 'number' ||
            typeof node === 'boolean') {
            this.write(node);
            return;
        } else if (isArray(node)) {
            node.forEach(this.generateCode, this);
            return;
        } else if (node instanceof Container) {
            node.forEach((child) => {
                if (child.container === node) {
                    this.generateCode(child);
                }
            });
            return;
        }

        let oldCurrentNode = this._currentNode;
        this._currentNode = node;

        let finalNode;
        let generateCodeFunc;
        var isStatement = node.statement;

        var beforeAfterEvent;

        if (node.listenerCount('beforeGenerateCode') || node.listenerCount('beforeGenerateCode')) {
            beforeAfterEvent = new GeneratorEvent(node, this);
        }

        if (beforeAfterEvent) {
            beforeAfterEvent.isBefore = true;
            beforeAfterEvent.node.emit('beforeGenerateCode', beforeAfterEvent);
        }

        if (node.getCodeGenerator) {
            generateCodeFunc = node.getCodeGenerator(this.outputType);
            if (generateCodeFunc) {
                finalNode = generateCodeFunc(node, this);

                if (finalNode === node) {
                    // If the same node was returned then we will generate
                    // code for the node as normal
                    finalNode = null;
                } else if (finalNode == null) {
                    // If nothing was returned then don't generate any code
                    node = null;
                }
            }
        }

        if (finalNode) {
            if (isStatement) {
                this.generateStatements(finalNode);
            } else {
                this.generateCode(finalNode);
            }
        } else if (node) {
            let generateCodeMethod = node.generateCode;

            if (!generateCodeMethod) {
                generateCodeMethod = node[this._codegenCodeMethodName];

                if (!generateCodeMethod) {
                    throw new Error('No code codegen for node of type "' +
                        node.type +
                        '" (output type: "' + this.outputType + '"). Node: ' + util.inspect(node));
                }
            }

            // The generateCode function can optionally return either of the following:
            // - An AST node
            // - An array/cointainer of AST nodes
            finalNode = generateCodeMethod.call(node, this);

            if (finalNode != null) {
                if (finalNode === node) {
                    throw new Error('Invalid node returned. Same node returned:  ' + util.inspect(node));
                }

                if (isStatement) {
                    this.generateStatements(finalNode);
                } else {
                    this.generateCode(finalNode);
                }
            }
        }

        if (beforeAfterEvent) {
            beforeAfterEvent.isBefore = false;
            beforeAfterEvent.node.emit('afterGenerateCode', beforeAfterEvent);
        }

        this._currentNode = oldCurrentNode;
    }

    getCode() {
        this._flushBufferedWrites();

        while(this._doneListeners.length || this._slots.length) {

            let doneListeners = this._doneListeners;
            if (doneListeners.length) {
                this._doneListeners = [];

                for (let i=0; i<doneListeners.length; i++) {
                    let doneListener = doneListeners[i];
                    doneListener(this);
                }
            }

            let slots = this._slots;

            if (slots.length) {
                this._slots = [];

                for (let i=slots.length-1; i>=0; i--) {
                    let slot = slots[i];
                    slot.generateCode(this);
                }
            }
        }

        return this._code;
    }

    generateBlock(body) {
        if (!body) {
            this.write('{}');
            return;
        }

        if (typeof body === 'function') {
            body = body();
        }

        if (!isArray(body) && !(body instanceof Container)) {
            throw new Error('Invalid body');
        }

        if (body.length === 0) {
            this.write('{}');
            return;
        }

        this.write('{\n')
            .incIndent();

        let oldCodeLength = this._code.length;

        this.generateStatements(body);

        if (this._bufferedWrites) {
            if (this._code.length !== oldCodeLength) {
                this._code += '\n';
            }
            this._flushBufferedWrites();
        }

        this.decIndent()
            .writeLineIndent()
            .write('}');
    }

    generateStatements(nodes) {
        ok(nodes, '"nodes" expected');
        let firstStatement = true;

        if (nodes instanceof Node) {
            nodes = [nodes];
        }

        nodes.forEach((node) => {
            if (node instanceof Node) {
                node.statement = true;
            }

            let startCodeLen = this._code.length;

            let currentIndent = this.currentIndent;

            if (!firstStatement) {
                this._write('\n');
            }

            if (!this._code.endsWith(currentIndent)) {
                this.writeLineIndent();
            }

            let startPos = this._code.length;

            if (Array.isArray(node) || (node instanceof Container)) {
                this.generateStatements(node);
            } else {
                this.generateCode(node);
            }

            if (this._code.length === startPos) {
                // No code was generated. Remove any code that was previously added
                this._code = this._code.slice(0, startCodeLen);
                return;
            }

            if (this._code.endsWith('\n')) {
                // Do nothing
            } else if (this._code.endsWith(';')) {
                this._code += '\n';
            }  else if (this._code.endsWith('\n' + this.currentIndent)) {
                // Do nothing
            } else {
                this._code += ';\n';
            }

            firstStatement = false;
        });
    }

    _beginCaptureCode() {
        let oldCode = this._code;
        this._code = '';

        return {
            codegen: this,
            end() {
                let newCode = this.codegen._code;
                this.codegen._code = oldCode;
                return newCode;
            }
        };
    }

    addWriteLiteral(value) {
        if (!(value instanceof Literal)) {
            value = new Literal({value});
        }

        this.addWrite(value);
    }

    addWrite(output) {
        ok(output, '"output" is required');
        if (output instanceof Literal) {
            let lastWrite = this._bufferedWrites ?
                this._bufferedWrites[this._bufferedWrites.length-1] :
                null;
            if (lastWrite instanceof Literal) {
                lastWrite.value += output.value;
                return;
            }
        } else {
            if (!(output instanceof Node)) {
                throw new Error('Invalid write: ' + JSON.stringify(output, null, 2));
            }
        }

        if (!this._bufferedWrites) {
            this._bufferedWrites = [output];
        } else {
            this._bufferedWrites.push(output);
        }
    }

    _flushBufferedWrites(addSeparator) {
        let bufferedWrites = this._bufferedWrites;

        if (!bufferedWrites) {
            return;
        }

        this._bufferedWrites = null;

        if (!addSeparator && !this._code.endsWith(this.currentIndent)) {
            this.writeLineIndent();
        }

        let len = bufferedWrites.length;

        for (let i=0; i<len; i++) {
            let write = bufferedWrites[i];

            if (i === 0) {
                this._write('out.w(');
            } else {
                this._write(' +\n');
                this.writeLineIndent();
                this._write(this._indentStr);
            }

            this.generateCode(write);
        }

        this._write(');\n');

        if (addSeparator) {
            this._write('\n' + this.currentIndent);
        }
    }

    write(code) {
        if (this._bufferedWrites) {
            this._flushBufferedWrites(true /* add separator */);
        }
        this._code += code;
        return this;
    }

    _write(code) {
        this._code += code;
        return this;
    }

    incIndent(count) {
        this._flushBufferedWrites(true /* add separator */);

        if (count != null) {
            for (let i=0; i<count; i++) {
                this.currentIndent += ' ';
            }
        } else {
            this.currentIndent += this._indentStr;
        }

        return this;
    }

    decIndent(count) {
        if (count == null) {
            count = this._indentSize;
        }

        this.currentIndent = this.currentIndent.substring(
            0,
            this.currentIndent.length - count);

        return this;
    }

    writeLineIndent() {
        this._code += this.currentIndent;
        return this;
    }

    writeIndent() {
        this._code += this._indentStr;
        return this;
    }

    isLiteralNode(node) {
        return node instanceof Literal;
    }

    isIdentifierNode(node) {
        return node instanceof Identifier;
    }

    writeLiteral(value) {
        if (value === null) {
            this.write('null');
        } else if (value === undefined) {
            this.write('undefined');
        } else if (typeof value === 'string') {
            this.write(JSON.stringify(value));
        } else if (value === true) {
            this.write('true');
        } else if (value === false) {
            this.write('false');
        }  else if (isArray(value)) {
            if (value.length === 0) {
                this.write('[]');
                return;
            }

            this.write('[\n');
            this.incIndent();

            for (let i=0; i<value.length; i++) {
                let v = value[i];

                this.writeLineIndent();

                if (v instanceof Node) {
                    this.generateCode(v);
                } else {
                    this.writeLiteral(v);
                }

                if (i < value.length - 1) {
                    this.write(',\n');
                } else {
                    this.write('\n');
                }
            }

            this.decIndent();
            this.writeLineIndent();
            this.write(']');
        } else if (typeof value === 'number') {
            this.write(value.toString());
        } else if (typeof value === 'object') {
            let keys = Object.keys(value);
            if (keys.length === 0) {
                this.write('{}');
                return;
            }

            this.incIndent();
            this.write('{\n');
            this.incIndent();

            for (let i=0; i<keys.length; i++) {
                let k = keys[i];
                let v = value[k];

                this.writeLineIndent();

                if (isValidJavaScriptVarName(k)) {
                    this.write(k + ': ');
                } else {
                    this.write(JSON.stringify(k) + ': ');
                }

                if (v instanceof Node) {
                    this.generateCode(v);
                } else {
                    this.writeLiteral(v);
                }

                if (i < keys.length - 1) {
                    this.write(',\n');
                } else {
                    this.write('\n');
                }
            }

            this.decIndent();
            this.writeLineIndent();
            this.write('}');
            this.decIndent();
        }
    }

    isPreserveWhitespaceEnabled() {
        return false;
    }

    addError(message, code) {
        ok('"message" is required');

        let node = this._currentNode;

        if (typeof message === 'object') {
            let errorInfo = message;
            errorInfo.node = node;
            this.context.addError(errorInfo);
        } else {
            this.context.addError({node, message, code});
        }
    }

    onDone(listenerFunc) {
        this._doneListeners.push(listenerFunc);
    }

    getRequirePath(targetFilename) {
        return this.context.getRequirePath(targetFilename);
    }

    resolvePath(pathExpression) {
        return this.context.resolvePath(pathExpression);
    }
}

module.exports = Generator;
});
$rmod.def("/marko@3.0.0/compiler/Compiler", function(require, exports, module, __filename, __dirname) { 'use strict';
var ok = require('assert'/*'assert'*/).ok;
var CodeGenerator = require('./CodeGenerator');
var CompileContext = require('./CompileContext');
var createError = require('/$/marko/$/raptor-util/createError'/*'raptor-util/createError'*/);

const FLAG_TRANSFORMER_APPLIED = 'transformerApply';

function transformNode(node, context) {
    try {
        context.taglibLookup.forEachNodeTransformer(node, function (transformer) {
            if (!node.isTransformerApplied(transformer)) {
                //Check to make sure a transformer of a certain type is only applied once to a node
                node.setTransformerApplied(transformer);
                //Mark the node as have been transformed by the current transformer
                context.setFlag(FLAG_TRANSFORMER_APPLIED);
                //Set the flag to indicate that a node was transformed
                // node.compiler = this;
                var transformerFunc = transformer.getFunc();
                transformerFunc.call(transformer, node, context);    //Have the transformer process the node (NOTE: Just because a node is being processed by the transformer doesn't mean that it has to modify the parse tree)
            }
        });
    } catch (e) {
        throw createError(new Error('Unable to compile template at path "' + context.filename + '". Error: ' + e.message), e);
    }
}

function transformTreeHelper(node, context) {
    transformNode(node, context);

    /*
     * Now process the child nodes by looping over the child nodes
     * and transforming the subtree recursively
     *
     * NOTE: The length of the childNodes array might change as the tree is being performed.
     *       The checks to prevent transformers from being applied multiple times makes
     *       sure that this is not a problem.
     */
    node.forEachChild(function (childNode) {
        if (childNode.isDetached()) {
            return;    //The child node might have been removed from the tree
        }
        transformTreeHelper(childNode, context);
    });
}

function transformTree(rootNode, context) {
    /*
     * The tree is continuously transformed until we go through an entire pass where
     * there were no new nodes that needed to be transformed. This loop makes sure that
     * nodes added by transformers are also transformed.
     */
    do {
        context.clearFlag(FLAG_TRANSFORMER_APPLIED);
        //Reset the flag to indicate that no transforms were yet applied to any of the nodes for this pass
        transformTreeHelper(rootNode, context);    //Run the transforms on the tree
    } while (context.isFlagSet(FLAG_TRANSFORMER_APPLIED));

    return rootNode;
}

class Compiler {
    constructor(options) {
        ok(options, '"options" is required');

        this.builder = options.builder;
        this.parser = options.parser;

        ok(this.builder, '"options.builder" is required');
        ok(this.parser, '"options.parser" is required');
    }

    compile(src, filename, options) {
        ok(typeof src === 'string', '"src" argument should be a string');
        ok(filename, '"filename" argument is required');
        ok(typeof filename === 'string', '"filename" argument should be a string');

        var context = new CompileContext(src, filename, this.builder);

        if (options) {
            if (options.preserveWhitespace) {
                context.setPreserveWhitespace(true);
            }
        }

        // STAGE 1: Parse the template to produce the initial AST
        var ast = this.parser.parse(src, context);
        context.root = ast;
        // console.log('ROOT', JSON.stringify(ast, null, 2));

        // STAGE 2: Transform the initial AST to produce the final AST
        var transformedAST = transformTree(ast, context);
        // console.log('transformedAST', JSON.stringify(ast, null, 2));

        // STAGE 3: Generate the code using the final AST
        var codeGenerator = new CodeGenerator(context);
        codeGenerator.generateCode(transformedAST);

        // If there were any errors then compilation failed.
        if (context.hasErrors()) {
            var errors = context.getErrors();

            var message = 'An error occurred while trying to compile template at path "' + filename + '". Error(s) in template:\n';
            for (var i = 0, len = errors.length; i < len; i++) {
                let error = errors[i];
                message += (i + 1) + ') ' + error.toString() + '\n';
            }
            var error = new Error(message);
            error.errors = errors;
            throw error;
        }

        // Return the generated code as the compiled output:
        var compiledSrc = codeGenerator.getCode();
        return compiledSrc;
    }
}

module.exports = Compiler;
});
$rmod.def("/marko@3.0.0/compiler/Walker", function(require, exports, module, __filename, __dirname) { 'use strict';
var isArray = Array.isArray;
var Container = require('./ast/Container');

function noop() {}

class Walker {
    constructor(options) {
        this._enter = options.enter || noop;
        this._exit = options.exit || noop;
        this._stopped = false;
        this._reset();
        this._stack = [];
    }

    _reset() {
        this._skipped = false;
        this._replaced = undefined;
        this._removed = false;
    }

    skip() {
        this._skipped = true;
    }

    stop() {
        this._stopped = true;
    }

    replace(newNode) {
        this._replaced = newNode;
    }

    remove() {
        this._removed = true;
    }

    _walkArray(array) {
        var hasRemoval = false;

        array.forEach((node, i) => {
            var transformed = this.walk(node);
            if (transformed == null) {
                array[i] = null;
                hasRemoval = true;
            } else if (transformed !== node) {
                array[i] = transformed;
            }
        });

        if (hasRemoval) {
            for (let i=array.length-1; i>=0; i--) {
                if (array[i] == null) {
                    array.splice(i, 1);
                }
            }
        }

        return array;
    }

    _walkContainer(nodes) {
        nodes.forEach((node) => {
            var transformed = this.walk(node);
            if (!transformed) {
                node.container.removeChild(node);
            } else if (transformed !== node) {
                node.container.replaceChild(transformed, node);
            }
        });
    }

    walk(node) {
        if (!node || this._stopped || typeof node === 'string') {
            return node;
        }

        this._reset();

        var parent = this._stack.length ? this._stack[this._stack.length - 1] : undefined;

        this._stack.push(node);

        var replaced = this._enter(node, parent);
        if (replaced === undefined) {
            replaced = this._replaced;
        }

        if (this._removed) {
            replaced = null;
        }

        if (replaced !== undefined) {
            this._stack.pop();
            return replaced;
        }

        if (this._skipped || this._stopped) {
            this._stack.pop();
            return node;
        }

        if (isArray(node)) {
            let array = node;
            let newArray = this._walkArray(array);
            this._stack.pop();
            return newArray;
        } else if (node instanceof Container) {
            let container = node;
            this._walkContainer(container);
            this._stack.pop();
            return container;
        } else {
            if (node.walk) {
                node.walk(this);
            }
        }

        if (this._stopped) {
            this._stack.pop();
            return node;
        }

        this._reset();

        replaced = this._exit(node, parent);
        if (replaced === undefined) {
            replaced = this._replaced;
        }

        if (this._removed) {
            replaced = null;
        }

        if (replaced !== undefined) {
            this._stack.pop();
            return replaced;
        }

        this._stack.pop();
        return node;
    }
}

module.exports = Walker;


});
$rmod.def("/marko@3.0.0/compiler/ast/AttributePlaceholder", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class AttributePlaceholder extends Node {
    constructor(def) {
        super('AttributePlaceholder');
        this.value = def.value;
        this.escape = def.escape;
    }

    generateCode(codegen) {
        codegen.generateCode(this.value);
    }

    walk(walker) {
        this.value = walker.walk(this.value);
    }

    isCompoundExpression() {
        return this.value.isCompoundExpression();
    }

    /**
     * "noOutput" should be true if the Node.js does not result in any HTML or Text output
     */
    get noOutput() {
        return this.value.noOutput;
    }
}

module.exports = AttributePlaceholder;
});
$rmod.def("/marko@3.0.2/compiler/Parser", function(require, exports, module, __filename, __dirname) { 'use strict';
var ok = require('assert'/*'assert'*/).ok;
var AttributePlaceholder = require('./ast/AttributePlaceholder');

var COMPILER_ATTRIBUTE_HANDLERS = {
    'preserve-whitespace': function(attr, context) {
        context.setPreserveWhitespace(true);
    },
    'preserve-comments': function(attr, context) {
        context.setPreserveComments(true);
    }
};

var ieConditionalCommentRegExp = /^\[if [^]*?<!\[endif\]$/;

function isIEConditionalComment(comment) {
    return ieConditionalCommentRegExp.test(comment);
}

function replacePlaceholderEscapeFuncs(node, context) {
    var walker = context.createWalker({
        exit: function(node, parent) {
            if (node.type === 'FunctionCall' &&
                node.callee.type === 'Identifier') {

                if (node.callee.name === '$noEscapeXml') {
                    return new AttributePlaceholder({escape: false, value: node.args[0]});
                } else if (node.callee.name === '$escapeXml') {
                    return new AttributePlaceholder({escape: true, value: node.args[0]});
                }
            }
        }
    });

    return walker.walk(node);
}

function mergeShorthandClassNames(el, shorthandClassNames, context) {
    var builder = context.builder;
    let classNames = shorthandClassNames.map((className) => {
        return builder.parseExpression(className.value);
    });

    var classAttr = el.getAttributeValue('class');
    if (classAttr) {
        classNames.push(classAttr);
    }

    let prevClassName;

    var finalClassNames = [];

    for (var i=0; i<classNames.length; i++) {
        let className = classNames[i];
        if (prevClassName && className.type === 'Literal' && prevClassName.type === 'Literal') {
            prevClassName.value += ' ' + className.value;
        } else {
            finalClassNames.push(className);
        }
        prevClassName = className;
    }

    if (finalClassNames.length === 1) {
        el.setAttributeValue('class', finalClassNames[0]);
    } else {
        var classListVar = context.addStaticVar('__classList', '__helpers.cl');
        el.setAttributeValue('class', builder.functionCall(classListVar, finalClassNames));
    }
}

class Parser {
    constructor(parserImpl, options) {
        ok(parserImpl, '"parserImpl" is required');

        this.parserImpl = parserImpl;

        this.prevTextNode = null;
        this.stack = null;

        this.raw = options && options.raw === true;

        // The context gets provided when parse is called
        // but we store it as part of the object so that the handler
        // methods have access
        this.context = null;
    }

    _reset() {
        this.prevTextNode = null;
        this.stack = [];
    }

    parse(src, context) {
        ok(typeof src === 'string', '"src" should be a string');
        ok(context, '"context" is required');

        this._reset();

        this.context = context;

        var builder = context.builder;
        var rootNode = builder.templateRoot();

        this.stack.push({
            node: rootNode
        });

        this.parserImpl.parse(src, this);

        return rootNode;
    }

    handleCharacters(text) {
        var builder = this.context.builder;

        if (this.prevTextNode && this.prevTextNode.isLiteral()) {
            this.prevTextNode.appendText(text);
        } else {
            var escape = false;
            this.prevTextNode = builder.text(builder.literal(text), escape);
            this.parentNode.appendChild(this.prevTextNode);
        }
    }

    handleStartElement(el) {
        var context = this.context;
        var builder = context.builder;

        var tagName = el.tagName;
        var tagNameExpression = el.tagNameExpression;
        var attributes = el.attributes;
        var argument = el.argument; // e.g. For <for(color in colors)>, argument will be "color in colors"

        if (argument) {
            argument = argument.value;
        }

        var raw = this.raw;

        if (!raw) {
            if (tagNameExpression) {
                tagName = builder.parseExpression(tagNameExpression);
            } else if (tagName === 'marko-compiler-options') {
                attributes.forEach(function (attr) {
                    let attrName = attr.name;
                    let handler = COMPILER_ATTRIBUTE_HANDLERS[attrName];

                    if (!handler) {
                        context.addError({
                            code: 'ERR_INVALID_COMPILER_OPTION',
                            message: 'Invalid Marko compiler option of "' + attrName + '". Allowed: ' + Object.keys(COMPILER_ATTRIBUTE_HANDLERS).join(', '),
                            pos: el.pos,
                            node: el
                        });
                        return;
                    }

                    handler(attr, context);
                });

                return;
            }
        }

        this.prevTextNode = null;

        var attributeParseErrors = [];

        var elDef = {
            tagName: tagName,
            argument: argument,
            openTagOnly: el.openTagOnly === true,
            selfClosed: el.selfClosed === true,
            pos: el.pos,
            attributes: attributes.map((attr) => {
                var attrValue;
                if (attr.hasOwnProperty('literalValue')) {
                    attrValue = builder.literal(attr.literalValue);
                } else if (attr.value == null) {
                    attrValue = undefined;
                } else {
                    let parsedExpression;
                    let valid = true;
                    try {
                        parsedExpression = builder.parseExpression(attr.value);
                    } catch(e) {
                        valid = false;
                        attributeParseErrors.push('Invalid JavaScript expression for attribute "' + attr.name + '": ' + e);
                    }

                    if (valid) {
                        if (raw) {
                            attrValue = parsedExpression;
                        } else {
                            attrValue = replacePlaceholderEscapeFuncs(parsedExpression, context);
                        }
                    } else {
                        attrValue = null;
                    }
                }

                var attrDef = {
                    name: attr.name,
                    value: attrValue,
                    rawValue: attr.value
                };

                if (attr.argument) {
                    // TODO Do something with the argument pos
                    attrDef.argument = attr.argument.value;
                }

                return attrDef;
            })
        };

        var node;

        if (raw) {

            node = builder.htmlElement(elDef);
            node.pos = elDef.pos;

            let taglibLookup = this.context.taglibLookup;
            let tagDef = taglibLookup.getTag(tagName);
            node.tagDef = tagDef;
        } else {
            node = this.context.createNodeForEl(elDef);
        }

        if (attributeParseErrors.length) {

            attributeParseErrors.forEach((e) => {
                context.addError(node, e);
            });
        }

        if (raw) {
            if (el.shorthandId) {
                let parsed = builder.parseExpression(el.shorthandId.value);
                node.rawShorthandId = parsed.value;
            }

            if (el.shorthandClassNames) {
                node.rawShorthandClassNames = el.shorthandClassNames.map((className) => {
                    let parsed = builder.parseExpression(className.value);
                    return parsed.value;
                });
            }
        } else {
            if (el.shorthandClassNames) {
                mergeShorthandClassNames(node, el.shorthandClassNames, context);
            }

            if (el.shorthandId) {
                if (node.hasAttribute('id')) {
                    context.addError(node, 'A shorthand ID cannot be used in conjunction with the "id" attribute');
                } else {
                    node.setAttributeValue('id', builder.parseExpression(el.shorthandId.value));
                }
            }
        }

        this.parentNode.appendChild(node);

        this.stack.push({
            node: node,
            tag: null
        });
    }

    handleEndElement(elementName) {
        if (elementName === 'marko-compiler-options') {
            return;
        }

        this.prevTextNode = null;

        this.stack.pop();
    }

    handleComment(comment) {
        this.prevTextNode = null;

        var builder = this.context.builder;

        var preserveComment = this.context.isPreserveComments() ||
            isIEConditionalComment(comment);

        if (this.raw || preserveComment) {
            var commentNode = builder.htmlComment(builder.literal(comment));
            this.parentNode.appendChild(commentNode);
        }
    }

    handleDeclaration(value) {
        this.prevTextNode = null;

        var builder = this.context.builder;

        var declarationNode = builder.declaration(builder.literal(value));
        this.parentNode.appendChild(declarationNode);
    }

    handleDocumentType(value) {
        this.prevTextNode = null;

        var builder = this.context.builder;

        var docTypeNode = builder.documentType(builder.literal(value));
        this.parentNode.appendChild(docTypeNode);
    }

    handleBodyTextPlaceholder(expression, escape) {
        this.prevTextNode = null;
        var builder = this.context.builder;
        var parsedExpression = builder.parseExpression(expression);
        var preserveWhitespace = true;

        var text = builder.text(parsedExpression, escape, preserveWhitespace);
        this.parentNode.appendChild(text);
    }

    handleScriptlet(code) {
        this.prevTextNode = null;
        var builder = this.context.builder;
        var scriptlet = builder.scriptlet(code);
        this.parentNode.appendChild(scriptlet);
    }

    handleError(event) {
        this.context.addError({
            message: event.message,
            code: event.code,
            pos: event.pos,
            endPos: event.endPos
        });
    }

    get parentNode() {
        var last = this.stack[this.stack.length-1];
        return last.node;
    }

    getParserStateForTag(el) {
        var attributes = el.attributes;

        for (var i=0; i<attributes.length; i++) {
            var attr = attributes[i];
            var attrName = attr.name;
            if (attrName === 'marko-body') {
                var parseMode;

                if (attr.literalValue) {
                    parseMode = attr.literalValue;
                }

                if (parseMode === 'static-text' ||
                    parseMode === 'parsed-text' ||
                    parseMode === 'html') {
                    return parseMode;
                } else {
                    this.context.addError({
                        message: 'Value for "marko-body" should be one of the following: "static-text", "parsed-text", "html"',
                        code: 'ERR_INVALID_ATTR'
                    });
                    return;
                }
            } else if (attrName === 'marko-init') {
                return 'static-text';
            }
        }

        var tagName = el.tagName;
        var tagDef = this.context.getTagDef(tagName);

        if (tagDef) {
            var body = tagDef.body;
            if (body) {
                return body; // 'parsed-text' | 'static-text' | 'html'
            }
        }

        return null; // Default parse state
    }

    isOpenTagOnly(tagName) {
        var tagDef = this.context.getTagDef(tagName);
        return tagDef && tagDef.openTagOnly;
    }
}

module.exports = Parser;
});
$rmod.def("/marko@3.0.0/compiler/HtmlJsParser", function(require, exports, module, __filename, __dirname) { 'use strict';
var htmljs = require('/$/marko/$/htmljs-parser'/*'htmljs-parser'*/);

class HtmlJsParser {
    constructor(options) {
        this.ignorePlaceholders = options && options.ignorePlaceholders === true;
    }

    parse(src, handlers) {
        var listeners = {
            onText(event) {
                handlers.handleCharacters(event.value);
            },

            onPlaceholder(event) {
                if (event.withinBody) {
                    if (!event.withinString) {
                        handlers.handleBodyTextPlaceholder(event.value, event.escape);
                    }
                } else if (event.withinOpenTag) {
                    // Don't escape placeholder for dynamic attributes. For example: <div ${data.myAttrs}></div>
                } else {
                    // placeholder within attribute
                    if (event.escape) {
                        event.value = '$escapeXml(' + event.value + ')';
                    } else {
                        event.value = '$noEscapeXml(' + event.value + ')';
                    }
                }
                // placeholder within content

            },

            onCDATA(event) {
                handlers.handleCharacters(event.value);
            },

            onOpenTag(event, parser) {
                event.selfClosed = false; // Don't allow self-closed tags
                handlers.handleStartElement(event);

                var newParserState = handlers.getParserStateForTag(event);
                if (newParserState) {
                    if (newParserState === 'parsed-text') {
                        parser.enterParsedTextContentState();
                    } else if (newParserState === 'static-text') {
                        parser.enterStaticTextContentState();
                    }
                }
            },

            onCloseTag(event) {
                var tagName = event.tagName;
                handlers.handleEndElement(tagName);
            },

            onDocumentType(event) {

                // Document type: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd
                // NOTE: The value will be all of the text between "<!" and ">""
                handlers.handleDocumentType(event.value);
            },

            onDeclaration(event) {
                handlers.handleDeclaration(event.value);
            },

            onComment(event) {
                // Text within XML comment
                handlers.handleComment(event.value);
            },

            onScriptlet(event) {
                // <% (code) %>
                handlers.handleScriptlet(event.value);
            },

            onError(event) {
                handlers.handleError(event);
            }
        };

        var parser = this.parser = htmljs.createParser(listeners, {
            ignorePlaceholders: this.ignorePlaceholders,
            isOpenTagOnly: function(tagName) {
                return handlers.isOpenTagOnly(tagName);
            }
        });
        parser.parse(src);
    }
}

module.exports = HtmlJsParser;
});
$rmod.def("/marko@3.0.0/compiler/ast/Program", function(require, exports, module, __filename, __dirname) { 'use strict';
var Node = require('./Node');

class Program extends Node {
    constructor(def) {
        super('Program');
        this.body = def.body;
    }

    generateCode(codegen) {
        var body = this.body;
        codegen.generateStatements(body);
        if (codegen._bufferedWrites) {
            codegen._write('\n');
            codegen._flushBufferedWrites();
        }
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = Program;
});
$rmod.def("/marko@3.0.0/compiler/ast/TemplateRoot", function(require, exports, module, __filename, __dirname) { 'use strict';
var Node = require('./Node');

function createVarsArray(vars) {
    return Object.keys(vars).map(function(varName) {
        var varInit = vars[varName];
        return {
            id: varName,
            init: varInit
        };
    });
}

class TemplateRoot extends Node {
    constructor(def) {
        super('TemplateRoot');
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var context = codegen.context;

        var body = this.body;
        codegen.addStaticVar('str', '__helpers.s');
        codegen.addStaticVar('empty', '__helpers.e');
        codegen.addStaticVar('notEmpty', '__helpers.ne');
        codegen.addStaticVar('escapeXml', '__helpers.x');

        var builder = codegen.builder;
        var program = builder.program;
        var functionDeclaration = builder.functionDeclaration;

        var returnStatement = builder.returnStatement;
        var slot = builder.slot;

        var staticsSlot = slot();
        var varsSlot = slot();
        varsSlot.noOutput = true;

        body = [ varsSlot ].concat(body.items);

        var outputNode = program([
            functionDeclaration('create', ['__helpers'], [
                staticsSlot,

                returnStatement(
                    functionDeclaration('render', ['data', 'out'], body))
            ]),
            '(module.exports = require("marko").c(__filename)).c(create)'
        ]);

        codegen.generateCode(outputNode);

        var staticVars = context.getStaticVars();
        var staticCodeArray = context.getStaticCode();

        var staticContent = [builder.vars(createVarsArray(staticVars))];
        if (staticCodeArray) {
            staticCodeArray.forEach((code) => {
                staticContent.push(code);
            });
        }

        staticsSlot.setContent(staticContent);

        var vars = context.getVars();
        varsSlot.setContent(builder.vars(createVarsArray(vars)));
    }

    toJSON(prettyPrinter) {
        return {
            type: this.type,
            body: this.body
        };
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = TemplateRoot;
});
$rmod.def("/marko@3.0.0/compiler/ast/FunctionDeclaration", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var ok = require('assert'/*'assert'*/).ok;

class FunctionDeclaration extends Node {
    constructor(def) {
        super('FunctionDeclaration');
        this.name = def.name;
        this.params = def.params;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var name = this.name;
        var params = this.params;
        var body = this.body;
        var statement = this.statement;

        if (name != null) {
            ok(typeof name === 'string' || name.type === 'Identifier', 'Function name should be a string or Identifier');
        }

        if (name) {
            codegen.write('function ');
            codegen.generateCode(name);
            codegen.write('(');
        } else {
            codegen.write('function(');
        }

        if (params && params.length) {
            for (let i=0, paramsLen = params.length; i<paramsLen; i++) {
                if (i !== 0) {
                    codegen.write(', ');
                }
                var param = params[i];

                if (typeof param === 'string') {
                    codegen.write(param);
                } else {
                    if (param.type !== 'Identifier') {
                        throw new Error('Illegal param ' + JSON.stringify(param) + ' for FunctionDeclaration: ' + JSON.stringify(this));
                    }
                    codegen.generateCode(param);
                }
            }
        }

        codegen.write(') ');
        var oldInFunction = codegen.inFunction;
        codegen.inFunction = true;
        codegen.generateBlock(body);
        codegen.inFunction = oldInFunction;

        if (statement) {
            codegen.write('\n');
        }
    }

    isCompoundExpression() {
        return true;
    }

    walk(walker) {
        this.name = walker.walk(this.name);
        this.params = walker.walk(this.params);
        this.body = walker.walk(this.body);
    }
}

module.exports = FunctionDeclaration;
});
$rmod.def("/marko@3.0.0/compiler/ast/FunctionCall", function(require, exports, module, __filename, __dirname) { 'use strict';
var ok = require('assert'/*'assert'*/).ok;

var Node = require('./Node');

class FunctionCall extends Node {
    constructor(def) {
        super('FunctionCall');
        this.callee = def.callee;

        ok(this.callee, '"callee" is required');

        let args = this.args = def.args;

        if (args) {
            if (!Array.isArray(args)) {
                throw new Error('Invalid args');
            }

            for (let i=0; i<args.length; i++) {
                let arg = args[i];
                if (!arg) {
                    throw new Error('Arg ' + i + ' is not valid for function call: ' + JSON.stringify(this.toJSON(), null, 2));
                }
            }
        }
    }

    generateCode(codegen) {
        var callee = this.callee;
        var args = this.args;

        codegen.generateCode(callee);

        codegen.write('(');

        if (args && args.length) {
            for (let i=0, argsLen = args.length; i<argsLen; i++) {
                if (i !== 0) {
                    codegen.write(', ');
                }

                let arg = args[i];
                if (!arg) {
                    throw new Error('Arg ' + i + ' is not valid for function call: ' + JSON.stringify(this.toJSON()));
                }
                codegen.generateCode(arg);
            }
        }

        codegen.write(')');
    }

    walk(walker) {
        this.callee = walker.walk(this.callee);
        this.args = walker.walk(this.args);
    }

    toString() {
        var callee = this.callee;
        var args = this.args;

        var result = callee.toString() + '(';

        if (args && args.length) {
            for (let i=0, argsLen = args.length; i<argsLen; i++) {
                if (i !== 0) {
                    result += ', ';
                }

                let arg = args[i];
                if (!arg) {
                    throw new Error('Arg ' + i + ' is not valid for function call: ' + JSON.stringify(this.toJSON()));
                }
                result += arg;
            }
        }

        result += ')';
        return result;
    }
}

module.exports = FunctionCall;
});
$rmod.def("/marko@3.0.0/compiler/ast/If", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

function removeWhitespaceNodes(whitespaceNodes) {
    for (var i=0; i<whitespaceNodes.length; i++) {
        whitespaceNodes[i].detach();
    }
    whitespaceNodes.length = 0;
}

class If extends Node {
    constructor(def) {
        super('If');
        this.test = def.test;
        this.body = this.makeContainer(def.body);
        this.else = def.else;
    }

    generateCode(codegen) {

        if (this.else) {
            this.else.matched = true;
        } else {
            // We want to match up any else/else if statements
            // with this node so that we can generate the code
            // correctly.
            let previous = this;
            let whitespaceNodes = [];
            this.forEachNextSibling((curNode) => {
                if (curNode.type === 'Else') {
                    curNode.detach();
                    if (whitespaceNodes.length) {
                        removeWhitespaceNodes(whitespaceNodes);
                    }
                    previous.else = curNode;
                    curNode.matched = true;
                    return false; // Stop searching
                } else if (curNode.type === 'ElseIf') {
                    curNode.detach();
                    if (whitespaceNodes.length) {
                        removeWhitespaceNodes(whitespaceNodes);
                    }

                    previous.else = curNode;
                    previous = curNode;
                    curNode.matched = true;
                    return true; // Keep searching since they may be more ElseIf/Else nodes...
                } else if (curNode.type === 'Text') {
                    if (curNode.isWhitespace()) {
                        whitespaceNodes.push(curNode);
                        return true; // Just whitespace... keep searching
                    } else {
                        return false; // Stop searching
                    }
                } else {
                    return false; // Stop searching
                }
            });
        }

        var test = this.test;
        var body = this.body;

        codegen.write('if (');
        codegen.generateCode(test);
        codegen.write(') ');
        codegen.generateBlock(body);
        if (this.else) {
            codegen.write(' ');
            codegen.generateCode(this.else);
        } else {
            codegen.write('\n');
        }
    }

    appendChild(newChild) {
        this.body.appendChild(newChild);
    }

    walk(walker) {
        this.test = walker.walk(this.test);
        this.body = walker.walk(this.body);
        this.else = walker.walk(this.else);
    }
}

module.exports = If;
});
$rmod.def("/marko@3.0.0/compiler/ast/ElseIf", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class ElseIf extends Node {
    constructor(def) {
        super('ElseIf');
        this.test = def.test;
        this.body = this.makeContainer(def.body);
        this.else = def.else;
        this.matched = false;
    }

    generateCode(codegen) {
        if (!this.matched) {
            codegen.addError('Unmatched else statement');
            return;
        }

        var ifStatement = codegen.builder.ifStatement(this.test, this.body, this.else);
        codegen.write('else ');
        codegen.generateCode(ifStatement);
    }

    walk(walker) {
        this.test = walker.walk(this.test);
        this.body = walker.walk(this.body);
        this.else = walker.walk(this.else);
    }
}

module.exports = ElseIf;
});
$rmod.def("/marko@3.0.0/compiler/ast/Else", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class Else extends Node {
    constructor(def) {
        super('Else');
        this.body = this.makeContainer(def.body);
        this.matched = false;
    }

    generateCode(codegen) {
        if (!this.matched) {
            codegen.addError('Unmatched else statement');
            return;
        }
        var body = this.body;

        codegen.write('else ');
        codegen.generateBlock(body);
        codegen.write('\n');
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = Else;
});
$rmod.def("/marko@3.0.0/compiler/ast/Assignment", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class Assignment extends Node {
    constructor(def) {
        super('Assignment');
        this.left = def.left;
        this.right = def.right;
        this.operator = def.operator;
    }

    generateCode(codegen) {
        var left = this.left;
        var right = this.right;
        var operator = this.operator;

        codegen.generateCode(left);
        codegen.write(' '  + (operator || '=') + ' ');

        var wrap = right instanceof Assignment;

        if (wrap) {
            codegen.write('(');
        }

        codegen.generateCode(right);

        if (wrap) {
            codegen.write(')');
        }
    }

    walk(walker) {
        this.left = walker.walk(this.left);
        this.right = walker.walk(this.right);
    }

    isCompoundExpression() {
        return true;
    }

    /**
     * "noOutput" should be true if the Node.js does not result in any HTML or Text output
     */
    get noOutput() {
        return !(this.body && this.body.length);
    }

    toString() {
        var left = this.left;
        var right = this.right;
        var operator = this.operator;

        var result = left.toString() + ' ' + (operator || '=') + ' ';

        var wrap = right instanceof Assignment;

        if (wrap) {
            result += '(';
        }

        result += right.toString();

        if (wrap) {
            result += ')';
        }

        return result;
    }
}

module.exports = Assignment;
});
$rmod.def("/marko@3.0.0/compiler/util/isCompoundExpression",function(o,n,i,r,s){function e(o){return"string"==typeof o?!0:o.isCompoundExpression()}i.exports=e});
$rmod.def("/marko@3.0.0/compiler/ast/BinaryExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var isCompoundExpression = require('../util/isCompoundExpression');

function generateCodeForOperand(node, codegen) {
    var wrap = isCompoundExpression(node);

    if (wrap) {
        codegen.write('(');
    }

    codegen.generateCode(node);

    if (wrap) {
        codegen.write(')');
    }
}

function operandToString(node) {
    var wrap = isCompoundExpression(node);

    var result = '';

    if (wrap) {
        result += '(';
    }

    result += node.toString();

    if (wrap) {
        result += ')';
    }

    return result;
}

class BinaryExpression extends Node {
    constructor(def) {
        super('BinaryExpression');
        this.left = def.left;
        this.operator = def.operator;
        this.right = def.right;
    }

    generateCode(codegen) {
        var left = this.left;
        var operator = this.operator;
        var right = this.right;

        if (!left || !right) {
            throw new Error('Invalid BinaryExpression: ' + this);
        }

        if (left.type === 'Literal' && right.type === 'Literal') {
            if (operator === '+') {
                return codegen.generateCode(codegen.builder.literal(left.value + right.value));
            } else if (operator === '-') {
                return codegen.generateCode(codegen.builder.literal(left.value - right.value));
            } else if (operator === '*') {
                return codegen.generateCode(codegen.builder.literal(left.value * right.value));
            } else if (operator === '/') {
                return codegen.generateCode(codegen.builder.literal(left.value / right.value));
            }
        }

        generateCodeForOperand(left, codegen);
        codegen.write(' ');
        codegen.generateCode(operator);
        codegen.write(' ');
        generateCodeForOperand(right, codegen);
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: 'BinaryExpression',
            left: this.left,
            operator: this.operator,
            right: this.right
        };
    }

    walk(walker) {
        this.left = walker.walk(this.left);
        this.right = walker.walk(this.right);
    }

    toString() {
        var left = this.left;
        var operator = this.operator;
        var right = this.right;

        if (!left || !right) {
            throw new Error('Invalid BinaryExpression: ' + this);
        }

        return operandToString(left) + ' ' + operator + ' ' + operandToString(right);
    }
}

module.exports = BinaryExpression;
});
$rmod.def("/marko@3.0.0/compiler/ast/LogicalExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var isCompoundExpression = require('../util/isCompoundExpression');

function generateCodeForOperand(node, codegen) {
    var wrap = isCompoundExpression(node);

    if (wrap) {
        codegen.write('(');
    }

    codegen.generateCode(node);

    if (wrap) {
        codegen.write(')');
    }
}

function operandToString(node, codegen) {
    var wrap = isCompoundExpression(node);

    var result = '';

    if (wrap) {
        result += '(';
    }

    result += node;

    if (wrap) {
        result += ')';
    }

    return result;
}

class LogicalExpression extends Node {
    constructor(def) {
        super('LogicalExpression');
        this.left = def.left;
        this.operator = def.operator;
        this.right = def.right;
    }

    generateCode(codegen) {
        var left = this.left;
        var operator = this.operator;
        var right = this.right;

        if (!left || !right) {
            throw new Error('Invalid LogicalExpression: ' + this);
        }

        generateCodeForOperand(left, codegen);
        codegen.write(' ');
        codegen.generateCode(operator);
        codegen.write(' ');
        generateCodeForOperand(right, codegen);
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: 'LogicalExpression',
            left: this.left,
            operator: this.operator,
            right: this.right
        };
    }

    walk(walker) {
        this.left = walker.walk(this.left);
        this.right = walker.walk(this.right);
    }

    toString() {
        var left = this.left;
        var operator = this.operator;
        var right = this.right;

        if (!left || !right) {
            throw new Error('Invalid LogicalExpression: ' + this);
        }

        return operandToString(left) + ' ' + operator + ' ' + operandToString(right);
    }
}

module.exports = LogicalExpression;
});
$rmod.def("/marko@3.0.0/compiler/ast/Vars", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class Vars extends Node {
    constructor(def) {
        super('Vars');
        this.kind = def.kind || 'var';
        this.declarations = def.declarations;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var declarations = this.declarations;
        var kind = this.kind;
        var isStatement = this.statement;
        var body = this.body;

        var hasBody = this.body && this.body.length;

        if(hasBody) {

            var scopedBody = [this].concat(this.body.items);
            this.body = null;

            return codegen.builder.selfInvokingFunction(scopedBody);
        }

        if (!declarations || !declarations.length) {
            return;
        }

        codegen.incIndent(4);

        for (let i=0; i<declarations.length; i++) {
            var declarator = declarations[i];

            if (i === 0) {
                codegen.write(kind + ' ');
            } else {
                codegen.writeLineIndent();
            }

            codegen.generateCode(declarator);

            if (i < declarations.length - 1) {
                codegen.write(',\n');
            } else {
                if (isStatement) {
                    codegen.write(';\n');
                }
            }
        }

        codegen.decIndent(4);

        if (hasBody) {
            codegen.generateCode(body);
        }
    }

    walk(walker) {
        this.argument = walker.walk(this.argument);
    }

    /**
     * "noOutput" should be true if the Node.js does not result in any HTML or Text output
     */
    get noOutput() {
        return !(this.body && this.body.length);
    }
}

module.exports = Vars;
});
$rmod.def("/marko@3.0.0/compiler/ast/Return", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class Return extends Node {
    constructor(def) {
        super('Return');
        this.argument = def.argument;
    }

    generateCode(codegen) {
        if (!codegen.inFunction) {
            throw new Error('"return" not allowed outside a function body');
        }

        var argument = this.argument;

        if (argument) {
            codegen.write('return ');
            codegen.generateCode(argument);
        } else {
            codegen.write('return');
        }
    }

    walk(walker) {
        this.argument = walker.walk(this.argument);
    }
}

module.exports = Return;
});
$rmod.def("/marko@3.0.0/compiler/ast/HtmlAttribute", function(require, exports, module, __filename, __dirname) { 'use strict';
var Node = require('./Node');
var Literal = require('./Literal');
var ok = require('assert'/*'assert'*/).ok;
var escapeXmlAttr = require('/$/marko/$/raptor-util/escapeXml'/*'raptor-util/escapeXml'*/).attr;
var compiler = require('../');

function isStringLiteral(node) {
    return node.type === 'Literal' && typeof node.value === 'string';
}

function isNoEscapeXml(node) {
    return node.type === 'AttributePlaceholder' &&
        node.escape === false;
}

function flattenAttrConcats(node) {
    // return [node];

    function flattenHelper(node) {
        if (node.type === 'BinaryExpression' && node.operator === '+') {
            let left = flattenHelper(node.left);
            let right = flattenHelper(node.right);

            var isString = left.isString || right.isString;

            if (isString) {
                return {
                    isString: true,
                    concats: left.concats.concat(right.concats)
                };
            } else {
                return {
                    isString: false,
                    concats: [node]
                };
            }

        }

        return {
            isString: isStringLiteral(node) || node.type === 'AttributePlaceholder',
            concats: [node]
        };
    }

    var final = flattenHelper(node);
    return final.concats;
}

function generateCodeForExpressionAttr(name, value, escape, codegen) {
    var flattenedConcats = flattenAttrConcats(value);
    var hasLiteral = false;

    for (let i=0; i<flattenedConcats.length; i++) {
        if (flattenedConcats[i].type === 'Literal') {
            hasLiteral = true;
            break;
        }
    }

    if (hasLiteral) {
        codegen.addWriteLiteral(' ' + name + '="');
        for (let i=0; i<flattenedConcats.length; i++) {
            var part = flattenedConcats[i];
            if (isStringLiteral(part)) {
                part.value = escapeXmlAttr(part.value);
            } else if (part.type === 'Literal') {

            } else if (isNoEscapeXml(part)) {
                part = codegen.builder.functionCall(codegen.builder.identifier('str'), [part]);
            } else {
                if (escape !== false) {
                    var escapeXmlAttrVar = codegen.getEscapeXmlAttrVar();
                    part = codegen.builder.functionCall(escapeXmlAttrVar, [part]);
                }
            }
            codegen.addWrite(part);
        }
        codegen.addWriteLiteral('"');
    } else {
        if (name === 'class') {
            // let builder = codegen.builder;
            // let valueWithEscaping = handleEscaping(value);
            let classAttrVar = codegen.addStaticVar('classAttr', '__helpers.ca');
            codegen.addWrite(codegen.builder.functionCall(classAttrVar, [value]));
        } else if (name === 'style') {
            // let builder = codegen.builder;
            // let valueWithEscaping = handleEscaping(value);
            let styleAttrVar = codegen.addStaticVar('styleAttr', '__helpers.sa');
            codegen.addWrite(codegen.builder.functionCall(styleAttrVar, [value]));
        } else {
            // let builder = codegen.builder;
            // let valueWithEscaping = handleEscaping(value);
            let attrVar = codegen.addStaticVar('attr', '__helpers.a');

            if (escape === false || isNoEscapeXml(value)) {
                escape = false;
            }

            let attrArgs = [codegen.builder.literal(name), value];

            if (escape === false) {
                attrArgs.push(codegen.builder.literal(false));
            }
            codegen.addWrite(codegen.builder.functionCall(attrVar, attrArgs));
        }
    }
}


class HtmlAttribute extends Node {
    constructor(def) {
        super('HtmlAttribute');

        ok(def, 'Invalid attribute definition');
        this.type = 'HtmlAttribute';
        this.name = def.name;
        this.value = def.value;
        this.rawValue = def.rawValue;
        this.escape = def.escape;

        if (typeof this.value === 'string') {
            this.value = compiler.builder.parseExpression(this.value);
        }

        if (this.value && !(this.value instanceof Node)) {
            throw new Error('"value" should be a Node instance');
        }

        this.argument = def.argument;

        this.def = def.def; // The attribute definition loaded from the taglib (if any)
    }

    isLiteralValue() {
        return this.value instanceof Literal;
    }

    isLiteralString() {
        return this.isLiteralValue() &&
            typeof this.value.value === 'string';
    }

    isLiteralBoolean() {
        return this.isLiteralValue() &&
            typeof this.value.value === 'boolean';
    }

    generateHtmlCode(codegen) {
        let name = this.name;
        let value = this.value;
        let argument = this.argument;
        let escape = this.escape !== false;

        if (!name) {
            return;
        }

        if (this.isLiteralValue()) {
            var literalValue = value.value;
            if (typeof literalValue === 'boolean' || literalValue === '') {
                if (literalValue === true || literalValue === '') {
                    codegen.addWriteLiteral(' ' + name);
                }
            } else if (literalValue != null) {
                codegen.addWriteLiteral(' ' + name + '="' + escapeXmlAttr(literalValue) + '"');
            }

        } else if (value != null) {
            codegen.isInAttribute = true;
            generateCodeForExpressionAttr(name, value, escape, codegen);
            codegen.isInAttribute = false;
        } else if (argument) {
            codegen.addWriteLiteral(' ' + name + '(');
            codegen.addWriteLiteral(argument);
            codegen.addWriteLiteral(')');
        } else {
            // Attribute with no value is a boolean attribute
            codegen.addWriteLiteral(' ' + name);
        }
    }

    walk(walker) {
        this.value = walker.walk(this.value);
    }

    get literalValue() {
        if (this.isLiteralValue()) {
            return this.value.value;
        } else {
            throw new Error('Attribute value is not a literal value. Actual: ' + JSON.stringify(this.value, null, 2));
        }
    }
}

HtmlAttribute.isHtmlAttribute = function(attr) {
    return (attr instanceof HtmlAttribute);
};

module.exports = HtmlAttribute;
});
$rmod.def("/marko@3.0.0/compiler/ast/HtmlAttributeCollection", function(require, exports, module, __filename, __dirname) { 'use strict';

var ok = require('assert'/*'assert'*/).ok;

var HtmlAttribute = require('./HtmlAttribute');
var Node = require('./Node');

class HtmlAttributeCollection {
    constructor(attributes) {
        this.replaceAttributes(attributes);
    }

    addAttribute(newAttr) {
        if (arguments.length === 2) {
            let name = arguments[0];
            let expression = arguments[1];
            newAttr = new HtmlAttribute(name, expression);
        } else if (!HtmlAttribute.isHtmlAttribute(newAttr)) {
            newAttr = new HtmlAttribute(newAttr);
        }

        var name = newAttr.name;

        if (this.lookup.hasOwnProperty(name)) {
            for (var i=0; i<this.all.length; i++) {
                var curAttr = this.all[i];
                if (curAttr.name === name) {
                    this.all.splice(i, 1);
                    break;
                }
            }
        }

        if (name) {
            this.lookup[name] = newAttr;
        }

        this.all.push(newAttr);
    }

    removeAttribute(name) {
        ok(typeof name === 'string', 'Invalid attribute name');

        if (!this.lookup.hasOwnProperty(name)) {
            return false;
        }

        delete this.lookup[name];

        for (var i=0; i<this.all.length; i++) {
            var curAttr = this.all[i];
            if (curAttr.name === name) {
                this.all.splice(i, 1);
                break;
            }
        }

        return true;
    }

    renameAttribute(oldName, newName) {
        var key = oldName;

        var attr = this.lookup[key];
        if (!attr) {
            return;
        }

        attr.name = newName;
        delete this.lookup[key];
        this.lookup[key] = attr;
    }

    removeAllAttributes() {
        this.replaceAttributes([]);
    }

    hasAttribute(name) {
        ok(typeof name === 'string', 'Invalid attribute name');
        return this.lookup.hasOwnProperty(name);
    }

    hasAttributes() {
        return this.all.length > 0;
    }

    getAttribute(name) {
        return this.lookup[name];
    }

    setAttributeValue(name, value) {
        var attr = this.getAttribute(name);
        if (attr) {
            attr.value = value;
        } else {
            this.addAttribute({
                name: name,
                value: value
            });
        }
    }

    getAttributes() {
        return this.all;
    }

    toJSON() {
        return this.all;
    }

    toString() {
        return JSON.stringify(this.all);
    }

    replaceAttributes(attributes) {
        this.all = [];
        this.lookup = {};

        if (attributes) {
            if (Array.isArray(attributes)) {
                attributes.forEach((attr) => {
                    this.addAttribute(attr);
                });
            } else {
                for (var attrName in attributes) {
                    if (attributes.hasOwnProperty(attrName)) {
                        let attrValue = attributes[attrName];
                        let attrDef;

                        if (attrValue != null && typeof attrValue === 'object' && !(attrValue instanceof Node)) {
                            attrDef = attrValue;
                            attrDef.name = attrName;
                        } else {
                            attrDef = {
                                name: attrName,
                                value: attrValue
                            };
                        }

                        this.addAttribute(attrDef);
                    }
                }
            }
        }
    }

    walk(walker) {
        var newAttributes = walker.walk(this.all);
        this.replaceAttributes(newAttributes);
    }
}

module.exports = HtmlAttributeCollection;
});
$rmod.def("/marko@3.0.0/compiler/ast/HtmlElement", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var Literal = require('./Literal');
var HtmlAttributeCollection = require('./HtmlAttributeCollection');

class StartTag extends Node {
    constructor(def) {
        super('StartTag');

        this.tagName = def.tagName;
        this.attributes = def.attributes;
        this.argument = def.argument;
        this.selfClosed = def.selfClosed;
        this.dynamicAttributes = def.dynamicAttributes;
    }

    generateCode(codegen) {
        var builder = codegen.builder;

        var tagName = this.tagName;
        var selfClosed = this.selfClosed;
        var dynamicAttributes = this.dynamicAttributes;

        // Starting tag
        codegen.addWriteLiteral('<');

        codegen.addWrite(tagName);

        var attributes = this.attributes;

        if (attributes) {
            for (let i=0; i<attributes.length; i++) {
                let attr = attributes[i];
                codegen.generateCode(attr);
            }
        }

        if (dynamicAttributes) {
            dynamicAttributes.forEach(function(attrsExpression) {
                codegen.addStaticVar('attrs', '__helpers.as');
                let attrsFunctionCall = builder.functionCall('attrs', [attrsExpression]);
                codegen.addWrite(attrsFunctionCall);
            });
        }

        if (selfClosed) {
            codegen.addWriteLiteral('/>');
        } else {
            codegen.addWriteLiteral('>');
        }
    }
}

class EndTag extends Node {
    constructor(def) {
        super('EndTag');
        this.tagName = def.tagName;
    }

    generateCode(codegen) {
        var tagName = this.tagName;
        codegen.addWriteLiteral('</');
        codegen.addWrite(tagName);
        codegen.addWriteLiteral('>');
    }
}

class HtmlElement extends Node {
    constructor(def) {
        super('HtmlElement');
        this.tagName = null;
        this.tagNameExpression = null;
        this.setTagName(def.tagName);
        this._attributes = def.attributes;
        this.body = this.makeContainer(def.body);
        this.argument = def.argument;

        if (!(this._attributes instanceof HtmlAttributeCollection)) {
            this._attributes = new HtmlAttributeCollection(this._attributes);
        }

        this.openTagOnly = def.openTagOnly;
        this.selfClosed = def.selfClosed;
        this.dynamicAttributes = undefined;
        this.bodyOnlyIf = undefined;
    }

    generateHtmlCode(codegen) {
        var tagName = this.tagName;

        // Convert the tag name into a Node so that we generate the code correctly
        if (tagName) {
            tagName = codegen.builder.literal(tagName);
        } else {
            tagName = this.tagNameExpression;
        }

        var context = codegen.context;

        if (context.isMacro(this.tagName)) {
            // At code generation time, if this tag corresponds to a registered macro
            // then invoke the macro based on this HTML element instead of generating
            // the code to render an HTML element.
            return codegen.builder.invokeMacroFromEl(this);
        }

        var attributes = this._attributes && this._attributes.all;
        var body = this.body;
        var argument = this.argument;
        var hasBody = body && body.length;
        var openTagOnly = this.openTagOnly;
        var bodyOnlyIf = this.bodyOnlyIf;
        var dynamicAttributes = this.dynamicAttributes;
        var selfClosed = this.selfClosed === true;

        var builder = codegen.builder;

        if (hasBody || bodyOnlyIf) {
            openTagOnly = false;
            selfClosed = false;
        } else if (selfClosed){
            openTagOnly = true;
        }

        var startTag = new StartTag({
            tagName: tagName,
            attributes: attributes,
            argument: argument,
            selfClosed: selfClosed,
            dynamicAttributes: dynamicAttributes
        });

        var endTag;

        if (!openTagOnly) {
            endTag = new EndTag({
                tagName: tagName
            });
        }

        if (bodyOnlyIf) {
            var startIf = builder.ifStatement(builder.negate(bodyOnlyIf), [
                startTag
            ]);

            var endIf = builder.ifStatement(builder.negate(bodyOnlyIf), [
                endTag
            ]);

            return [
                startIf,
                body,
                endIf
            ];
        } else {
            if (openTagOnly) {
                codegen.generateCode(startTag);
            } else {
                return [
                    startTag,
                    body,
                    endTag
                ];
            }
        }
    }

    addDynamicAttributes(expression) {
        if (!this.dynamicAttributes) {
            this.dynamicAttributes = [];
        }

        this.dynamicAttributes.push(expression);
    }

    getAttribute(name) {
        return this._attributes != null && this._attributes.getAttribute(name);
    }

    getAttributeValue(name) {
        var attr = this._attributes != null && this._attributes.getAttribute(name);
        if (attr) {
            return attr.value;
        }
    }

    addAttribute(attr) {
        this._attributes.addAttribute(attr);
    }

    setAttributeValue(name, value) {
        this._attributes.setAttributeValue(name, value);
    }

    replaceAttributes(newAttributes) {
        this._attributes.replaceAttributes(newAttributes);
    }

    removeAttribute(name) {
        if (this._attributes) {
            this._attributes.removeAttribute(name);
        }
    }

    removeAllAttributes() {
        this._attributes.removeAllAttributes();
    }

    hasAttribute(name) {
        return this._attributes != null && this._attributes.hasAttribute(name);
    }

    getAttributes() {
        return this._attributes.all;
    }

    get attributes() {
        return this._attributes.all;
    }

    forEachAttribute(callback, thisObj) {
        var attributes = this._attributes.all.concat([]);

        for (let i=0, len=attributes.length; i<len; i++) {
            callback.call(thisObj, attributes[i]);
        }
    }

    setTagName(tagName) {
        this.tagName = null;
        this.tagNameExpression = null;

        if (tagName instanceof Node) {
            if (tagName instanceof Literal) {
                this.tagName = tagName.value;
                this.tagNameExpression = tagName;
            } else {
                this.tagNameExpression = tagName;
            }
        } else if (typeof tagName === 'string') {
            this.tagNameExpression = new Literal({value: tagName});
            this.tagName = tagName;
        }
    }

    toJSON() {
        return {
            type: this.type,
            tagName: this.tagName,
            attributes: this._attributes,
            argument: this.argument,
            body: this.body,
            bodyOnlyIf: this.bodyOnlyIf,
            dynamicAttributes: this.dynamicAttributes
        };
    }

    setBodyOnlyIf(condition) {
        this.bodyOnlyIf = condition;
    }

    walk(walker) {
        this.setTagName(walker.walk(this.tagNameExpression));
        this._attributes.walk(walker);
        this.body = walker.walk(this.body);
    }
}

module.exports = HtmlElement;
});
$rmod.def("/marko@3.0.0/compiler/ast/Html", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class Html extends Node {
    constructor(def) {
        super('Html');
        this.argument = def.argument;
    }

    isLiteral() {
        return this.argument instanceof Node && this.argument.type === 'Literal';
    }

    generateHtmlCode(codegen) {
        let argument = this.argument;
        codegen.addWrite(argument);
    }

    walk(walker) {
        this.argument = walker.walk(this.argument);
    }
}

module.exports = Html;
});
$rmod.def("/marko@3.0.0/compiler/ast/Text", function(require, exports, module, __filename, __dirname) { 'use strict';

var ok = require('assert'/*'assert'*/).ok;
var Node = require('./Node');
var Literal = require('./Literal');
var escapeXml = require('/$/marko/$/raptor-util/escapeXml'/*'raptor-util/escapeXml'*/);

function trim(textNode) {
    if (textNode.preserveWhitespace === true) {
        return;
    }

    var text = textNode.argument.value;
    var isFirst = textNode.isFirst;
    var isLast = textNode.isLast;

    if (isFirst) {
        //First child
        text = text.replace(/^\n\s*/g, '');
    }
    if (isLast) {
        //Last child
        text = text.replace(/\n\s*$/g, '');
    }
    if (/^\n\s*$/.test(text)) {
        //Whitespace between elements
        text = '';
    }
    text = text.replace(/\s+/g, ' ');
    textNode.argument.value = text;
}

class Text extends Node {
    constructor(def) {
        super('Text');
        this.argument = def.argument;
        this.escape = def.escape !== false;
        this.normalized = false;
        this.isFirst = false;
        this.isLast = false;
        this.preserveWhitespace = def.preserveWhitespace === true;

        ok(this.argument, 'Invalid argument');
    }

    isLiteral() {
        return this.argument instanceof Node && this.argument.type === 'Literal';
    }

    generateHtmlCode(codegen) {
        this.normalizeText(codegen);



        var argument = this.argument;
        var escape = this.escape !== false;

        if (argument instanceof Literal) {
            if (!argument.value) {
                return;
            }

            if (escape === true) {
                argument.value = escapeXml(argument.value.toString());
            }
        } else {
            let builder = codegen.builder;

            if (escape) {
                // TODO Only escape the parts that need to be escaped if it is a compound expression with static
                //      text parts
                argument = builder.functionCall(
                    'escapeXml',
                    [argument]);
            } else {
                argument = builder.functionCall(builder.identifier('str'), [ argument ]);
            }
        }

        codegen.addWrite(argument);
    }

    normalizeText(codegen) {
        if (this.normalized || codegen.context.isPreserveWhitespace() || this.preserveWhitespace === true) {
            return;
        }

        var parentNode = this.parentNode;
        if (parentNode) {
            if (parentNode.isPreserveWhitespace()) {
                return;
            }
        }

        var container = this.container;
        if (!container) {
            return;
        }

        var isFirst = true;

        var currentTextLiteral = null;
        var literalTextNodes = [];

        container.forEach((curChild) => {
            if (curChild.noOutput) {
                // Skip over AST nodes that produce no HTML output
                return;
            }

            if (curChild.type === 'Text') {
                curChild.normalized = true;
            }

            if (curChild.type === 'Text' && curChild.isLiteral()) {
                if (currentTextLiteral &&
                        currentTextLiteral.preserveWhitespace === curChild.preserveWhitespace &&
                        currentTextLiteral.escape === curChild.escape) {
                    currentTextLiteral.argument.value += curChild.argument.value;
                    curChild.detach();
                } else {
                    currentTextLiteral = curChild;
                    literalTextNodes.push(currentTextLiteral);
                    if (isFirst) {
                        currentTextLiteral.isFirst = true;
                    }
                }
            } else {
                currentTextLiteral = null;
            }

            isFirst = false;
        });

        if (currentTextLiteral) {
            // Last child text
            currentTextLiteral.isLast = true;
        }

        literalTextNodes.forEach(trim);


    }

    isWhitespace() {
        var argument = this.argument;
        return (argument instanceof Literal) &&
            (typeof argument.value === 'string') &&
            (argument.value.trim() === '');
    }

    appendText(text) {
        if (!this.isLiteral()) {
            throw new Error('Text cannot be appended to a non-literal Text node');
        }

        this.argument.value += text;
    }

    toJSON() {
        return {
            type: this.type,
            argument: this.argument
        };
    }
}

module.exports = Text;
});
$rmod.def("/marko@3.0.0/compiler/ast/ForEach", function(require, exports, module, __filename, __dirname) { 'use strict';
var ok = require('assert'/*'assert'*/).ok;
var Node = require('./Node');

class ForEach extends Node {
    constructor(def) {
        super('ForEach');
        this.varName = def.varName;
        this.in = def.in;
        this.body = this.makeContainer(def.body);
        this.separator = def.separator;
        this.statusVarName = def.statusVarName;
        this.iterator = def.iterator;

        ok(this.varName, '"varName" is required');
        ok(this.in != null, '"in" is required');
    }

    generateCode(codegen) {
        var varName = this.varName;
        var inExpression = this.in;
        var separator = this.separator;
        var statusVarName = this.statusVarName;
        var iterator = this.iterator;

        var builder = codegen.builder;

        if (separator && !statusVarName) {
            statusVarName = '__loop';
        }

        if (iterator) {
            let params = [varName];

            if (statusVarName) {
                params.push(statusVarName);
            }

            return builder.functionCall(iterator, [
                inExpression,
                builder.functionDeclaration(null, params, this.body)
            ]);
        } else if (statusVarName) {
            let forEachVarName = codegen.addStaticVar('forEachWithStatusVar', '__helpers.fv');
            let body = this.body;

            if (separator) {
                let isNotLastTest = builder.functionCall(
                    builder.memberExpression(statusVarName, builder.identifier('isLast')),
                    []);

                isNotLastTest = builder.negate(isNotLastTest);

                body = body.items.concat([
                    builder.ifStatement(isNotLastTest, [
                        builder.text(separator)
                    ])
                ]);
            }

            return builder.functionCall(forEachVarName, [
                inExpression,
                builder.functionDeclaration(null, [varName, statusVarName], body)
            ]);
        } else {
            let forEachVarName = codegen.addStaticVar('forEach', '__helpers.f');

            return builder.functionCall(forEachVarName, [
                inExpression,
                builder.functionDeclaration(null, [varName], this.body)
            ]);
        }

    }

    walk(walker) {
        this.varName = walker.walk(this.varName);
        this.in = walker.walk(this.in);
        this.body = walker.walk(this.body);
        this.separator = walker.walk(this.separator);
        this.statusVarName = walker.walk(this.statusVarName);
        this.iterator = walker.walk(this.iterator);
    }
}

module.exports = ForEach;
});
$rmod.def("/marko@3.0.0/compiler/ast/ForEachProp", function(require, exports, module, __filename, __dirname) { 'use strict';
var ok = require('assert'/*'assert'*/).ok;
var Node = require('./Node');

class ForEachProp extends Node {
    constructor(def) {
        super('ForEachProp');
        this.nameVarName = def.nameVarName;
        this.valueVarName = def.valueVarName;
        this.in = def.in;
        this.body = this.makeContainer(def.body);

        ok(this.nameVarName, '"nameVarName" is required');
        ok(this.valueVarName != null, '"valueVarName" is required');
        ok(this.in != null, '"in" is required');
    }

    generateCode(codegen) {
        var nameVarName = this.nameVarName;
        var valueVarName = this.valueVarName;
        var inExpression = this.in;
        var body = this.body;

        var builder = codegen.builder;

        let forEachVarName = codegen.addStaticVar('forEachProp', '__helpers.fp');

        return builder.functionCall(forEachVarName, [
            inExpression,
            builder.functionDeclaration(null, [nameVarName, valueVarName], body)
        ]);

    }

    walk(walker) {
        this.nameVarName = walker.walk(this.nameVarName);
        this.valueVarName = walker.walk(this.valueVarName);
        this.in = walker.walk(this.in);
        this.body = walker.walk(this.body);
    }
}

module.exports = ForEachProp;
});
$rmod.def("/marko@3.0.0/compiler/ast/ForRange", function(require, exports, module, __filename, __dirname) { 'use strict';
var ok = require('assert'/*'assert'*/).ok;
var Node = require('./Node');
var Literal = require('./Literal');
var Identifier = require('./Identifier');

class ForRange extends Node {
    constructor(def) {
        super('ForRange');
        this.varName = def.varName;
        this.body = this.makeContainer(def.body);
        this.from = def.from;
        this.to = def.to;
        this.step = def.step;

        ok(this.varName, '"varName" is required');
        ok(this.from != null, '"from" is required');
    }

    generateCode(codegen) {
        var varName = this.varName;
        var from = this.from;
        var to = this.to;
        var step = this.step;

        var builder = codegen.builder;

        var comparison = '<=';

        if (varName instanceof Identifier) {
            varName = varName.name;
        }

        var updateExpression;

        if (step == null) {
            let fromLiteral = (from instanceof Literal) && from.value;
            let toLiteral = (to instanceof Literal) && to.value;

            if (typeof fromLiteral === 'number' && typeof toLiteral === 'number') {
                if (fromLiteral > toLiteral) {
                    updateExpression = varName + '--';
                    comparison = '>=';
                } else {
                    updateExpression = varName + '++';
                }
            }
        } else {
            let stepLiteral;

            if (step instanceof Literal) {
                stepLiteral = step.value;
            } else if (typeof step === 'number') {
                stepLiteral = step;
            }

            if (typeof stepLiteral === 'number') {
                if (stepLiteral < 0) {
                    comparison = '>=';
                }

                if (stepLiteral === 1) {
                    updateExpression = varName + '++';
                } else if (stepLiteral  === -1) {
                    updateExpression = varName + '--';
                } else if (stepLiteral > 0) {
                    updateExpression = varName + ' += ' + stepLiteral;
                } else if (stepLiteral === 0) {
                    throw new Error('Invalid step of 0');
                } else if (stepLiteral < 0) {
                    stepLiteral = 0-stepLiteral; // Make the step positive and switch to -=
                    updateExpression = varName + ' -= ' + stepLiteral;
                }
            } else {
                updateExpression = builder.assignment(varName, step, '+=');
            }
        }

        if (updateExpression == null) {
            updateExpression = varName + '++';
        }

        return builder.selfInvokingFunction([
            builder.forStatement({
                init: [
                    builder.vars([ { id: varName, init: from }])
                ],
                test: builder.binaryExpression(varName, comparison, to),
                update: updateExpression,
                body: this.body
            })
        ]);
    }

    walk(walker) {
        this.varName = walker.walk(this.varName);
        this.body = walker.walk(this.body);
        this.from = walker.walk(this.from);
        this.to = walker.walk(this.to);
        this.step = walker.walk(this.step);
    }
}

module.exports = ForRange;
});
$rmod.def("/marko@3.0.0/compiler/ast/Slot", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class Slot extends Node {
    constructor(def) {
        super('Slot');
        this.onDone = def.onDone;
        this.codegenSlot = null;
    }

    generateCode(codegen) {
        if (this.onDone) {
            codegen.onDone((codegen) => {
                this.onDone(this, codegen);
            });
        }
        // At the time the code for this node is to be generated we instead
        // create a slot. A slot is just a marker in the output code stream
        // that we can later inject code into. The injection happens after
        // the entire tree has been walked.
        this.codegenSlot = codegen.beginSlot(this);
    }

    setContent(content) {
        this.codegenSlot.setContent(content);
    }

    toJSON() {
        return {
            type: this.type
        };
    }
}

module.exports = Slot;
});
$rmod.def("/marko@3.0.0/compiler/ast/HtmlComment", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class HtmlComment extends Node {
    constructor(def) {
        super('HtmlComment');
        this.comment = def.comment;
    }

    generateHtmlCode(codegen) {
        var comment = this.comment;
        var literal = codegen.builder.literal;

        codegen.addWrite(literal('<!--'));
        codegen.addWrite(comment);
        codegen.addWrite(literal('-->'));
    }

    walk(walker) {
        this.comment = walker.walk(this.comment);
    }
}

module.exports = HtmlComment;
});
$rmod.def("/marko@3.0.0/compiler/ast/SelfInvokingFunction", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class SelfInvokingFunction extends Node {
    constructor(def) {
        super('SelfInvokingFunction');
        this.params = def.params;
        this.args = def.args;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var params = this.params || [];
        var args = this.args || [];
        var body = this.body;

        codegen.write('(');
        var functionDeclaration = codegen.builder.functionDeclaration(null, params, body);
        var functionCall = codegen.builder.functionCall(functionDeclaration, args);
        codegen.generateCode(functionCall);

        codegen.write(')');
    }

    walk(walker) {
        this.params = walker.walk(this.params);
        this.args = walker.walk(this.args);
        this.body = walker.walk(this.body);
    }
}

module.exports = SelfInvokingFunction;
});
$rmod.def("/marko@3.0.0/compiler/ast/ForStatement", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class ForStatement extends Node {
    constructor(def) {
        super('ForStatement');
        this.init = def.init;
        this.test = def.test;
        this.update = def.update;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var init = this.init;
        var test = this.test;
        var update = this.update;
        var body = this.body;

        codegen.write('for (');

        if (init) {
            codegen.generateCode(init);
        }

        codegen.write('; ');

        if (test) {
            codegen.generateCode(test);
        }

        codegen.write('; ');

        if (update) {
            codegen.generateCode(update);
        }

        codegen.write(') ');

        codegen.generateBlock(body);

        codegen.write('\n');
    }

    walk(walker) {
        this.init = walker.walk(this.init);
        this.test = walker.walk(this.test);
        this.update = walker.walk(this.update);
        this.body = walker.walk(this.body);
    }
}

module.exports = ForStatement;
});
$rmod.def("/marko@3.0.0/compiler/ast/UpdateExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var isCompoundExpression = require('../util/isCompoundExpression');

class UpdateExpression extends Node {
    constructor(def) {
        super('UpdateExpression');
        this.argument = def.argument;
        this.operator = def.operator;
        this.prefix = def.prefix === true;
    }

    generateCode(codegen) {
        var argument = this.argument;
        var operator = this.operator;
        var prefix = this.prefix;

        if (prefix) {
            codegen.generateCode(operator);
        }

        var wrap = isCompoundExpression(argument);

        if (wrap) {
            codegen.write('(');
        }

        codegen.generateCode(argument);

        if (wrap) {
            codegen.write(')');
        }

        if (!prefix) {
            codegen.generateCode(operator);
        }
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: 'UpdateExpression',
            argument: this.argument,
            operator: this.operator,
            prefix: this.prefix
        };
    }

    walk(walker) {
        this.argument = walker.walk(this.argument);
    }

    toString() {
        var argument = this.argument;
        var operator = this.operator;
        var prefix = this.prefix;

        let result = '';

        if (prefix) {
            result += operator;
        }

        var wrap = isCompoundExpression(argument);

        if (wrap) {
            result += '(';
        }

        result += argument;

        if (wrap) {
            result += ')';
        }

        if (!prefix) {
            result += operator;
        }

        return result;
    }
}

module.exports = UpdateExpression;
});
$rmod.def("/marko@3.0.0/compiler/ast/UnaryExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var isCompoundExpression = require('../util/isCompoundExpression');

class UnaryExpression extends Node {
    constructor(def) {
        super('UnaryExpression');
        this.argument = def.argument;
        this.operator = def.operator;
        this.prefix = def.prefix === true;
    }

    generateCode(codegen) {
        var argument = this.argument;
        var operator = this.operator;
        var prefix = this.prefix;

        if (prefix) {
            codegen.write(operator);

            if (operator === 'typeof' || operator === 'delete') {
                codegen.write(' ');
            }
        }

        var wrap = isCompoundExpression(argument);

        if (wrap) {
            codegen.write('(');
        }

        codegen.generateCode(argument);

        if (wrap) {
            codegen.write(')');
        }

        if (!prefix) {
            codegen.write(operator);
        }
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: 'UnaryExpression',
            argument: this.argument,
            operator: this.operator,
            prefix: this.prefix
        };
    }

    walk(walker) {
        this.argument = walker.walk(this.argument);
    }

    toString() {
        var argument = this.argument;
        var operator = this.operator;
        var prefix = this.prefix;

        let result = '';

        if (prefix) {
            result += operator;

            if (operator === 'typeof' || operator === 'delete') {
                result += ' ';
            }
        }

        var wrap = isCompoundExpression(argument);

        if (wrap) {
            result += '(';
        }

        result += argument;

        if (wrap) {
            result += ')';
        }

        if (!prefix) {
            result += operator;
        }

        return result;
    }
}

module.exports = UnaryExpression;
});
$rmod.def("/marko@3.0.0/compiler/ast/MemberExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class MemberExpression extends Node {
    constructor(def) {
        super('MemberExpression');
        this.object = def.object;
        this.property = def.property;
        this.computed = def.computed;
    }

    generateCode(codegen) {
        var object = this.object;
        var property = this.property;
        var computed = this.computed;

        codegen.generateCode(object);

        if (computed) {
            codegen.write('[');
            codegen.generateCode(property);
            codegen.write(']');
        } else {
            codegen.write('.');
            codegen.generateCode(property);
        }
    }

    toJSON() {
        return {
            type: 'MemberExpression',
            object: this.object,
            property: this.property,
            computed: this.computed
        };
    }

    walk(walker) {
        this.object = walker.walk(this.object);
        this.property = walker.walk(this.property);
    }

    toString() {
        var object = this.object;
        var property = this.property;
        var computed = this.computed;

        var result = object.toString();

        if (computed) {
            result += '[' + property + ']';
        } else {
            result += '.' + property;
        }

        return result;
    }
}

module.exports = MemberExpression;
});
$rmod.def("/marko@3.0.0/compiler/util/adjustIndent", function(require, exports, module, __filename, __dirname) { var splitLinesRegExp = /\r?\n/;
var initialIndentationRegExp = /^\s+/;

function removeInitialEmptyLines(lines) {
    var i;

    for (i=0; i<lines.length; i++) {
        if (lines[i].trim() !== '') {
            break;
        }
    }

    if (i !== 0) {
        lines = lines.slice(i);
    }

    return lines;
}

function removeTrailingEmptyLines(lines) {
    var i;
    var last = lines.length-1;

    for (i=last; i>=0; i--) {
        if (lines[i].trim() !== '') {
            break;
        }
    }

    if (i !== last) {
        lines = lines.slice(0, i+1);
    }

    return lines;
}

function adjustIndent(str, newIndentation) {
    if (!str) {
        return str;
    }

    var lines = str.split(splitLinesRegExp);
    lines = removeInitialEmptyLines(lines);
    lines = removeTrailingEmptyLines(lines);

    if (lines.length === 0) {
        return '';
    }

    var initialIndentationMatches = initialIndentationRegExp.exec(lines[0]);

    var indentation = initialIndentationMatches ? initialIndentationMatches[0] : '';
    if (!indentation && !newIndentation) {
        return str;
    }

    lines.forEach((line, i) => {
        if (line.startsWith(indentation)) {
            line = line.substring(indentation.length);
        }

        lines[i] = line;
    });

    return newIndentation ?
        lines.join('\n' + newIndentation) :
        lines.join('\n');
}

module.exports = adjustIndent;
});
$rmod.def("/marko@3.0.0/compiler/ast/Code", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var adjustIndent = require('../util/adjustIndent');

class Code extends Node {
    constructor(def) {
        super('Code');
        this.value = def.value;
    }

    generateCode(codegen) {
        var code = this.value;

        if (!code) {
            return;
        }

        code = adjustIndent(code, codegen.currentIndent);

        codegen.write(code);
    }
}

module.exports = Code;
});
$rmod.def("/marko@3.0.0/compiler/ast/InvokeMacro", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var ok = require('assert'/*'assert'*/).ok;

function removeTrailingUndefineds(args) {
    var i;
    var last = args.length-1;

    for (i=last; i>=0; i--) {
        if (args[i].type !== 'Literal' || args[i].value !== undefined) {
            break;
        }
    }

    if (i !== last) {
        args = args.slice(0, i+1);
    }

    return args;
}


class InvokeMacro extends Node {
    constructor(def) {
        super('InvokeMacro');
        this.el = def.el;
        this.name = def.name;
        this.args = def.args;
        this.body = this.makeContainer(def.body);

        if (this.name != null) {
            ok(typeof this.name === 'string', 'Invalid macro name: ' + this.name);
        }
    }

    generateCode(codegen) {
        var el = this.el;
        var name = this.name;
        var args = this.args;
        var body = this.body;

        var builder = codegen.builder;

        var macroDef;

        if (el) {
            name = el.tagName;
            body = el.body;

            if (typeof name !== 'string') {
                codegen.context.addError(el, 'Element node with a dynamic tag name cannot be used to invoke a macro', 'ERR_INVOKE_MACRO');
                return;
            }

            macroDef = codegen.context.getRegisteredMacro(name);

            if (!macroDef) {
                codegen.context.addError(el, 'Element node does not correspond to a macro', 'ERR_INVOKE_MACRO');
                return;
            }

            if (el.argument) {
                args = builder.parseJavaScriptArgs(el.argument);
            } else {
                args = new Array(macroDef.params.length);
                for (let i=0; i<args.length; i++) {
                    args[i] = builder.literal(undefined);
                }

                el.forEachAttribute((attr) => {
                    var paramName = attr.name;
                    var paramIndex = macroDef.getParamIndex(paramName);
                    if (paramIndex == null) {
                        codegen.context.addError(el, 'The "' + name + '" macro does not have a parameter named "' + paramName + '"', 'ERR_INVOKE_MACRO');
                        return;
                    }

                    var value = attr.value;
                    if (value == null) {
                        value = builder.literal(true);
                    }
                    args[paramIndex] = value;
                });
            }
        } else {
            macroDef = codegen.context.getRegisteredMacro(name);
            if (!macroDef) {
                codegen.addError('Macro not found with name "' + name + '"', 'ERR_INVOKE_MACRO');
                return;
            }
        }

        if (!args) {
            args = [];
        }

        while (args.length < macroDef.params.length) {
            args.push(builder.literal(undefined));
        }

        if (body && body.length) {
            args[macroDef.getParamIndex('renderBody')] = builder.renderBodyFunction(body);
        }

        args[macroDef.getParamIndex('out')] = builder.identifier('out');

        args = removeTrailingUndefineds(args);

        return builder.functionCall(builder.identifier(macroDef.functionName), args);
    }

    walk(walker) {
        this.el = walker.walk(this.el);
        this.name = walker.walk(this.name);
        this.args = walker.walk(this.args);
        this.body = walker.walk(this.body);
    }
}

module.exports = InvokeMacro;
});
$rmod.def("/marko@3.0.0/compiler/ast/Macro", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var ok = require('assert'/*'assert'*/).ok;

class Macro extends Node {
    constructor(def) {
        super('Macro');
        this.name = def.name;
        this.params = def.params;
        this.body = this.makeContainer(def.body);

        if (this.params == null) {
            this.params = [];
        } else {
            ok(Array.isArray(this.params), '"params" should be an array');
        }
    }

    generateCode(codegen) {
        var name = this.name;
        var params = this.params || [];

        var body = this.body;

        var builder = codegen.builder;

        var macroDef = codegen.context.registerMacro(name, params);
        var functionName = macroDef.functionName;
        return builder.functionDeclaration(functionName, macroDef.params, body);
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = Macro;
});
$rmod.def("/marko@3.0.0/compiler/ast/ConditionalExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class ConditionalExpression extends Node {
    constructor(def) {
        super('ConditionalExpression');
        this.test = def.test;
        this.consequent = def.consequent;
        this.alternate = def.alternate;
    }

    generateCode(codegen) {
        var test = this.test;
        var consequent = this.consequent;
        var alternate = this.alternate;


        codegen.generateCode(test);
        codegen.write(' ? ');
        codegen.generateCode(consequent);
        codegen.write(' : ');
        codegen.generateCode(alternate);
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: 'ConditionalExpression',
            test: this.test,
            consequent: this.consequent,
            alternate: this.alternate
        };
    }

    walk(walker) {
        this.test = walker.walk(this.test);
        this.consequent = walker.walk(this.consequent);
        this.alternate = walker.walk(this.alternate);
    }

    toString() {
        var test = this.test;
        var consequent = this.consequent;
        var alternate = this.alternate;
        return test.toString() + ' ? ' + consequent + ' : ' + alternate;
    }
}

module.exports = ConditionalExpression;
});
$rmod.def("/marko@3.0.0/compiler/ast/NewExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var isCompoundExpression = require('../util/isCompoundExpression');

class NewExpression extends Node {
    constructor(def) {
        super('NewExpression');
        this.callee = def.callee;
        this.args = def.args;
    }

    generateCode(codegen) {
        var callee = this.callee;
        var args = this.args;

        codegen.write('new ');

        var wrap = isCompoundExpression(callee);

        if (wrap) {
            codegen.write('(');
        }

        codegen.generateCode(callee);

        if (wrap) {
            codegen.write(')');
        }

        codegen.write('(');

        if (args && args.length) {
            for (let i=0, argsLen = args.length; i<argsLen; i++) {
                if (i !== 0) {
                    codegen.write(', ');
                }

                let arg = args[i];
                if (!arg) {
                    throw new Error('Arg ' + i + ' is not valid for new expression: ' + JSON.stringify(this.toJSON()));
                }
                codegen.generateCode(arg);
            }
        }

        codegen.write(')');
    }

    isCompoundExpression() {
        return true;
    }

    toJSON() {
        return {
            type: 'NewExpression',
            callee: this.callee,
            args: this.args
        };
    }

    walk(walker) {
        this.callee = walker.walk(this.callee);
        this.args = walker.walk(this.args);
    }

    toString() {
        var callee = this.callee;
        var args = this.args;

        let result = 'new ';

        var wrap = isCompoundExpression(callee);

        if (wrap) {
            result += '(';
        }

        result += callee;

        if (wrap) {
            result += ')';
        }


        result += '(';

        if (args && args.length) {
            for (let i=0, argsLen = args.length; i<argsLen; i++) {
                if (i !== 0) {
                    result += ', ';
                }

                let arg = args[i];
                result += arg;
            }
        }

        result += ')';

        return result;
    }
}

module.exports = NewExpression;
});
$rmod.def("/marko@3.0.0/compiler/ast/ObjectExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class ObjectExpression extends Node {
    constructor(def) {
        super('ObjectExpression');
        this.properties = def.properties;
    }

    generateCode(codegen) {
        var properties = this.properties;

        if (!properties || !properties.length) {
            codegen.write('{}');
            return;
        }

        codegen.incIndent();
        codegen.write('{\n');
        codegen.incIndent();

        properties.forEach((prop, i) => {
            codegen.writeLineIndent();
            codegen.generateCode(prop);

            if (i < properties.length - 1) {
                codegen.write(',\n');
            } else {
                codegen.write('\n');
            }
        });

        codegen.decIndent();
        codegen.writeLineIndent();
        codegen.write('}');
        codegen.decIndent();
    }

    toJSON() {
        return {
            type: 'ObjectExpression',
            properties: this.properties
        };
    }

    walk(walker) {
        this.properties = walker.walk(this.properties);
    }

    toString(codegen) {
        var properties = this.properties;

        if (!properties || !properties.length) {
            return '{}';
        }

        let result = '{';

        properties.forEach((prop, i) => {
            if (i !== 0) {
                result += ', ';
            }
            result += prop;
        });

        return result + '}';    }
}

module.exports = ObjectExpression;
});
$rmod.def("/marko@3.0.0/compiler/ast/ArrayExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class ArrayExpression extends Node {
    constructor(def) {
        super('ArrayExpression');
        this.elements = def.elements;
    }

    generateCode(codegen) {
        var elements = this.elements;

        if (!elements || !elements.length) {
            this.write('[]');
            return;
        }

        codegen.incIndent();
        codegen.write('[\n');
        codegen.incIndent();

        elements.forEach((element, i) => {
            codegen.writeLineIndent();
            codegen.generateCode(element);

            if (i < elements.length - 1) {
                codegen.write(',\n');
            } else {
                codegen.write('\n');
            }
        });

        codegen.decIndent();
        codegen.writeLineIndent();
        codegen.write(']');
        codegen.decIndent();
    }

    walk(walker) {
        this.elements = walker.walk(this.elements);
    }

    toJSON() {
        return {
            type: 'ArrayExpression',
            elements: this.elements
        };
    }

    toString() {
        var result = '[';
        var elements = this.elements;
        if (elements) {
            elements.forEach((element, i) => {
                if (i !== 0) {
                    result += ', ';
                }
                result += element.toString();
            });
        }

        return result + ']';
    }
}

module.exports = ArrayExpression;
});
$rmod.def("/marko@3.0.0/compiler/ast/Property", function(require, exports, module, __filename, __dirname) { 'use strict';
const isValidJavaScriptIdentifier = require('../util/isValidJavaScriptIdentifier');
const Node = require('./Node');

class Property extends Node {
    constructor(def) {
        super('Property');
        this.key = def.key;
        this.value = def.value;
    }

    generateCode(codegen) {
        var key = this.key;
        var value = this.value;

        if (key.type === 'Literal') {
            var propName = key.value;
            if (isValidJavaScriptIdentifier(propName)) {
                key = codegen.builder.identifier(propName);
            }
        }

        codegen.generateCode(key);
        codegen.write(': ');
        codegen.generateCode(value);
    }

    toJSON() {
        return {
            type: 'Property',
            key: this.key,
            value: this.value
        };
    }

    walk(walker) {
        this.key = walker.walk(this.key);
        this.value = walker.walk(this.value);
    }

    toString() {
        var key = this.key;
        var value = this.value;

        if (key.type === 'Literal') {
            var propName = key.value;
            if (isValidJavaScriptIdentifier(propName)) {
                key = propName;
            }
        }

        return key + ': ' + value;
    }
}

module.exports = Property;
});
$rmod.def("/marko@3.0.0/compiler/ast/VariableDeclarator", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var Identifier = require('./Identifier');
var isValidJavaScriptVarName = require('../util/isValidJavaScriptVarName');

class VariableDeclarator extends Node {
    constructor(def) {
        super('VariableDeclarator');
        this.id = def.id;
        this.init = def.init;

        let name = this.id.name;
        if (!name) {
            throw new Error('"name" is required');
        }

        if (!isValidJavaScriptVarName(name)) {
            var error = new Error('Invalid JavaScript variable name: ' + name);
            error.code = 'INVALID_VAR_NAME';
            throw error;
        }
    }

    generateCode(codegen) {
        var id = this.id;
        var init = this.init;

        if (!(id instanceof Identifier) && typeof id !== 'string') {
            throw new Error('Invalid variable name: ' + id);
        }

        codegen.generateCode(id);

        if (init != null) {
            codegen.write(' = ');
            codegen.generateCode(init);
        }
    }

    walk(walker) {
        this.id = walker.walk(this.id);
        this.init = walker.walk(this.init);
    }
}

module.exports = VariableDeclarator;
});
$rmod.def("/marko@3.0.0/compiler/ast/ThisExpression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class ThisExpression extends Node {
    constructor(def) {
        super('ThisExpression');
    }

    generateCode(codegen) {
        codegen.write('this');
    }

    toString() {
        return 'this';
    }
}

module.exports = ThisExpression;
});
$rmod.def("/marko@3.0.0/compiler/ast/Expression", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var ok = require('assert'/*'assert'*/).ok;

class Expression extends Node {
    constructor(def) {
        super('Expression');
        this.value = def.value;
        ok(this.value != null, 'Invalid expression');
    }

    generateCode(codegen) {
        codegen.generateCode(this.value);
    }

    isCompoundExpression() {
        return true;
    }

    toString() {
        return this.value;
    }
}

module.exports = Expression;
});
$rmod.def("/marko@3.0.0/compiler/ast/Scriptlet", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');
var adjustIndent = require('../util/adjustIndent');

class Scriptlet extends Node {
    constructor(def) {
        super('Scriptlet');
        this.code = def.code;
    }

    generateCode(codegen) {
        var code = this.code;

        if (!code) {
            return;
        }

        code = adjustIndent(code, codegen.currentIndent);

        codegen.write(code);
        codegen.write('\n');
    }
}

module.exports = Scriptlet;
});
$rmod.def("/marko@3.0.0/compiler/ast/ContainerNode", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class ContainerNode extends Node {
    constructor(def) {
        super('ContainerNode');
        this.body = this.makeContainer(def.body);
    }

    walk(walker) {
        this.body = walker.walk(this.body);
    }
}

module.exports = ContainerNode;
});
$rmod.def("/marko@3.0.0/compiler/ast/WhileStatement", function(require, exports, module, __filename, __dirname) { 'use strict';

var Node = require('./Node');

class WhileStatement extends Node {
    constructor(def) {
        super('WhileStatement');
        this.test = def.test;
        this.body = this.makeContainer(def.body);
    }

    generateCode(codegen) {
        var test = this.test;
        var body = this.body;

        codegen.write('while (');
        codegen.generateCode(test);
        codegen.write(') ');

        codegen.generateBlock(body);

        codegen.write('\n');
    }

    walk(walker) {
        this.test = walker.walk(this.test);
        this.body = walker.walk(this.body);
    }
}

module.exports = WhileStatement;
});
$rmod.def("/marko@3.0.0/compiler/ast/DocumentType", function(require, exports, module, __filename, __dirname) { 'use strict';
var Node = require('./Node');

class DocumentType extends Node {
    constructor(def) {
        super('DocumentType');
        this.documentType = def.documentType;
    }

    generateHtmlCode(codegen) {

        var builder = codegen.builder;

        codegen.addWrite(builder.literal('<!'));
        codegen.addWrite(this.documentType);
        codegen.addWrite(builder.literal('>'));
    }

    toJSON() {
        return {
            type: this.type,
            value: this.value
        };
    }
}

module.exports = DocumentType;
});
$rmod.def("/marko@3.0.0/compiler/ast/Declaration", function(require, exports, module, __filename, __dirname) { 'use strict';
var Node = require('./Node');

class Declaration extends Node {
    constructor(def) {
        super('Declaration');
        this.declaration = def.declaration;
    }

    generateHtmlCode(codegen) {

        var builder = codegen.builder;

        codegen.addWrite(builder.literal('<?'));
        codegen.addWrite(this.declaration);
        codegen.addWrite(builder.literal('?>'));
    }

    toJSON() {
        return {
            type: this.type,
            value: this.value
        };
    }
}

module.exports = Declaration;
});
$rmod.def("/marko@3.0.0/compiler/util/parseJavaScript", function(require, exports, module, __filename, __dirname) { 'use strict';
var ok = require('assert'/*'assert'*/).ok;

const esprima = require('/$/marko/$/esprima'/*'esprima'*/);

function parseExpression(src, builder, isExpression) {
    ok(typeof src === 'string', '"src" should be a string expression');
    ok(builder, '"builder" is required');

    function convert(node) {

        if (Array.isArray(node)) {
            let nodes = node;
            for (let i=0; i<nodes.length; i++) {
                var converted = convert(nodes[i]);
                if (converted == null) {
                    return null;
                }
                nodes[i] = converted;
            }
            return nodes;
        }

        switch(node.type) {
            case 'ArrayExpression': {
                let elements = convert(node.elements);
                if (!elements) {
                    return null;
                }
                return builder.arrayExpression(elements);
            }
            case 'AssignmentExpression': {
                let left = convert(node.left);
                if (!left) {
                    return null;
                }

                let right = convert(node.right);
                if (!right) {
                    return null;
                }

                return builder.assignment(left, right, node.operator);
            }
            case 'BinaryExpression': {
                let left = convert(node.left);
                if (!left) {
                    return null;
                }

                let right = convert(node.right);
                if (!right) {
                    return null;
                }

                return builder.binaryExpression(left, node.operator, right);
            }
            case 'CallExpression': {
                let callee = convert(node.callee);

                if (!callee) {
                    return null;
                }

                let args = convert(node.arguments);
                if (!args) {
                    return null;
                }

                return builder.functionCall(callee, args);
            }
            case 'ConditionalExpression': {
                let test = convert(node.test);

                if (!test) {
                    return null;
                }

                let consequent = convert(node.consequent);

                if (!consequent) {
                    return null;
                }

                let alternate = convert(node.alternate);

                if (!alternate) {
                    return null;
                }

                return builder.conditionalExpression(test, consequent, alternate);
            }
            case 'ExpressionStatement': {
                return convert(node.expression);
            }
            case 'FunctionDeclaration':
            case 'FunctionExpression': {
                let name = null;

                if (node.id) {
                    name = convert(node.id);
                    if (name == null) {
                        return null;
                    }
                }

                let params = convert(node.params);
                if (!params) {
                    return null;
                }

                let body = convert(node.body);
                if (!body) {
                    return null;
                }

                return builder.functionDeclaration(name, params, body);
            }
            case 'Identifier': {
                return builder.identifier(node.name);
            }
            case 'Literal': {
                return builder.literal(node.value);
            }
            case 'LogicalExpression': {
                let left = convert(node.left);
                if (!left) {
                    return null;
                }

                let right = convert(node.right);
                if (!right) {
                    return null;
                }

                return builder.logicalExpression(left, node.operator, right);
            }
            case 'MemberExpression': {
                let object = convert(node.object);
                if (!object) {
                    return null;
                }

                let property = convert(node.property);
                if (!property) {
                    return null;
                }

                return builder.memberExpression(object, property, node.computed);
            }
            case 'NewExpression': {
                let callee = convert(node.callee);

                if (!callee) {
                    return null;
                }

                let args = convert(node.arguments);
                if (!args) {
                    return null;
                }

                return builder.newExpression(callee, args);
            }
            case 'Program': {
                if (node.body && node.body.length === 1) {
                    return convert(node.body[0]);
                }
                return null;
            }
            case 'ObjectExpression': {
                let properties = convert(node.properties);
                if (!properties) {
                    return null;
                }
                return builder.objectExpression(properties);
            }
            case 'Property': {
                let key = convert(node.key);
                if (!key) {
                    return null;
                }
                let value = convert(node.value);
                if (!value) {
                    return null;
                }
                return builder.property(key, value);
            }
            case 'ThisExpression': {
                return builder.thisExpression();
            }
            case 'UnaryExpression': {
                let argument = convert(node.argument);
                if (!argument) {
                    return null;
                }

                return builder.unaryExpression(argument, node.operator, node.prefix);
            }
            case 'UpdateExpression': {
                let argument = convert(node.argument);
                if (!argument) {
                    return null;
                }

                return builder.updateExpression(argument, node.operator, node.prefix);
            }
            default:
                return null;
        }
    }

    let jsAST;
    try {
        if (isExpression) {
            src = '(' + src + ')';
        }
        jsAST = esprima.parse(src);
    } catch(e) {
        var errorIndex = e.index;
        var errorMessage = '\n' + e.description;
        if (errorIndex != null && errorIndex >= 0) {
            if (isExpression) {
                errorIndex--; // Account for extra paren added to start
            }
            errorMessage += ': ';
            errorMessage += src + '\n'+ new Array(errorMessage.length + errorIndex + 1).join(" ") + '^';
        }
        var wrappedError = new Error(errorMessage);
        wrappedError.index = errorIndex;
        wrappedError.src = src;
        wrappedError.code = 'ERR_INVALID_JAVASCRIPT_EXPRESSION';
        throw wrappedError;
    }

    var converted = convert(jsAST);
    if (converted == null) {
        converted = builder.expression(src);
    }

    return converted;
}

module.exports = parseExpression;

});
$rmod.def("/marko@3.0.0/compiler/util/parseExpression",function(r,e,o,a,i){var n=r("./parseJavaScript");o.exports=function(r,e){return n(r,e,!0)}});
$rmod.def("/marko@3.0.0/compiler/util/parseStatement",function(r,t,e,a,n){var o=r("./parseJavaScript");e.exports=function(r,t){return o(r,t,!1)}});
$rmod.def("/marko@3.0.0/compiler/util/parseJavaScriptArgs",function(r,e,s,t,i){"use strict";function a(r,e){o("string"==typeof r,'"args" should be a string'),o(e,'"builder" is required');var s=e.parseExpression("["+r+"]");return s.elements}var o=r("assert").ok;s.exports=a});
$rmod.def("/marko@3.0.0/compiler/util/isValidJavaScriptIdentifier",function(i,r,t,e,n){var o=/^[$A-Z_][0-9A-Z_$]*$/i;t.exports=function(i){return o.test(i)}});
$rmod.def("/marko@3.0.0/compiler/Builder", function(require, exports, module, __filename, __dirname) { 'use strict';
var isArray = Array.isArray;
var ok = require('assert'/*'assert'*/).ok;

var Node = require('./ast/Node');
var Program = require('./ast/Program');
var TemplateRoot = require('./ast/TemplateRoot');
var FunctionDeclaration = require('./ast/FunctionDeclaration');
var FunctionCall = require('./ast/FunctionCall');
var Literal = require('./ast/Literal');
var Identifier = require('./ast/Identifier');
var If = require('./ast/If');
var ElseIf = require('./ast/ElseIf');
var Else = require('./ast/Else');
var Assignment = require('./ast/Assignment');
var BinaryExpression = require('./ast/BinaryExpression');
var LogicalExpression = require('./ast/LogicalExpression');
var Vars = require('./ast/Vars');
var Return = require('./ast/Return');
var HtmlElement = require('./ast/HtmlElement');
var Html = require('./ast/Html');
var Text = require('./ast/Text');
var ForEach = require('./ast/ForEach');
var ForEachProp = require('./ast/ForEachProp');
var ForRange = require('./ast/ForRange');
var Slot = require('./ast/Slot');
var HtmlComment = require('./ast/HtmlComment');
var SelfInvokingFunction = require('./ast/SelfInvokingFunction');
var ForStatement = require('./ast/ForStatement');
var BinaryExpression = require('./ast/BinaryExpression');
var UpdateExpression = require('./ast/UpdateExpression');
var UnaryExpression = require('./ast/UnaryExpression');
var MemberExpression = require('./ast/MemberExpression');
var Code = require('./ast/Code');
var InvokeMacro = require('./ast/InvokeMacro');
var Macro = require('./ast/Macro');
var ConditionalExpression = require('./ast/ConditionalExpression');
var NewExpression = require('./ast/NewExpression');
var ObjectExpression = require('./ast/ObjectExpression');
var ArrayExpression = require('./ast/ArrayExpression');
var Property = require('./ast/Property');
var VariableDeclarator = require('./ast/VariableDeclarator');
var ThisExpression = require('./ast/ThisExpression');
var Expression = require('./ast/Expression');
var Scriptlet = require('./ast/Scriptlet');
var ContainerNode = require('./ast/ContainerNode');
var WhileStatement = require('./ast/WhileStatement');
var DocumentType = require('./ast/DocumentType');
var Declaration = require('./ast/Declaration');

var parseExpression = require('./util/parseExpression');
var parseStatement = require('./util/parseStatement');
var parseJavaScriptArgs = require('./util/parseJavaScriptArgs');
var isValidJavaScriptIdentifier = require('./util/isValidJavaScriptIdentifier');

var DEFAULT_BUILDER;

function makeNode(arg) {
    if (typeof arg === 'string') {
        return parseExpression(arg, DEFAULT_BUILDER);
    } else if (arg instanceof Node) {
        return arg;
    } else if (arg == null) {
        return undefined;
    } else {
        throw new Error('Argument should be a string or Node or null. Actual: ' + arg);
    }
}

var literalNull = new Literal({value: null});
var literalUndefined = new Literal({value: null});
var literalTrue = new Literal({value: true});
var literalFalse = new Literal({value: true});
var identifierOut = new Identifier({name: 'out'});

class Builder {
    arrayExpression(elements) {
        if (elements) {
            if (!isArray(elements)) {
                elements = [elements];
            }

            for (var i=0; i<elements.length; i++) {
                elements[i] = makeNode(elements[i]);
            }
        } else {
            elements = [];
        }

        return new ArrayExpression({elements});
    }

    assignment(left, right, operator) {
        if (operator == null) {
            operator = '=';
        }
        left = makeNode(left);
        right = makeNode(right);
        return new Assignment({left, right, operator});
    }

    binaryExpression(left, operator, right) {
        left = makeNode(left);
        right = makeNode(right);
        return new BinaryExpression({left, operator, right});
    }

    code(value) {
        return new Code({value});
    }

    computedMemberExpression(object, property) {
        object = makeNode(object);
        property = makeNode(property);
        let computed = true;

        return new MemberExpression({object, property, computed});
    }

    concat(args) {
        var prev;
        let operator = '+';

        for (var i=1; i<arguments.length; i++) {
            var left;
            var right = makeNode(arguments[i]);
            if (i === 1) {
                left = makeNode(arguments[i-1]);
            } else {
                left = prev;
            }

            prev = new BinaryExpression({left, operator, right});
        }

        return prev;
    }

    conditionalExpression(test, consequent, alternate) {
        return new ConditionalExpression({test, consequent, alternate});
    }

    containerNode(type, generateCode) {
        if (typeof type === 'function') {
            generateCode = arguments[0];
            type = 'ContainerNode';
        }

        var node = new ContainerNode(type);
        if (generateCode) {
            node.setCodeGenerator(generateCode);
        }
        return node;
    }

    declaration(declaration) {
        return new Declaration({declaration});
    }

    documentType(documentType) {
        return new DocumentType({documentType});
    }

    elseStatement(body) {
        return new Else({body});
    }

    elseIfStatement(test, body, elseStatement) {
        test = makeNode(test);

        return new ElseIf({test, body, else: elseStatement});
    }

    expression(value) {
        return new Expression({value});
    }

    forEach(varName, inExpression, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForEach(def);
        } else {
            varName = makeNode(varName);
            inExpression = makeNode(inExpression);
            return new ForEach({varName, in: inExpression, body});
        }
    }

    forEachProp(nameVarName, valueVarName, inExpression, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForEachProp(def);
        } else {
            nameVarName = makeNode(nameVarName);
            valueVarName = makeNode(valueVarName);
            inExpression = makeNode(inExpression);
            return new ForEachProp({nameVarName, valueVarName, in: inExpression, body});
        }
    }

    forRange(varName, from, to, step, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForRange(def);
        } else {
            varName = makeNode(varName);
            from = makeNode(from);
            to = makeNode(to);
            step = makeNode(step);
            body = makeNode(body);

            return new ForRange({varName, from, to, step, body});
        }
    }

    forStatement(init, test, update, body) {
        if (arguments.length === 1) {
            var def = arguments[0];
            return new ForStatement(def);
        } else {
            init = makeNode(init);
            test = makeNode(test);
            update = makeNode(update);
            return new ForStatement({init, test, update, body});
        }
    }

    functionCall(callee, args) {
        callee = makeNode(callee);

        if (args) {
            if (!isArray(args)) {
                throw new Error('"args" should be an array');
            }

            for (var i=0; i<args.length; i++) {
                args[i] = makeNode(args[i]);
            }
        } else {
            args = [];
        }

        return new FunctionCall({callee, args});
    }

    functionDeclaration(name, params, body) {
        return new FunctionDeclaration({name, params, body});
    }

    html(argument) {
        argument = makeNode(argument);

        return new Html({argument});
    }

    htmlComment(comment) {
        return new HtmlComment({comment});
    }

    htmlElement(tagName, attributes, body, argument, openTagOnly, selfClosed) {
        if (typeof tagName === 'object' && !(tagName instanceof Node)) {
            let def = arguments[0];
            return new HtmlElement(def);
        } else {
            return new HtmlElement({tagName, attributes, body, argument, openTagOnly, selfClosed});
        }
    }

    identifier(name) {
        ok(typeof name === 'string', '"name" should be a string');

        if (!isValidJavaScriptIdentifier(name)) {
            var error = new Error('Invalid JavaScript identifier: ' + name);
            error.code = 'INVALID_IDENTIFIER';
            throw error;
        }
        return new Identifier({name});
    }

    identifierOut(name) {
        return identifierOut;
    }

    ifStatement(test, body, elseStatement) {
        test = makeNode(test);

        return new If({test, body, else: elseStatement});
    }

    invokeMacro(name, args, body) {
        return new InvokeMacro({name, args, body});
    }

    invokeMacroFromEl(el) {
        return new InvokeMacro({el});
    }

    literal(value) {
        return new Literal({value});
    }

    literalFalse() {
        return literalFalse;
    }

    literalNull() {
        return literalNull;
    }

    literalTrue() {
        return literalTrue;
    }

    literalUndefined() {
        return literalUndefined;
    }

    logicalExpression(left, operator, right) {
        left = makeNode(left);
        right = makeNode(right);
        return new LogicalExpression({left, operator, right});
    }

    macro(name, params, body) {
        return new Macro({name, params, body});
    }

    memberExpression(object, property, computed) {
        object = makeNode(object);
        property = makeNode(property);

        return new MemberExpression({object, property, computed});
    }

    negate(argument) {
        argument = makeNode(argument);

        var operator = '!';
        var prefix = true;
        return new UnaryExpression({argument, operator, prefix});
    }

    newExpression(callee, args) {
        callee = makeNode(callee);

        if (args) {
            if (!isArray(args)) {
                args = [args];
            }

            for (var i=0; i<args.length; i++) {
                args[i] = makeNode(args[i]);
            }
        } else {
            args = [];
        }

        return new NewExpression({callee, args});
    }

    node(type, generateCode) {
        if (typeof type === 'function') {
            generateCode = arguments[0];
            type = 'Node';
        }

        var node = new Node(type);
        if (generateCode) {
            node.setCodeGenerator(generateCode);
        }
        return node;
    }

    objectExpression(properties) {
        if (properties) {
            if (!isArray(properties)) {
                properties = [properties];
            }

            for (var i=0; i<properties.length; i++) {
                let prop = properties[i];
                prop.value = makeNode(prop.value);
            }
        } else {
            properties = [];
        }

        return new ObjectExpression({properties});
    }

    parseExpression(str, options) {
        ok(typeof str === 'string', '"str" should be a string expression');
        var parsed = parseExpression(str, DEFAULT_BUILDER);
        return parsed;
    }

    parseJavaScriptArgs(args) {
        ok(typeof args === 'string', '"args" should be a string');
        return parseJavaScriptArgs(args, DEFAULT_BUILDER);
    }

    parseStatement(str, options) {
        ok(typeof str === 'string', '"str" should be a string expression');
        var parsed = parseStatement(str, DEFAULT_BUILDER);
        return parsed;
    }

    program(body) {
        return new Program({body});
    }

    property(key, value) {
        key = makeNode(key);
        value = makeNode(value);

        return new Property({key, value});
    }

    renderBodyFunction(body) {
        let name = 'renderBody';
        let params = [new Identifier({name: 'out'})];
        return new FunctionDeclaration({name, params, body});
    }

    require(path) {
        path = makeNode(path);

        let callee = 'require';
        let args = [ path ];
        return new FunctionCall({callee, args});
    }

    requireResolve(path) {
        path = makeNode(path);

        let callee = new MemberExpression({
            object: new Identifier({name: 'require'}),
            property: new Identifier({name: 'resolve'})
        });

        let args = [ path ];
        return new FunctionCall({callee, args});
    }

    returnStatement(argument) {
        argument = makeNode(argument);

        return new Return({argument});
    }

    scriptlet(code) {
        return new Scriptlet({code});
    }

    selfInvokingFunction(params, args, body) {
        if (arguments.length === 1) {
            body = arguments[0];
            params = null;
            args = null;
        }

        return new SelfInvokingFunction({params, args, body});
    }

    slot(onDone) {
        return new Slot({onDone});
    }

    strictEquality(left, right) {
        left = makeNode(left);
        right = makeNode(right);

        var operator = '===';
        return new BinaryExpression({left, right, operator});
    }

    templateRoot(body) {
        return new TemplateRoot({body});
    }

    text(argument, escape, preserveWhitespace) {
        if (typeof argument === 'object' && !(argument instanceof Node)) {
            var def = arguments[0];
            return new Text(def);
        }
        argument = makeNode(argument);

        return new Text({argument, escape, preserveWhitespace});
    }

    thisExpression() {
        return new ThisExpression();
    }

    unaryExpression(argument, operator, prefix) {
        argument = makeNode(argument);

        return new UnaryExpression({argument, operator, prefix});
    }

    updateExpression(argument, operator, prefix) {
        argument = makeNode(argument);
        return new UpdateExpression({argument, operator, prefix});
    }

    variableDeclarator(id, init) {
        if (typeof id === 'string') {
            id = new Identifier({name: id});
        }
        if (init) {
            init = makeNode(init);
        }

        return new VariableDeclarator({id, init});
    }

    var(id, init, kind) {
        if (!kind) {
            kind = 'var';
        }

        id = makeNode(id);
        init = makeNode(init);

        var declarations = [
            new VariableDeclarator({id, init})
        ];

        return new Vars({declarations, kind});
    }

    vars(declarations, kind) {
        if (declarations) {
            if (Array.isArray(declarations)) {
                for (let i=0; i<declarations.length; i++) {
                    var declaration = declarations[i];
                    if (!declaration) {
                        throw new Error('Invalid variable declaration');
                    }
                    if (typeof declaration === 'string') {
                        declarations[i] = new VariableDeclarator({
                            id: new Identifier({name: declaration})
                        });
                    } else if (declaration instanceof Identifier) {
                        declarations[i] = new VariableDeclarator({
                            id: declaration
                        });
                    } else if (typeof declaration === 'object') {
                        if (!(declaration instanceof VariableDeclarator)) {
                            let id = declaration.id;
                            let init = declaration.init;

                            if (typeof id === 'string') {
                                id = new Identifier({name: id});
                            }

                            if (!id) {
                                throw new Error('Invalid variable declaration');
                            }

                            if (init) {
                                init = makeNode(init);
                            }


                            declarations[i] = new VariableDeclarator({id, init});
                        }
                    }
                }
            } else if (typeof declarations === 'object') {
                // Convert the object into an array of variables
                declarations = Object.keys(declarations).map((key) => {
                    let id = new Identifier({name: key});
                    let init = makeNode(declarations[key]);
                    return new VariableDeclarator({ id, init });
                });
            }
        }


        return new Vars({declarations, kind});
    }

    whileStatement(test, body) {
        return new WhileStatement({test, body});
    }
}

DEFAULT_BUILDER = new Builder();

Builder.DEFAULT_BUILDER = DEFAULT_BUILDER;

module.exports = Builder;

});
$rmod.remap("/marko@3.0.2/compiler/util/deresolve","deresolve-browser");
$rmod.def("/marko@3.0.0/compiler/util/deresolve-browser",function(r,e,o,n,t){o.exports=function(r,e){return r}});
$rmod.def("/marko@3.0.0/compiler/util/safeVarName",function(e,r,n,t,a){function o(e){var r=e.split(/[\\/]/);return r.length>=2&&(e=r.slice(-2).join("_")),e.replace(/[^A-Za-z0-9_]/g,"_").replace(/^[0-9]+/,function(e){for(var r="",n=0;n<e.length;n++)r+="_";return r})}n.exports=o});
$rmod.def("/marko@3.0.0/compiler/util/UniqueVars", function(require, exports, module, __filename, __dirname) { 'use strict';

var safeVarName = require('./safeVarName');

class UniqueVars {
    constructor() {
        this.vars = {};
    }

    addVar(name, value) {
        if (typeof value !== 'string') {
            // Convert the non-string value into a string for easy comparison
            value = JSON.stringify(value);
        }

        name = safeVarName(name);

        var entry = this.vars[name];
        if (entry) {
            var vars = entry.vars;

            // See if there is already a variable with the requested value
            for (var i=0; i<vars.length; i++) {
                var curVar = vars[i];
                if (curVar.value === value) {
                    return curVar.name;
                }
            }

            entry.vars.push({
                name: name + (++entry.counter),
                value: value
            });
        } else {
            entry = {
                vars: [
                    {
                        name: name,
                        value: value
                    }
                ],
                counter: 1
            };

            this.vars[name] = entry;
        }

        return name;
    }
}

module.exports = UniqueVars;
});
$rmod.def("/marko@3.0.0/compiler/util/PosInfo", function(require, exports, module, __filename, __dirname) { 'use strict';var process=require("process"); 

var path = require('path-browserify'/*'path'*/);

function getRelativePath(absolutePath) {
    if (typeof window === 'undefined') {
        absolutePath = path.resolve(process.cwd(), absolutePath);
        return path.relative(process.cwd(), absolutePath);
    } else {
        return absolutePath;
    }
}

class PosInfo {
    constructor(path, line, column) {
        this.path = getRelativePath(path);
        this.line = line;
        this.column = column;
    }

    toString() {
        return this.path + ":" + this.line + ":" + this.column;
    }
}

module.exports = PosInfo;
});
$rmod.def("/marko@3.0.0/compiler/CompileError", function(require, exports, module, __filename, __dirname) { 'use strict';

class CompileError {
    constructor(errorInfo, context) {
        this.context = context;
        this.node = errorInfo.node;
        this.message = errorInfo.message;
        this.code = errorInfo.code;

        var pos = errorInfo.pos;
        var endPos = errorInfo.endPos;

        if (pos == null) {
            pos = this.node && this.node.pos;
        }

        if (endPos == null) {
            endPos = this.node && this.node.endPos;
        }

        if (pos != null) {
            pos = context.getPosInfo(pos);
        }

        if (endPos != null) {
            endPos = context.getPosInfo(endPos);
        }

        this.pos = pos;
        this.endPos = endPos;
    }

    toString() {
        var pos = this.pos;
        if (pos) {
            pos = '[' + pos + '] ';
        } else {
            pos = '';
        }
        var str = pos + this.message;
        if (pos == null && this.node) {
            str += ' (' + this.node.toString() + ')';
        }
        return str;
    }
}

module.exports = CompileError;
});
$rmod.def("/marko@3.0.0/compiler/util/macros", function(require, exports, module, __filename, __dirname) { 'use strict';

var safeVarName = require('./safeVarName');
var ok = require('assert'/*'assert'*/).ok;

class MacrosContext {
    constructor() {
        this._byName = {};
    }

    isMacro(name) {
        if (!name) {
            return false;
        }

        if (name.type === 'Literal') {
            name = name.value;
        }

        return this._byName.hasOwnProperty(name);
    }

    getRegisteredMacro(name) {
        return this._byName[name];
    }

    registerMacro(name, params) {
        ok(name, '"name" is required');
        ok(typeof name === 'string', '"name" should be a string');
        if (params == null) {
            params = [];

        } else {
            ok(Array.isArray(params), '"params" should be an array');
        }


        var hasOut = false;
        var hasRenderBody = false;
        params.forEach((param) => {
            if (param === 'out') {
                hasOut = true;
            } else if (param === 'renderBody') {
                hasRenderBody = true;
            }
        });

        if (!hasOut) {
            params.push('out');
        }

        if (!hasRenderBody) {
            params.push('renderBody');
        }

        var paramIndexes = {};
        params.forEach((param, i) => {
            paramIndexes[param] = i;

            if (param === 'out') {
                hasOut = true;
            } else if (param === 'renderBody') {
                hasRenderBody = true;
            }
        });

        var functionName = 'macro_' + safeVarName(name);

        var macroDef = {
            name: name,
            params: params,
            functionName: functionName,
            getParamIndex: function(param) {
                return paramIndexes[param];
            }
        };

        this._byName[name] = macroDef;

        return macroDef;
    }
}

function createMacrosContext() {
    return new MacrosContext();
}

exports.createMacrosContext = createMacrosContext;
});
$rmod.def("/marko@3.0.0/compiler/CompileContext", function(require, exports, module, __filename, __dirname) { 'use strict';var process=require("process"); 

var ok = require('assert'/*'assert'*/).ok;
var path = require('path-browserify'/*'path'*/);
var taglibLookup = require('./taglib-lookup');
var charProps = require('/$/marko/$/char-props'/*'char-props'*/);
var deresolve = require('./util/deresolve');
var UniqueVars = require('./util/UniqueVars');
var PosInfo = require('./util/PosInfo');
var CompileError = require('./CompileError');
var path = require('path-browserify'/*'path'*/);
var Node = require('./ast/Node');
var macros = require('./util/macros');
var extend = require('/$/marko/$/raptor-util/extend'/*'raptor-util/extend'*/);
var Walker = require('./Walker');

function getTaglibPath(taglibPath) {
    if (typeof window === 'undefined') {
        return path.relative(process.cwd(), taglibPath);
    } else {
        return taglibPath;
    }
}

function removeExt(filename) {
    var ext = path.extname(filename);
    if (ext) {
        return filename.slice(0, 0 - ext.length);
    } else {
        return filename;
    }
}

function requireResolve(builder, path) {
    var requireResolveNode = builder.memberExpression(
        builder.identifier('require'),
        builder.identifier('resolve'));


    return builder.functionCall(requireResolveNode, [ path ]);
}

class CompileContext {
    constructor(src, filename, builder) {
        ok(typeof src === 'string', '"src" string is required');
        ok(filename, '"filename" is required');

        this.src = src;
        this.filename = filename;
        this.builder = builder;

        this.dirname = path.dirname(filename);
        this.taglibLookup = taglibLookup.buildLookup(this.dirname);
        this.data = {};

        this._vars = {};
        this._uniqueVars = new UniqueVars();
        this._staticVars = {};
        this._staticCode = null;
        this._uniqueStaticVars = new UniqueVars();
        this._srcCharProps = null;
        this._flags = {};
        this._errors = [];
        this._macros = null;
        this._preserveWhitespace = null;
        this._preserveComments = null;
    }

    getPosInfo(pos) {
        var srcCharProps = this._srcCharProps || (this._srcCharProps = charProps(this.src));
        let line = srcCharProps.lineAt(pos)+1;
        let column = srcCharProps.columnAt(pos);
        return new PosInfo(this.filename, line, column);
    }

    setFlag(name) {
        this._flags[name] = true;
    }

    clearFlag(name) {
        delete this._flags[name];
    }

    isFlagSet(name) {
        return this._flags.hasOwnProperty(name);
    }

    addError(errorInfo) {
        if (errorInfo instanceof Node) {
            let node = arguments[0];
            let message = arguments[1];
            let code = arguments[2];
            errorInfo = {
                node,
                message,
                code
            };
        } else if (typeof errorInfo === 'string') {
            let message = arguments[0];
            let code = arguments[1];
            errorInfo = {
                message,
                code
            };
        }
        this._errors.push(new CompileError(errorInfo, this));
    }

    hasErrors() {
        return this._errors.length !== 0;
    }

    getErrors() {
        return this._errors;
    }

    getRequirePath(targetFilename) {
        return deresolve(targetFilename, this.dirname);
    }

    importModule(varName, path) {
        if (typeof path !== 'string') {
            throw new Error('"path" should be a string');
        }

        return this.addStaticVar(varName, 'require("' + path + '")');
    }


    addVar(name, init) {
        var actualVarName = this._uniqueVars.addVar(name, init);
        this._vars[actualVarName] = init;
        return this.builder.identifier(actualVarName);
    }

    getVars() {
        return this._vars;
    }

    addStaticVar(name, init) {
        var actualVarName = this._uniqueStaticVars.addVar(name, init);
        this._staticVars[actualVarName] = init;
        return this.builder.identifier(actualVarName);
    }

    getStaticVars() {
        return this._staticVars;
    }

    addStaticCode(code) {
        if (!code) {
            return;
        }

        if (typeof code === 'string') {
            // Wrap the String code in a Code AST node so that
            // the code will be indented properly
            code = this.builder.code(code);
        }

        if (this._staticCode == null) {
            this._staticCode = [code];
        } else {
            this._staticCode.push(code);
        }
    }

    getStaticCode() {
        return this._staticCode;
    }

    getEscapeXmlAttrVar() {
        return this.addStaticVar('escapeXmlAttr', '__helpers.xa');
    }

    getTagDef(tagName) {
        var taglibLookup = this.taglibLookup;

        if (typeof tagName === 'string') {
            return taglibLookup.getTag(tagName);
        } else {
            let elNode = tagName;
            if (elNode.tagDef) {
                return elNode.tagDef;
            }

            return taglibLookup.getTag(elNode.tagName);
        }
    }

    createNodeForEl(tagName, attributes, argument, openTagOnly, selfClosed) {
        var elDef;
        var builder = this.builder;

        if (typeof tagName === 'object') {
            elDef = tagName;
            tagName = elDef.tagName;
            attributes = elDef.attributes;
        } else {
            elDef = { tagName, argument, attributes, openTagOnly, selfClosed };
        }

        if (!attributes) {
            attributes = elDef.attributes = [];
        } else if (typeof attributes === 'object') {
            if (!Array.isArray(attributes)) {
                attributes = elDef.attributes = Object.keys(attributes).map((attrName) => {
                    var attrDef = {
                        name: attrName
                    };

                    var val = attributes[attrName];
                    if (val == null) {

                    } if (val instanceof Node) {
                        attrDef.value = val;
                    } else {
                        extend(attrDef, val);
                    }

                    return attrDef;
                });
            }
        } else {
            throw new Error('Invalid attributes');
        }

        var node;
        var elNode = builder.htmlElement(elDef);
        elNode.pos = elDef.pos;
        
        var taglibLookup = this.taglibLookup;
        var tagDef = typeof tagName === 'string' ? taglibLookup.getTag(tagName) : null;
        if (tagDef) {
            var nodeFactoryFunc = tagDef.getNodeFactory();
            if (nodeFactoryFunc) {
                var newNode = nodeFactoryFunc(elNode, this);
                if (!(newNode instanceof Node)) {
                    throw new Error('Invalid node returned from node factory for tag "' + tagName + '".');
                }

                if (newNode != node) {
                    // Make sure the body container is associated with the correct node
                    if (newNode.body && newNode.body !== node) {
                        newNode.body = newNode.makeContainer(newNode.body.items);
                    }
                    node = newNode;
                }
            }
        }

        if (!node) {
            node = elNode;
        }

        node.pos = elDef.pos;

        var foundAttrs = {};

        // Validate the attributes
        attributes.forEach((attr) => {
            let attrName = attr.name;
            if (!attrName) {
                // Attribute will be name for placeholder attributes. For example: <div ${data.myAttrs}>
                return;
            }
            let attrDef = taglibLookup.getAttribute(tagName, attrName);
            if (!attrDef) {
                if (tagDef) {
                    if (node.removeAttribute) {
                        node.removeAttribute(attrName);
                    }

                    // var isAttrForTaglib = compiler.taglibs.isTaglib(attrUri);
                    //Tag doesn't allow dynamic attributes
                    this.addError({
                        node: node,
                        message: 'The tag "' + tagName + '" in taglib "' + getTaglibPath(tagDef.taglibId) + '" does not support attribute "' + attrName + '"'
                    });

                }
                return;
            }

            if (attrDef.setFlag) {
                node.setFlag(attrDef.setFlag);
            }

            attr.def = attrDef;

            foundAttrs[attrName] = true;
        });

        if (tagDef) {
            // Add default values for any attributes. If an attribute has a declared
            // default value and the attribute was not found on the element
            // then add the attribute with the specified default value
            tagDef.forEachAttribute((attrDef) => {
                var attrName = attrDef.name;

                if (attrDef.hasOwnProperty('defaultValue') && !foundAttrs.hasOwnProperty(attrName)) {
                    attributes.push({
                        name: attrName,
                        value: builder.literal(attrDef.defaultValue)
                    });
                } else if (attrDef.required === true) {
                    // TODO Only throw an error if there is no data argument provided (just HTML attributes)
                    if (!foundAttrs.hasOwnProperty(attrName)) {
                        this.addError({
                            node: node,
                            message: 'The "' + attrName + '" attribute is required for tag "' + tagName + '" in taglib "' + getTaglibPath(tagDef.taglibId) + '".'
                        });
                    }
                }
            });

            node.tagDef = tagDef;
        }

        return node;
    }

    isMacro(name) {
        if (!this._macros) {
            return false;
        }

        return this._macros.isMacro(name);
    }

    getRegisteredMacro(name) {
        if (!this._macros) {
            return undefined;
        }

        return this._macros.getRegisteredMacro(name);
    }

    registerMacro(name, params) {
        if (!this._macros) {
            this._macros = macros.createMacrosContext();
        }

        return this._macros.registerMacro(name, params);
    }

    importTemplate(relativePath) {
        ok(typeof relativePath === 'string', '"path" should be a string');
        var builder = this.builder;


        // We want to add the following import:
        // var loadTemplate = __helpers.t;
        // var template = loadTemplate(require.resolve(<templateRequirePath>))

        var loadTemplateVar = this.addStaticVar('loadTemplate', '__helpers.l');
        var requireResolveTemplate = requireResolve(builder, builder.literal(relativePath));
        var loadFunctionCall = builder.functionCall(loadTemplateVar, [ requireResolveTemplate ]);
        var templateVar = this.addStaticVar(removeExt(relativePath), loadFunctionCall);
        return templateVar;
    }

    setPreserveWhitespace(preserveWhitespace) {
        this._preserveWhitespace = preserveWhitespace;
    }

    isPreserveWhitespace() {
        return this._preserveWhitespace === true;
    }

    setPreserveComments(preserveComments) {
        this._preserveComments = preserveComments;
    }

    isPreserveComments() {
        return this._preserveComments === true;
    }

    createWalker(options) {
        return new Walker(options);
    }

    /**
     * Statically resolves a path if it is a literal string. Otherwise, it returns the input expression.
     */
    resolvePath(pathExpression) {
        ok(pathExpression, '"pathExpression" is required');

        if (pathExpression.type === 'Literal') {
            let path = pathExpression.value;
            if (typeof path === 'string') {
                return this.addStaticVar(path, this.builder.requireResolve(pathExpression));
            }
        }
        return pathExpression;
    }

    resolveTemplate(pathExpression) {
        ok(pathExpression, '"pathExpression" is required');

        if (pathExpression.type === 'Literal') {
            let path = pathExpression.value;
            if (typeof path === 'string') {
                return this.importTemplate(path);
            }
        }

        return pathExpression;
    }
}

CompileContext.prototype.util = {
    isValidJavaScriptIdentifier: require('./util/isValidJavaScriptIdentifier')
};

module.exports = CompileContext;
});
$rmod.main("/marko@3.0.2/compiler/taglib-lookup","index");
$rmod.main("/marko@3.0.2/compiler/taglib-loader/Taglib","index");
$rmod.def("/marko@3.0.0/compiler/util/removeDashes",function(e,r,o,n,t){o.exports=function(e){return e.replace(/-([a-z])/g,function(e,r){return r.toUpperCase()})}});
$rmod.def("/marko@3.0.0/compiler/ast/CustomTag", function(require, exports, module, __filename, __dirname) { 'use strict';

var HtmlElement = require('./HtmlElement');
var removeDashes = require('../util/removeDashes');
var safeVarName = require('../util/safeVarName');
var ok = require('assert'/*'assert'*/).ok;

function getNestedTagParentNode(nestedTagNode, parentTagName) {
    var currentNode = nestedTagNode.parentNode;
    while (currentNode) {
        if (currentNode.type === 'CustomTag' && currentNode.tagDef.name === parentTagName) {
            return currentNode;
        }

        currentNode = currentNode.parentNode;
    }
}

function getNestedVariables(elNode, tagDef, codegen) {
    var variableNames = [];
    tagDef.forEachVariable((nestedVar) => {
        var varName;
        if (nestedVar.nameFromAttribute) {
            var possibleNameAttributes = nestedVar.nameFromAttribute.split(/\s+or\s+|\s*,\s*/i);
            for (var i = 0, len = possibleNameAttributes.length; i < len; i++) {
                var attrName = possibleNameAttributes[i];
                var keep = false;
                if (attrName.endsWith('|keep')) {
                    keep = true;
                    attrName = attrName.slice(0, 0 - '|keep'.length);
                    possibleNameAttributes[i] = attrName;
                }
                varName = elNode.getAttributeValue(attrName);
                if (varName) {
                    if (varName.type !== 'Literal' || typeof varName.value !== 'string') {
                        codegen.addError('The value of the ' + attrName + ' is expected to be a string');
                        codegen.addError('Attribute ' + possibleNameAttributes.join(' or ') + ' is required');
                        varName = '_var';    // Let it continue with errors
                    }

                    varName = varName.value;

                    if (!keep) {
                        elNode.removeAttribute(attrName);
                    }
                    break;
                }
            }
            if (!varName) {
                codegen.addError('Attribute ' + possibleNameAttributes.join(' or ') + ' is required');
                varName = '_var';    // Let it continue with errors
            }
        } else {
            varName = nestedVar.name;
            if (!varName) {
                codegen.addError('Variable name is required');
                varName = '_var';    // Let it continue with errors
            }
        }
        variableNames.push(codegen.builder.identifier(varName));
    });

    if (elNode.additionalNestedVars.length) {
        elNode.additionalNestedVars.forEach((varName) => {
            variableNames.push(codegen.builder.identifier(varName));
        });
    }

    return variableNames;
}

function buildInputProps(el, context) {
    var tagDef = el.tagDef;
    var inputProps = {};

    function handleAttr(attrName, attrValue, attrDef) {
        if (!attrDef) {
            return; // Skip over attributes that are not supported
        }

        if (attrValue == null) {
            attrValue = context.builder.literalTrue();
        }

        var propName;
        var parentPropName;

        if (attrDef.dynamicAttribute) {
            // Dynamic attributes are allowed attributes
            // that are not declared (i.e. "*" attributes)
            //
            if (attrDef.removeDashes === true || attrDef.preserveName === false) {
                propName = removeDashes(attrName);
            } else {
                propName = attrName;
            }

            if (attrDef.targetProperty) {
                parentPropName = attrDef.targetProperty;
            }
        } else {
            // Attributes map to properties and we allow the taglib
            // author to control how an attribute name resolves
            // to a property name.
            if (attrDef.targetProperty) {
                propName = attrDef.targetProperty;
            } else if (attrDef.preserveName === true) {
                propName = attrName;
            } else {
                propName = removeDashes(attrName);
            }
        }

        if (attrDef.type === 'path') {
            attrValue = context.resolvePath(attrValue);
        } else if (attrDef.type === 'template') {
            attrValue = context.resolveTemplate(attrValue);
        }

        if (parentPropName) {
            let parent = inputProps[parentPropName] || (inputProps[parentPropName] = {});
            parent[propName] = attrValue;
        } else {
            inputProps[propName] = attrValue;
        }
    }

    // Add default values for any attributes from the tag definition. These added properties may get overridden
    // by get overridden from the attributes found on the actual HTML element.
    tagDef.forEachAttribute(function (attrDef) {
        if (attrDef.hasOwnProperty('defaultValue')) {
            handleAttr(
                attrDef.name,
                context.builder.literal(attrDef.defaultValue),
                attrDef);
        }
    });

    // Loop over the attributes found on the HTML element and add the corresponding properties
    // to the input object for the custom tag
    el.forEachAttribute((attr) => {
        var attrName = attr.name;
        var attrDef = attr.def || context.taglibLookup.getAttribute(el.tagName, attr.name);

        if (!attrDef) {
            context.addError(el, 'Unsupported attribute of "' + attrName + '" found on the <' + el.tagName + '> custom tag.');
            return; // Skip over attributes that are not supported
        }

        handleAttr(attrName, attr.value, attrDef);
    });

    // Imported variables are used to add input properties to a custom tag based on data/variables
    // found in the compiled template
    tagDef.forEachImportedVariable(function(importedVariable) {
        let propName = importedVariable.targetProperty;
        let propExpression = importedVariable.expression;

        inputProps[propName] = propExpression;
    });

    return inputProps;
}

function getNextNestedTagVarName(tagDef, context) {
    var key = 'customTag' + tagDef.name;

    var nestedTagVarInfo = context.data[key] || (context.data[key] = {
        next: 0
    });


    return safeVarName(tagDef.name) + (nestedTagVarInfo.next++);
}

class CustomTag extends HtmlElement {
    constructor(el, tagDef) {
        super(el);
        this.type = 'CustomTag';
        this.tagDef = tagDef;
        this.additionalNestedVars = [];
    }

    addNestedVariable(name) {
        ok(name, '"name" is required');
        this.additionalNestedVars.push(name);
    }

    generateCode(codegen) {
        if (this.type !== 'CustomTag') {
            throw new Error(this.type);
        }
        var builder = codegen.builder;
        var context = codegen.context;

        var tagDef = this.tagDef;

        var isNestedTag = tagDef.isNestedTag === true;
        var hasNestedTags = tagDef.hasNestedTags();
        var parentTagName;
        var isRepeated;
        var targetProperty;

        if (isNestedTag) {
            parentTagName = tagDef.parentTagName;
            isRepeated = tagDef.isRepeated === true;
            targetProperty = builder.literal(tagDef.targetProperty);
        }

        var nestedTagVar;

        if (hasNestedTags) {
            nestedTagVar = this.data.nestedTagVar = builder.identifier(getNextNestedTagVarName(tagDef, context));
        }

        let parentTagVar;

        if (isNestedTag) {
            let parentTagNode = getNestedTagParentNode(this, parentTagName);
            if (!parentTagNode) {
                codegen.addError('Invalid usage of the <' + this.tagName + '> nested tag. Tag not nested within a <' + parentTagName + '> tag.');
                return;
            }
            parentTagVar = parentTagNode.data.nestedTagVar;
        }

        var nestedVariableNames = getNestedVariables(this, tagDef, codegen);

        var inputProps = buildInputProps(this, context);
        var renderBodyFunction;

        if (this.body && this.body.length) {

            if (tagDef.bodyFunction) {
                let bodyFunction = tagDef.bodyFunction;
                let bodyFunctionName = bodyFunction.name;
                let bodyFunctionParams = bodyFunction.params.map(function(param) {
                    return builder.identifier(param);
                });

                inputProps[bodyFunctionName] = builder.functionDeclaration(bodyFunctionName, bodyFunctionParams, this.body);
            } else {
                renderBodyFunction = context.builder.renderBodyFunction(this.body);
                if (nestedTagVar) {
                    renderBodyFunction.params.push(nestedTagVar);
                } else {
                    if (nestedVariableNames && nestedVariableNames.length) {
                        renderBodyFunction.params = renderBodyFunction.params.concat(nestedVariableNames);
                    }
                }
            }
        }

        // Store the renderBody function with the input, but only if the body does not have
        // nested tags
        if (renderBodyFunction && !hasNestedTags) {
            inputProps.renderBody = renderBodyFunction;
        }

        inputProps = builder.literal(inputProps);

        var argument = this.argument;

        if (argument) {
            argument = builder.parseExpression(argument);

            if (Object.keys(inputProps.value).length === 0) {
                inputProps = argument;
            } else {
                var mergeVar = codegen.addStaticVar('__merge', '__helpers.m');
                inputProps = builder.functionCall(mergeVar, [
                    inputProps, // Input props from the attributes take precedence
                    argument
                ]);
            }
        }

        var rendererPath = tagDef.renderer;
        var rendererRequirePath;
        var requireRendererFunctionCall;

        if (rendererPath) {
            rendererRequirePath = context.getRequirePath(rendererPath);
            requireRendererFunctionCall = builder.require(JSON.stringify(rendererRequirePath));
        } else {
            requireRendererFunctionCall = builder.literal(null);
        }

        if (tagDef.template) {
            let templateRequirePath = context.getRequirePath(tagDef.template);
            let templateVar = context.importTemplate(templateRequirePath);
            let renderMethod = builder.memberExpression(templateVar, builder.identifier('render'));
            let renderArgs = [ inputProps, 'out' ];
            let renderFunctionCall = builder.functionCall(renderMethod, renderArgs);
            return renderFunctionCall;
        } else {
            var loadTagVar = codegen.addStaticVar('__loadTag', '__helpers.t');

            var loadTagArgs = [
                requireRendererFunctionCall // The first param is the renderer
            ];

            if (isNestedTag || hasNestedTags) {
                if (isNestedTag) {
                    loadTagArgs.push(targetProperty); // targetProperty
                    loadTagArgs.push(builder.literal(isRepeated ? 1 : 0)); // isRepeated
                } else {
                    loadTagArgs.push(builder.literal(0)); // targetProperty
                    loadTagArgs.push(builder.literal(0)); // isRepeated
                }

                if (hasNestedTags) {
                    loadTagArgs.push(builder.literal(1));
                }
            }

            var loadTag = builder.functionCall(loadTagVar, loadTagArgs);

            let tagVar = codegen.addStaticVar(tagDef.name, loadTag);
            let tagArgs = [inputProps, 'out' ];

            if (isNestedTag || hasNestedTags) {
                tagArgs.push(isNestedTag ? parentTagVar : builder.literal(0));

                if (renderBodyFunction && hasNestedTags) {
                    tagArgs.push(renderBodyFunction);
                }
            }
            let tagFunctionCall = builder.functionCall(tagVar, tagArgs);
            return tagFunctionCall;
        }
    }
}

module.exports = CustomTag;
});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/Taglib/Tag", function(require, exports, module, __filename, __dirname) { /*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';
var forEachEntry = require('/$/marko/$/raptor-util/forEachEntry'/*'raptor-util/forEachEntry'*/);
var ok = require('assert'/*'assert'*/).ok;
var CustomTag = require('../../ast/CustomTag');

function inheritProps(sub, sup) {
    forEachEntry(sup, function (k, v) {
        if (!sub[k]) {
            sub[k] = v;
        }
    });
}

function createCustomTagNodeFactory(tagDef) {
    return function nodeFactory(el) {
        return new CustomTag(el, tagDef);
    };
}

class Tag{
    constructor(taglib) {
        this.name = undefined;
        this.taglibId = taglib ? taglib.id : null;
        this.renderer = null;
        this.codeGeneratorModulePath = null;
        this.nodeFactoryPath = null;
        this.template = null;
        this.attributes = {};
        this.transformers = {};
        this.nestedVariables = null;
        this.importedVariables = null;
        this.patternAttributes = [];
        this.bodyFunction = null;
        this.nestedTags = null;
        this.isRepeated = null;
        this.isNestedTag = false;
        this.parentTagName = null;
        this.openTagOnly = null;
        this.body = null;
        this.type = null; // Only applicable for nested tags
        this._nodeFactory = undefined;
    }

    inheritFrom(superTag) {
        var subTag = this;
        /*
         * Have the sub tag inherit any properties from the super tag that are not in the sub tag
         */
        forEachEntry(superTag, function (k, v) {
            if (subTag[k] === undefined) {
                subTag[k] = v;
            }
        });
        [
            'attributes',
            'transformers',
            'nestedVariables',
            'importedVariables',
            'bodyFunction'
        ].forEach(function (propName) {
            inheritProps(subTag[propName], superTag[propName]);
        });
        subTag.patternAttributes = superTag.patternAttributes.concat(subTag.patternAttributes);
    }

    forEachVariable(callback, thisObj) {
        if (!this.nestedVariables) {
            return;
        }

        this.nestedVariables.vars.forEach(callback, thisObj);
    }

    forEachImportedVariable(callback, thisObj) {
        if (!this.importedVariables) {
            return;
        }

        forEachEntry(this.importedVariables, function (key, importedVariable) {
            callback.call(thisObj, importedVariable);
        });
    }

    forEachTransformer(callback, thisObj) {
        forEachEntry(this.transformers, function (key, transformer) {
            callback.call(thisObj, transformer);
        });
    }
    hasTransformers() {
        /*jshint unused:false */
        for (var k in this.transformers) {
            if (this.transformers.hasOwnProperty(k)) {
                return true;
            }

        }
        return false;
    }
    addAttribute(attr) {
        if (attr.pattern) {
            this.patternAttributes.push(attr);
        } else {
            if (attr.name === '*') {
                attr.dynamicAttribute = true;

                if (attr.targetProperty === null || attr.targetProperty === '') {
                    attr.targetProperty = null;

                }
                else if (!attr.targetProperty) {
                    attr.targetProperty = '*';
                }
            }

            this.attributes[attr.name] = attr;
        }
    }
    toString() {
        return '[Tag: <' + this.name + '@' + this.taglibId + '>]';
    }
    forEachAttribute(callback, thisObj) {
        for (var attrName in this.attributes) {
            if (this.attributes.hasOwnProperty(attrName)) {
                callback.call(thisObj, this.attributes[attrName]);
            }
        }
    }
    addNestedVariable(nestedVariable) {
        if (!this.nestedVariables) {
            this.nestedVariables = {
                __noMerge: true,
                vars: []
            };
        }

        this.nestedVariables.vars.push(nestedVariable);
    }
    addImportedVariable(importedVariable) {
        if (!this.importedVariables) {
            this.importedVariables = {};
        }
        var key = importedVariable.targetProperty;
        this.importedVariables[key] = importedVariable;
    }
    addTransformer(transformer) {
        var key = transformer.path;
        transformer.taglibId = this.taglibId;
        this.transformers[key] = transformer;
    }
    setBodyFunction(name, params) {
        this.bodyFunction = {
            __noMerge: true,
            name: name,
            params: params
        };
    }
    setBodyProperty(propertyName) {
        this.bodyProperty = propertyName;
    }
    addNestedTag(nestedTag) {
        ok(nestedTag.name, '"nestedTag.name" is required');

        if (!this.nestedTags) {
            this.nestedTags = {};
        }

        nestedTag.isNestedTag = true;

        if (!nestedTag.targetProperty) {
            nestedTag.targetProperty = nestedTag.name;
        }

        this.nestedTags[nestedTag.name] = nestedTag;
    }
    forEachNestedTag(callback, thisObj) {
        if (!this.nestedTags) {
            return;
        }

        forEachEntry(this.nestedTags, function (key, nestedTag) {
            callback.call(thisObj, nestedTag);
        });
    }
    hasNestedTags() {
        return this.nestedTags != null;
    }
    getNodeFactory() {
        var nodeFactory = this._nodeFactory;
        if (nodeFactory !== undefined) {
            return nodeFactory;
        }

        let codeGeneratorModulePath = this.codeGeneratorModulePath;

        if (this.codeGeneratorModulePath) {
            var loadedCodeGenerator = require(this.codeGeneratorModulePath);
            nodeFactory = function(elNode) {
                elNode.setType(codeGeneratorModulePath);
                elNode.setCodeGenerator(loadedCodeGenerator);
                return elNode;
            };
        } else if (this.nodeFactoryPath) {
            nodeFactory = require(this.nodeFactoryPath);
            if (typeof nodeFactory !== 'function') {
                throw new Error('Invalid node factory exported by module at path "' + this.nodeFactoryPath + '"');
            }
        } else if (this.renderer || this.template || this.isNestedTag) {
            nodeFactory = createCustomTagNodeFactory(this);
        } else {
            return null;
        }

        return (this._nodeFactory = nodeFactory);
    }

    toJSON() {
        return this;
    }
}

module.exports = Tag;
});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/Taglib/Attribute", function(require, exports, module, __filename, __dirname) { /*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

class Attribute {
    constructor(name) {
        this.name = name;
        this.type = null;
        this.required = false;
        this.type = 'string';
        this.allowExpressions = true;
        this.setFlag = null;
        this.pattern = null;
    }
}

module.exports = Attribute;
});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/Taglib/Property", function(require, exports, module, __filename, __dirname) { /*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';

class Property {
    constructor() {
        this.name = null;
        this.type = 'string';
        this.value = undefined;
    }
}

module.exports = Property;
});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/Taglib/NestedVariable", function(require, exports, module, __filename, __dirname) { /*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';

class NestedVariable {
    constructor() {
        this.name = null;
    }
}

module.exports = NestedVariable;
});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/Taglib/ImportedVariable", function(require, exports, module, __filename, __dirname) { /*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

class ImportedVariable {
    constructor() {
        this.targetProperty = null;
        this.expression = null;
    }
}

module.exports = ImportedVariable;
});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/Taglib/Transformer", function(require, exports, module, __filename, __dirname) { /*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';var process=require("process"); 
var nextTransformerId = 0;

class Transformer {
    constructor() {
        this.id = nextTransformerId++;
        this.name = null;
        this.tag = null;
        this.path = null;
        this.priority = null;
        this._func = null;
        this.properties = {};
    }

    getFunc() {
        if (!this.path) {
            throw new Error('Transformer path not defined for tag transformer (tag=' + this.tag + ')');
        }

        if (!this._func) {
            var transformer = require(this.path);

            if (typeof transformer === 'function') {
                if (transformer.prototype.process) {
                    var Clazz = transformer;
                    var instance = new Clazz();
                    instance.id = this.id;
                    this._func = instance.process.bind(instance);
                } else {
                    this._func = transformer;
                }
            } else {
                this._func = transformer.process || transformer.transform;
            }
        }
        return this._func;
    }
    toString() {
        return '[Taglib.Transformer: ' + this.path + ']';
    }
}

module.exports = Transformer;
});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/Taglib/Taglib", function(require, exports, module, __filename, __dirname) { /*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var forEachEntry = require('/$/marko/$/raptor-util/forEachEntry'/*'raptor-util/forEachEntry'*/);
var ok = require('assert'/*'assert'*/).ok;
var taglibLoader;

function handleImport(taglib, importedTaglib) {
    var importsLookup = taglib.importsLookup || (taglib.importsLookup = {});
    if (importsLookup.hasOwnProperty(importedTaglib.path)) {
        return;
    }

    importsLookup[importedTaglib.path] = importedTaglib;

    if (!taglib.imports) {
        taglib.imports = [];
    }

    taglib.imports.push(importedTaglib);
    taglib.addInputFile(importedTaglib.path);

    if (importedTaglib.imports) {
        importedTaglib.imports.forEach(function(nestedImportedTaglib) {
            handleImport(taglib, nestedImportedTaglib);
        });
    }
}



class Taglib {
    constructor(path) {
        ok(path, '"path" expected');
        this.path = this.id = path;
        this.dirname = null;
        this.tags = {};
        this.textTransformers = [];
        this.attributes = {};
        this.patternAttributes = [];
        this.inputFilesLookup = {};
        this.imports = null;
        this.importsLookup = null;
    }

    addInputFile(path) {
        this.inputFilesLookup[path] = true;
    }

    getInputFiles() {
        return Object.keys(this.inputFilesLookup);
    }

    addAttribute (attribute) {
        if (attribute.pattern) {
            this.patternAttributes.push(attribute);
        } else if (attribute.name) {
            this.attributes[attribute.name] = attribute;
        } else {
            throw new Error('Invalid attribute: ' + require('util'/*'util'*/).inspect(attribute));
        }
    }
    getAttribute (name) {
        var attribute = this.attributes[name];
        if (!attribute) {
            for (var i = 0, len = this.patternAttributes.length; i < len; i++) {
                var patternAttribute = this.patternAttributes[i];
                if (patternAttribute.pattern.test(name)) {
                    attribute = patternAttribute;
                }
            }
        }
        return attribute;
    }
    addTag (tag) {
        ok(arguments.length === 1, 'Invalid args');
        if (!tag.name) {
            throw new Error('"tag.name" is required: ' + JSON.stringify(tag));
        }
        this.tags[tag.name] = tag;
        tag.taglibId = this.id || this.path;
    }
    addTextTransformer (transformer) {
        this.textTransformers.push(transformer);
    }
    forEachTag (callback, thisObj) {
        forEachEntry(this.tags, function (key, tag) {
            callback.call(thisObj, tag);
        }, this);
    }

    addImport(path) {
        var importedTaglib = taglibLoader.load(path);
        handleImport(this, importedTaglib);
    }

    toJSON() {
        return {
            path: this.path,
            tags: this.tags,
            textTransformers: this.textTransformers,
            attributes: this.attributes,
            patternAttributes: this.patternAttributes,
            imports: this.imports
        };
    }
}

Taglib.Tag = require('./Tag');
Taglib.Attribute = require('./Attribute');
Taglib.Property = require('./Property');
Taglib.NestedVariable = require('./NestedVariable');
Taglib.ImportedVariable = require('./ImportedVariable');
Taglib.Transformer = require('./Transformer');

module.exports = Taglib;

taglibLoader = require('../');
});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/Taglib/index",function(i,o,a,e,l){a.exports=i("./Taglib")});
$rmod.def("/marko@3.0.0/compiler/taglib-lookup/TaglibLookup", function(require, exports, module, __filename, __dirname) { /*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';

var ok = require('assert'/*'assert'*/).ok;
var Taglib = require('../taglib-loader/Taglib');
var extend = require('/$/marko/$/raptor-util/extend'/*'raptor-util/extend'*/);
var Text = require('../ast/Text');

function transformerComparator(a, b) {
    a = a.priority;
    b = b.priority;

    if (a == null) {
        a = Number.MAX_VALUE;
    }

    if (b == null) {
        b = Number.MAX_VALUE;
    }

    return a - b;
}

function merge(target, source) {
    for (var k in source) {
        if (source.hasOwnProperty(k)) {
            if (target[k] && typeof target[k] === 'object' &&
                source[k] && typeof source[k] === 'object') {

                if (source.__noMerge) {
                    // Don't merge objects that are explicitly marked as "do not merge"
                    continue;
                }

                if (Array.isArray(target[k]) || Array.isArray(source[k])) {

                    var targetArray = target[k];
                    var sourceArray = source[k];


                    if (!Array.isArray(targetArray)) {
                        targetArray = [targetArray];
                    }

                    if (!Array.isArray(sourceArray)) {
                        sourceArray = [sourceArray];
                    }

                    target[k] = [].concat(targetArray).concat(sourceArray);
                } else {
                    var Ctor = target[k].constructor;
                    var newTarget = new Ctor();
                    merge(newTarget, target[k]);
                    merge(newTarget, source[k]);
                    target[k] = newTarget;
                }

            } else {
                target[k] = source[k];
            }
        }
    }

    return target;
}

/**
 * A taglib lookup merges in multiple taglibs so there is a single and fast lookup
 * for custom tags and custom attributes.
 */
class TaglibLookup {
    constructor() {
        this.merged = {};
        this.taglibsById = {};
        this._inputFiles = null;
    }

    hasTaglib(taglib) {
        return this.taglibsById.hasOwnProperty(taglib.id);
    }

    _mergeNestedTags(taglib) {
        var Tag = Taglib.Tag;
        // Loop over all of the nested tags and register a new custom tag
        // with the fully qualified name

        var merged = this.merged;

        function handleNestedTags(tag, parentTagName) {
            tag.forEachNestedTag(function(nestedTag) {
                var fullyQualifiedName = parentTagName + ':' + nestedTag.name;
                // Create a clone of the nested tag since we need to add some new
                // properties
                var clonedNestedTag = new Tag();
                extend(clonedNestedTag, nestedTag);
                // Record the fully qualified name of the parent tag that this
                // custom tag is associated with.
                clonedNestedTag.parentTagName = parentTagName;
                clonedNestedTag.name = fullyQualifiedName;
                merged.tags[fullyQualifiedName] = clonedNestedTag;
                handleNestedTags(clonedNestedTag, fullyQualifiedName);
            });
        }

        taglib.forEachTag(function(tag) {
            handleNestedTags(tag, tag.name);
        });
    }

    addTaglib(taglib) {
        ok(taglib, '"taglib" is required');
        ok(taglib.id, '"taglib.id" expected');

        if (this.taglibsById.hasOwnProperty(taglib.id)) {
            return;
        }

        this.taglibsById[taglib.id] = taglib;

        merge(this.merged, {
            tags: taglib.tags,
            textTransformers: taglib.textTransformers,
            attributes: taglib.attributes,
            patternAttributes: taglib.patternAttributes
        });

        this._mergeNestedTags(taglib);
    }

    getTag(element) {
        if (typeof element === 'string') {
            element = {
                tagName: element
            };
        }
        var tags = this.merged.tags;
        if (!tags) {
            return;
        }

        var tagName = element.tagName;
        return tags[tagName];
    }

    getAttribute(element, attr) {

        if (typeof element === 'string') {
            element = {
                tagName: element
            };
        }

        if (typeof attr === 'string') {
            attr = {
                name: attr
            };
        }

        var tags = this.merged.tags;
        if (!tags) {
            return;
        }

        var tagName = element.tagName;
        var attrName = attr.name;

        function findAttributeForTag(tag, attributes, attrName) {
            // try by exact match first
            var attribute = attributes[attrName];
            if (attribute === undefined && attrName !== '*') {
                if (tag.patternAttributes) {
                    // try searching by pattern
                    for (var i = 0, len = tag.patternAttributes.length; i < len; i++) {
                        var patternAttribute = tag.patternAttributes[i];
                        if (patternAttribute.pattern.test(attrName)) {
                            attribute = patternAttribute;
                            break;
                        }
                    }
                }
            }

            return attribute;
        }

        var globalAttributes = this.merged.attributes;

        function tryAttribute(tagName, attrName) {
            var tag = tags[tagName];
            if (!tag) {
                return undefined;
            }

            return findAttributeForTag(tag, tag.attributes, attrName) ||
                   findAttributeForTag(tag, globalAttributes, attrName);
        }

        var attrDef = tryAttribute(tagName, attrName) || // Look for an exact match at the tag level
            tryAttribute('*', attrName) || // If not there, see if there is a exact match on the attribute name for attributes that apply to all tags
            tryAttribute(tagName, '*'); // Otherwise, see if there is a splat attribute for the tag

        return attrDef;
    }

    forEachNodeTransformer(node, callback, thisObj) {
        /*
         * Based on the type of node we have to choose how to transform it
         */
        if (node.tagName) {
            this.forEachTagTransformer(node, callback, thisObj);
        } else if (node instanceof Text) {
            this.forEachTextTransformer(callback, thisObj);
        }
    }

    forEachTagTransformer(element, callback, thisObj) {
        if (typeof element === 'string') {
            element = {
                tagName: element
            };
        }

        var tagName = element.tagName;
        /*
         * If the node is an element node then we need to find all matching
         * transformers based on the URI and the local name of the element.
         */

        var transformers = [];

        function addTransformer(transformer) {
            if (!transformer || !transformer.getFunc) {
                throw new Error('Invalid transformer');
            }

            transformers.push(transformer);
        }

        /*
         * Handle all of the transformers for all possible matching transformers.
         *
         * Start with the least specific and end with the most specific.
         */

        if (this.merged.tags) {
            if (this.merged.tags[tagName]) {
                this.merged.tags[tagName].forEachTransformer(addTransformer);
            }

            if (this.merged.tags['*']) {
                this.merged.tags['*'].forEachTransformer(addTransformer);
            }
        }

        transformers.sort(transformerComparator);

        transformers.forEach(callback, thisObj);
    }

    forEachTextTransformer(callback, thisObj) {
        if (this.merged.textTransformers) {
            this.merged.textTransformers.sort(transformerComparator);
            this.merged.textTransformers.forEach(callback, thisObj);
        }
    }

    getInputFiles() {
        if (!this._inputFiles) {
            var inputFilesSet = {};

            for (var taglibId in this.taglibsById) {
                if (this.taglibsById.hasOwnProperty(taglibId)) {

                    var taglibInputFiles = this.taglibsById[taglibId].getInputFiles();
                    var len = taglibInputFiles.length;
                    if (len) {
                        for (var i=0; i<len; i++) {
                            inputFilesSet[taglibInputFiles[i]] = true;
                        }
                    }
                }
            }

            this._inputFiles = Object.keys(inputFilesSet);
        }

        return this._inputFiles;
    }

    toString() {
        return 'lookup: ' + this.getInputFiles().join(', ');
    }
}

module.exports = TaglibLookup;
});
$rmod.def("/marko@3.0.0/compiler/taglib-lookup/index",function(i,r,a,e,o){"use strict";function t(i,r){if(r.imports)for(var a=0;a<r.imports.length;a++){var e=r.imports[a];i.hasTaglib(e)||i.addTaglib(e)}}function n(i){var a=s.find(i,r.registeredTaglibs),e=a.map(function(i){return i.id}).join(","),o=u[e];if(void 0===o){o=new f;for(var n=0;n<a.length;n++){var l=a[n];o.addTaglib(l),t(o,l)}u[e]=o}return o}function l(i){"string"==typeof i&&(i=d.load(i)),r.registeredTaglibs.push(i)}function g(){u={}}r.registerTaglib=l,r.buildLookup=n,r.clearCache=g;var d=i("../taglib-loader"),s=i("../taglib-finder"),f=i("./TaglibLookup");r.registeredTaglibs=[];var u={}});
$rmod.main("/marko@3.0.2/compiler/taglib-loader","index");
$rmod.def("/marko@3.0.0/compiler/taglib-loader/handleAttributes",function(t,r,a,o,e){var i=t("assert").ok,d=t("/$/marko/$/raptor-util/forEachEntry"),u=t("./loader");a.exports=function(t,r,a){i(r),d(t,function(t,o){var e=u.attributeLoader.loadAttribute(t,o,'"'+t+'" attribute as part of '+a);r.addAttribute(e)})}});
$rmod.remap("/marko@3.0.2/compiler/taglib-loader/scanTagsDir","scanTagsDir-browser");
$rmod.def("/marko@3.0.0/compiler/taglib-loader/scanTagsDir-browser",function(o,r,a,e,i){a.exports=function(){}});
$rmod.remap("/marko@3.0.2/compiler/util/resolve","resolve-browser");
$rmod.def("/marko@3.0.0/compiler/util/resolve-browser",function(r,o,e,i,n){var t=r("path-browserify");e.exports=function(r,o){return t.join(o,r)}});
$rmod.remap("/marko@3.0.2/compiler/taglib-loader/taglib-reader","taglib-reader-browser");
$rmod.def("/marko@3.0.0/compiler/taglib-loader/taglib-reader-browser",function(r,a,t,e,o){a.readTaglib=function(a){var t;try{t=r(a)}catch(e){throw new Error('Unable to parse taglib JSON at path "'+a+'". Exception: '+e)}return t}});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/loader-taglib",function(t,a,r,i,e){function n(a){try{return t.resolve(a),!0}catch(r){return!1}}function o(a,r,i){var e=a.taglib,o=a.dirname;d(i,'Invalid tag definition for "'+r+'"');var s,f;if("string"==typeof i){if(i=h.resolve(o,i),e.addInputFile(i),f=h.dirname(i),!n(i))throw new Error('Tag at path "'+i+'" does not exist. Taglib: '+e.path);try{s=t(i)}catch(l){throw new Error('Unable to parse tag JSON for tag at path "'+i+'"')}}else f=o,s=i,i="<"+r+"> tag in "+e.path;var g=b.tagLoader.loadTag(s,i,e,f);void 0===g.name&&(g.name=r),e.addTag(g)}function s(t,a){d(t),d(a),this.taglib=t,this.path=a,this.dirname=h.dirname(a)}var d=t("assert").ok,h=t("path-browserify"),f=t("./handleAttributes"),l=t("./scanTagsDir"),g=t("../util/resolve"),p=t("/$/marko/$/property-handlers"),u=t("./Taglib"),v=t("./taglib-reader"),b=t("./loader"),c=t("/$/marko/$/try-require"),m=c("resolve-from",t);s.prototype={attributes:function(t){var a=this.taglib,r=this.path;f(t,a,r)},tags:function(t){for(var a in t)t.hasOwnProperty(a)&&o(this,a,t[a])},tagsDir:function(t){var a=this.taglib,r=this.path,i=this.dirname;if(Array.isArray(t))for(var e=0;e<t.length;e++)l(r,i,t[e],a);else l(r,i,t,a)},taglibImports:function(a){if(m){var r,i=this.taglib,e=this.dirname;if(a&&Array.isArray(a))for(var n=0;n<a.length;n++){var o=a[n];if("string"==typeof o){var s=h.basename(o);if("package.json"===s){var d=g(o,e),f=t(d),l=f.dependencies;if(l)for(var p=Object.keys(l),u=0;u<p.length;u++){var v=p[u];try{r=m(e,v+"/marko.json")}catch(b){}r&&i.addImport(r)}}else r=m(e,o),i.addImport(r)}}}},textTransformer:function(t){var a=this.taglib,r=this.path,i=this.dirname,e=new u.Transformer;"string"==typeof t&&(t={path:t}),p(t,{path:function(t){var a=g(t,i);e.path=a}},"text-transformer in "+r),d(e.path,'"path" is required for transformer'),a.addInputFile(e.path),a.addTextTransformer(e)},taglibId:function(t){var a=this.taglib;a.id=t}},a.loadTaglib=function(a,r){var i=v.readTaglib(a);r=r||new u(a),r.addInputFile(a);var e=new s(r,a);if(e["*"]=function(t,a){var r=this.taglib,i=this.path;if(t.startsWith("<"))o(this,t.slice(1,-1),a);else{if(!t.startsWith("@"))return!1;var e=t.substring(1),n=b.attributeLoader.loadAttribute(e,a,'"'+e+'" attribute as part of '+i);r.addAttribute(n)}},p(i,e,a),r.path=a,!r.id){var n=h.dirname(a),d=h.join(n,"package.json");try{var f=t(d);r.id=f.name}catch(l){}r.id||(r.id=a)}return r}});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/loader-tag",function(t,r,e,a,i){function n(r){try{return t.resolve(r),!0}catch(e){return!1}}function o(t){return t.replace(/-([a-z])/g,function(t,r){return r.toUpperCase()})}function s(t,r,e){var a;if("string"==typeof r)a={name:r};else if(a={},l(r,{name:function(t){a.name=t},nameFromAttribute:function(t){a.nameFromAttribute=t}},e),!a.name&&!a.nameFromAttribute)throw new Error('The "name" or "name-from-attribute" attribute is required for a nested variable');t.addNestedVariable(a)}function p(t,r,e,a){if(this.tag=t,this.dirname=r,this.path=e,this.taglib=a,!a)throw new Error("taglib expected")}function f(t){if(null!=t.attributes)return!0;for(var r in t)if(t.hasOwnProperty(r)&&r.startsWith("@"))return!0;return!1}function u(t,r,e,a){h(t),h("string"==typeof r),h(e),h("string"==typeof a);var i=new d.Tag(e);f(t)||(t.attributes={"*":{type:"string",targetProperty:null}});var n=new p(i,a,r,e);return n["*"]=function(t,n){var s,p,f=t.split(/\s+|\s+[,]\s+/),h=!1,d=!1,l=null;for(s=0;s<f.length;s++)if(p=f[s],p.startsWith("@"))d=!0,0===s&&(l=p.substring(1));else{if(!p.startsWith("<"))return!1;h=!0}var g,m={},y={};if(null!=n&&"object"==typeof n){for(g in n)if(n.hasOwnProperty(g))if(g.startsWith("@")||g.startsWith("<"))y[g]=n[g],delete n[g];else{var v=o(g);E.tagLoader.isSupportedProperty(v)&&E.attributeLoader.isSupportedProperty(v)?(y[g]=n[g],m[g]=n[g],delete n[g]):E.tagLoader.isSupportedProperty(v)?(y[g]=n[g],delete n[g]):E.attributeLoader.isSupportedProperty(v)&&(m[g]=n[g],delete n[g])}if(!c(n))throw new Error("Unsupported properties of ["+Object.keys(n).join(", ")+'] for "'+t+'" in "'+r+'"');var b=m.type;!b&&d&&h&&(m.type="expression")}else"string"==typeof n&&(h&&d?y=m={type:n}:h?y={type:n}:m={type:n});for(s=0;s<f.length;s++)if(p=f[s],p.startsWith("@")){var w=p.substring(1),P=E.attributeLoader.loadAttribute(w,m,'"'+w+'" attribute as part of '+r);i.addAttribute(P)}else{if(!p.startsWith("<"))return!1;var $=u(y,t+" of "+r,e,a),T=!1;p.endsWith("[]")&&(T=!0,p=p.slice(0,-2));var x=p.substring(1,p.length-1);$.name=x,$.isRepeated=T,$.targetProperty=m.targetProperty||l,i.addNestedTag($)}},l(t,n,r),i}t("/$/marko/$/raptor-polyfill/string/startsWith");var h=t("assert").ok,d=t("./Taglib"),l=t("/$/marko/$/property-handlers"),c=t("/$/marko/$/raptor-util/isObjectEmpty"),g=t("path-browserify"),m=t("../util/resolve"),h=t("assert").ok,y=/^([A-Za-z_$][A-Za-z0-9_]*)(?:\(([^)]*)\))?$/,v=/^[A-Za-z_$][A-Za-z0-9_]*$/,b=t("./handleAttributes"),d=t("./Taglib"),l=t("/$/marko/$/property-handlers"),w=t("/$/marko/$/raptor-util").forEachEntry,E=t("./loader"),P=t("../");p.prototype={name:function(t){var r=this.tag;r.name=t},renderer:function(t){var r=this.tag,e=this.dirname,a=m(t,e);this.taglib.addInputFile(a),r.renderer=a},template:function(t){var r=this.tag,e=this.dirname,a=g.resolve(e,t);if(!n(a))throw new Error('Template at path "'+a+'" does not exist.');this.taglib.addInputFile(a),r.template=a},attributes:function(t){var r=this.tag,e=this.path;b(t,r,e)},codeGenerator:function(t){var r=this.tag,e=this.dirname,a=m(t,e);r.codeGeneratorModulePath=a,this.taglib.addInputFile(a)},nodeFactory:function(t){var r=this.tag,e=this.dirname,a=m(t,e);r.nodeFactoryPath=a,this.taglib.addInputFile(a)},preserveWhitespace:function(t){var r=this.tag;r.preserveWhitespace=!!t},transformer:function(t){var r=this.tag,e=this.dirname,a=this.path,i=this.taglib,n=new d.Transformer;"string"==typeof t&&(t={path:t}),l(t,{path:function(t){var r=m(t,e);n.path=r,i.addInputFile(r)},priority:function(t){n.priority=t},name:function(t){n.name=t},properties:function(t){var r=n.properties||(n.properties={});for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])}},"transformer in "+a),h(n.path,'"path" is required for transformer'),r.addTransformer(n)},"var":function(t){s(this.tag,t,'"var" in tag '+this.path)},vars:function(t){var r=this.tag,e=this;t&&t.forEach(function(t,a){s(r,t,'"vars"['+a+"] in tag "+e.path)})},bodyFunction:function(t){var r=this.tag,e=y.exec(t);if(!e)throw new Error('Invalid value of "'+t+'" for "body-function". Expected value to be of the following form: <function-name>([param1, param2, ...])');var a=e[1],i=e[2];if(i){i=i.trim().split(/\s*,\s*/);for(var n=0;n<i.length;n++){if(0===i[n].length)throw new Error('Invalid parameters for body-function with value of "'+t+'"');if(!v.test(i[n]))throw new Error('Invalid parameter name of "'+i[n]+'" for body-function with value of "'+t+'"')}}else i=[];r.setBodyFunction(a,i)},importVar:function(r){var e=this.tag;w(r,function(r,a){var i={targetProperty:r},n=a;if(n?"object"==typeof n&&(n=n.expression):n=r,!n)throw new Error('Invalid "import-var": '+t("util").inspect(a));i.expression=P.builder.parseExpression(n),e.addImportedVariable(i)})},type:function(t){var r=this.tag;r.type=t},nestedTags:function(t){var r=this.path,e=this.taglib,a=this.dirname,i=this.tag;w(t,function(t,n){var o=u(n,t+" of "+r,e,a);o.name=t,i.addNestedTag(o)})},escapeXmlBody:function(t){t===!1&&(this.tag.escapeXmlBody=!1)},body:function(t){if("static-text"!==t&&"parsed-text"!==t&&"html"!==t)throw new Error('Invalid value for "body". Allowed: "static-text", "parsed-text" or "html"');this.tag.body=t},openTagOnly:function(t){this.tag.openTagOnly=t}},r.isSupportedProperty=function(t){return p.prototype.hasOwnProperty(t)},r.loadTag=u});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/loader-attribute",function(t,r,e,a,n){function o(t){i.ok(t),i.equal(typeof t,"object"),this.attr=t}var i=t("assert"),s=t("/$/marko/$/raptor-regexp"),p=t("/$/marko/$/property-handlers"),u=t("./Taglib");o.prototype={type:function(t){var r=this.attr;r.type=t},targetProperty:function(t){var r=this.attr;r.targetProperty=t},defaultValue:function(t){var r=this.attr;r.defaultValue=t},pattern:function(t){var r=this.attr;if(t===!0){var e=s.simple(r.name);r.pattern=e}},allowExpressions:function(t){var r=this.attr;r.allowExpressions=t},preserveName:function(t){var r=this.attr;r.preserveName=t},required:function(t){var r=this.attr;r.required=t===!0},removeDashes:function(t){var r=this.attr;r.removeDashes=t===!0},description:function(){},setFlag:function(t){var r=this.attr;r.setFlag=t},ignore:function(t){var r=this.attr;t===!0&&(r.ignore=!0)}},r.isSupportedProperty=function(t){return o.prototype.hasOwnProperty(t)},r.loadAttribute=function(t,r,e){var a=new u.Attribute(t);null==r?r={type:"string"}:"string"==typeof r&&(r={type:r});var n=new o(a);return p(r,n,e),a}});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/loader",function(a,r,e,o,t){r.taglibLoader=a("./loader-taglib"),r.tagLoader=a("./loader-tag"),r.attributeLoader=a("./loader-attribute")});
$rmod.def("/marko@3.0.0/compiler/taglib-loader/index",function(a,r,e,o,i){function l(a){if(t[a])return t[a];var r=t[a]=new d(a);return n.taglibLoader.loadTaglib(a,r),t[a]=r,r}var n=a("./loader"),d=a("./Taglib"),t={};r.clearCache=function(){t={}},r.load=l});
$rmod.main("/marko@3.0.2/compiler/taglib-finder","index");
$rmod.remap("/marko@3.0.2/compiler/taglib-finder/index","index-browser");
$rmod.def("/marko@3.0.0/compiler/taglib-finder/index-browser",function(n,e,i,r,c){function o(n,e){return e||[]}function f(n){}function d(){}e.find=o,e.excludeDir=f,e.clearCache=d});
$rmod.def("/marko@3.0.0/compiler/index", function(require, exports, module, __filename, __dirname) { 'use strict';var process=require("process"); 

var Compiler = require('./Compiler');
var Walker = require('./Walker');
var Parser = require('./Parser');
var HtmlJsParser = require('./HtmlJsParser');
var Builder = require('./Builder');
var extend = require('/$/marko/$/raptor-util/extend'/*'raptor-util/extend'*/);
var CompileContext = require('./CompileContext');
var NODE_ENV = process.env.NODE_ENV;

var defaultParser = new Parser(new HtmlJsParser());
var rawParser = new Parser(
    new HtmlJsParser({
        ignorePlaceholders: true
    }),
    {
        raw: true
    });

var defaultOptions = {
        /**
         * If true, then the compiler will check the disk to see if a previously compiled
         * template is the same age or newer than the source template. If so, the previously
         * compiled template will be loaded. Otherwise, the template will be recompiled
         * and saved to disk.
         *
         * If false, the template will always be recompiled. If `writeToDisk` is false
         * then this option will be ignored.
         */
        checkUpToDate: process.env.MARKO_CLEAN ? false : true,
        /**
         * If true (the default) then compiled templates will be written to disk. If false,
         * compiled templates will not be written to disk (i.e., no `.marko.js` file will
         * be generated)
         */
        writeToDisk: true,

        /**
         * If true, then the compiled template on disk will assumed to be up-to-date if it exists.
         */
        assumeUpToDate: process.env.MARKO_CLEAN != null || NODE_ENV == null ? false : (NODE_ENV !== 'development' && NODE_ENV !== 'dev')
    };

function configure(config) {
    extend(defaultOptions, config);
}

var defaultCompiler = new Compiler({
    parser: defaultParser,
    builder: Builder.DEFAULT_BUILDER
});

var req = require;

function createBuilder(options) {
    return new Builder(options);
}

function createWalker(options) {
    return new Walker(options);
}

function compileFile(filename, options, callback) {
    var fs = req('fs');
    var compiler;

    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    if (options) {
        compiler = options.compiler;
    }

    if (!compiler) {
        compiler = defaultCompiler;
    }

    if (callback) {
        fs.readFile(filename, {encoding: 'utf8'}, function(err, templateSrc) {
            if (err) {
                return callback(err);
            }

            try {
                callback(null, compiler.compile(templateSrc, filename, options));
            } catch(e) {
                callback(e);
            }
        });
    } else {
        let templateSrc = fs.readFileSync(filename, {encoding: 'utf8'});
        return compiler.compile(templateSrc, filename, options);
    }
}

function compile(src, filename, options, callback) {
    var compiler;

    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    if (options) {
        compiler = options.compiler;
    }

    if (!compiler) {
        compiler = defaultCompiler;
    }

    if (callback) {
        try {
            callback(null, compiler.compile(src, filename, options));
        } catch(e) {
            callback(e);
        }
    } else {
        return compiler.compile(src, filename, options);
    }
}

function checkUpToDate(templateFile, templateJsFile) {
    return false; // TODO Implement checkUpToDate
}

function getLastModified(path, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    callback(null, -1); // TODO Implement getLastModified
}

function clearCaches() {
    exports.taglibLookup.clearCache();
    exports.taglibFinder.clearCache();
    exports.taglibLoader.clearCache();
}

function parseRaw(templateSrc, filename) {
    var context = new CompileContext(templateSrc, filename, Builder.DEFAULT_BUILDER);
    return rawParser.parse(templateSrc, context);
}

exports.createBuilder = createBuilder;
exports.compileFile = compileFile;
exports.compile = compile;
exports.parseRaw = parseRaw;
exports.defaultOptions = defaultOptions;
exports.checkUpToDate = checkUpToDate;
exports.getLastModified = getLastModified;
exports.createWalker = createWalker;
exports.builder = Builder.DEFAULT_BUILDER;
exports.configure = configure;
exports.clearCaches = clearCaches;

var taglibLookup = require('./taglib-lookup');
exports.taglibLookup = taglibLookup;
exports.taglibLoader = require('./taglib-loader');
exports.taglibFinder = require('./taglib-finder');

taglibLookup.registerTaglib(require.resolve('../taglibs/core/marko.json'));
taglibLookup.registerTaglib(require.resolve('../taglibs/layout/marko.json'));
taglibLookup.registerTaglib(require.resolve('../taglibs/html/marko.json'));
taglibLookup.registerTaglib(require.resolve('../taglibs/async/marko.json'));
taglibLookup.registerTaglib(require.resolve('../taglibs/cache/marko.json'));

exports.registerTaglib = function(path) {
    taglibLookup.registerTaglib(path);
    clearCaches();
};

/*
exports.Taglib = require('./Taglib');

exports.lookup = require('./taglib-lookup');
exports.buildLookup = exports.lookup.buildLookup;
exports.registerTaglib = exports.lookup.registerTaglib;
exports.excludeDir = exports.lookup.excludeDir;
exports.clearCaches = function() {
    exports.lookup.clearCaches();
    require('./taglib-finder').clearCaches();
};
*/
});