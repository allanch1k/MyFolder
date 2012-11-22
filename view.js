var model = require('./model');
var markdown = require('markdown').markdown ;
var view = {};

view.render = function(data) {
    var template = model.template;
    Object.keys(data).forEach(function(content){
        template = template.replace(new RegExp('{'+content+'}', 'g'), markdown.toHTML(data[content]) );
    });
    return template;
};

module.exports = view;