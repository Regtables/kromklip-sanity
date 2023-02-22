export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'file'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'object',
      fields: [
        {
          name: 'resort',
          title: 'Resort',
          type: 'string'
        },
        {
          name: 'brief',
          title: 'Brief',
          type: 'string'
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string'
        }
      ]
    },
    {
      name: 'images',
      title: 'Images',
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
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'Title',
          type: 'string'
        },
        {
          name: 'summarry',
          title: 'Summarry',
          type: 'array',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'functions',
          title: 'Functions and Weddings',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [
                {
                  type: 'block'
                }
              ]
            }
          ]    
        },
        {
          name: 'accomodation',
          title: 'Accommodations and Recreation',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [
                {
                  type: 'block'
                }
              ]
            }
          ]    
        },
      ]
    }
  ]
}