export default {
  name: 'activities',
  title: 'Nearby Activities',
  type: 'document',
  fields: [
    {
      name: 'section',
      title: 'Section',
      type: 'string'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'object',
      fields: [
        {
          name: 'main',
          title: 'Main Heading',
          type: 'string'
        },
        {
          name: 'sub',
          title: 'Sub Heading',
          type: 'string'
        }
      ]
    },
    {
      name: 'regions',
      type: 'Regions',
      type: 'array',
      of: [
        {
          name: 'region',
          title: 'Region',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Region Name',
              type: 'string'
            },
            {
              name: 'activities',
              title: 'Activities',
              type: 'array',
              of: [
                {
                  type: 'activity'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}