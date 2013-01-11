// Generated by CoffeeScript 1.4.0
(function() {
  var BEST_URL, BLOCKS, BLOCK_ELEMENTS, COMMENT_NODE, DEBUG, ELEMENT_NODE, IRRELEVANT_ELEMENTS, JQ, JQUERY_UI_CSS, MIN_LINK_RATIO, NAV_CONTAINING_ELEMENTS, PUNCTUATION, QUOTES, SECTION, SHORTENABLE_WORDS, TEXTISH_ELEMENTS, TEXT_NODE, WORD_REGEX, boxStyles, debug, getBestURL, key, savePublishingDiv, savePublishingWrapper, spSubTitle, spTitle, wrapperStyles,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  console.log("Evaluating: init.coffee");

  SECTION = "init.coffee";

  DEBUG = true;

  debug = function(message) {
    if (DEBUG) {
      return console.log("" + SECTION + ": " + message);
    }
  };

  ELEMENT_NODE = 1;

  TEXT_NODE = 3;

  COMMENT_NODE = 8;

  MIN_LINK_RATIO = 2;

  JQUERY_UI_CSS = 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/themes/ui-lightness/jquery-ui.css';

  JQ = window.JQ;

  if (typeof $ !== "undefined" && $ !== null) {
    debug("\"$\" is assigned as:\n" + $);
  } else {
    debug("\"$\" is not assigned");
  }

  BLOCKS = ['block', 'inline-block', 'table-cell', 'table-caption', 'list-item', 'none'];

  BLOCK_ELEMENTS = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BODY'];

  TEXTISH_ELEMENTS = ['SPAN', 'EM', 'B', 'STRONG', 'I', 'TT', 'ABBR', 'ACRONYM', 'BIG', 'CITE', 'CODE', 'DFN', 'LABEL', 'Q', 'SAMP', 'SMALL', 'SUB', 'SUP', 'VAR', 'DEL', 'INS', 'BR'];

  IRRELEVANT_ELEMENTS = ['IMG', 'OBJECT', 'EMBED', 'IFRAME', 'SCRIPT', 'INPUT', 'FORM', 'HEAD', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'STYLE', 'LINK'];

  NAV_CONTAINING_ELEMENTS = ['DIV', 'UL', 'OL', 'LI', 'P'];

  PUNCTUATION = ['.', '?', '!', '(', ')', '[', ']', '{', '}'];

  QUOTES = ['"', '“', '”'];

  SHORTENABLE_WORDS = {
    'one': 1,
    'first': "1st",
    'two': 2,
    'second': "2nd",
    'three': 3,
    'third': "3rd",
    'four': 4,
    'fourth': "4th",
    'five': 5,
    'fifth': "5th",
    'six': 6,
    'sixth': "6th",
    'seven': 7,
    'seventh': "7th",
    'eight': 8,
    'eighth': "8th",
    'nine': 9,
    'ninth': "9th",
    'ten': 10,
    'tenth': "10th",
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
    'hundred': 100,
    'thousand': "1k",
    'million': "mm",
    'billion': "bn",
    'trillion': "trln",
    'monday': "Mon",
    'tuesday': "Tue",
    'wednesday': "Wed",
    'thursday': "Thu",
    'friday': "Fri",
    'saturday': "Sat",
    'sunday': "Sun",
    'january': "Jan",
    'february': "Feb",
    'march': "Mar",
    'april': "Apr",
    'may': "May",
    'june': "Jun",
    'july': "Jul",
    'august': "Aug",
    'september': "Sep",
    'october': "Oct",
    'november': "Nov",
    'december': "Dec",
    'every': "vry",
    'see': "C",
    'cool': "k",
    'overheard': "OH",
    'whatever': "wtv",
    'your': "Ur",
    'you': "U",
    'about': "abt",
    'because': "b/c",
    'before': "b4",
    'chk': "chk",
    'to': "2",
    'and': "&",
    'their': "thr",
    'from': "frm",
    'them': "thm",
    'be': "B",
    'large': "lrg",
    'absolute': "abs.",
    'becomes': "bcms",
    'equal': "=",
    'which': "whch",
    'for': "4",
    'are': "R",
    'great': "gr8",
    'at': "@",
    'that': "th@",
    'quarter': "1/4",
    'half': "1/2",
    'Alabama': "AL",
    'Alaska': "AK",
    'Arizona': "AZ",
    'Arkansas': "AR",
    'California': "CA",
    'Colorado': "CO",
    'Connecticut': "CT",
    'Delaware': "DE",
    'District of Columbia': "DC",
    'Florida': "FL",
    'Georgia': "GA",
    'Hawaii': "HI",
    'Idaho': "ID",
    'Illinois': "IL",
    'Indiana': "IN",
    'Iowa': "IA",
    'Kansas': "KS",
    'Kentucky': "KY",
    'Louisiana': "LA",
    'Maine': "ME",
    'Maryland': "MD",
    'Massachusetts': "MA",
    'Michigan': "MI",
    'Minnesota': "MN",
    'Mississippi': "MS",
    'Missouri': "MO",
    'Montana': "MT",
    'Nebraska': "NE",
    'Nevada': "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    'Ohio': "OH",
    'Oklahoma': "OK",
    'Oregon': "OR",
    'Pennsylvania': "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    'Tennessee': "TN",
    'Texas': "TX",
    'Utah': "UT",
    'Vermont': "VT",
    'Virginia': "VA",
    'Washington': "WA",
    "West Virginia": "WV",
    'Wisconsin': "WI",
    'Wyoming': "WY",
    "American Samoa": "AS",
    'Guam': "GU",
    "Northern Mariana Islands": "MP",
    "Puerto Rico": "PR",
    "Virgin Islands": "VI"
  };

  WORD_REGEX = new RegExp("(\\b)(" + ((function() {
    var _results;
    _results = [];
    for (key in SHORTENABLE_WORDS) {
      _results.push(key);
    }
    return _results;
  })()).sort(function(a, b) {
    return b.length - a.length;
  }).join("\|") + ")(\\b)", "gi");

  getBestURL = function() {
    var canonical, url;
    url = location.href;
    canonical = JQ('link[rel="canonical"]');
    if (canonical) {
      if (canonical.attr('href')) {
        url = canonical.attr('href');
      }
      if (!url.match(/^http/)) {
        url = "" + location.protocol + "//" + location.host + "/" + url;
      }
    }
    debug("The best URL for this page is: " + url);
    return url;
  };

  BEST_URL = getBestURL();

  console.log("Evaluating: document.coffee");

  SECTION = 'document.coffee';

  HTMLDocument.prototype.loadCSS = function(url) {
    var date, link;
    link = this.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    date = (new Date).getTime();
    link.href = "" + url + "?bust=" + date;
    if (this.createStyleSheet) {
      return this.createStyleSheet(url);
    } else {
      return this.getElementsByTagName("body")[0].appendChild(link);
    }
  };

  console.log("Evaluating: array.coffee");

  SECTION = "array.coffee";

  Array.prototype.merge = function() {
    var node, spans, strings, t, text, tweet, _i, _j, _len, _len1, _ref;
    debug("Merging text array...");
    strings = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = this.length; _i < _len; _i++) {
        node = this[_i];
        _results.push(node.toText());
      }
      return _results;
    }).call(this);
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      node = this[_i];
      node.emptyNode();
    }
    text = strings.join("");
    debug("Full merged string is " + text);
    spans = JQ("<span class=\"socialtext-set\"></span>");
    _ref = text.getStatements();
    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      tweet = _ref[_j];
      debug("This tweet is apparently: " + tweet);
      t = tweet.enTweeten();
      spans.append(t);
    }
    return spans;
  };

  console.log("Evaluating: node.coffee");

  SECTION = 'node.coffee';

  Node.prototype.containsElements = function() {
    var node;
    return __indexOf.call((function() {
      var _i, _len, _ref, _results;
      _ref = this.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(node.nodeType === ELEMENT_NODE);
      }
      return _results;
    }).call(this), true) >= 0;
  };

  Node.prototype.isGoodLink = function() {
    return (this.nodeType === ELEMENT_NODE) && (this.nodeName === 'A') && (this.isNavLike() === false) && (this.containsElements() === false);
  };

  Node.prototype.isTextish = function() {
    var _ref;
    return this.nodeType === TEXT_NODE || (_ref = this.nodeName, __indexOf.call(TEXTISH_ELEMENTS, _ref) >= 0) || this.isGoodLink();
  };

  Node.prototype.isElementish = function() {
    var _ref;
    return this.nodeType === ELEMENT_NODE && !(_ref = this.nodeName, __indexOf.call(TEXTISH_ELEMENTS, _ref) >= 0);
  };

  Node.prototype.isBR = function() {
    return this.isElementish() && this.nodeName === 'BR';
  };

  Node.prototype.isIrrelevant = function() {
    var _ref;
    return _ref = this.nodeName, __indexOf.call(IRRELEVANT_ELEMENTS, _ref) >= 0;
  };

  Node.prototype.isComment = function() {
    return this.nodeType === COMMENT_NODE;
  };

  Node.prototype.isWhitespace = function() {
    return (this.nodeType === TEXT_NODE) && (/^[\t\n\r ]+$/.test(this.data));
  };

  Node.prototype.isNavLike = function() {
    var _ref;
    return (_ref = this.nodeName, __indexOf.call(NAV_CONTAINING_ELEMENTS, _ref) >= 0) && (this.className.isNavLike() || this.id.isNavLike());
  };

  Node.prototype.getAllChars = function() {
    return JQ(this).text().length;
  };

  Node.prototype.getLinkChars = function() {
    var length, link, links, total, _i, _len;
    total = 0;
    links = JQ(this).children('a');
    for (_i = 0, _len = links.length; _i < _len; _i++) {
      link = links[_i];
      length = JQ(link).text().length;
      total += length;
    }
    return total;
  };

  Node.prototype.getLinkRatio = function() {
    var all, link;
    link = this.getLinkChars();
    if (link > 0) {
      all = this.getAllChars();
      return all / link;
    }
  };

  Node.prototype.isLinkish = function() {
    var ratio;
    ratio = this.getLinkRatio();
    return MIN_LINK_RATIO > ratio;
  };

  Node.prototype.isBlockLike = function() {
    var _ref, _ref1;
    return (_ref = JQ(this).css('display') != null, __indexOf.call(BLOCKS, _ref) >= 0) || (_ref1 = this.nodeName, __indexOf.call(BLOCK_ELEMENTS, _ref1) >= 0);
  };

  Node.prototype.toText = function() {
    var n, rtext, text;
    if (this.nodeType === ELEMENT_NODE) {
      text = JQ(this).text();
      n = this.nodeName;
      rtext = text;
      if (n === 'A') {
        rtext = "" + text;
      } else if (n === 'B' || n === 'STRONG') {
        rtext = "*" + text + "*";
      } else if (n === 'EM' || n === 'I') {
        rtext = "_" + text + "_";
      } else if (n === 'BR') {
        rtext = "__BR__";
      }
      rtext = rtext.clean();
      if (rtext.isWhitespace()) {
        rtext = null;
      }
      return rtext;
    } else {
      return this.nodeValue;
    }
  };

  Node.prototype.isUseful = function() {
    debug("\n\tnodename......" + this.nodeName + "\n\tclassName....." + this.className + "\n\tid............" + this.id + "\n\tnodetype......" + this.nodeType + "\n\tisElement....." + (this.nodeType === ELEMENT_NODE) + "\n\tisIrrelevant.." + (this.isIrrelevant()) + "\n\tisNavLike....." + (this.isNavLike()) + "\n\tisLinkish....." + (this.isLinkish()) + "\n\tisTextish....." + (this.isTextish()) + "\n\tisWhitespace.." + (this.isWhitespace()) + "\n\tisComment....." + (this.isComment()));
    return !(this.isWhitespace() || this.isComment() || this.isIrrelevant() || this.isLinkish() || this.isGoodLink());
  };

  Node.prototype.emptyNode = function() {
    if (this.nodeType === TEXT_NODE) {
      this.nodeValue = "";
      return true;
    } else {
      JQ(this).html("");
      return true;
    }
  };

  Node.prototype.unwrap = function() {
    var node, texts, _i, _len, _ref;
    debug("Running unwrap...");
    texts = [];
    _ref = this.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      node = _ref[_i];
      if (node.isTextish()) {
        texts.push(node);
        debug("node " + node.nodeName + " is textish. Pushing real good.");
      } else {
        debug("node " + node.nodeName + " is not textish: checking for usefulness.");
        JQ(texts[0]).replaceWith(texts.merge());
        texts = [];
        if (node.isUseful()) {
          node.unwrap();
        }
      }
    }
    return JQ(texts[0]).replaceWith(texts.merge());
  };

  console.log("Evaluating: string.coffee");

  SECTION = "string.coffee";

  String.prototype.isNavLike = function() {
    var match;
    match = this.match(/head|breadcrumb|addthis|share|nav|mast|social|twitter|reddit|facebook|fb/i);
    if (match) {
      return true;
    } else {
      return false;
    }
  };

  String.prototype.addXMLEntities = function() {
    var replace;
    replace = function(char) {
      switch (char) {
        case '&':
          return '&amp;';
        case '"':
          return '&quot;';
        case '>':
          return '&gt;';
        case '<':
          return '&lt;';
      }
    };
    return this.replace(/[&\"><]/g, function(a) {
      return replace(a);
    });
  };

  String.prototype.shrinkSpaces = function() {
    return this.replace(/\s\s+/g, ' ');
  };

  String.prototype.stripNewlines = function() {
    return this.replace(/[\n\r]+/g, ' ');
  };

  String.prototype.emptyWhitespace = function() {
    return this.replace(/^[\s\r]*$/, '');
  };

  String.prototype.clean = function() {
    return this.stripNewlines().emptyWhitespace().shrinkSpaces().addXMLEntities();
  };

  String.prototype.isWhitespace = function() {
    return /^[\t\n\r ]+$/.test(this);
  };

  String.prototype.toAbbreviation = function(left, word, right) {
    return "" + left + SHORTENABLE_WORDS[word.toLowerCase()] + right;
  };

  String.prototype.toFirstSlash = function(str) {
    return "" + (str.charAt(0)) + "/";
  };

  String.prototype.squeeze = function() {
    return this.replace(word_regex, function(a, b, c, d) {
      return this.toAbbreviation(b, c, d);
    }).replace(/(with|of)\W/g, function(m) {
      return this.toFirstSlash(m);
    }).replace(/\s+the\s+/g, " ").replace(/(without)/g, "w/out").replace(/e(r|d)(\W)/g, "$1$2").replace(RegExp(" has", "g"), "'s ").replace(/est/g, "st").replace(/\sam\b/g, "’m").replace(/\b(will|shall)/g, "’ll").replace(/\bnot/g, "n’t").replace(/e(r|n)(\b)/g, "$1$2").replace(/\sfor/g, " 4").replace(RegExp(" have", "g"), "'ve").replace(/(1[0-9]|20)/g, function(a) {
      return "&#" + (parseInt(a) + 9311) + ";";
    });
  };

  String.prototype.compareLength = function(comparison) {
    return this.length < comparison;
  };

  String.prototype.fixQuotes = function() {
    var ret;
    ret = this;
    if (this.match(/“/)) {
      ret = this.replace(/“/, '‘').replace(/”/, '’');
    } else if (this.match(/"/)) {
      debug("Before: " + this);
      ret = this.replace(/"([^"]+)"/gm, '‘$1’');
      debug("After: " + ret);
    }
    return ret;
  };

  String.prototype.enTweeten = function() {
    var after, afterNoBR, afterWithBR, before, final, length, orig, params, short, span, _ref;
    _ref = this.match(/^([\s\r\n]*)([\s\S]+)/), orig = _ref[0], before = _ref[1], after = _ref[2];
    length = after.length;
    short = length < 119;
    afterNoBR = after.replace(/__BR__/g, '');
    afterWithBR = after.replace(/__BR__/g, '<br/>');
    final = afterNoBR.fixQuotes();
    params = "text=%E2%80%9C" + (encodeURIComponent(final)) + "%E2%80%9D&url=" + (encodeURIComponent(BEST_URL));
    span = JQ("<span class=\"socialtext\">" + before + "<a href=\"https://twitter.com/intent/tweet?" + params + "\" class=\"socialtext " + short + "\">" + afterWithBR + "</a></span>");
    span.data('length', length);
    span.attr('title', length);
    return span;
  };

  String.prototype.getStatements = function() {
    var char, chars, closing, current, currentLast, doBreak, isCloseToCap, isContinuation, isVeryShort, lastCap, lastCapDelta, nextIsText, prevIsComma, statements, text;
    chars = [];
    current = [];
    statements = [];
    closing = ".";
    lastCap = null;
    chars = this.split("");
    while (chars.length > 0) {
      char = chars.shift();
      current.push(char);
      currentLast = current.length - 1;
      if (/[A-Z]/.test(char)) {
        lastCap = currentLast;
      }
      if ((__indexOf.call(QUOTES, char) >= 0 && __indexOf.call(QUOTES, closing) >= 0) || (__indexOf.call(PUNCTUATION, char) >= 0 && __indexOf.call(PUNCTUATION, closing) >= 0) || (chars.length === 0)) {
        isContinuation = /\s/.test(chars != null ? chars[0] : void 0) && /[a-z]/.test(chars != null ? chars[1] : void 0);
        lastCapDelta = lastCap > -1 ? currentLast - lastCap : null;
        isCloseToCap = lastCapDelta < 4;
        isVeryShort = currentLast < 15;
        nextIsText = /\w/.test(chars != null ? chars[0] : void 0);
        prevIsComma = /,/.test(current[current.length - 2]);
        doBreak = !(isContinuation || isVeryShort || isCloseToCap || nextIsText || prevIsComma);
        if (chars.length === 0 || doBreak) {
          if (current.length > 0) {
            text = current.join("");
            if (!(text.isWhitespace())) {
              statements.push(current.join(""));
            }
            current = [];
            closing = ".";
            lastCap = null;
          }
        } else {
          closing = ".";
        }
      } else if ((__indexOf.call(QUOTES, char) >= 0)) {
        closing = char;
      }
    }
    return statements;
  };

  console.log("Evaluating: run.coffee");

  SECTION = 'run.coffee';

  debug("\"JQ\" is assigned as:\n\t" + JQ);

  debug('Document ready');

  debug('Inserting CSS');

  document.loadCSS(JQUERY_UI_CSS);

  document.body.unwrap();

  debug('Adding CSS styles');

  JQ('.true').css({
    color: '#F00',
    'border-bottom': 'none',
    'text-decoration': 'none',
    background: 'white'
  });

  JQ('.true').mouseenter(function() {
    return JQ(this).css({
      background: '#FAA'
    });
  }).mouseleave(function() {
    return JQ(this).css({
      background: 'white'
    });
  });

  JQ('.false').css({
    color: '#aaaaaa',
    'border-bottom': 'none',
    'text-decoration': 'none'
  });

  JQ('a').css({
    'text-decoration': 'none'
  });

  wrapperStyles = {
    'z-index': 9999999,
    'position': 'fixed',
    'top': '10px',
    'width': '100%'
  };

  boxStyles = {
    'width': '600px',
    'height': '85px',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'padding': '10px 0px 0px 10px',
    'text-align': 'left',
    'font-size': '14px',
    'line-height': '20px',
    'color': '#6AC',
    'background-color': 'white',
    'font-family': '"Gill Sans","Helvetica Neue","Arial",sans-serif',
    'font-weight': 'normal',
    'border': '1px solid #ccc',
    '-webkit-border-radius': '3px',
    '-moz-border-radius': '3px',
    'border-radius': '3px',
    '-webkit-background-clip': 'padding-box',
    'background-clip': 'padding-box',
    '-moz-box-shadow': '3px 3px 9px #888888',
    '-webkit-box-shadow': '1px 0px 15px rgba(0, 0, 0, 0.2)',
    'box-shadow': '3px 3px 9px #888888',
    '-ms-filter': "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#888888')",
    'filter': "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#888888')"
  };

  spTitle = JQ("<div class=\"sp-title\"><a href=\"http://savepublishing.com\">SavePublishing.com</a> version 0&alpha;</div>").css({
    'font-size': '18px'
  });

  spSubTitle = JQ("<div class=\"sp-subtitle\">A bookmarklet by <a href=\"https://twitter.com/intent/user?screen_name=ftrain\" style=\"color:red\">@ftrain</a>\n&middot; <a href=\"https://twitter.com/intent/user?screen_name=ftrain\" style=\"color:red\">follow on Twitter</a>\n&middot; <a href=\"http://github.com/ftrain/savepublishing\" style=\"color:red\">get the source</a> &middot;\n<br/>\n<a href=\"https://github.com/ftrain/savepublishing/issues/new?title=" + (encodeURI('Parse error: ' + location.href)) + "\" style=\"color:red\">Report parse problems on github</a>\nor <a href=\"mailto:ford+savepublishing@ftrain.com\" style=\"color:red\">email bugs</a>\n&middot; <a href=\"http://savepublishing.com/credits.html\" style=\"color:red\">Credits</a></div>").css({
    'font-size': '14px'
  });

  savePublishingDiv = JQ("<div id=\"savepublishing\"/>").append(spTitle).append(spSubTitle).css(boxStyles);

  savePublishingWrapper = JQ("<div id=\"savepublishing-wrapper\"/>").append(savePublishingDiv).css(wrapperStyles);

  JQ('body').append(savePublishingWrapper).css({
    'margin-top': '100px'
  });

}).call(this);
