
/* Removes all file input div elements to be created using + button */

// (function() {
//   for(start=1;start<=6; start++) {
//     document.getElementById('div_id_doc_url_' + start).remove();
//   }
// })();


(function() {
  var maindiv = document.createElement('div');
  maindiv.className = 'form-group';
  maindiv.id = 'file';

  var lb = document.createElement('label');
  lb.for = 'file';
  lb.className = 'col-form-label';
  lb.innerHTML = 'Document ' + 1;

  var context = document.createElement('div');

  var inp = document.createElement('input');
  inp.type = 'file';
  inp.name = 'file';
  inp.className = 'clearablefileinput';
  inp.id = 'file';


  context.appendChild(inp);
  maindiv.appendChild(lb);
  maindiv.appendChild(context);

  var element = document.getElementById('upload-form');
  element.appendChild(maindiv);
})();



var i = 2;


function addelement() {
  if (true) {
    var maindiv = document.createElement('div');
    maindiv.className = 'form-group';
    maindiv.id = 'file';

    var lb = document.createElement('label');
    lb.for = 'file';
    lb.className = 'col-form-label';
    lb.innerHTML = 'Document ' + i;

    var context = document.createElement('div');

    var inp = document.createElement('input');
    inp.type = 'file';
    inp.name = 'file';
    inp.className = 'clearablefileinput';
    inp.id = 'file';


    context.appendChild(inp);
    maindiv.appendChild(lb);
    maindiv.appendChild(context);

    var element = document.getElementById('upload-form');
    element.appendChild(maindiv);

    i = i + 1;
  }
};
