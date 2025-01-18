import { module, test } from 'qunit';
import { setupTest } from 'my-todo-app/tests/helpers';

module('Unit | Controller | earray', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:earray');
    assert.ok(controller);
  });
});
