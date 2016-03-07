import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recipe-tile', 'Integration | Component | recipe tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{recipe-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#recipe-tile}}
      template block text
    {{/recipe-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
