import { assert } from 'chai';

import {
    getMutationTypeFromProteinChange,
    getProteinPositionFromProteinChange,
} from './ProteinChangeUtils';

describe('ProteinChangeUtils', () => {
    describe('getMutationTypeFromProteinChange', () => {
        it('gets correct mutation type from protein change', () => {
            assert.equal(
                getMutationTypeFromProteinChange('R273C'),
                'missense_variant'
            );
            assert.equal(
                getMutationTypeFromProteinChange('H773_V774delinsLM'),
                'missense_variant'
            );
            assert.equal(
                getMutationTypeFromProteinChange('K139Nfs*9'),
                'frameshift_variant'
            );
            assert.equal(
                getMutationTypeFromProteinChange('P177_C182del'),
                'inframe_deletion'
            );
            assert.equal(
                getMutationTypeFromProteinChange('K132_C141delinsT'),
                'inframe_deletion'
            );
            assert.equal(
                getMutationTypeFromProteinChange('S241dup'),
                'inframe_insertion'
            );
            assert.equal(
                getMutationTypeFromProteinChange('V272_R273insL'),
                'inframe_insertion'
            );
            assert.equal(
                getMutationTypeFromProteinChange('E198*'),
                'stop_gained'
            );
            assert.equal(
                getMutationTypeFromProteinChange('X332_splice'),
                'splice_region_variant'
            );
        });
    });

    describe('getProteinPositionFromProteinChange', () => {
        it('gets correct protein position from protein change', () => {
            assert.deepEqual(getProteinPositionFromProteinChange('R273C'), {
                start: 273,
                end: 273,
            });
            assert.deepEqual(
                getProteinPositionFromProteinChange('H773_V774delinsLM'),
                { start: 773, end: 774 }
            );
            assert.deepEqual(getProteinPositionFromProteinChange('K139Nfs*9'), {
                start: 139,
                end: 139,
            });
            assert.deepEqual(
                getProteinPositionFromProteinChange('P177_C182del'),
                { start: 177, end: 182 }
            );
            assert.deepEqual(
                getProteinPositionFromProteinChange('K132_C141delinsT'),
                { start: 132, end: 141 }
            );
            assert.deepEqual(getProteinPositionFromProteinChange('S241dup'), {
                start: 241,
                end: 241,
            });
            assert.deepEqual(
                getProteinPositionFromProteinChange('V272_R273insL'),
                { start: 272, end: 273 }
            );
            assert.deepEqual(getProteinPositionFromProteinChange('E198*'), {
                start: 198,
                end: 198,
            });
            assert.deepEqual(
                getProteinPositionFromProteinChange('X332_splice'),
                { start: 332, end: 332 }
            );
        });
    });
});
