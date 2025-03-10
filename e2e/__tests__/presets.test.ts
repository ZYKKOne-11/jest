/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {onNodeVersions} from '@jest/test-utils';
import runJest from '../runJest';

test('supports json preset', () => {
  const result = runJest('presets/json');
  expect(result.exitCode).toBe(0);
});

test.each(['js', 'cjs'])('supports %s preset', presetDir => {
  const result = runJest(`presets/${presetDir}`);

  expect(result.exitCode).toBe(0);
});

onNodeVersions('>=12.17.0', () => {
  // eslint-disable-next-line jest/no-identical-title
  test.each(['mjs', 'js-type-module'])('supports %s preset', presetDir => {
    const result = runJest(`presets/${presetDir}`);

    expect(result.exitCode).toBe(0);
  });
});
