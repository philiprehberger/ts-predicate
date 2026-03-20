import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const mod = await import('../../dist/index.js');

describe('predicate-ts', () => {
  it('should export is', () => {
    assert.ok(mod.is);
  });

  it('should export and', () => {
    assert.ok(mod.and);
  });

  it('should export or', () => {
    assert.ok(mod.or);
  });

  it('should export not', () => {
    assert.ok(mod.not);
  });

  it('should export where', () => {
    assert.ok(mod.where);
  });
});
