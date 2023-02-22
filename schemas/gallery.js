export default {
  name: 'gallery',
  title: 'Visitors Gallery',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }]
    }
  ]
}