export default {
  name: 'facilities',
  title: 'Things To Do',
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
      name: 'facilities',
      title: 'Facilities',
      type: 'array',
      of: [
        {
          type: 'facility'
        }
      ]
    }
  ]
}