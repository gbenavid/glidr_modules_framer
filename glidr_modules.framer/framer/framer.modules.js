require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"fabButtonModule":[function(require,module,exports){
var defaults, openCloseFab;

defaults = {
  screenWidth: Screen.width,
  screenHeight: Screen.height,
  fabButton: "../images/fab_button.png",
  open: false,
  fabImgs: [
    {
      Experiment: {
        image: "images/experiment-fab.png",
        name: "Experiment"
      },
      Post: {
        image: "images/post-fab.png",
        name: "Post"
      },
      Hypothesis: {
        image: "images/hypothesis-fab.png",
        name: "Hypothesis"
      },
      Research: {
        image: "images/research-fab.png",
        name: "Research"
      }
    }
  ]
};

defaults.labelTextStyle = {
  fontSize: "20px",
  textAlign: "center",
  fontFamily: "Helvetica Neue', sans-serif"
};

defaults.badgeTextStyle = {
  fontSize: "26px",
  lineHeight: "36px",
  color: "#fff",
  textAlign: "center",
  fontFamily: "Helvetica Neue', sans-serif"
};

exports.defaults = defaults;

openCloseFab = function() {
  return this.onClick(function() {
    var item, j, len, ref, results;
    ref = this.items;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      results.push(item.stateCycle("open", "closed"));
    }
    return results;
  });
};

exports.fabButton = function(newFabItems, defaultImgs) {
  var buttonLayer, fab, i, name, params, shouldOveride;
  if (defaultImgs == null) {
    defaultImgs = defaults.fabImgs[0];
  }
  fab = new Layer({
    x: defaults.screenWidth - 100,
    y: 60,
    width: 43,
    height: 43,
    name: "FabButton"
  });
  fab.items = [];
  i = 0;
  for (name in defaultImgs) {
    params = defaultImgs[name];
    if (newFabItems && newFabItems[name] !== void 0) {
      shouldOveride = newFabItems[name].image;
    }
    buttonLayer = new Layer({
      image: shouldOveride || params.image,
      width: 40,
      height: 40,
      x: defaults.screenWidth - 100,
      y: i * 55 + (fab.height + 10 + fab.y),
      name: "FabBtn" + params.name,
      borderRadius: 50,
      visible: false
    });
    buttonLayer.states = {
      open: {
        visible: true
      },
      closed: {
        visible: false
      }
    };
    fab.items.push(buttonLayer);
    shouldOveride = false;
    i += 1;
  }
  fab.openCloseFab = openCloseFab;
  fab.open = false;
  return fab;
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2dpbmFiZW5hdmlkZXovc3JjL2ZyYW1lcl9tb2R1bGVzL2dsaWRyX21vZHVsZXMuZnJhbWVyL21vZHVsZXMvZmFiQnV0dG9uTW9kdWxlLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBEZWZhdWx0IHN0eWxlc1xuZGVmYXVsdHMgPSB7XG5cdHNjcmVlbldpZHRoOiBTY3JlZW4ud2lkdGhcblx0c2NyZWVuSGVpZ2h0OiBTY3JlZW4uaGVpZ2h0XG5cdGZhYkJ1dHRvbjogXCIuLi9pbWFnZXMvZmFiX2J1dHRvbi5wbmdcIlxuXHRvcGVuOiBmYWxzZVxuXHRmYWJJbWdzOiBbXG5cdFx0RXhwZXJpbWVudDoge2ltYWdlOiBcImltYWdlcy9leHBlcmltZW50LWZhYi5wbmdcIiwgbmFtZTpcIkV4cGVyaW1lbnRcIn1cblx0XHRQb3N0OiB7aW1hZ2U6IFwiaW1hZ2VzL3Bvc3QtZmFiLnBuZ1wiLCBuYW1lOlwiUG9zdFwifSxcblx0XHRIeXBvdGhlc2lzOiB7aW1hZ2U6IFwiaW1hZ2VzL2h5cG90aGVzaXMtZmFiLnBuZ1wiLCBuYW1lOlwiSHlwb3RoZXNpc1wifSxcblx0XHRSZXNlYXJjaDoge2ltYWdlOiBcImltYWdlcy9yZXNlYXJjaC1mYWIucG5nXCIsIG5hbWU6XCJSZXNlYXJjaFwifVxuXHRdXG59XG5kZWZhdWx0cy5sYWJlbFRleHRTdHlsZSA9IHtcblx0Zm9udFNpemU6IFwiMjBweFwiXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRmb250RmFtaWx5OiBcIkhlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZlwiXG59XG5kZWZhdWx0cy5iYWRnZVRleHRTdHlsZSA9IHtcblx0Zm9udFNpemU6IFwiMjZweFwiXG5cdGxpbmVIZWlnaHQ6IFwiMzZweFwiXG5cdGNvbG9yOiBcIiNmZmZcIlxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Zm9udEZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWZcIlxufVxuZXhwb3J0cy5kZWZhdWx0cyA9IGRlZmF1bHRzXG5cbiMgZmFiIGZ1bmN0aW9uYWxpdHlcbm9wZW5DbG9zZUZhYiA9ICgpIC0+XG5cdHRoaXMub25DbGljayAtPlxuXHRcdGZvciBpdGVtIGluIEBpdGVtc1xuXHRcdFx0aXRlbS5zdGF0ZUN5Y2xlKFwib3BlblwiLCBcImNsb3NlZFwiKVxuXG5leHBvcnRzLmZhYkJ1dHRvbiA9IChuZXdGYWJJdGVtcywgZGVmYXVsdEltZ3M9ZGVmYXVsdHMuZmFiSW1nc1swXSkgLT5cblx0ZmFiICA9IG5ldyBMYXllclxuXHRcdHg6IGRlZmF1bHRzLnNjcmVlbldpZHRoIC0gMTAwXG5cdFx0eTogNjBcblx0XHR3aWR0aDogNDNcblx0XHRoZWlnaHQ6IDQzXG5cdFx0bmFtZTogXCJGYWJCdXR0b25cIlxuXHRmYWIuaXRlbXMgPSBbXVxuXHRpID0gMFxuXHRmb3IgbmFtZSwgcGFyYW1zIG9mIGRlZmF1bHRJbWdzICMgcmVuYW1lIHZhciBjdXN0b21JbWdcblx0XHRpZiBuZXdGYWJJdGVtcyAmJiBuZXdGYWJJdGVtc1tuYW1lXSAhPSB1bmRlZmluZWQgdGhlbiBzaG91bGRPdmVyaWRlID0gbmV3RmFiSXRlbXNbbmFtZV0uaW1hZ2Vcblx0XHRidXR0b25MYXllciA9IG5ldyBMYXllclxuXHRcdFx0aW1hZ2U6IHNob3VsZE92ZXJpZGUgfHwgIHBhcmFtcy5pbWFnZVxuXHRcdFx0d2lkdGg6IDQwXG5cdFx0XHRoZWlnaHQ6IDQwXG5cdFx0XHR4OiBkZWZhdWx0cy5zY3JlZW5XaWR0aCAtIDEwMFxuXHRcdFx0eTogaSAqIDU1ICsgKGZhYi5oZWlnaHQgKyAxMCArIGZhYi55KVxuXHRcdFx0bmFtZTogXCJGYWJCdG5cIisgcGFyYW1zLm5hbWVcblx0XHRcdGJvcmRlclJhZGl1czogNTBcblx0XHRcdHZpc2libGU6IGZhbHNlXG5cdFx0YnV0dG9uTGF5ZXIuc3RhdGVzID1cblx0XHRcdG9wZW46XG5cdFx0XHRcdHZpc2libGU6IHRydWVcblx0XHRcdGNsb3NlZDpcblx0XHRcdFx0dmlzaWJsZTogZmFsc2VcblxuXHRcdGZhYi5pdGVtcy5wdXNoKGJ1dHRvbkxheWVyKVxuXHRcdHNob3VsZE92ZXJpZGUgPSBmYWxzZVxuXHRcdGkgKz0gMVxuXHQjIGJpbmQgZXZlbnRzXG5cdGZhYi5vcGVuQ2xvc2VGYWIgID0gb3BlbkNsb3NlRmFiXG5cdGZhYi5vcGVuID0gZmFsc2VcblxuXHRyZXR1cm4gZmFiIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUE7QURDQSxJQUFBOztBQUFBLFFBQUEsR0FBVztFQUNWLFdBQUEsRUFBYSxNQUFNLENBQUMsS0FEVjtFQUVWLFlBQUEsRUFBYyxNQUFNLENBQUMsTUFGWDtFQUdWLFNBQUEsRUFBVywwQkFIRDtFQUlWLElBQUEsRUFBTSxLQUpJO0VBS1YsT0FBQSxFQUFTO0lBQ1I7TUFBQSxVQUFBLEVBQVk7UUFB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
