export default {
  name: 'facility',
  title: 'Facility',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'decription',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'object',
      fields: [
        {
          name: 'setup',
          title: 'Highlights Setup',
          type: 'string'
        },
        {
          name: 'hightlights',
          title: 'Hightlights',
          type: 'array',
          of: [
            {
              name: 'hightlight',
              title: 'Highlight',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'images',
      title: 'Facility Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'videos',
      title: 'Facility Videos',
      type: 'array',
      of: [
        {
          type: 'file'
        }
      ]
    }
  ]
}