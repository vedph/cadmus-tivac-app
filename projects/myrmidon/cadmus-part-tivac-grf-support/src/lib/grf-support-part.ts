import { Part } from '@myrmidon/cadmus-core';
import { PhysicalSize } from '@myrmidon/cadmus-mat-physical-size';

/**
 * The GrfSupport part model.
 */
export interface GrfSupportPart extends Part {
  originalFn?: string;
  currentFn: string;
  objectType: string;
  supportType: string;
  isIndoor?: boolean;
  material: string;
  size: PhysicalSize;
  state?: string;
  lastViewed: Date;
}

/**
 * The type ID used to identify the GrfSupportPart type.
 */
export const GRF_SUPPORT_PART_TYPEID = 'it.vedph.vedph.grf-support';

/**
 * JSON schema for the GrfSupport part.
 * You can use the JSON schema tool at https://jsonschema.net/.
 */
export const GRF_SUPPORT_PART_SCHEMA = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'www.vedph.it/cadmus/parts/tivac/' + GRF_SUPPORT_PART_TYPEID + '.json',
  type: 'object',
  title: 'GrfSupportPart',
  required: [
    'id',
    'itemId',
    'typeId',
    'timeCreated',
    'creatorId',
    'timeModified',
    'userId',
    'currentFn',
    'objectType',
    'supportType',
    'material',
    'size',
    'lastViewed',
  ],
  properties: {
    timeCreated: {
      type: 'string',
      pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d+Z$',
    },
    creatorId: {
      type: 'string',
    },
    timeModified: {
      type: 'string',
      pattern: '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d+Z$',
    },
    userId: {
      type: 'string',
    },
    id: {
      type: 'string',
      pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
    },
    itemId: {
      type: 'string',
      pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
    },
    typeId: {
      type: 'string',
      pattern: '^[a-z][-0-9a-z._]*$',
    },
    roleId: {
      type: ['string', 'null'],
      pattern: '^([a-z][-0-9a-z._]*)?$',
    },
    originalFn: {
      type: 'string',
    },
    currentFn: {
      type: 'string',
    },
    objectType: {
      type: 'string',
    },
    supportType: {
      type: 'string',
    },
    isIndoor: {
      type: 'boolean',
    },
    material: {
      type: 'string',
    },
    size: {
      type: 'object',
      required: ['w'],
      properties: {
        tag: {
          type: 'string',
        },
        w: {
          type: 'object',
          required: ['value', 'unit'],
          properties: {
            tag: {
              type: 'string',
            },
            value: {
              type: 'integer',
            },
            unit: {
              type: 'string',
            },
          },
        },
        h: {
          type: 'object',
          required: ['value', 'unit'],
          properties: {
            tag: {
              type: 'string',
            },
            value: {
              type: 'integer',
            },
            unit: {
              type: 'string',
            },
          },
        },
        d: {
          type: 'object',
          required: ['value', 'unit'],
          properties: {
            tag: {
              type: 'string',
            },
            value: {
              type: 'integer',
            },
            unit: {
              type: 'string',
            },
          },
        },
        note: {
          type: 'string',
        },
      },
    },
    state: {
      type: 'string',
    },
    lastViewed: {
      type: 'date',
    },
  },
};
