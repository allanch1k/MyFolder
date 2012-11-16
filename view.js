var model = require('./model');

var view = {};

view.render = function(data) {
    var template = model.template;
    Object.keys(data).forEach(function(content){
        template = template.replace(new RegExp('{'+content+'}', 'g'), data[content]);
    });
    return template;
};

module.exports = view;