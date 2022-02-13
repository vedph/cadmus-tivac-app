import { Part } from '@myrmidon/cadmus-core';

/**
 * The graffiti location part model.
 */
export interface GrfLocationPart extends Part {
  place: string;
  area: string;
  district: string;
  location?: string;
}

/**
 * The type ID used to identify the GrfLocationPart type.
 */
export const GRF_LOCATION_PART_TYPEID = 'it.vedph.tivac.grf-location';

/**
 * JSON schema for the GrfLocation part.
 * You can use the JSON schema tool at https://jsonschema.net/.
 */
export const GRF_LOCATION_PART_SCHEMA = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'www.vedph.it/cadmus/parts/tivac/' + GRF_LOCATION_PART_TYPEID + '.json',
  type: 'object',
  title: 'GrfLocationPart',
  required: [
    'id',
    'itemId',
    'typeId',
    'timeCreated',
    'creatorId',
    'timeModified',
    'userId',
    'place',
    'area',
    'district',
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
    place: {
      type: 'string',
    },
    area: {
      type: 'string',
    },
    district: {
      type: 'string',
    },
    location: {
      type: 'string',
    },
  },
};
