Package.describe({
  name: 'jplack:bootstrap-timepicker',
  summary: 'Bootstrap 3 timepicker for Meteor.',
  version: '0.2.2',
  git: 'https://github.com/stlouisweb/meteor-bootstrap-timepicker.git'
});

Package.onUse(function(api) {
  api.addFiles([
    'bootstrap-timepicker/css/bootstrap-timepicker.css',
    'bootstrap-timepicker/js/bootstrap-timepicker.js'
  ], ['client']);
  api.use(['templating@1.1.1'],'client');
  api.addFiles(['timepicker.js'],'client');
  api.use('aldeed:template-extension@4.1.0', 'client');
  api.use('twbs:bootstrap@3.3.1', 'client', {weak: true});
  api.use('nemo64:bootstrap@3.3.1', 'client', {weak: true});

  api.use('aldeed:autoform@4.0.0 || 5.0.0 || 6.0.0');
  api.addFiles([
    'autoform-bs-timepicker.html',
    'autoform-bs-timepicker.js'
  ], 'client');
});