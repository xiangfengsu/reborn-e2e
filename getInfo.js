(function() {
  let list = [];
  $(".form-group").each(function() {
    const t = $(this);
    const obj = {};
    if (t.has("input").length !== 0 || t.has("select").length !== 0) {
      obj.label = t.find("label").text();
      const nextEle = t.find("label").next();
      //   if (nextEle.has("input").length !== 0) {
      //     obj.key = nextEle.children("input").attr("id");
      //   }

      //   else if (nextEle.has("select").length !== 0) {
      //     obj.key = nextEle.children("select").attr("id");
      //   }
      if (nextEle.hasClass("input-group")) {
        obj.key = nextEle.children(":first").attr("id");
      } else {
        obj.key = nextEle.attr("id");
      }

      if (t.find("input").length !== 0) {
        obj.type = "input";
      }
      if (t.find("select").length !== 0) {
        obj.type = "select";
        obj.options = [];
        t.find("select")
          .find("option")
          .each(function() {
            $(this).val() !== "" && obj.options.push($(this).val());
          });
      }

      list.push(obj);
    }
  });
//   console.log(list);
console.log(JSON.stringify(list));
})();
