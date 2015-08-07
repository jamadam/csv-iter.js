/**
 CSV-Iterator
 

 Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 @requires https://github.com/jamadam/CSV-JS
 @see 
 @author jamadam
 */

(function (global) {
    
    if (!global.CSV) {
        throw new Exception('CSV class is not loaded');
    }

    var Class = function(body, headers) {
        if (headers) {
            this.keys = {};
            for (var key in headers) {
                this.keys[headers[key]] = key;
            }
        }
        this.body = body;
        this.pos = 0;
    };
    
    Class.prototype.next = function() {
        if (this.pos < this.body.length) {
            return this.body[++this.pos];
        }
    };
    
    Class.prototype.row = function(key) {
        return this.body[this.pos][this.keys ? this.keys[key] : key];
    };

    global.CSV.generateIterator = function(json, use_first_line_as_header) {
        if (use_first_line_as_header) {
            return new Class(json, json.shift());
        }
        return new Class(json);
    }

})(this);
