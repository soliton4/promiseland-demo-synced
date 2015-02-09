(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "b5c34a6726b1753e55d862adb616b58f" })){ return promiseland._getModule("b5c34a6726b1753e55d862adb616b58f"); };
var PL$9/*console*/;try{PL$9/*console*/ = console;}catch(e){};
var PL$33/*document*/;try{PL$33/*document*/ = document;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$3/*SyncDemo*/;
var PL$10/*demoVar*/;
var _TPL$10/*demoVar*/;

/* ---------------------------- */
/* type SyncDemo */
var PL$2/*type:SyncDemo*/ = classSystem._createProvisionalClass();
PL$3/*SyncDemo*/ = PL$2/*type:SyncDemo*/
var PL$4/*SyncDemo-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:SyncDemo*/).then(function(parType){
  PL$2/*type:SyncDemo*/ = parType;
  PL$4/*SyncDemo-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:SyncDemo*/);
});
var PL$5/*type:SyncDemo**/ = classSystem._createPromiseOfClass(PL$2/*type:SyncDemo*/);
var PL$6/*SyncDemo**/ = PL$5/*type:SyncDemo**/;
var PL$7/*SyncDemo*-constructor*/ = undefined;classSystem.readyPromise(PL$5/*type:SyncDemo**/).then(function(parType){
  PL$5/*type:SyncDemo**/ = parType;
  PL$7/*SyncDemo*-constructor*/ = classSystem.getTypeConstructor(PL$5/*type:SyncDemo**/);
});
/* ---------------------------- */

