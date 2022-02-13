import { Part } from '@myrmidon/cadmus-core';

/**
 * The GrfWriting part model.
 */
export interface GrfWritingPart extends Part {
  system: string;
  type: string;
  language: string;
  isPoetic: boolean;
  technique: string;
  tool?: string;
  figType?: string;
  contentFeatures?: string[];
  frameType?: string;
  casing?: string;
  rowCount: number;
}

/**
 * The type ID used to identify the GrfWritingPart type.
 */
export const GRF_WRITING_PART_TYPEID = 'it.vedph.tivac.grf-writing';

/**
 * JSON schema for the GrfWriting part.
 * You can use the JSON schema tool at https://jsonschema.net/.
 */
export const GRF_WRITING_PART_SCHEMA = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'www.vedph.it/cadmus/parts/tivac/' + GRF_WRITING_PART_TYPEID + '.json',
  type: 'object',
  title: 'GrfWritingPart',
  required: [
    'id',
    'itemId',
    'typeId',
    'timeCreated',
    'creatorId',
    'timeModified',
    'userId',
    'system',
    'type',
    'language',
    'isPoetic',
    'technique',
    'rowCount',
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
    system: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    language: {
      type: 'string',
    },
    isPoetic: {
      type: 'boolean',
    },
    technique: {
      type: 'string',
    },
    tool: {
      type: 'string',
    },
    figType: {
      type: 'string',
    },
    contentFeatures: {
      type: 'array',
      items: {
        anyOf: [
          {
            type: 'string',
          },
        ],
      },
    },
    frameType: {
      type: 'string',
    },
    casing: {
      type: 'string',
    },
    rowCount: {
      type: 'integer',
    },
  },
};
