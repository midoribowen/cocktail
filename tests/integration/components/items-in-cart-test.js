import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('items-in-cart', 'Integration | Component | items in cart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{items-in-cart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#items-in-cart}}
      template block text
    {{/items-in-cart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
