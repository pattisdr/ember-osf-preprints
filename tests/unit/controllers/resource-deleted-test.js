import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:resource-deleted', 'Unit | Controller | resource deleted', {
  // Specify the other units that are required for this test.
    needs: [
        'service:metrics',
        'service:theme'
    ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