var PL$11/*setVar*/ = (function(f){
promiseland.registerRemote("server", "b5c34a6726b1753e55d862adb616b58f", "PL$18", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [PL$2/*type:SyncDemo*/]})));
if (promiseland.profileHas("server")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("b5c34a6726b1753e55d862adb616b58f", "PL$18", arguments);
}
};
})(function (PL$12/*session*/, PL$13/*par*/){
var PL$14 = new __Promise();
var PL$16/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      if (_TPL$13/*par*/){ _TPL$13/*par*/();};PL$14.reject(e);
    };
  };
};
var PL$17/*catch rejected*/ = function(e){
  if (_TPL$13/*par*/){ _TPL$13/*par*/();};PL$14.reject(e);
};
var _TPL$13/*par*/;
if(PL$13/*par*/){ _TPL$13/*par*/ = PL$13/*par*/[1];
PL$13/*par*/ = PL$13/*par*/[0];}
PL$16/*promiseland exception catcher*/(function(){

  ;
  /*tracked assign*/(function(v){
  if (_TPL$10/*demoVar*/){ _TPL$10/*demoVar*/(); };
  PL$10/*demoVar*/ = v;
  if (v){
  _TPL$10/*demoVar*/ = v[2]();
  }else{
  _TPL$10/*demoVar*/ = undefined;
  };
  return v;
  })(PL$13/*par*/)/*end assign*/
  ;
  if (_TPL$13/*par*/){ _TPL$13/*par*/();};PL$14.resolve(); return;;
})();return PL$14;
});
var PL$19/*getVar*/ = (function(f){
promiseland.registerRemote("server", "b5c34a6726b1753e55d862adb616b58f", "PL$23", f, (classSystem.createFunctionType({ "return": PL$5/*type:SyncDemo**/, arguments: []})));
if (promiseland.profileHas("server")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("b5c34a6726b1753e55d862adb616b58f", "PL$23", arguments);
}
};
})((function(t){return t;})(function (PL$12/*session*/){
var PL$20;
var _TPL$20;
(function(){ var vAr = new PL$7/*SyncDemo*-constructor*/(); PL$20 = vAr[0]; _TPL$20 = vAr[1]; })();var PL$21/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$20.reject(e);
    };
  };
};
var PL$22/*catch rejected*/ = function(e){
  PL$20.reject(e);
};
PL$21/*promiseland exception catcher*/(function(){

  ;
  PL$20.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$10/*demoVar*/)); return;
  PL$20.resolve(); return;
})();return [PL$20, _TPL$20];
}));

  ;
  classSystem._resolveProvisional(PL$2/*type:SyncDemo*/, classSystem.createClass({className: "SyncDemo",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"event","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":2,"column":12,"offset":12}, "hashStr": "b5c34a6726b1753e55d862adb616b58f", "name": "SyncDemo"}, {"a": "xxx", "event": (function(PL$8/*data*/){
  
    ;
    PL$9/*console*/["log"]("event: ");
    PL$9/*console*/["log"](PL$8/*data*/);
    ;})}));PL$3/*SyncDemo*/;
  /*temp tracked assign*/(function(vAr){
    if (_TPL$10/*demoVar*/){ _TPL$10/*demoVar*/(); };
    if(vAr){
      var v = vAr[0];
      PL$10/*demoVar*/ = v;
      _TPL$10/*demoVar*/ = vAr[1];
      return v;
    }else{
      PL$10/*demoVar*/ = undefined; 
      _TPL$10/*demoVar*/ = undefined;
      return;
    };
  })(new PL$4/*SyncDemo-constructor*/())/*end temp assign*/;
  /* function setVar (){} - hoisted */;
  ;
  /* function getVar (){} - hoisted */;
  ;
  (function(){
  if (!promiseland.profileHas("client")){
  var p = new __Promise();
  p.reject({id: 14, msg: "function does not execute in this frame."});
  return p;
  };
  var PL$24 = new __Promise();
  var PL$26/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$24.reject(e);
      };
    };
  };
  var PL$27/*catch rejected*/ = function(e){
    PL$24.reject(e);
  };
  var PL$28/*TextBox*/;
  var PL$30/*Button*/;
  var PL$32/*tb*/;
  var PL$34/*getBtn*/;
  var PL$40/*setBtn*/;
  var PL$41/*setMemberBtn*/;
  var PL$42/*readMemberBtn*/;
  var PL$43/*eventTb*/;
  var PL$44/*eventBtn*/;
  PL$26/*promiseland exception catcher*/(function(){
  
    ;
    __requireFun("dijit/form/TextBox").then(PL$26/*promiseland exception catcher*/(function(PL$29){PL$28/*TextBox*/ = PL$29;
    __requireFun("dijit/form/Button").then(PL$26/*promiseland exception catcher*/(function(PL$31){PL$30/*Button*/ = PL$31;
    PL$32/*tb*/ = new PL$28/*TextBox*/();
    PL$32/*tb*/["placeAt"](PL$33/*document*/["body"]);
    PL$32/*tb*/["startup"]();
    PL$34/*getBtn*/ = new PL$30/*Button*/({
      "label": "get obj",
      "onClick": (function(){
      var PL$35 = new __Promise();
      var PL$37/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$35.reject(e);
          };
        };
      };
      var PL$38/*catch rejected*/ = function(e){
        PL$35.reject(e);
      };
      PL$37/*promiseland exception catcher*/(function(){
      
        ;
        /*temptracked promise*/(function(vAr){
        var r = vAr[0].thenReuse(vAr[1], PL$37/*promiseland exception catcher*/(function(PL$39){/*temp tracked assign*/(function(vAr){
          if (_TPL$10/*demoVar*/){ _TPL$10/*demoVar*/(); };
          if(vAr){
            var v = vAr[0];
            PL$10/*demoVar*/ = v;
            _TPL$10/*demoVar*/ = vAr[1];
            return v;
          }else{
            PL$10/*demoVar*/ = undefined; 
            _TPL$10/*demoVar*/ = undefined;
            return;
          };
        })(PL$39)/*end temp assign*/;
        PL$32/*tb*/["set"]("value", PL$10/*demoVar*/[7]);
        PL$35.resolve(); return;}), PL$38/*catch rejected*/);
        return r;
        })(PL$19/*getVar*/());/*temptracked promise end*/
        ;
      })();return PL$35;
      })
    });
    PL$34/*getBtn*/["placeAt"](PL$33/*document*/["body"]);
    PL$34/*getBtn*/["startup"]();
    PL$40/*setBtn*/ = new PL$30/*Button*/({
      "label": "set obj",
      "onClick": (function(){
      
        ;
        PL$11/*setVar*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$10/*demoVar*/));
        ;})
    });
    PL$40/*setBtn*/["placeAt"](PL$33/*document*/["body"]);
    PL$40/*setBtn*/["startup"]();
    PL$41/*setMemberBtn*/ = new PL$30/*Button*/({
      "label": "set member",
      "onClick": (function(){
      
        ;
        (function(s, v){ v = s[8](v); s[7] = v; return v; })(PL$10/*demoVar*/, PL$32/*tb*/["get"]("value"));
        ;})
    });
    PL$41/*setMemberBtn*/["placeAt"](PL$33/*document*/["body"]);
    PL$41/*setMemberBtn*/["startup"]();
    PL$42/*readMemberBtn*/ = new PL$30/*Button*/({
      "label": "read member",
      "onClick": (function(){
      
        ;
        PL$32/*tb*/["set"]("value", PL$10/*demoVar*/[7]);
        ;})
    });
    PL$42/*readMemberBtn*/["placeAt"](PL$33/*document*/["body"]);
    PL$42/*readMemberBtn*/["startup"]();
    PL$43/*eventTb*/ = new PL$28/*TextBox*/();
    PL$43/*eventTb*/["placeAt"](PL$33/*document*/["body"]);
    PL$43/*eventTb*/["startup"]();
    PL$44/*eventBtn*/ = new PL$30/*Button*/({
      "label": "call event",
      "onClick": (function(){
      
        ;
        PL$10/*demoVar*/[9](PL$43/*eventTb*/["get"]("value"));
        ;})
    });
    PL$44/*eventBtn*/["placeAt"](PL$33/*document*/["body"]);
    PL$44/*eventBtn*/["startup"]();
    PL$24.resolve(); return;}), PL$27/*catch rejected*/);
    ;}), PL$27/*catch rejected*/);
    ;
  })();return PL$24;
  })();
  ;})();
;return PL$1;
});
})();